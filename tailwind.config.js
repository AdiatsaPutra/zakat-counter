// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      height: {
        xxl: "38rem",
      },
      margin: {
        xl: "30rem",
        xxl: "38rem",
        xxxl: "50rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
