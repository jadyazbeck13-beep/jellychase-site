/* Jelly Chase store links: the one place to set them.
   Leave a link empty ('') while that store isn't live: the site then says "Coming soon".
   iPhone + iPad -> App Store, Android -> Google Play, computer -> both buttons. */
window.JC_STORE = {
  ios: '',      // at launch: 'https://apps.apple.com/app/id<APPLE_ID>'
  android: ''   // at launch: 'https://play.google.com/store/apps/details?id=app.jellychase.game'
};
window.jcOS = function () {
  var ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return 'ios'; // iPad in desktop mode
  return 'other';
};
window.jcStoreUrl = function () {
  var os = jcOS(), s = window.JC_STORE;
  return os === 'other' ? '' : (s[os] || '');
};
