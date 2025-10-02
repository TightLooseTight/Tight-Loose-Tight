// ---- Tight–Loose–Tight PWA Service Worker (v8) ----
// ØK VERSJONEN HVER GANG DU VIL Tvinge NY CACHE
const CACHE_NAME = "tlt-v8";

// Legg til statiske ressurser som skal caches ved install
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Install: cache "app shell"
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  // Ta kontroll raskt ved oppdateringer
  self.skipWaiting();
});

// Activate: slett gamle cacher
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Hjelper: sjekk om forespørselen er HTML-navigasjon
function isNavigationRequest(request) {
  return request.mode === "navigate" ||
         (request.method === "GET" && request.headers.get("accept")?.includes("text/html"));
}

// Fetch-strategi:
// - HTML / navigasjon: Network-first (med fallback til cache og så index.html)
// - Alt annet (ikon, manifest, bilder, js, css): Cache-first (med network fallback)
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Unngå å cache tredjeparts utrygge skjemaer
  if (new URL(req.url).origin !== self.location.origin) return;

  if (isNavigationRequest(req)) {
    // Network-first for HTML
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(async () => {
          // 1) Prøv cachet side
          const cached = await caches.match(req);
          if (cached) return cached;
          // 2) Fallback til appens index
          return caches.match("./index.html");
        })
    );
  } else {
    // Cache-first for alt annet
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
            return res;
          })
          .catch(() => {
            // Som regel ingen offline-fallback for andre filer
            return new Response("", { status: 504, statusText: "Offline" });
          });
      })
    );
  }
});

// Valgfritt: la klienter be SW om å hoppe til aktiv
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
