module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        '2': '2deg',
        '4': '4deg',
        '6': '6deg',
        '8': '8deg',
        '10': '10deg',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
