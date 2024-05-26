/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mainColor': '#D29A5A',
        'gredientBg': 'rgba(19, 15, 12, 0.8)',
        'textColor': '#130F0C',
      },
      fontFamily:{
        'fontPoppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'leafBg': "url('./assets/Leaf.png')",
        'signUpBg': "url('./assets/SignUpBg.png')",
      }
    },
  },
  plugins: [],
}

