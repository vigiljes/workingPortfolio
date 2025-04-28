self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("static-cache").then((cache) => {
        return cache.addAll(["/", "/index.html", "/8_ball_icon.png"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });