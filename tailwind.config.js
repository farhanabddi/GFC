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
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        gold: "#F5A623",
        dark: "#0d0d0d",
        card: "#1a1a1a",
        border: "#2a2a2a",
      },
    },
  },
  plugins: [],
}