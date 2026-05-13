/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans:    ["Inter", "sans-serif"],
      },
      colors: {
        // ── Red/gold theme ──────────────────────────────
        gold:   "#F5A623",      // gold accent — unchanged
        dark:   "#8B0000",      // deep dark red — main bg
        card:   "#9B1111",      // card background
        border: "#6B0000",      // border color
      },
    },
  },
  plugins: [],
}