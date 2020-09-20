module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/*.js',
    './pages/Components/*/*.js',
    './pages/Components/*/*/*.js'
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
