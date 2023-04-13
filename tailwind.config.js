/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingImg: "url('/public/images/home-bg.png')",
      },
    },
  },
  plugins: [],
};
