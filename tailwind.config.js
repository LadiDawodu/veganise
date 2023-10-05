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
        30: '30%', //SideMenu
        90:  '80%' //The Body
      },

      height: {
        '90': '90%'
      },

      colors: {
        sideMenuBg: '#000000',
        bodyBg: '#fff',
        titleColor: '#000000',
        hoverColor: '#262626',
        textColor: '#000000',
        colorOne: '#d9dbc142',
        colorTwo: '#8f9779',
        colorThree: '#C3C6A855',
        colorFour: '#a2a54942',
        gradient: 'linear-gradient(rgb(156, 204, 176)), (rgb(196, 204, 176))',
        textHover: '#ffffff',
      },


    },
  },
  plugins: [],
}

