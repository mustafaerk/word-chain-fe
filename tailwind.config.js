module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "w-s0",
      "w-s1",
      "w-s2",
      "w-s3",
      "w-s4",
      "w-s5",
      "w-s6",
      "w-s7",
      "w-s8",
      "w-s9",
      "w-s10",
      "w-s11",
      "w-s12",
      "w-s13",
      "w-s14",
      "w-s15",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "bar-load": "ease 3s linear infinite",
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        0: "0ms",
        500: "500ms",
        1000: "100ms",
      },
      width: {
        s0: "0%",
        s1: "7%",
        s2: "13%",
        s3: "20%",
        s4: "26%",
        s5: "33%",
        s6: "40%",
        s7: "46%",
        s8: "52%",
        s9: "59%",
        s10: "65%",
        s11: "72%",
        s12: "78%",
        s13: "85%",
        s14: "92%",
        s15: "100%",
        roomWidth: "32%",
      },
    },
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      white: "#F5F5F7",
      primary: "#424A5F",
      secondary: "#26B8A2",
      purple: "#7B61FF",
      green: "#26B8A2",
      darkPurple: "#9073B5",
      darkGray: "#373e51",
      lightGray: "#D8D8D8",
      lightPurple: "#B8AAFF",
      sky: "#3D4559",
      skyDark: "#B5B5B5",
      trying: "#454545",
    },
    borders: {
      borderNone: "none",
      borderyes: "1px solid #E5E5E5",
      borderProgress: "1px solid #7B61FF",
      borderDarkGray: "3px solid #373e51",
    },
    boxShadow: {
      primary: "3px 4px 1px -1px rgb(66 74 95 / 0.6) !important",
      secondary: "3px 4px 1px -1px rgb(38 184 161 / 0.6) !important",
      purple: "3px 4px 1px -1px rgb(123 97 255 / 0.6) !important",
      green: "3px 4px 1px -1px rgb(38 184 162 / 0.6) !important",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
  ],
};
