module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'cco': '#BAFF00',
      },
      ringColor: {
        'cco': '#BAFF00',
      },
      inset: {
        '1-prcnt': '1%',
        '2-prcnt': '2%',
        '3-prcnt': '3%',
        '5-prcnt': '5%',
        '10-prcnt': '10%',
        '12-prcnt': '12%',
        '15-prcnt': '15%',
        '50-prcnt': '50%',
        '20-screen': '20vw',
        '25-screen': '25vw',
        '30-screen': '30vw',
        '33-screen': '33vw',
        '40-screen': '40vw',
        '50-screen': '50vw',
      },
      width: {
        '50': '50px',
        '100': '100px',
        '120': '120px',
        '150': '150px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
      },
      height: {
        '50': '50px',
        '80': '80px',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
      },
      backgroundColor: {
        'cco': '#BAFF00',
        'darkcco': '#010101',
        'filter': '#1f1f1f'
      },
      screens: {
        '1440': { 'max': '1440px' },
        '1024': { 'max': '1024px' },
        '768': { 'max': '768px' },
        '320': { 'min': '320px' },
        'mobile': { 'min': '320px', 'max': '480px' }
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
      }
    },
    fontFamily: {
      'sans': 'Poppins, sans-serif'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
