const tailwindScrollbar = require('tailwind-scrollbar');

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './public/index.html'
  ],
  theme: {
    fontFamily: {
      display: ['Fira Sans', 'sans-serif'],
      body: ['Oxygen', 'sans-serif']
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
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
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, var(--max-w, 1fr)))'
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
  plugins: [
    tailwindScrollbar
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
};
