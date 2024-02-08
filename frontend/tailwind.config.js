/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/ChowChow.jpg')",
      },
    },
    colors: {
      primary: '#6D9DC5',
      secondary: '#467FAF',
      accent: '#99BAD6',
      white: '#FAF9F6',
      dark: '#48494B',
      grey: '#F5F5F5',
      darkblue: '#102542',
    },
    fontFamily: {
      sans: ['General Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
