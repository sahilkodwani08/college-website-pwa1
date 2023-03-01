var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(["/"]);
	})
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	caches.match(event.request).then(function (response) {
	return response || fetch(event.request);
	})
);
});

// Listen for install event, set callback
self.addEventListener('install', function(event) {
 
    });
    self.addEventListener('activate', function(event) {
        
        });
            
		self.addEventListener('fetch', (event) => {
			event.respondWith(
			  caches.match(event.request)
				.then((response) => {
				  if (response) { //entry found in cache
					return response
				  }
				  return fetch(event.request)
				}
			  )
			)
		  })

		  navigator.serviceWorker.ready.then((swRegistration) => {
			return swRegistration.sync.register('event1')
		  });

		  self.addEventListener('push', (event) => {
			console.log('Received a push event', event)
		  
			const options = {
			  title: 'I got a message for you!',
			  body: 'Here is the body of the message',
			  icon: '/img/icon-192x192.png',
			  tag: 'tag-for-this-notification',
			}
		  
			event.waitUntil(
			  self.registration.showNotification(title, options)
			)
		  })