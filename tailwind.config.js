import defaultTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
