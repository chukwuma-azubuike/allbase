module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        primarygreen: '#1EB2A6',
        lightgreen: '#1EB2A60A',
        blue: '#18B2D2',
        primaryblue: '#526A98',
        authbg: '#f8faff',
        primarygrey: '#DAE2ED',
        bodybg: '#f4f4f4',
        lowerbg: '#d2f0ed'
      },
      fontFamily: {
        'hk': ['HK Grotesk']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
