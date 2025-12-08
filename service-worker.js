self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("age-calc-cache").then((cache) => {
      return cache.addAll([
        "/age-calculator/",
        "/age-calculator/index.html",
        "/age-calculator/manifest.json",
        "/age-calculator/icons/icon-192.png",
        "/age-calculator/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
