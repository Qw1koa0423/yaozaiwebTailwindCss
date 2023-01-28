/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 8s linear infinite normal',
        'scroll_mobile': 'scroll_mobile 8s linear infinite normal',
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(-1210px)' },
        },
        scroll_mobile: {
          '100%': { transform: 'translateX(-800px)' },
        }
      }
    },


  },
  plugins: [],
}
