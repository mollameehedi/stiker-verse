/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        nav: "100px",
      },
      colors: {
        primary: "#ffdb00",
        link: "#2b78c5",
        graywhite: '#f3f3f3',
        secondary: "#444",
        'black-4040': "#040404",
        btnBg: "#2d2d2d",
        third: "#3696f6",
        navFo: "rgb(4, 4, 4)",
        copyRight: "rgb(17, 17, 17)",
      },
      backgroundImage: {
        'heroBanner': "url('./../images/home_bg_banner.png')",
      },
      spacing: {
        '560': '560px',
        '200': '200px',
        39: "39px",
        218: "218px",
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
        "h1": "4rem",
        "2title": "42px",
      },
    },
    
  },
  variants: {},
  plugins: [],
};
