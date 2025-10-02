// ---- Tight–Loose–Tight PWA Service Worker (v5-rollback) ----
// f.eks.
const CACHE_NAME = "tlt-v5-rollback-4";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./flags/no.png",
  "./flags/dk.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function isNav(req) {
  return req.mode === "navigate" ||
         (req.method === "GET" && req.headers.get("accept")?.includes("text/html"));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (new URL(req.url).origin !== self.location.origin) return;

  if (isNav(req)) {
    // Network-first for HTML
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        return res;
      }).catch(async () => {
        return (await caches.match(req)) || (await caches.match("./index.html"));
      })
    );
  } else {
    // Cache-first for assets
    event.respondWith(
      caches.match(req).then((hit) => {
        if (hit) return hit;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return res;
        });
      })
    );
  }
});
