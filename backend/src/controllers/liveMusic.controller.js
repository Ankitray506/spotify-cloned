const crypto = require('crypto');

// Decrypt JioSaavn DES-encrypted media URL to direct CDN audio link
function decryptMediaUrl(encUrl) {
    if (!encUrl) return null;
    try {
        const key = Buffer.from('3834659138346591', 'utf8');
        const decipher = crypto.createDecipheriv('des-ede-ecb', key, null);
        decipher.setAutoPadding(true);
        let dec = decipher.update(encUrl, 'base64', 'utf8');
        dec += decipher.final('utf8');

        // Prefer 320kbps or 160kbps for crystal-clear audio
        return dec.replace(/_96\.mp4$/, '_320.mp4')
                  .replace(/_96\.m4a$/, '_320.m4a');
    } catch (err) {
        console.warn("Media decrypt error:", err.message);
        return null;
    }
}

// Upgrade thumbnail to high-res 500x500 for 3D Turntable
function upgradeCoverImage(imgUrl) {
    if (!imgUrl) return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80';
    return imgUrl.replace('150x150.jpg', '500x500.jpg')
                 .replace('50x50.jpg', '500x500.jpg')
                 .replace('http:', 'https:');
}

// Format raw JioSaavn item to clean AURA 3D Song schema
function normalizeSong(item) {
    const moreInfo = item.more_info || {};
    const encUrl = moreInfo.encrypted_media_url || item.encrypted_media_url;
    let streamUrl = decryptMediaUrl(encUrl);

    if (!streamUrl && moreInfo.vlink) {
        streamUrl = moreInfo.vlink;
    }

    const artistName = moreInfo.artistMap?.primary_artists?.[0]?.name ||
                       moreInfo.music ||
                       item.subtitle ||
                       'AURA Artist';

    const cleanTitle = (item.title || 'Untitled Track')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&#039;/g, "'");

    return {
        _id: item.id || `live_${Date.now()}_${Math.random()}`,
        id: item.id,
        title: cleanTitle,
        artist: {
            username: artistName,
            id: moreInfo.artistMap?.primary_artists?.[0]?.id || 'unknown'
        },
        album: (moreInfo.album || item.album || 'Single').replace(/&amp;/g, '&'),
        duration: parseInt(moreInfo.duration || item.duration || 180, 10),
        uri: streamUrl,
        cover: upgradeCoverImage(item.image),
        isLive: true,
        hasLyrics: moreInfo.has_lyrics === 'true',
        year: moreInfo.year || ''
    };
}

// Clean title for comparing duplicates (ignoring "(From ...)", remixes, DJ tags)
function cleanTitleForCompare(title) {
    if (!title) return '';
    return title
        .toLowerCase()
        .replace(/\(from\s+["'][^"']+["']\)/gi, '')
        .replace(/\(original motion picture soundtrack\)/gi, '')
        .replace(/\(official video\)/gi, '')
        .replace(/\(remix\)/gi, '')
        .replace(/\(lofi\)/gi, '')
        .replace(/\(.*?\)/g, '')
        .replace(/\[.*?\]/g, '')
        .replace(/[-–].*$/, '')
        .replace(/[^\w\s\u0900-\u097F]/gi, '')
        .trim();
}

// Deduplicate songs by title and ensure no duplicate album covers!
function deduplicateSongs(songs, maxPerCover = 1) {
    const seenTitles = new Set();
    const coverCounts = new Map();
    const unique = [];

    for (const song of songs) {
        if (!song || !song.uri) continue;
        const normTitle = cleanTitleForCompare(song.title);
        const cover = song.cover || '';
        const currentCoverCount = coverCounts.get(cover) || 0;

        if (normTitle && seenTitles.has(normTitle)) continue;
        if (cover && currentCoverCount >= maxPerCover) continue;

        if (normTitle) seenTitles.add(normTitle);
        if (cover) coverCounts.set(cover, currentCoverCount + 1);
        unique.push(song);
    }
    return unique;
}

// Multi-artist seed rosters for fresh, diverse songs on every load
const GENRE_ROSTERS = {
    maithili: [
        'Sharda Sinha maithili geet',
        'Maithili Thakur bhagwati',
        'Kunj Bihari maithili hits',
        'Bansidhar Chaudhary maithili',
        'Rajni Pallavi maithili',
        'Poonam Mishra maithili',
        'Madhav Rai maithili sohar',
        'Anupam Arya maithili',
        'Maithili vivah geet'
    ],
    bhojpuri: [
        'Pawan Singh blockbuster',
        'Khesari Lal Yadav superhits',
        'Shilpi Raj bhojpuri',
        'Arvind Akela Kallu',
        'Pramod Premi Yadav hits',
        'Neelkamal Singh bhojpuri',
        'Ritesh Pandey superhit',
        'Ankush Raja bhojpuri hits'
    ],
    bollywood: [
        'Arijit Singh romantic hits',
        'Atif Aslam evergreen love',
        'KK evergreen melodies',
        'Shreya Ghoshal romantic',
        'Mohit Chauhan hit songs',
        'Pritam blockbuster hits',
        'Jubin Nautiyal romantic',
        'Sonu Nigam golden hits'
    ],
    punjabi: [
        'Diljit Dosanjh hits',
        'AP Dhillon top songs',
        'Karan Aujla superhits',
        'Sidhu Moosewala classics',
        'Shubh punjabi hits',
        'Amrinder Gill punjabi'
    ],
    'desi-hiphop': [
        'DIVINE rap hindi',
        'KR$NA hip hop',
        'Seedhe Maut rap',
        'Raftaar hip hop',
        'Emiway Bantai',
        'Talwiinder desi hip hop'
    ],
    '90s': [
        'Kumar Sanu 90s romantic',
        'Udit Narayan 90s melodies',
        'Alka Yagnik 90s hits',
        'Sonu Nigam 90s hits',
        'Lata Mangeshkar 90s'
    ],
    south: [
        'Anirudh Ravichander blockbusters',
        'AR Rahman hits hindi',
        'Sid Sriram romantic hits',
        'Devi Sri Prasad top hits',
        'Harris Jayaraj hits'
    ],
    lofi: [
        'Hindi lofi chill beats',
        'Bollywood acoustic lofi',
        'Late night midnight hindi lofi',
        'Aesthetic lofi bollywood vibes'
    ],
    bhakti: [
        'Shiv tandav stotram bhajan',
        'Hanuman chalisa Gulshan Kumar',
        'Krishna bhajan top hits',
        'Mata rani bhajan aarti'
    ]
};

// ================= 1. SEARCH LIVE SONGS =================
async function searchSongs(req, res) {
    try {
        const query = req.query.q || req.query.query || 'trending hindi';
        const limit = Math.min(parseInt(req.query.limit, 10) || 20, 40);

        const url = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${limit}&p=1&q=${encodeURIComponent(query)}`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const data = await response.json();
        const rawSongs = (data.results || [])
            .map(normalizeSong)
            .filter(song => !!song.uri);

        // Deduplicate so remix/identical covers don't flood search
        const results = deduplicateSongs(rawSongs, 1);

        // If no direct results found, fetch related hit recommendations
        let relatedSuggestions = [];
        if (results.length === 0) {
            const fallbackUrl = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=8&p=1&q=trending%20top%20hits`;
            const fbRes = await fetch(fallbackUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
            });
            const fbData = await fbRes.json();
            relatedSuggestions = deduplicateSongs((fbData.results || []).map(normalizeSong).filter(s => !!s.uri), 1).slice(0, 5);
        }

        return res.status(200).json({
            message: "Live songs fetched successfully",
            query,
            total: results.length,
            songs: results,
            relatedSuggestions
        });
    } catch (error) {
        console.error("Live search error:", error);
        return res.status(500).json({ message: "Failed to search live songs", error: error.message });
    }
}

// ================= 2. GET SONGS BY GENRE (DIVERSE ARTISTS & UNIQUE COVERS) =================
async function getGenreSongs(req, res) {
    try {
        const genre = (req.query.genre || req.query.name || 'maithili').toLowerCase();
        const roster = GENRE_ROSTERS[genre] || [`${genre} top hits`, `${genre} trending hits`, `${genre} viral songs`];

        // Shuffle roster on every call so user gets fresh, rotating songs every time!
        const shuffled = [...roster].sort(() => 0.5 - Math.random());
        const selectedQueries = shuffled.slice(0, 3); // 3 diverse singer/theme queries

        const fetchPromises = selectedQueries.map(async (q) => {
            try {
                const url = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=8&p=1&q=${encodeURIComponent(q)}`;
                const response = await fetch(url, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
                });
                const data = await response.json();
                return (data.results || []).map(normalizeSong).filter(song => !!song.uri);
            } catch (e) {
                return [];
            }
        });

        const queryResults = await Promise.all(fetchPromises);

        // Interleave tracks across different artists
        const interleaved = [];
        const maxLen = Math.max(...queryResults.map(r => r.length), 0);
        for (let i = 0; i < maxLen; i++) {
            for (const list of queryResults) {
                if (list[i]) interleaved.push(list[i]);
            }
        }

        // Deduplicate: Max 1 track per cover to guarantee EVERY song has a unique poster!
        const unique = deduplicateSongs(interleaved, 1);

        return res.status(200).json({
            genre,
            total: unique.length,
            songs: unique.slice(0, 20)
        });
    } catch (error) {
        console.error("Genre fetch error:", error);
        return res.status(500).json({ message: "Failed to fetch genre songs", error: error.message });
    }
}

// ================= 3. GET TOP TRENDING HITS =================
async function getTrending(req, res) {
    try {
        const queries = ['trending hindi', 'bollywood romantic hits', 'top hits india'];
        const fetchPromises = queries.map(async (q) => {
            try {
                const url = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=12&p=1&q=${encodeURIComponent(q)}`;
                const response = await fetch(url, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
                });
                const data = await response.json();
                return (data.results || []).map(normalizeSong).filter(song => !!song.uri);
            } catch (e) {
                return [];
            }
        });

        const queryResults = await Promise.all(fetchPromises);
        const combined = [];
        const maxLen = Math.max(...queryResults.map(r => r.length), 0);
        for (let i = 0; i < maxLen; i++) {
            for (const list of queryResults) {
                if (list[i]) combined.push(list[i]);
            }
        }

        const results = deduplicateSongs(combined, 1);

        return res.status(200).json({
            message: "Trending hits fetched",
            total: results.length,
            songs: results
        });
    } catch (error) {
        console.error("Trending fetch error:", error);
        return res.status(500).json({ message: "Failed to fetch trending hits", error: error.message });
    }
}

// ================= 4. YOUTUBE-STYLE INSTANT SEARCH AUTOCOMPLETE (TOP 5) =================
async function getSearchSuggestions(req, res) {
    try {
        const query = (req.query.q || req.query.query || '').trim();
        if (!query || query.length < 2) {
            return res.status(200).json({ suggestions: [] });
        }

        const url = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=8&p=1&q=${encodeURIComponent(query)}`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });

        const data = await response.json();
        const rawSongs = (data.results || []).map(normalizeSong).filter(s => !!s.uri);
        const unique = deduplicateSongs(rawSongs, 1).slice(0, 5);

        return res.status(200).json({
            query,
            total: unique.length,
            suggestions: unique
        });
    } catch (error) {
        console.error("Suggestions error:", error);
        return res.status(500).json({ message: "Failed to fetch suggestions", error: error.message });
    }
}

// ================= 5. GET LIVE SYNCHRONIZED LYRICS =================
async function getLiveLyrics(req, res) {
    try {
        const rawTitle = req.query.title || req.query.q || '';
        const rawArtist = req.query.artist || '';

        if (!rawTitle) {
            return res.status(400).json({ success: false, message: "Song title is required" });
        }

        // Clean title & artist for optimal LRC matching
        const cleanTitle = rawTitle
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&#039;/g, "'")
            .replace(/\(From\s+["'][^"']+["']\)/gi, '')
            .replace(/\(Original Motion Picture Soundtrack\)/gi, '')
            .replace(/\(Official Video\)/gi, '')
            .replace(/\(Official Audio\)/gi, '')
            .replace(/\(Lofi\)/gi, '')
            .replace(/\(Remix\)/gi, '')
            .replace(/\(.*?\)/g, '')
            .replace(/\[.*?\]/g, '')
            .replace(/[-–].*$/, '')
            .trim();

        const cleanArtist = rawArtist
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&#039;/g, "'")
            .replace(/feat\..*$/gi, '')
            .replace(/,.*$/, '')
            .trim();

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        };

        let data = null;

        // 1. Try search with cleanTitle + cleanArtist
        try {
            const searchUrl = `https://lrclib.net/api/search?q=${encodeURIComponent(cleanTitle + ' ' + cleanArtist)}`;
            const searchRes = await fetch(searchUrl, { headers });
            if (searchRes.ok) {
                const searchList = await searchRes.json();
                if (Array.isArray(searchList) && searchList.length > 0) {
                    data = searchList.find(item => !!item.syncedLyrics) || searchList.find(item => !!item.plainLyrics);
                }
            }
        } catch (e) {}

        // 2. Try search with cleanTitle only
        if (!data || (!data.syncedLyrics && !data.plainLyrics)) {
            try {
                const titleOnlyUrl = `https://lrclib.net/api/search?q=${encodeURIComponent(cleanTitle)}`;
                const titleRes = await fetch(titleOnlyUrl, { headers });
                if (titleRes.ok) {
                    const titleList = await titleRes.json();
                    if (Array.isArray(titleList) && titleList.length > 0) {
                        data = titleList.find(item => !!item.syncedLyrics) || titleList.find(item => !!item.plainLyrics);
                    }
                }
            } catch (e) {}
        }

        // 3. Fallback exact match
        if (!data || (!data.syncedLyrics && !data.plainLyrics)) {
            try {
                let lrcUrl = `https://lrclib.net/api/get?track_name=${encodeURIComponent(cleanTitle)}&artist_name=${encodeURIComponent(cleanArtist)}`;
                let lrcRes = await fetch(lrcUrl, { headers });
                if (lrcRes.ok) {
                    data = await lrcRes.json();
                }
            } catch (e) {}
        }

        if (data && (data.syncedLyrics || data.plainLyrics)) {
            return res.status(200).json({
                success: true,
                title: data.trackName || cleanTitle,
                artist: data.artistName || cleanArtist,
                syncedLyrics: data.syncedLyrics || null,
                plainLyrics: data.plainLyrics || null,
                hasSynced: !!data.syncedLyrics
            });
        }

        return res.status(200).json({
            success: false,
            message: "Lyrics not available for this song",
            syncedLyrics: null,
            plainLyrics: null,
            hasSynced: false
        });
    } catch (error) {
        console.error("getLiveLyrics error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve lyrics",
            error: error.message
        });
    }
}

module.exports = { searchSongs, getGenreSongs, getTrending, getLiveLyrics, getSearchSuggestions };
