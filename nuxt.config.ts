// https://nuxt.com/docs/api/configuration/nuxt-config

const siteName = "Site Name";
export default defineNuxtConfig({
  ssr: false,
  components: true,
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV !== 'production',
      siteName: siteName
    }
  },
  css: ['@/assets/scss/app.scss'],
  app: {
    head: {
      title: siteName,
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {name: "robots", content: "noindex,nofollow,noarchive"}
      ],
      link: [
        {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
        {rel: "preconnect", href: "https://fonts.gstatic.com"},
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp-noto.min.css",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global/_index.scss";',
        },
      },
    },
  },
})
