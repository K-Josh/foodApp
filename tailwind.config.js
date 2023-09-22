/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    fontFamily: {
      primary: 'Montserrat',
      secondary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        textColor: "#000",
        primary:'#F23C17',
        secondary: '#FEE9DE'
      },
    },
    backgroundImage: {
      site: "url('./assets/Circle.png')"
    },
  },
  plugins: [],
}

