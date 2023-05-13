/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#F6F1F1",
          200: "#AFD3E2",
          300: "#19A7CE",
          400: "#146C94",
        },
        dark: {
          100: "#0a0913",
          200: "#131122",
          300: "#443a67",
          400: "#9c90aa",
        },
      },

      fontFamily: {
        serifFont: ["Lora", "serif"],
        sansSerifFont: ["Inter", "sans-serif"],
        monoFont: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
