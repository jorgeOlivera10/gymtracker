self.addEventListener('install', e=>{
  e.waitUntil(caches.open('gym-v1').then(c=>c.addAll([
    './','./index.html','./manifest.webmanifest',
    './icon-192.png','./icon-256.png','./icon-512.png','./apple-touch-icon-180.png'
  ])));
});
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
  }
});
