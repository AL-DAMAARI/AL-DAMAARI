const CACHE = 'kulmiye-v1';
const ASSETS = [
  '/web/index.html',
  '/web/catalog.html',
  '/web/patient.html',
  '/web/pharmacist.html',
  '/web/doctor.html',
  '/web/about.html',
  '/web/contact.html',
  '/web/assets/css/base.css',
  '/web/assets/css/tokens.css',
  '/brand/logo/kulmiye-logo-icon.svg',
  '/brand/logo/kulmiye-logo-horizontal.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
