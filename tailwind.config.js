/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  important: true,
  theme: {
   
    fontFamily: {
      'sans': ['Montserrat', 'Roboto', 'Open Sans', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'display': ['Roboto'],
      'body': ['Open Sans']
    }, extend: {
      container: {
        center: true
      },
      colors: {
        'h': {
          100: '#f8f8f4',
          200: '#d4d6c8',
          300: '#c4c4c4',
          400: '#9a9b94',
          500: '#52524e',
          600: '#626060'

        },

        danger: '#FF0000',
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#0000b3',
          700: '#0000cc',
          800: '#0000e6',
          900: '#0000FF'
        },
        cyan: {
          100: '#ebf9ff',
          200: '#d7f4ff',
          300: '#c4eeff',
          400: '#b0e9ff',
          500: '#9ce3ff',
          600: '#89deff',
          700: '#75d8ff',
          800: '#62d3ff',
          900: '#4ECDFF',
          110: '#3ac7ff',
          111: '#27c2ff',
          112: '#13bcff'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
