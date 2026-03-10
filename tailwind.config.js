export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        background: "#ffffff",
        text: "#1f1f1f",
        naranja: "#ff7a18",
        lila: "#8b5cf6"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }

    },
  },

  plugins: [],
}