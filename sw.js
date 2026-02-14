// sw.js
const VERSION = "decide-creator-v1.0.0";

const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/sw.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-512-maskable.png"
];

const CDN_WARM = [
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(APP_SHELL).catch(() => {});
    await Promise.all(CDN_WARM.map((u) => cache.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => (k !== VERSION ? caches.delete(k) : null)));
    self.clients.claim();
  })());
});

function isNavigation(req) {
  return req.mode === "navigate" || (req.method === "GET" && req.headers.get("accept")?.includes("text/html"));
}

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isCDN(url) {
  return url.hostname.includes("cdnjs.cloudflare.com");
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Navigation: network-first, fallback to cached index
  if (isNavigation(req)) {
    event.respondWith((async () => {
      try {
        const network = await fetch(req);
        const cache = await caches.open(VERSION);
        cache.put(req, network.clone()).catch(() => {});
        return network;
      } catch {
        const cache = await caches.open(VERSION);
        const cached = await cache.match("/index.html");
        return cached || new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } });
      }
    })());
    return;
  }

  // Same-origin assets: cache-first
  if (req.method === "GET" && isSameOrigin(url)) {
    event.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        cache.put(req, fresh.clone()).catch(() => {});
        return fresh;
      } catch {
        return cached || new Response("", { status: 504 });
      }
    })());
    return;
  }

  // CDN runtime: stale-while-revalidate
  if (req.method === "GET" && isCDN(url)) {
    event.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const cached = await cache.match(req);

      const fetchPromise = fetch(req)
        .then((fresh) => {
          cache.put(req, fresh.clone()).catch(() => {});
          return fresh;
        })
        .catch(() => null);

      return cached || (await fetchPromise) || new Response("", { status: 504 });
    })());
  }
});