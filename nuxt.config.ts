// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Tambahkan base URL agar cocok dengan GitHub Pages
  app: {
    baseURL: "/wrack-a-mole/",
    buildAssetsDir: "assets", // Ganti <nama-repo> dengan nama repositori GitHub kamu
  },

  // Tambahkan preset static agar build ke static
  nitro: {
    preset: "static",
    prerender: {
      ignore: [],
    },
  },
});
