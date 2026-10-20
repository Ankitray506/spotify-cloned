/**
 * LRC (Lyric) Parser & Synchronizer for AURA 3D Music
 * Supports standard LRC [mm:ss.xx] and extended [mm:ss.xxx] formats.
 */

export function parseLRC(lrcString) {
  if (!lrcString || typeof lrcString !== 'string') {
    return { isSynced: false, lines: [], plain: '' };
  }

  const rawLines = lrcString.split(/\r?\n/);
  const syncedLines = [];
  const timeRegex = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;

  let hasTimestamps = false;
  const plainTextLines = [];

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i].trim();
    if (!rawLine) continue;

    // Skip metadata tags like [ti:Title], [ar:Artist], etc.
    if (/^\[(ti|ar|al|by|offset|length|re|ve):/i.test(rawLine)) {
      continue;
    }

    const matches = [...rawLine.matchAll(timeRegex)];
    if (matches.length > 0) {
      hasTimestamps = true;
      const text = rawLine.replace(timeRegex, '').trim();

      // Only add lines with actual text
      if (text) {
        for (const match of matches) {
          const minutes = parseInt(match[1], 10);
          const seconds = parseInt(match[2], 10);
          const msStr = match[3] || '0';
          let ms = parseInt(msStr, 10);
          if (msStr.length === 1) ms *= 100;
          else if (msStr.length === 2) ms *= 10;

          const totalSeconds = minutes * 60 + seconds + ms / 1000;
          syncedLines.push({
            time: Math.round(totalSeconds * 100) / 100,
            text,
            rawIndex: i
          });
        }
      }
    } else {
      plainTextLines.push(rawLine);
    }
  }

  // Sort chronologically
  syncedLines.sort((a, b) => a.time - b.time);

  return {
    isSynced: hasTimestamps && syncedLines.length > 0,
    lines: syncedLines,
    plain: lrcString.replace(timeRegex, '').trim()
  };
}

/**
 * Efficient active lyric index finder using binary search / timestamp comparison.
 */
export function findActiveLyricIndex(lines, currentTime) {
  if (!lines || lines.length === 0) return -1;
  if (currentTime < lines[0].time) return -1;

  let low = 0;
  let high = lines.length - 1;
  let result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lines[mid].time <= currentTime) {
      result = mid;
      low = mid + 1; // look for later line that still <= currentTime
    } else {
      high = mid - 1;
    }
  }

  return result;
}
