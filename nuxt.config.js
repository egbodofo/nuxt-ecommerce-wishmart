export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Wishmart",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Wishmart" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "bootstrap-css-only/css/bootstrap.min.css",
    "mdbvue/lib/css/mdb.min.css",
    "@fortawesome/fontawesome-free/css/all.min.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~plugins/core-components.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://papi-lara-ecommerce-api.herokuapp.com/api",
    credentials: false
  },
  /*
  https://laravelecommercetsx.herokuapp.com/api
  https://papi-lara-ecommerce-api.herokuapp.com/api
  https://e-papi-api.herokuapp.com
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {},
    transpile: ["mdbvue/lib/components"]
  }
};
