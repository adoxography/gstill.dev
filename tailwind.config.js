module.exports = {
  purge: [
    './src/**/*.js',
    './public/index.html'
  ],
  theme: {
    fontFamily: {
      display: ['Fira Sans', 'sans-serif'],
      body: ['Oxygen', 'sans-serif']
    },

    extend: {
      spacing: {
        72: '18rem',
        96: '24rem',
        114: '36rem'
      },
      width: {
        min: 'min-content',
        fit: 'fit-content',
        'full-plus-6': 'calc(100% + 1.5rem)',
        'full-plus-8': 'calc(100% + 2rem)'
      },
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem'
      },
      rotate: {
        135: '135deg',
        270: '270deg'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    margin: ['responsive', 'first', 'hover', 'focus'],
    position: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    scale: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    translate: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    zIndex: ['responsive', 'hover', 'focus']
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
};
