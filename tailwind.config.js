/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#6D9DC5',
      secondary: '#467FAF',
      accent: '#99BAD6',
      white: '#FFFFFF',
      dark: '#48494B',
      grey: '#F5F5F5',
    },
    fontFamily: {
      sans: ['General Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
