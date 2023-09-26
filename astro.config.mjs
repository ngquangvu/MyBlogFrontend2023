import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    astroI18next(),
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
        path: "./custom-config.cjs",
      },
    })
  ],
  output: "server",
  adapter: netlify(),
});
