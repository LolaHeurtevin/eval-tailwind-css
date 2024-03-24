/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {},
    colors: {
      'light-purple' : '#B6B2FF',
      'dark-purple' : '#7D77FF',
      'white': '#fefefe',
      'black' : '#1B1C1E',
      'grey' : "#717171",
      'lightgrey' : '#B3B3B3',
      'lightergrey' : '#808080',
    },
    fontSize: {
      sm : ['14px', '24px'],
      md : ['16px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xlcust : ['24px', '30px'],
      xl2 : ['32px', '40px'],
      title1 : ['56px', '70px'],
      title2 : ['48px', '60px'],
      footertitle : ['20px', '23.44px']
    },
  },
  plugins: [],
}