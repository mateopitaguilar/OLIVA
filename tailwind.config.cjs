/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          25: '#fafbf6',
          50: '#f3f6ec',
          100: '#e8efd8',
          200: '#d6e3b3',
          300: '#c2d58b',
          400: '#aec764',
          500: '#98b541',
          600: '#7e9735',
          700: '#657a2c',
          800: '#4c5c22',
          900: '#364316',
        }
      }
    },
  },
  plugins: [],
}



