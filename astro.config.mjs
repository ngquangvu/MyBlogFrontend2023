import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "http://quangvu.blog/",
  integrations: [
    astroI18next(),
    mdx(),
    sitemap({
      i18n: {
        locales: {
          en: "en",
          ja: "ja",
          vi: "vi",
        },
      },
    }),
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
        path: "./custom-config.cjs",
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: "server",
  adapter: netlify(),
});
