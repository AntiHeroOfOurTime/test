/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {colors: ({ colors }) => ({
      main: '#009CB4',
      greenLight: '#95AE3C',
      greenDark: '#487538',
      greyDark: '#4D4D4F',
      secondGrey: '#C6C6C6',
      black: '#231F20',
      white: '#FFFFFF',
      yellow: '#D2D832',
      orange: '#FAB42A',
      red: '#E0371F',
      green: '#00B347',
      greyLight: '#C6C6C6',
      textMainGrey: '#676A71',
      textSecond: '#A8AAAE',
      inputArea:'#F6F6F9',
      searchArea:'#F6F6F9',
      backgroundColor: '#FBFBFB',
      lineColor: '#EDEDF4',}),

    extend: {
      transitionTimingFunction:{
          'outgoing':{
              transition: 'left .2s linear'
          }
      }
    },
  },
  plugins: [],
}