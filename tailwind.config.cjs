/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bjpReg: ["bjp-regular", "sans-serif"],
      bjpLt: ["bjp-light", "sans-serif"],
      bjpBld: ["bjp-bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
