const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      width: {
        '96': '24rem'
      },
      screens: {
        's-w-400': '400px'
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    fontSize: ['responsive', 'first-letter'],
    fontWeight: ['responsive', 'first-letter'],
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('first-letter', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-letter${separator}${className}`)}::first-letter`
        })
      })
    })
  ],
}
