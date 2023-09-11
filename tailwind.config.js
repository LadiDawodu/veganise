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
        80:  '80%', //The Body
      },

      height: {
        '90': '90%'
      },

      colors: {
        sideMenuBg: '#1c1c1c',
        bodyBg: '#ffff',
        titleColor: '#384225',
        hoverColor: '#262626',
        textColor: '#f2f2f2',
        coloeOne: '#a4e687',
        colorTwo: '#627346',
        colorThree: '#aabf71',
        colorFour: '#fcf8ef',
        gradient: 'linear-gradient(rgb(156, 204, 176)), (rgb(196, 204, 176))',
      },


    },
  },
  plugins: [],
}

