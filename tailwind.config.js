/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#272333",
        "background-secondary": "#302C40",
        primary: "#DEDDE0",
        blue: "#0D86FF",
      },
    },
  },
  plugins: [],
};
