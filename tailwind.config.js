/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './src/**/*.{html,js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {
      flexBasis: {
        20: '20%', //SideMenu
        80:  '80%' //The Body
      },

      height: {
        '90': '90%'
      },

      colors: {
        sideMenuBg: '#000000',
        bodyBg: '#fff',
        titleColor: '#0F0F0F',
        hoverColor: '#262626',
        textColor: '#f2f2f2',
        colorOne: '#d9dbc142',
        colorTwo: '#8f9779',
        colorThree: '#C3C6A855',
        colorFour: '#a2a54942',
        gradient: 'linear-gradient(rgb(156, 204, 176)), (rgb(196, 204, 176))',
      },


    },
  },
  plugins: [],
}

