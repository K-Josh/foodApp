/** @type {import('tailwindcss').Config} */
export default{
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
        yellow:'#FDC55E',
        orange: '#F54748',
        linear:'#F54748'
      },
    },
  },
  plugins: [],
}

