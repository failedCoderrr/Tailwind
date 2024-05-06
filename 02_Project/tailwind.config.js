/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media560: "560px",
        pankaj: "1200px",
        // => @media (min-width: 1024px) { ... }
      },
      backgroundImage: {
        'testimonialBG': "url('./images/testimonial-bg.png')",
      }
    },
  },
  plugins: [],
};
