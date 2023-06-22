/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
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
