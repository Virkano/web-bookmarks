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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "e219dcbf7d4174156bd41d65cf1cc555"
  },
  {
    "url": "404.html",
    "revision": "7f75b6667fb7485e8ef93b409366c277"
  },
  {
    "url": "article/index.html",
    "revision": "1eb335ae67308c7dc1ea230ed906cd70"
  },
  {
    "url": "article/z-applets.html",
    "revision": "638b6e7b441c419f317db6c1cc1c48c3"
  },
  {
    "url": "article/z-career.html",
    "revision": "34f0c639e9f9020d139648dfef8ba9b9"
  },
  {
    "url": "article/z-mobile.html",
    "revision": "2ab024befb60d7b35b40970f91714a26"
  },
  {
    "url": "article/z-network.html",
    "revision": "f9413457f8029e3eba113056543ba0be"
  },
  {
    "url": "article/z-node.html",
    "revision": "d78780ae7496505038e0c38ffd6ef491"
  },
  {
    "url": "article/z-thinking.html",
    "revision": "df870dbe62392d3b7765b07a333d495c"
  },
  {
    "url": "assets/css/0.styles.e6218456.css",
    "revision": "aba7cb238635145c2c5c1493a045a37b"
  },
  {
    "url": "assets/img/h5-preference.2d6a02ef.png",
    "revision": "2d6a02ef917e540e6af690691f822bd5"
  },
  {
    "url": "assets/img/html-outline1.afeecaa4.png",
    "revision": "afeecaa4e787646599bb1b4481dd8fcc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e196a678.js",
    "revision": "437c577c971654814e2191041cabe8db"
  },
  {
    "url": "assets/js/11.9c9e0678.js",
    "revision": "2e30e1b4337a49d045c3e2141506f3b4"
  },
  {
    "url": "assets/js/12.a6f01581.js",
    "revision": "38293fd190542d255ca9be606a126657"
  },
  {
    "url": "assets/js/13.6a6e5507.js",
    "revision": "7aadf9c8da7c66b03518cca1e4adf8ef"
  },
  {
    "url": "assets/js/14.ab93b0d1.js",
    "revision": "88ad2665c1801f65f59f6605cc5c78d6"
  },
  {
    "url": "assets/js/15.19355536.js",
    "revision": "1f1e6f470efdee9932afac12b6197c64"
  },
  {
    "url": "assets/js/16.f86bfa4c.js",
    "revision": "3ef96199bb51b605aa5a0fd0624b690e"
  },
  {
    "url": "assets/js/17.ca219ff0.js",
    "revision": "3a4d516df30a852e7543f141735a0d27"
  },
  {
    "url": "assets/js/18.9f5feb3b.js",
    "revision": "1f5f03b7c9a1aa7857f7da8be15c94c8"
  },
  {
    "url": "assets/js/19.12638efb.js",
    "revision": "b2048a5d5e384126b4302710c9538ac1"
  },
  {
    "url": "assets/js/2.ba4d8087.js",
    "revision": "170bb0dfd968b6399bf21c30781c71cc"
  },
  {
    "url": "assets/js/20.b6998c41.js",
    "revision": "2636e02a9c091bfef9040482412c149b"
  },
  {
    "url": "assets/js/21.9040e00e.js",
    "revision": "cb8b905a16ca862ba2b7555b92e6f2a7"
  },
  {
    "url": "assets/js/22.aaf91ae1.js",
    "revision": "0cddd92fda2a1f6a5f58a25a55ded151"
  },
  {
    "url": "assets/js/23.652202ac.js",
    "revision": "73f13bb112c1ad2f24bc23349a1d9bd4"
  },
  {
    "url": "assets/js/24.b01465f3.js",
    "revision": "bceeac0444c0d4fadaf48528f5609c63"
  },
  {
    "url": "assets/js/25.9bf7d528.js",
    "revision": "44c25fb4c7b7dbc1774458521b68843d"
  },
  {
    "url": "assets/js/26.64e221ba.js",
    "revision": "513262f1563b46ea8b9caea49ea89f19"
  },
  {
    "url": "assets/js/27.03d4fbf3.js",
    "revision": "bae0841f83007cbcfac7ebf139b4089a"
  },
  {
    "url": "assets/js/28.4bd36de8.js",
    "revision": "454f03045928f21b444b1234118d6ec9"
  },
  {
    "url": "assets/js/29.bb173e6d.js",
    "revision": "1939e2ce1fba0dc1fe898b7f2e4ebc80"
  },
  {
    "url": "assets/js/3.024ed6bc.js",
    "revision": "fdefec00a801295558a1aeb9d21c662d"
  },
  {
    "url": "assets/js/30.b04c98e0.js",
    "revision": "a13f65d094a1dd8a17689e19a49950e5"
  },
  {
    "url": "assets/js/31.298e4ecf.js",
    "revision": "991c84437c283811846d47bb8df6f080"
  },
  {
    "url": "assets/js/32.38396335.js",
    "revision": "556a51a6e1663e90e1a71bb75f2fa7b0"
  },
  {
    "url": "assets/js/33.280f8844.js",
    "revision": "671a124a8402ef4003f086126ab0d2e3"
  },
  {
    "url": "assets/js/34.aaf119c9.js",
    "revision": "dc8fd1a30ad2875454a7f6929e8d889b"
  },
  {
    "url": "assets/js/35.13c4330b.js",
    "revision": "3656564f3ee6926293f1c1e38126282c"
  },
  {
    "url": "assets/js/36.f007c650.js",
    "revision": "64cd207da5ae3cf4945875c07848996c"
  },
  {
    "url": "assets/js/37.8389843a.js",
    "revision": "7203f8965380dbd4cae41cfcc9cb7446"
  },
  {
    "url": "assets/js/38.5fa136be.js",
    "revision": "f2958ede72229876c78eb8107a32e38f"
  },
  {
    "url": "assets/js/39.89b551ff.js",
    "revision": "f33411a94f309b07c8b2e9f745048c21"
  },
  {
    "url": "assets/js/4.0f90675e.js",
    "revision": "1ddc52e2cf9f8b7ca41effdb03a91849"
  },
  {
    "url": "assets/js/40.a4414a49.js",
    "revision": "12240cb445ceaed217fe5d1ee10f255b"
  },
  {
    "url": "assets/js/41.9a779bc9.js",
    "revision": "878b36c46f0c6d75b810fde9da962529"
  },
  {
    "url": "assets/js/42.970d9988.js",
    "revision": "6d2d92f0a112377f44a20db2d010f2bf"
  },
  {
    "url": "assets/js/43.e4341e3d.js",
    "revision": "77a3c1d13e5566ec6804f6b0c20ac817"
  },
  {
    "url": "assets/js/44.41e11baf.js",
    "revision": "7eba3a17344ab5a0e51ee64ab73883ef"
  },
  {
    "url": "assets/js/45.492f2f02.js",
    "revision": "62e09a9f9672647291d702f56a513316"
  },
  {
    "url": "assets/js/46.494d6db9.js",
    "revision": "de1a96c8b90c287462e1ab52bb888eeb"
  },
  {
    "url": "assets/js/47.53e68195.js",
    "revision": "6e9d0c036575a141f3980b022417e3d0"
  },
  {
    "url": "assets/js/48.3e9114c1.js",
    "revision": "4720bdaf0f425331bc318a7659068c35"
  },
  {
    "url": "assets/js/49.3aa32aed.js",
    "revision": "66906c307a8d4c2858e17c17a1e6ad97"
  },
  {
    "url": "assets/js/5.71bf0b07.js",
    "revision": "5e1df2673a8d879a1b8e0f535c953f08"
  },
  {
    "url": "assets/js/50.97b6af12.js",
    "revision": "ac068ad0eaccd5d129b8895636f6cc94"
  },
  {
    "url": "assets/js/51.3c066e83.js",
    "revision": "f2826c86db5b721068d01f5bdd854c65"
  },
  {
    "url": "assets/js/52.196e1af2.js",
    "revision": "0e289ac299f8875b6fd1ec6acd3beb35"
  },
  {
    "url": "assets/js/53.1cc02a92.js",
    "revision": "d93f5c7b770e6d0ec4791831d3efcece"
  },
  {
    "url": "assets/js/54.59c968e3.js",
    "revision": "884f82e52f0ad6eb4083e7988657b336"
  },
  {
    "url": "assets/js/55.24d0929b.js",
    "revision": "ff94b50e8e0c12f2fbbf127889357b93"
  },
  {
    "url": "assets/js/56.41c36d57.js",
    "revision": "427b48c6e1670b599371c338225f24c0"
  },
  {
    "url": "assets/js/57.460bf1dc.js",
    "revision": "fcf12cde2f8ecde1b4f5d60437f51aa1"
  },
  {
    "url": "assets/js/58.6710b252.js",
    "revision": "0c347f46eead2e26d3dac5e95fa40f3b"
  },
  {
    "url": "assets/js/59.3ca3f85d.js",
    "revision": "9e348aa8a232fcc2a9afa512cebadac3"
  },
  {
    "url": "assets/js/6.51d0afd0.js",
    "revision": "b668ab897ad22b31786c6ca6b373db93"
  },
  {
    "url": "assets/js/60.078251b1.js",
    "revision": "e7a68745c5a69ac3bf274a3fcac1ce65"
  },
  {
    "url": "assets/js/61.60a11d1f.js",
    "revision": "48a442b709058f85d868a0c23f8c3f35"
  },
  {
    "url": "assets/js/62.71e7e193.js",
    "revision": "0cb7ac92d920f40307cee311076db2f1"
  },
  {
    "url": "assets/js/63.dc374a55.js",
    "revision": "968681a3393e9e4d0911b252ff5b8844"
  },
  {
    "url": "assets/js/64.550e3f09.js",
    "revision": "82df0288f5340f49a999a84ceebcf025"
  },
  {
    "url": "assets/js/65.1e379a2b.js",
    "revision": "231c0b767927ffbda20a51f1e0cacc62"
  },
  {
    "url": "assets/js/66.3a5a662a.js",
    "revision": "240a52edf5f3254fe2dc3b48b7f16381"
  },
  {
    "url": "assets/js/67.7449d12f.js",
    "revision": "28640d83dd008136b3f9a0ee32ae7539"
  },
  {
    "url": "assets/js/68.f3fb8f9f.js",
    "revision": "679df700469f7b7bf5bf1797abcf922d"
  },
  {
    "url": "assets/js/69.c95ee50e.js",
    "revision": "dbe1383d6c84ef9ffe285101edc08aca"
  },
  {
    "url": "assets/js/7.374fae55.js",
    "revision": "efc3426a08d193961451cb468d5512f3"
  },
  {
    "url": "assets/js/70.e2d9032c.js",
    "revision": "128337cfa6194282f3afdaedc9edfc62"
  },
  {
    "url": "assets/js/71.23c0a76d.js",
    "revision": "4bc395606fe565872ae29560b0c1c7b2"
  },
  {
    "url": "assets/js/72.4865289d.js",
    "revision": "57f5040c9e790e6bd5c9372d033ebbb7"
  },
  {
    "url": "assets/js/73.43c02ca2.js",
    "revision": "39dab5968f680cab86aa9c4f1b83da3d"
  },
  {
    "url": "assets/js/74.d34d9da2.js",
    "revision": "0af2e64f4cb5bdf015314bac9ef1e062"
  },
  {
    "url": "assets/js/75.d1ef9bb6.js",
    "revision": "ac4ca008512458137e47c7b42855cc5d"
  },
  {
    "url": "assets/js/76.c260a7c2.js",
    "revision": "906c1db4d63d4bbe408219dff37151fb"
  },
  {
    "url": "assets/js/77.3aa0434e.js",
    "revision": "9fd2d439da66bdd1ecbe0d6e0fbb2e29"
  },
  {
    "url": "assets/js/78.4e0cef1f.js",
    "revision": "6f2679691eade453500d9073d6b19f0a"
  },
  {
    "url": "assets/js/79.72efca72.js",
    "revision": "804d3fbe337b61f964fb53d2f11b2927"
  },
  {
    "url": "assets/js/8.7ee94eb0.js",
    "revision": "a0ceaade29b1783d23925a8021aa1665"
  },
  {
    "url": "assets/js/80.13097ed1.js",
    "revision": "07973a39b571a044f8e1ab6b824fb9af"
  },
  {
    "url": "assets/js/81.e12ac368.js",
    "revision": "dd1a6edce6e94edaae695d223c8b7ca3"
  },
  {
    "url": "assets/js/82.e9011443.js",
    "revision": "8e51b12baa9af3e718df9aee3d8c264e"
  },
  {
    "url": "assets/js/83.d7c9de09.js",
    "revision": "0417602e587169227443dac61eaf7a38"
  },
  {
    "url": "assets/js/84.ea77d365.js",
    "revision": "df85de21bb22f27bc3d5284a01141ecb"
  },
  {
    "url": "assets/js/85.40e66fd7.js",
    "revision": "aa6c3fcff3d287be738d1919b7f4da5e"
  },
  {
    "url": "assets/js/86.6fc0ca09.js",
    "revision": "379da84866155b0fc93663c03a186a74"
  },
  {
    "url": "assets/js/87.f1cfbe11.js",
    "revision": "ed5c076a3ec1d830cd5c38d413faf4ab"
  },
  {
    "url": "assets/js/88.f4c9afc1.js",
    "revision": "f1d0ff7e508b577ef2cba7891af67299"
  },
  {
    "url": "assets/js/89.37deaf95.js",
    "revision": "220d359a3a1b68aa5bd6740a23cbaf13"
  },
  {
    "url": "assets/js/9.02e28689.js",
    "revision": "80dfe1797f204300beb2191e17efdff4"
  },
  {
    "url": "assets/js/90.0fff50f5.js",
    "revision": "70d491173cfac5ddf25eccf8d56d2679"
  },
  {
    "url": "assets/js/91.f0f8906e.js",
    "revision": "89f0e16ab8dc6a468e1d2accdd83a6bd"
  },
  {
    "url": "assets/js/92.dffbe591.js",
    "revision": "1110dbf1e425d7240e2cf25d573ec4f5"
  },
  {
    "url": "assets/js/93.df48944b.js",
    "revision": "713a0472087e12c8a66939e6e2114bcd"
  },
  {
    "url": "assets/js/app.d3b7db82.js",
    "revision": "33b7f61c1f99e0d161207b0572558c4f"
  },
  {
    "url": "base/color/index.html",
    "revision": "cf26116486ef9d1054e9a8deeaf7ea17"
  },
  {
    "url": "base/color/z-color1.html",
    "revision": "66a134f64dfa543b77f2bc3cf8b0294f"
  },
  {
    "url": "base/color/z-color2.html",
    "revision": "74102c90a3d9a9049971f239b33cfcb4"
  },
  {
    "url": "base/color/z-color3.html",
    "revision": "4a1f0d8fbb4349be47735290762387c8"
  },
  {
    "url": "base/css/index.html",
    "revision": "2da6e9e8f665059b787f3c019881ea00"
  },
  {
    "url": "base/css/z-css1.html",
    "revision": "c4cfe789ebd264dc8292dafae80b91d5"
  },
  {
    "url": "base/css/z-css2.html",
    "revision": "616267f4da2f67bb9b2191b9606df4cd"
  },
  {
    "url": "base/html/head/index.html",
    "revision": "dbdcd50bc34976cb346c6fff78cf0032"
  },
  {
    "url": "base/html/index.html",
    "revision": "ffd347802ab2c055e27bf32a8f674cdd"
  },
  {
    "url": "base/html/z-common1.html",
    "revision": "46296da184aacb2f61e8e9e89295cb0f"
  },
  {
    "url": "base/html/z-head.html",
    "revision": "57a404ef5b6da9bcbbb96521e9df24b2"
  },
  {
    "url": "base/html/z-html-outline.html",
    "revision": "d98a9d807f97d1e2705d002f062b2cdc"
  },
  {
    "url": "base/javascript/index.html",
    "revision": "6717338212fb85283a381b6ab58cff20"
  },
  {
    "url": "base/javascript/z-js1.html",
    "revision": "f0f8ba4d30fa305bc590d9ce248f694d"
  },
  {
    "url": "base/javascript/z-js2_1.html",
    "revision": "23382389532a12e36d00cfe1f7d22f47"
  },
  {
    "url": "base/javascript/z-js2.html",
    "revision": "345978a4d4e0551a8b98f8701c1eac8c"
  },
  {
    "url": "base/javascript/z-js3.html",
    "revision": "46877ccb69d0a584aeebc5e387d9d5dd"
  },
  {
    "url": "base/javascript/z-js4.html",
    "revision": "5ba8d82e1993eab72104fe16d09016fc"
  },
  {
    "url": "base/javascript/z-js5.html",
    "revision": "6beb427c8a3a07b112b5603d7e6fe386"
  },
  {
    "url": "base/javascript/z-js6.html",
    "revision": "a91f43192e6996933119ed288215c89f"
  },
  {
    "url": "base/javascript/z-js66.html",
    "revision": "6ec91aa0f659345b4657bf8a798a10a2"
  },
  {
    "url": "base/preference/index.html",
    "revision": "d06bafb6ff0182135074eed2ae8cfecc"
  },
  {
    "url": "base/preference/z-browser-rendering.html",
    "revision": "72d0f3ffba00b1312a8ba4713e2caf12"
  },
  {
    "url": "base/preference/z-develop-and-deploy.html",
    "revision": "39b07e3b026f4d4cb880b6a3e309f37a"
  },
  {
    "url": "base/preference/z-javascript-best-practise.html",
    "revision": "f24c659ca84dca73619aa8581de05bb3"
  },
  {
    "url": "base/preference/z-mobile-h5-performance.html",
    "revision": "92d10ee557eca9c648dae88c61fa0c90"
  },
  {
    "url": "base/preference/z-optimize-events.html",
    "revision": "3f7d7eddaf5abd32f6c2861afdfa6bbb"
  },
  {
    "url": "base/preference/z-optimize-load-speed.html",
    "revision": "8f0fc06de34373ad0feda99c524baed6"
  },
  {
    "url": "base/problems-in-develop/index.html",
    "revision": "3d25aceefc301d38a35bfba4b52d1cf9"
  },
  {
    "url": "base/problems-in-develop/z-layout-compatibility.html",
    "revision": "b81e775ec5b65e3541ef8073570429c0"
  },
  {
    "url": "base/regx/index.html",
    "revision": "bce424062a06ddaf04f064a47cf92fa7"
  },
  {
    "url": "base/regx/z-reg1.html",
    "revision": "8e62581ba49fcc2a46ea291ff1557c52"
  },
  {
    "url": "cute-spear-monster.jpg",
    "revision": "6f212929a2d15df2ca4a8f4bec9fddce"
  },
  {
    "url": "favorite/index.html",
    "revision": "4ea3e8dc6dfab2110ea35ac4db1ec354"
  },
  {
    "url": "favorite/z-blog.html",
    "revision": "129b86315c8e406c16aec4511feb9e8d"
  },
  {
    "url": "favorite/z-css-animate-loading.html",
    "revision": "e7527b070995d96cd614c3aba9d67f18"
  },
  {
    "url": "favorite/z-css-animate.html",
    "revision": "9f260d726129a13c0dd324ce98b2d04e"
  },
  {
    "url": "favorite/z-document.html",
    "revision": "f4dd4005a99f31af1051f1138a988721"
  },
  {
    "url": "favorite/z-util.html",
    "revision": "e2b1f59c21983ba58e32f6a216e9f9dd"
  },
  {
    "url": "favorite/z-video.html",
    "revision": "4107e81376731a258e60d429f059b6ea"
  },
  {
    "url": "gold-state.jpg",
    "revision": "db298bde52fccfba909c1049e7e3592a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4c6fad99f6334bc48127d07d5bea3095"
  },
  {
    "url": "index.html",
    "revision": "b11d9fb663c51647a811233c3669b7b7"
  },
  {
    "url": "interview/index.html",
    "revision": "dbec43efa8e1fbbb05812444817e4044"
  },
  {
    "url": "interview/z_cankao.html",
    "revision": "af2d8dac8bde6c3fb7c0d0de35f3beea"
  },
  {
    "url": "interview/z-a_question1.html",
    "revision": "b6f30e46413d93b5b3f564718b6bef7b"
  },
  {
    "url": "interview/z-a_question2.html",
    "revision": "c022230ca4bc22f814939cb262cda2ad"
  },
  {
    "url": "interview/z-a_question3.html",
    "revision": "7174c7e003776f8cfa5b9d72fdc7c8b6"
  },
  {
    "url": "interview/z-algorithms.html",
    "revision": "72c5a536c1e61b9e4a3eb02e04eedc75"
  },
  {
    "url": "interview/z-design-patterns.html",
    "revision": "d1b2709a9eab180bf874d1afaf4bc200"
  },
  {
    "url": "interview/z-interview-exercises-with-html-and-css.html",
    "revision": "dc1b85d1764f2508686d65c8041dbbd6"
  },
  {
    "url": "interview/z-interview-exercises-with-JavaScript.html",
    "revision": "854946c4dd21cc81c6fd1ec36d39b6bc"
  },
  {
    "url": "interview/z-interview-exercises-with-jquery.html",
    "revision": "6ed3005f46f18958d817462a118c4d11"
  },
  {
    "url": "interview/z-network.html",
    "revision": "4369b4b5f07fa667924c676c4d515082"
  },
  {
    "url": "interview/z-react.html",
    "revision": "2d8dc903143941e19303f5a9b70b79ad"
  },
  {
    "url": "interview/z-vue.html",
    "revision": "5c6c8ad1ff122e708f524a34eb693237"
  },
  {
    "url": "music/index.html",
    "revision": "266b3693222a289de74a3f85bc6db840"
  },
  {
    "url": "tech/index.html",
    "revision": "a2710ba7d304f314c9cd51fab04d1257"
  },
  {
    "url": "tech/z-ajax.html",
    "revision": "5a66dd24c3fe48634b7ca49bf71032da"
  },
  {
    "url": "tech/z-arr-obj-clone.html",
    "revision": "f065bdcf1953aabb3e79fe0baaadd008"
  },
  {
    "url": "tech/z-browser-env-sniffing.html",
    "revision": "0e1a1b2142cee4a2f00c1d14de319449"
  },
  {
    "url": "tech/z-chrome.html",
    "revision": "427ee129d4c1d3ece9d3384bbc676a62"
  },
  {
    "url": "tech/z-debounce-throttle.html",
    "revision": "4047a4c4bbc9c5e5d2e492e5bcb30c4c"
  },
  {
    "url": "tech/z-dev-proxy.html",
    "revision": "596b81bd9696f7f82d0631ed06bcc91f"
  },
  {
    "url": "tech/z-download.html",
    "revision": "e5ad43ff76c77cd7d5faa1603115e971"
  },
  {
    "url": "tech/z-js-secret.html",
    "revision": "cc0d47c1d454d458592496a763ca650a"
  },
  {
    "url": "tech/z-linux-install-nginx.html",
    "revision": "6abec974c476d521c6bd753b3d045928"
  },
  {
    "url": "tech/z-npm-cnpm.html",
    "revision": "ff4ea5ce68ed5a48da9df89a2a7cc6f2"
  },
  {
    "url": "tech/z-process.env.html",
    "revision": "1e8856b4848761a166198b04b6b7b15c"
  },
  {
    "url": "tech/z-random-number.html",
    "revision": "e4841ef4ea803d8fdce988a4411a2404"
  },
  {
    "url": "tech/z-scroll-to.html",
    "revision": "63b24224d20c8ad26be496875d02dd39"
  },
  {
    "url": "tech/z-sw.html",
    "revision": "6560dd764b7cadc936f94e6ae0840301"
  },
  {
    "url": "tech/z-travis-ci.html",
    "revision": "cb0ad1b2043f570d8bdce62eb517d6a8"
  },
  {
    "url": "tech/z-vpn.html",
    "revision": "5ca9d1d1e8a8d1af01e4d6939de4143e"
  },
  {
    "url": "tech/z-vue.html",
    "revision": "cb7ca42bcb0792feeb0e4ab246fcd593"
  },
  {
    "url": "tech/z-webpack.html",
    "revision": "ee1db549e9cf1604ba164cbb57a33655"
  },
  {
    "url": "tool-site/site/index.html",
    "revision": "d75d7fb56540bdbaf0b0bfda89590ba1"
  },
  {
    "url": "tool-site/tool/index.html",
    "revision": "e47bf3f75e45291a52320f6da9983961"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
