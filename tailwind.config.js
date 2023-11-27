module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        nav: "100px",
      },
      colors: {
        primary: "#ffdb00",
        link: "#2b78c5",
        secondary: "#444",
        btnBg: "#2d2d2d",
        navFo: "rgb(4, 4, 4)",
        copyRight: "rgb(17, 17, 17)",
      },
    },
    fontFamily: {
      futurapt: ["Futura PT", "sans-serif"],
      helvetica: ["Helvetica Neue", "sans-serif"],
    },
    fontSize: {
      bntText: "14px",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  spacing: {
    39: "39px",
    218: "218px",
  },
};
