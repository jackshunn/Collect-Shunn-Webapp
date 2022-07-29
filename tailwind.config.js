/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          darkBlue: "#1C3144",
          lightBlue: "#2F5474",
          orange: "#D1462F",
          darkGrey: "#5B5D5D",
          lightGrey: "#BFC0C0",
        },
      },
    },
  },
  plugins: [],
}
