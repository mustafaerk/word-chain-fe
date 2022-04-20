module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      white: '#F5F5F7',
      primary: "#424A5F",
      secondary: "#26B8A2",
      purple: "#7B61FF",
      green: "#26B8A2",
      darkPurple: "#9073B5",
      darkGray: "#373E51",
      lightGray: "#D8D8D8"
    },
    borders: {
      borderNone: "none",
      borderyes: "1px solid #E5E5E5",
    },
    boxShadow: {
      'primary': '3px 4px 1px -1px rgb(66 74 95 / 0.6) !important',
      'secondary': '3px 4px 1px -1px rgb(38 184 161 / 0.6) !important',
      'purple': '3px 4px 1px -1px rgb(123 97 255 / 0.6) !important',
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
