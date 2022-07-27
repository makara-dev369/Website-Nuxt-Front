export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  ssr: false,
  generate: {
    fallback: true,
  },
  head: {
    title: "websdev-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // mode: "universal",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["~/plugins/vue-smooth-dnd.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  axios: {
    baseURL: `${process.env.API_APP}/api`, // Used as fallback if no runtime config is provided
  },
  auth: {},
  // router: {
  //   middleware: "anti-protect",
  // },
};
