// Client-Side Offline Audio Cache Service using CacheStorage API
// Allows songs to be cached locally on user's device so subsequent plays use 0 MB data!

const CACHE_NAME = 'aura-3d-audio-cache-v1';

/**
 * Check if a song's audio URL is already stored in local cache
 */
export async function isAudioCached(url) {
  if (!url || !('caches' in window)) return false;
  try {
    const cache = await caches.open(CACHE_NAME);
    const match = await cache.match(url);
    return !!match;
  } catch (err) {
    console.warn("Cache check failed:", err);
    return false;
  }
}

/**
 * Retrieves audio from cache if present; otherwise fetches and caches it in background
 * Returns a playable URL (Object URL or Original URL)
 */
export async function getCachedAudioUrl(url) {
  if (!url || !('caches' in window)) return url;

  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(url);

    if (cachedResponse) {
      const blob = await cachedResponse.blob();
      return URL.createObjectURL(blob);
    }

    // Background caching (does not block immediate playback)
    fetch(url, { mode: 'cors' })
      .then(response => {
        if (response.ok && response.status === 200) {
          cache.put(url, response.clone()).catch(() => {});
        }
      })
      .catch(() => {});

    return url;
  } catch (err) {
    console.warn("Audio cache retrieval error:", err);
    return url;
  }
}

/**
 * Pre-cache an entire song for offline listening
 */
export async function cacheSongOffline(song) {
  if (!song?.uri || !('caches' in window)) return false;
  try {
    const cache = await caches.open(CACHE_NAME);
    const res = await fetch(song.uri, { mode: 'cors' });
    if (res.ok) {
      await cache.put(song.uri, res);
      return true;
    }
    return false;
  } catch (err) {
    console.error("Failed to cache song offline:", err);
    return false;
  }
}

/**
 * Clear audio cache to free storage
 */
export async function clearAudioCache() {
  if ('caches' in window) {
    await caches.delete(CACHE_NAME);
  }
}
