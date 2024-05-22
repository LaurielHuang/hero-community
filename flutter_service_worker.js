'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "404b1d0c23967606f0ff6aa720ee261e",
"index.html": "ed680839cd414900098bc188b514996a",
"/": "ed680839cd414900098bc188b514996a",
"main.dart.js": "e1cfa741fcd0fd1c2bd0bb8ba627a030",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5470541f6a2da008161e40680be59293",
"assets/AssetManifest.json": "7f6f5c04a6a02ce4d5491a597e1da304",
"assets/NOTICES": "0a062d1e204eda386d9bb8f147cb6655",
"assets/FontManifest.json": "74a3cf565c463b0908484103a9ce5bf4",
"assets/AssetManifest.bin.json": "8a165c843cc06d3c467946e5569969bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5bd9831f0995218b0cea2a92a385d783",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/images/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/images/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/images/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/person_small.png": "6f780d058150543096d7bd3060db4ac4",
"assets/assets/images/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/images/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/images/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/images/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/images/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/images/person.png": "5b6ba176416812aa5448c6704d31caa0",
"assets/assets/images/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/images/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/images/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/images/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/images/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/images/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/images/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/images/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/images/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/icons/Search.svg": "f14105fec2c0f4ee3cea62f298acc7ab",
"assets/assets/icons/google_drive.svg": "04bdc782d10a68a7c2ded66e87c40c4d",
"assets/assets/icons/design.jpg": "03c7e3239d88b7e261003d59c2cfd445",
"assets/assets/icons/menu_setting.svg": "4f71342d5945f314091bd7222ea25e6c",
"assets/assets/icons/icon.png": "e804366bd96479c755b83cad5e926ffa",
"assets/assets/icons/doc_file.svg": "fa9073584f49179942dcc2be7a03dfd3",
"assets/assets/icons/menu_dashboard.svg": "7c7915221707c8f65ef8b9dfc68f0ca6",
"assets/assets/icons/heart_outlined.png": "ee6b0d667f5ff46ad537f3fd9d1b49ca",
"assets/assets/icons/unknown.svg": "4d988e5529f664cade6589b0d4f4be84",
"assets/assets/icons/settings_outlined.png": "50805a6ec23e0c9fd81c9bfcff40a4c6",
"assets/assets/icons/settings.png": "c98b9135f56eb076eeb995c5b191dfd5",
"assets/assets/icons/flutter.jpg": "411c444ee98cdcdd27271889df3c4184",
"assets/assets/icons/menu_task.svg": "a942175225b966a3475385f7784bed4d",
"assets/assets/icons/lock.png": "6f778e0a44fad1c3ec3f8a1cdea776bf",
"assets/assets/icons/accounting.jpg": "1f2deff69a2e72339790f2ad858748fa",
"assets/assets/icons/menu_profile.svg": "09060e382fa387e7661c2f55b719c58c",
"assets/assets/icons/menu_store.svg": "24e6e3b6289dcb791c7465aeb7a03ea9",
"assets/assets/icons/play_next.png": "a03d35b0ff5c20bfe302d68a76ddbd55",
"assets/assets/icons/sound_file.svg": "05637fdcc25a31855d4c182dc0d0cefb",
"assets/assets/icons/photography.jpg": "3bdca35f39a77fd732f222e095f8ab20",
"assets/assets/icons/heart.png": "02df1256643d82d090584b68aefc8fa2",
"assets/assets/icons/star_outlined.png": "b3bef663a68a16287d4b3a49ae02bed3",
"assets/assets/icons/node.png": "e574769b8ba412b5ebb8ec32f58430ec",
"assets/assets/icons/done.png": "750d48f4b0e0500081e3ba8269764a6b",
"assets/assets/icons/pdf_file.svg": "271670046cdafd67ee72f9793553ffda",
"assets/assets/icons/drop_box.svg": "ee366f256913fc9edf7643256c91caed",
"assets/assets/icons/pause.png": "0c80c090158778215a2bc169bbae50a0",
"assets/assets/icons/xd_file.svg": "b645b7e51d245e29c2297ffc2e268cea",
"assets/assets/icons/menu_tran.svg": "17595763373395db76e3c46b118216e2",
"assets/assets/icons/laptop.jpg": "b145d226705615cd606d5f62d63cbed1",
"assets/assets/icons/media.svg": "b1288b74fc605e5001f9cb33fe647266",
"assets/assets/icons/react.jpg": "73c59bcd1b47d91fe4c71decca19363a",
"assets/assets/icons/menu_doc.svg": "c129eb44716ca69e7063a51989696a00",
"assets/assets/icons/star.png": "9b16566ce076012da1d126cf1abd9a4d",
"assets/assets/icons/Figma_file.svg": "a96603338000b6cc6024fb71e220aa95",
"assets/assets/icons/play_outlined.png": "26aa3c78fce2fdf8512004803edecc50",
"assets/assets/icons/menu_notification.svg": "6bb215c100c653388f18008cc505a3e5",
"assets/assets/icons/logo.svg": "35e8c4a1abc1da5f1b38fda2223eef00",
"assets/assets/icons/media_file.svg": "ce1398f7073eeed7aa99afa10d1a3217",
"assets/assets/icons/play.png": "ce4651efd933241f54ec3858a16b7e1b",
"assets/assets/icons/excel_file.svg": "f3b117faa0105d9c7fff668c565b9e95",
"assets/assets/icons/folder.svg": "8496be031efc9b30468329278c861759",
"assets/assets/icons/Documents.svg": "c0c7e524fc9039b00c30448e31763f07",
"assets/assets/icons/one_drive.svg": "cf9b18851934639307644c07539343f7",
"assets/assets/data/sponsor.json": "5357afc35883d7c4abe12a907acd1757",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
