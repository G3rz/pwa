const CACHE_VERSION = 1
const CACHE = {
    OFFLINE: 'offline-cache-' + CACHE_VERSION,
}
const OFFLINE_URL = 'offline.html'

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE.OFFLINE).then(function(cache) {
            return cache.add(OFFLINE_URL)
        })
    )
})