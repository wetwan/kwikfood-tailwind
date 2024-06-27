/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/build/img/backgroundimage.jpg')"
      },
      lineHeight:{
        'search': "30px"
      },
      boxShadow:{
        'food': "-10px 2px 20px 3px rgba(0, 0, 0, 0.3)",
        'light': "-10px 3px 20px 3px grey"
      },

    },
  },
  plugins: [],
}

