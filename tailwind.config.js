const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
     './templates/**/*.html',
     './static/js/**/*.js',
  ],
 darkMode: 'class', // or 'media' or 'class'
 theme: {
  extend: {
    transform: ['hover', 'focus']
  },
    animation: {
    'spin-slow': 'spin 3s linear infinite',
  },

  lineHeight: {
    11: '2.75rem',
    12: '3rem',
    13: '3.25rem',
    14: '3.5rem',
  },
  fontFamily: {
    sans: ['Inter', ...defaultTheme.fontFamily.sans],
  },

  typography: (theme) => ({
    DEFAULT: {
      css: {
        'font-size':  '1rem',
        'line-height':  '1.75',
        'max-width':  '65ch',
        color: theme('colors.neutral.700'),
        a: {
          color: theme('colors.primary.500'),
          '&:hover': {
            color: theme('colors.primary.600'),
          },
          code: { color: theme('colors.primary.400') },
        },
        'h1,h2': {
          fontWeight: '700',
          color: theme('colors.neutral.900'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        h1: {
          'font-size': '2.25em',
          'margin-top': 0,
          'margin-bottom': '.8888889em',
          'line-height': '1.1111111',
        },
        h2: {
          'font-size': '1.5em',
          'margin-top': '2em',
          'margin-bottom': '1em',
          'line-height': '1.3333333',
        },
        'h3,h4': {
          color: theme('colors.neutral.900'),
          fontWeight: '600',
        },

        h3: {
          'font-size': '1.25em',
          'margin-top': '1.6em',
          'margin-bottom': '.6em',
          'line-height': '1.6',
        },
        h4: {
          'margin-top': '1.5em',
          'margin-bottom': '.5em',
          'line-height': '1.5',
        },
        pre : {
          color: theme('colors.neutral.200'),
          backgroundColor: theme('colors.neutral.800'),
          'overflow-x': 'auto',
          fontSize: '.875em',
          'line-height':'1.7142857',
          'margin-top':'1.7142857em',
          'margin-bottom':'1.7142857em',
          'border-radius':'.375rem',
          'padding':'.8571429em 1.1428571em',
          code: {
            'border-width':'0',
            'border-radius':'0',
            'padding':'0',
            'font-weight':'400',
            'color':'inherit',
            'font-size':'inherit',
            'font-family':'inherit',
            'line-height':'inherit',
          }
        },
        details: {
          backgroundColor: theme('colors.neutral.100'),
          paddingLeft: '4px',
          paddingRight: '4px',
          paddingTop: '2px',
          paddingBottom: '2px',
          borderRadius: '0.25rem',
        },
        hr: { 
          borderColor: theme('colors.neutral.400'),
          'border-top-width': '1px',
          'margin-top': '3em',
          'margin-bottom':'3em' },
        'ol li:before, ul li:before': {
          position:'absolute',
          left:0,
          content:"❯",
          padding:'0 .5rem',
          fontWeight: '600',
          color: theme('colors.neutral.500'),
        },
        'ol li:before': {
          content:'counter(list-item,var(--list-counter-style,decimal)) "."',
          color: theme('colors.neutral.800'),
        },
        strong: { color: theme('colors.neutral.600') },
        blockquote: {
          color: theme('colors.neutral.900'),
          borderLeftColor: theme('colors.neutral.200'),
          'font-weight': '500',
          'font-style': 'italic',
          'borderLeftWidth': '.25rem',
          'margin-top':'1.6em',
          'margin-bottom':'1.6em',
          'padding-left':'1e',
        },
        p: {
          'margin-top': '1.25em',
          'margin-bottom': '1.25em',
        },
        table: {
          'width':'100%',
          'table-layout':'auto',
          'text-align':'left',
          'margin-top':'2em',
          'margin-bottom':'2em',
          'font-size':'.875em',
          'line-height':'1.7142857'
        },
        thead: {
          color:theme('colors.neutral.900'),
          fontWeight: 600,
          'border-bottom-width':'1px',
          'border-bottom-color':theme('colors.neutral.300'),
          th: {
            'vertical-align':'bottom',
            'padding-right':'.5714286em',
            'padding-bottom':'.5714286em',
            'padding-left':'.5714286em'
          },
          tr: {
            'border-bottom-width':'1px',
            'border-bottom-color':theme('colors.neutral.200'),
          }
        }
      },
    },
    dark: {
      css: {
        color: theme('colors.neutral.300'),
        a: {
          color: theme('colors.primary.500'),
          '&:hover': {
            color: theme('colors.primary.400'),
          },
          code: { color: theme('colors.primary.400') },
        },
        h1: {
          fontWeight: '700',
          letterSpacing: theme('letterSpacing.tight'),
          color: theme('colors.neutral.100'),
        },
        h2: {
          fontWeight: '700',
          letterSpacing: theme('letterSpacing.tight'),
          color: theme('colors.neutral.100'),
        },
        h3: {
          fontWeight: '600',
          color: theme('colors.neutral.100'),
        },
        'h4,h5,h6': {
          color: theme('colors.neutral.100'),
        },
        code: {
          backgroundColor: theme('colors.neutral.800'),
        },
        details: {
          backgroundColor: theme('colors.neutral.800'),
        },
        hr: { borderColor: theme('colors.neutral.700') },
        'ol li:before': {
          fontWeight: '600',
          color: theme('colors.neutral.400'),
        },
        'ul li:before': {
          backgroundColor: theme('colors.neutral.400'),
        },
        strong: { color: theme('colors.neutral.100') },
        thead: {
          color: theme('colors.neutral.100'),
        },
        tbody: {
          tr: {
            borderBottomColor: theme('colors.neutral.700'),
          },
        },
        blockquote: {
          color: theme('colors.neutral.100'),
          borderLeftColor: theme('colors.neutral.700'),
        },
      },
    },
  }),
},
  plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  ]
}
