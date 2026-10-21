/* Lern! Service Worker (früher „Karteikasten“; Cache-Namen bleiben). Bei jeder neuen Version VERSION hochzählen. */
const VERSION = "10";
const CACHE = "karteikasten-v" + VERSION;
const FONT_CACHE = "karteikasten-fonts";
// Nur App-Hülle; keine Lernpakete oder Lernstände (die liegen in IndexedDB/localStorage).
const SHELL = ["./", "index.html", "manifest.webmanifest",
  "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png",
  "icons/icon-512-maskable.png", "icons/favicon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, {cache: "reload"})))));
  // Kein skipWaiting: die neue Version wartet, bis die Seite zustimmt.
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const keep = [CACHE, FONT_CACHE];
    for (const k of await caches.keys()) if (!keep.includes(k)) await caches.delete(k);
    await self.clients.claim();
    // Update-Hinweis nur, wenn vorher schon eine Version lief (kein Hinweis bei Erstinstallation)
    const cs = await self.clients.matchAll({type: "window"});
    cs.forEach(c => c.postMessage({type: "KK_UPDATE", version: VERSION}));
  })());
});

self.addEventListener("message", e => {
  if (e.data && e.data.type === "KK_SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(fetch(req).then(r => {
      if (r && (r.ok || r.type === "opaque")) { const cp = r.clone(); caches.open(FONT_CACHE).then(c => c.put(req, cp)); }
      return r;
    }).catch(() => caches.match(req)));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).catch(() =>
    req.mode === "navigate" ? caches.match("index.html") : Response.error())));
});
