module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/*.js',
    './pages/*/*.js',
    './pages/*/*/*.js',
    './pages/*/*/*/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '240px'
      }
    },
  },
  variants: {},
  plugins: [],
}
