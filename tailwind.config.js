/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          200: "#17223C",
          100: "#242F4C",
        },
        primary: "#D5D6D9",
        secondary: "#FDD892",
      },
    },
  },
  plugins: [],
};
