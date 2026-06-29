const CACHE_NAME = "shell-game-v16";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./assets/backgrounds/spring.png",
  "./assets/backgrounds/summer.png",
  "./assets/backgrounds/autumn.png",
  "./assets/backgrounds/winter.png",
  "./assets/shells/shell-sheet.png",
  "./assets/buttons/cast-net.png",
  "./assets/buttons/open-shell.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
