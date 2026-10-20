// ML-Powered Online Learning User Taste Profiler
// Dynamically learns user's music preferences in real-time based on plays, skip rates, and dwell time.

const STORAGE_KEY = 'aura_ml_user_taste_v1';

// Default initial baseline weights
const DEFAULT_PROFILE = {
  genreWeights: {
    maithili: 1.0,
    bollywood: 1.0,
    punjabi: 0.8,
    bhojpuri: 0.8,
    'desi-hiphop': 0.7,
    '90s': 0.6,
    south: 0.5,
    lofi: 0.9,
    bhakti: 0.5
  },
  artistWeights: {},
  history: [],
  totalListeningSeconds: 0,
};

/**
 * Get current user taste profile from localStorage
 */
export function getUserTasteProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_PROFILE;
  }
}

/**
 * Online learning update: Updates weights dynamically as the user listens to music
 * @param {Object} song - Currently played song
 * @param {number} listenDuration - Seconds listened before skip/finish
 * @param {number} totalDuration - Total track length
 */
export function recordSongInteraction(song, listenDuration = 0, totalDuration = 180) {
  if (!song) return;

  const profile = getUserTasteProfile();
  const completionRatio = totalDuration > 0 ? Math.min(1, listenDuration / totalDuration) : 0.5;

  // Learning rate alpha
  const learningRate = 0.25;

  // Determine genre from song tags/title/category
  const detectedGenre = detectSongGenre(song);

  // Reward full listens (> 40%), penalize immediate skips (< 15%)
  let reward = 0;
  if (completionRatio >= 0.7) reward = 1.0;
  else if (completionRatio >= 0.3) reward = 0.5;
  else reward = -0.3;

  // Update genre weight using exponential moving average: W_new = (1 - alpha) * W_old + alpha * (W_old + reward)
  const currentWeight = profile.genreWeights[detectedGenre] || 0.5;
  const newWeight = Math.max(0.1, currentWeight + learningRate * reward);
  profile.genreWeights[detectedGenre] = parseFloat(newWeight.toFixed(3));

  // Update artist weight
  const artistName = typeof song.artist === 'object' ? song.artist.username : song.artist || 'Unknown';
  if (artistName && artistName !== 'Unknown') {
    const currentArtistWeight = profile.artistWeights[artistName] || 0.5;
    profile.artistWeights[artistName] = parseFloat(Math.max(0.1, currentArtistWeight + (reward * 0.4)).toFixed(3));
  }

  // Record history
  profile.totalListeningSeconds += Math.floor(listenDuration);
  profile.history = [
    {
      id: song._id || song.id,
      title: song.title,
      artist: artistName,
      genre: detectedGenre,
      timestamp: Date.now()
    },
    ...profile.history.slice(0, 49) // Keep last 50 tracks
  ];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {}

  return profile;
}

/**
 * Heuristic/Keyword classifier to map track title/info to our Indian & Global genres
 */
export function detectSongGenre(song) {
  if (song.genre) return song.genre.toLowerCase();

  const text = `${song.title || ''} ${song.album || ''} ${typeof song.artist === 'object' ? song.artist.username : song.artist || ''}`.toLowerCase();

  if (text.includes('maithili') || text.includes('mithila') || text.includes('sharda sinha') || text.includes('geet') || text.includes('sohar') || text.includes('chhath')) {
    return 'maithili';
  }
  if (text.includes('punjabi') || text.includes('sidhu') || text.includes('diljit') || text.includes('karan') || text.includes('dhol') || text.includes('ap dhillon')) {
    return 'punjabi';
  }
  if (text.includes('bhojpuri') || text.includes('pawan') || text.includes('khesari') || text.includes('shilpi')) {
    return 'bhojpuri';
  }
  if (text.includes('rap') || text.includes('hip hop') || text.includes('divine') || text.includes('emiway') || text.includes('raftaar') || text.includes('mc stan')) {
    return 'desi-hiphop';
  }
  if (text.includes('lofi') || text.includes('chill') || text.includes('slowed') || text.includes('reverb')) {
    return 'lofi';
  }
  if (text.includes('bhakti') || text.includes('aarti') || text.includes('krishna') || text.includes('shiva') || text.includes('ram') || text.includes('hanuman')) {
    return 'bhakti';
  }
  if (text.includes('kumar sanu') || text.includes('udit narayan') || text.includes('alka yagnik') || text.includes('90s') || text.includes('lata')) {
    return '90s';
  }
  if (text.includes('tamil') || text.includes('telugu') || text.includes('anirudh') || text.includes('ar rahman')) {
    return 'south';
  }

  return 'bollywood';
}

/**
 * Returns user's top favorite genres ranked by affinity
 */
export function getTopUserGenres(limit = 3) {
  const profile = getUserTasteProfile();
  const sorted = Object.entries(profile.genreWeights || {})
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([genre]) => genre);
  return sorted.length > 0 ? sorted : ['maithili', 'bollywood', 'punjabi'];
}

/**
 * ML Ranker: Scores and sorts candidate songs matching user's taste profile
 */
export function rankSongsForUser(songs = []) {
  if (!songs || songs.length === 0) return [];
  const profile = getUserTasteProfile();

  return [...songs].sort((a, b) => {
    const genreA = detectSongGenre(a);
    const genreB = detectSongGenre(b);

    const scoreA = (profile.genreWeights[genreA] || 0.5) + (profile.artistWeights[a.artist?.username || a.artist] || 0);
    const scoreB = (profile.genreWeights[genreB] || 0.5) + (profile.artistWeights[b.artist?.username || b.artist] || 0);

    return scoreB - scoreA;
  });
}
