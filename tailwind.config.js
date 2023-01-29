/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
