/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
        screens: {
          sm: '550px',
          md: '800px',
          lg: '1200px',
          xl: '1440px',
        }
      },

    },
    fontFamily: {
      'body': ['BlinkMacSystemFont', 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', 'sans-serif']
    },
  },
  darkMode: 'class',
  plugins: [],
}
