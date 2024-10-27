/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#36C2CE",
        primary: "#98DED9",
        text_secondary: "#7D7D7D",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
