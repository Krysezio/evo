// Change la version à chaque modification de messages.js pour forcer la mise à jour
const CACHE = "evo-v2";
const FILES = ["./", "index.html", "messages.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== "evo-inbox").map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Réception d'un colis partagé depuis WhatsApp (Partager → Evo)
  if (e.request.method === "POST" && url.pathname.endsWith("/share-target")) {
    e.respondWith((async () => {
      try {
        const form = await e.request.formData();
        const files = form.getAll("colis");
        const inbox = await caches.open("evo-inbox");
        let i = 0;
        for (const f of files) {
          if (f && typeof f.text === "function") await inbox.put("./inbox/" + Date.now() + "-" + (i++), new Response(await f.text()));
        }
      } catch (err) {}
      return Response.redirect("./?colis=1", 303);
    })());
    return;
  }
  if (e.request.method !== "GET") return;
  // Réseau d'abord (pour récupérer tes nouveaux messages), cache si hors ligne
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request))
  );
});
