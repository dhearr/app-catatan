/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream0: "#f8f6f4",
        cream1: "#ece8e2",
        cream2: "#c7baaa",
        cream3: "#af9b88",
        cream4: "#9f8470",
        cream5: "#927564",
        cream6: "#7a6054",
        cream7: "#645048",
      },
      fontFamily: {
        comforta: ["Comfortaa"],
        borel: ["Borel"],
        sans: ["Playpen+Sans"],
        pacifico: ["Pacifico"],
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
