'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ed91cf03fa18926a3c341d025f83af25",
"version.json": "404b1d0c23967606f0ff6aa720ee261e",
"index.html": "37f706978772d74f2c2d0f2c061b5ed5",
"/": "37f706978772d74f2c2d0f2c061b5ed5",
"main.dart.js": "4ad329a2ded8f4e579a87f9a70bf92b7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "e5393f83f41c3141e855d1898d4578b0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5470541f6a2da008161e40680be59293",
"assets/AssetManifest.json": "52fed47e38a426da168adb04e9f43686",
"assets/NOTICES": "bc2e4f17cbfda7a35128595e82a89aee",
"assets/FontManifest.json": "74a3cf565c463b0908484103a9ce5bf4",
"assets/AssetManifest.bin.json": "4b99dc4c72e520c89cf5e84f1bb043ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2eef6a8b9a64e8deaf3b2d27d3106517",
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
"assets/assets/data/sponsor.json": "e43e38e2d941a4911abaa4f4da6591dc",
"assets/assets/data/sponsor_on_boarding.json": "98d92b25c55be0459ae10dfc9c6fde8d",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
