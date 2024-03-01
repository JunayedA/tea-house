/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        colors: {
          customRed: 'rgb(255, 0, 0)', // You can use strings
          customGreen: [0, 255, 0],     // Or arrays
          customBlue: 'rgba(0, 0, 255, 0.5)', // You can also include alpha (opacity) with rgba
        },
      },
    },
    variants: {},
    plugins: [],
  }