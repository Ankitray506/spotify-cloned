import axiosClient from '../api/axiosClient';

// Cache visitor ID
export function getVisitorId() {
  if (typeof window === 'undefined') return 'server';
  let id = localStorage.getItem('aura_visitor_id');
  if (!id) {
    id = 'vis_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    localStorage.setItem('aura_visitor_id', id);
  }
  return id;
}

// Extract rich, accurate device name and browser info
export function getDetailedDeviceInfo() {
  if (typeof window === 'undefined') {
    return {
      device: 'Desktop',
      deviceName: 'Desktop PC',
      browser: 'Browser',
      os: 'Unknown',
      screen: ''
    };
  }

  const ua = navigator.userAgent || '';
  const screenW = window.screen?.width || 0;
  const screenH = window.screen?.height || 0;
  const screenResolution = `${screenW}x${screenH}`;

  let device = 'Desktop';
  let deviceName = 'Desktop PC';
  let os = 'Windows';
  let browser = 'Chrome';

  // 1. Detect OS
  if (/Windows NT 10.0/i.test(ua)) os = 'Windows 10/11';
  else if (/Windows NT 6.3/i.test(ua)) os = 'Windows 8.1';
  else if (/Windows/i.test(ua)) os = 'Windows PC';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone/i.test(ua)) os = 'iOS';
  else if (/iPad/i.test(ua)) os = 'iPadOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  // 2. Detect Specific Device Model
  if (/iPhone/i.test(ua)) {
    device = 'Mobile';
    if ((screenW === 393 && screenH === 852) || (screenW === 852 && screenH === 393)) {
      deviceName = 'Apple iPhone 14/15/16 Pro';
    } else if ((screenW === 430 && screenH === 932) || (screenW === 932 && screenH === 430)) {
      deviceName = 'Apple iPhone Pro Max';
    } else if ((screenW === 390 && screenH === 844) || (screenW === 844 && screenH === 390)) {
      deviceName = 'Apple iPhone 12/13/14';
    } else if ((screenW === 414 && screenH === 896) || (screenW === 896 && screenH === 414)) {
      deviceName = 'Apple iPhone 11 / XR';
    } else {
      deviceName = 'Apple iPhone (iOS)';
    }
  } else if (/iPad/i.test(ua)) {
    device = 'Tablet';
    deviceName = 'Apple iPad';
  } else if (/Android/i.test(ua)) {
    device = 'Mobile';
    if (/SM-|Samsung/i.test(ua)) {
      deviceName = 'Samsung Galaxy (Android)';
    } else if (/Redmi|POCO|Xiaomi|2201|2109|2210/i.test(ua)) {
      deviceName = 'Xiaomi / Redmi (Android)';
    } else if (/OnePlus|GM19|KB20/i.test(ua)) {
      deviceName = 'OnePlus (Android)';
    } else if (/Realme|RMX/i.test(ua)) {
      deviceName = 'Realme (Android)';
    } else if (/Vivo|V20|V21|V22|V23/i.test(ua)) {
      deviceName = 'Vivo (Android)';
    } else if (/Oppo|CPH/i.test(ua)) {
      deviceName = 'OPPO (Android)';
    } else if (/Pixel/i.test(ua)) {
      deviceName = 'Google Pixel';
    } else {
      deviceName = 'Android Smartphone';
    }
  } else if (/Macintosh/i.test(ua)) {
    device = 'Desktop';
    deviceName = 'MacBook / Mac (macOS)';
  } else if (/Windows/i.test(ua)) {
    device = 'Desktop';
    deviceName = 'Windows PC';
  }

  // 3. Detect Browser
  if (/Brave/i.test(ua) || (navigator.brave && typeof navigator.brave.isBrave === 'function')) {
    browser = 'Brave';
  } else if (/Edg\//i.test(ua)) {
    browser = 'Edge';
  } else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) {
    browser = 'Opera';
  } else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) {
    browser = 'Chrome';
  } else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) {
    browser = 'Safari';
  } else if (/Firefox/i.test(ua)) {
    browser = 'Firefox';
  }

  return {
    device,
    deviceName,
    browser,
    os,
    screen: screenResolution
  };
}

// 1. Visit Ping (Executed on page load/navigation)
export async function sendVisitorPing(user, path = window.location.pathname) {
  try {
    const visitorId = getVisitorId();
    const info = getDetailedDeviceInfo();

    await axiosClient.post('/admin/visit', {
      visitorId,
      device: info.device,
      deviceName: info.deviceName,
      browser: info.browser,
      os: info.os,
      path,
      isRegistered: !!user,
      userName: user?.username || '',
      userEmail: user?.email || '',
      userPhone: user?.phone || '',
      userRole: user?.role || ''
    });
  } catch (e) {
    // Silent fail
  }
}

// 2. Music Streaming Heartbeat & Keep-Alive Alarm (Executed every 15-20 seconds during music play)
export async function sendStreamingHeartbeat({
  user,
  currentSong,
  secondsStreamed = 20
}) {
  try {
    const visitorId = getVisitorId();
    const info = getDetailedDeviceInfo();

    await axiosClient.post('/admin/heartbeat', {
      visitorId,
      secondsStreamed,
      songTitle: currentSong?.title || '',
      songArtist: currentSong?.artist || currentSong?.channelTitle || '',
      deviceName: info.deviceName,
      device: info.device,
      browser: info.browser,
      isRegistered: !!user,
      userName: user?.username || '',
      userEmail: user?.email || '',
      userPhone: user?.phone || '',
      userRole: user?.role || ''
    });
  } catch (e) {
    // Silent fail
  }
}

// 3. Keep-Alive Alarm (Prevents Render server sleep)
export async function pingKeepAlive() {
  try {
    await axiosClient.get('/ping');
  } catch (e) {
    // Silent
  }
}
