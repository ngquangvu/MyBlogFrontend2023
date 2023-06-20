/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          padding: theme("spacing.4"),
          margin: "auto",
        },
        ".hehe": {
          backgroundColor: "red",
        },
      });
    },
  ],
};
