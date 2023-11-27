module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'nav': '100px',
      },
      colors: {
        'primary': '#ffdb00',
        'link': '#2b78c5',
        'secondary': '#444',
        'btnBg': '#2d2d2d',
        'navFo': 'rgb(4, 4, 4)',
        'copyRight': 'rgb(17, 17, 17)',
      },
    },
    fontFamily: {
      'futurapt': ['Futura PT', 'sans-serif'],
      'helvetica': ['Helvetica Neue', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
