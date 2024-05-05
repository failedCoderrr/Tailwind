/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'pankaj': '1200px',
      // => @media (min-width: 1024px) { ... }
      }
    },
  },
  plugins: [],
};
