/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unifraktur: ['"UnifrakturMaguntia"', "cursive"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
