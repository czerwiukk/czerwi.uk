/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Arial"', "sans-serif"],
    },
    extend: {
      colors: {
        background: "#e0e0e0",
        "background-dark": "#202020",
      },
    },
  },
  plugins: [],
};
