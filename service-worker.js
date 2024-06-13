/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "444bf7906561ec65774c8cf102917d91"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7fae4c44.js",
    "revision": "982ade04acc232a4e05199f694724e42"
  },
  {
    "url": "assets/js/10.55c00561.js",
    "revision": "81a4f31a961c4d30ee2c861015246a5c"
  },
  {
    "url": "assets/js/14.169f7f28.js",
    "revision": "2b7c51ff5db90219d0f28d5662a51ca3"
  },
  {
    "url": "assets/js/15.80983bcc.js",
    "revision": "2cb9cbb03638c63e7c981a09bed9dfb4"
  },
  {
    "url": "assets/js/16.e68e0059.js",
    "revision": "521e9ef9d9d56044620675081729eed6"
  },
  {
    "url": "assets/js/17.4a1e8213.js",
    "revision": "ce08718d4e06f210bdbb415c5f937774"
  },
  {
    "url": "assets/js/18.826d5d56.js",
    "revision": "382e1858e4003e5ce130ffa7df5690b4"
  },
  {
    "url": "assets/js/19.a63f60dd.js",
    "revision": "5ba85b7843484a1bae2c9e88590fd6a4"
  },
  {
    "url": "assets/js/2.b462a11d.js",
    "revision": "e305b259f4c5a4b9b702138e05c753c2"
  },
  {
    "url": "assets/js/20.0f315758.js",
    "revision": "d4abbd9b36a709cf19876b4fa61e459c"
  },
  {
    "url": "assets/js/21.b77552da.js",
    "revision": "ee123fd46595bb0de18b11c38bbe7486"
  },
  {
    "url": "assets/js/22.0578bb2f.js",
    "revision": "69880c4f3659c399e0ecdf03bd7b0b56"
  },
  {
    "url": "assets/js/23.f00b1312.js",
    "revision": "2f4c1f52c80461eb13c9e6073f2e42d7"
  },
  {
    "url": "assets/js/24.9ff8a26d.js",
    "revision": "cae4ee1add5b84a01bca733f8b3572f9"
  },
  {
    "url": "assets/js/25.40bf0509.js",
    "revision": "1139752d2e35fae6f9defcceb0033ab7"
  },
  {
    "url": "assets/js/26.b6510955.js",
    "revision": "1da7f6988b83948ccdcc5712db1657e5"
  },
  {
    "url": "assets/js/27.b35f7af7.js",
    "revision": "da82bb53bf0f5ac0182af95d3312a770"
  },
  {
    "url": "assets/js/28.27e5e860.js",
    "revision": "599be1d59c7fecc2ed030e7f4a8f8dc7"
  },
  {
    "url": "assets/js/29.c922701a.js",
    "revision": "920dee03c61de0a89bb003321ab09cf9"
  },
  {
    "url": "assets/js/3.73757bd1.js",
    "revision": "ad87523144153b2a8cea1f27ebd60392"
  },
  {
    "url": "assets/js/30.6472a690.js",
    "revision": "9409695d37ff9ff9c2a8fc4f89568010"
  },
  {
    "url": "assets/js/31.0452e8fa.js",
    "revision": "b4c041dc91d6337bea5b6b20af50dd46"
  },
  {
    "url": "assets/js/32.806f4a0e.js",
    "revision": "abd2434020fc79c071727d4b1a876ae9"
  },
  {
    "url": "assets/js/33.510a706b.js",
    "revision": "863c54506758e45ab34f63d064c2ce8f"
  },
  {
    "url": "assets/js/34.307f6192.js",
    "revision": "bb5ee48ecc236abcf9319bfc635edd62"
  },
  {
    "url": "assets/js/35.f333dc79.js",
    "revision": "d4f4dfea1036fc826bb097e504ea7652"
  },
  {
    "url": "assets/js/36.5109cf8f.js",
    "revision": "b70adec4270d7e2a6c26a3d9fee0e62a"
  },
  {
    "url": "assets/js/37.f7003e16.js",
    "revision": "56a5ade4900cf3c1e43072f060c277c1"
  },
  {
    "url": "assets/js/38.639d3c26.js",
    "revision": "0a6f1c1cc5954c99a62c100eb5e8c819"
  },
  {
    "url": "assets/js/39.29844ad2.js",
    "revision": "8b8e6412a56f7a9ebab4df8b6bc9e37d"
  },
  {
    "url": "assets/js/4.e7db506f.js",
    "revision": "98445f027a574aff080ed5baf86405bc"
  },
  {
    "url": "assets/js/40.3130b451.js",
    "revision": "95273ae6f0fa3189824d9cd39ce19145"
  },
  {
    "url": "assets/js/41.490f4915.js",
    "revision": "dc80354de67125c119f7b8af21b25856"
  },
  {
    "url": "assets/js/42.86763108.js",
    "revision": "2aad9c363c745ebd74b18b79a5fd84f3"
  },
  {
    "url": "assets/js/43.21fccef5.js",
    "revision": "9b1f95f6009860cc3217c3450491f683"
  },
  {
    "url": "assets/js/44.7fcddb3f.js",
    "revision": "c4f79412bdadf9a573ab9bf76330a83d"
  },
  {
    "url": "assets/js/45.e65aedf1.js",
    "revision": "a34455892cdc517ccef8d7881dc92e72"
  },
  {
    "url": "assets/js/5.7f9f0e06.js",
    "revision": "5e446b40e80611c383e22107687168d6"
  },
  {
    "url": "assets/js/6.38d2ce38.js",
    "revision": "6ceb4cb2456e3d3a21646ac473f33e9d"
  },
  {
    "url": "assets/js/7.0d9b32d6.js",
    "revision": "b72afe24bfa551a24d02d3bde7740a64"
  },
  {
    "url": "assets/js/8.607b1a99.js",
    "revision": "c9a44014f9211e893b2838d7a7dcf64f"
  },
  {
    "url": "assets/js/9.98fee886.js",
    "revision": "15d3d9c89aaf8b06a6b184c3c43047b3"
  },
  {
    "url": "assets/js/app.5edeaeca.js",
    "revision": "d841d89e6df2f420ad9adef8f59b5cab"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.dfbd4b9e.js",
    "revision": "51ac30db2ca2b63445f34d61d38036c4"
  },
  {
    "url": "assets/js/vendors~flowchart.ddbfa5f1.js",
    "revision": "ef2d540b379ee54124c4b063ed83b1d4"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "f64705f37b5da0af743b60dfb14249f4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "69fb0d9adcfc07499eddf4f7fff4cc92"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7b6fa271c87aaaf0fdd520c87e02e042"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5327d8c90f3367bd058cb1882dbaa985"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d6a3459a58405397ccf657c85b360843"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "20136156d99a15aaa627b474262693ff"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "3e017f1c7280c71b5e8007c132e082f2"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "491fbe65476862f3bf4acb6791c7df47"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2aca6000708c6a9f2de4c0c1db31ad2f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5b861651c2d672c57b1c01dcca861c2d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c92565d789bceb7d8d5fcd077e10015f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "49dea26b547d3c7dd179bdcb55efcd8a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a0614cde1994354fdedc6f64e2ee79b2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f666e94336af34a83ac8c44b4bfb2075"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4a93d4bef6761cb9496238ba1e7f644b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b9b2f7ded6825d85e8de3f3a7260992c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f0f6fdd3d48f1f40162a04122c9b49bc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fdde4471b80fa65d8c6189847edf57b9"
  },
  {
    "url": "timeline/index.html",
    "revision": "e90e936b7dd8d4db9affa89f8d17d464"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "887c3ce95c3437fb6445ddf602e00d85"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "65ea19ceced38d58b579d3d9e3232b19"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "480f725932e04ebc675d5c0d353d846a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "77a444ddcbe9425131733b580d0bf729"
  },
  {
    "url": "生活分享/life.html",
    "revision": "84231ce5ef20083ad9492266ddbf7744"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
