module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#F5F5F7',
      primary: "#424A5F",
      purple: "#7B61FF",
      green: "#26B8A2",
      darkPurple: "#9073B5",
      darkGray: "#373E51"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
