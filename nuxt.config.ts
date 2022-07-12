import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["maz-ui/css/main.css"],
  build: {
    transpile: ["maz-ui"],
  },
});
