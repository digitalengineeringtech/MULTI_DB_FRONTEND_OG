/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Padauk':['Padauk', 'sans-serif']
    },
      animation: {
        'pop-up': 'pop 1s ease-in-out',
        'slide-left': 'left 1s ease-in-out',
        'slide-right': 'right 1s ease-in-out',
        'manger-pop-up': 'manager 1s ease-in-out',
        'image-pop-up': 'image 0.5s ease-in-out',
        'box-pop-up':'box 0.3s ease-in-out'
      },
      keyframes: {
        pop: {
          'from': { transform: ' translateY(20px)', opacity: ' 0.8' },
          'to':{transform:'translateY(0px)',opacity:'1'}
        },
        left:{
          'from': { transform: 'translateX(-20px)', opacity: '0.5' },
          'to':{transform:'translateX(0px)',opacity:'1'}
        },
        right: {
          'from': { transform: 'translateX(20px)', opacity: '0.5' },
          'to':{transform:'translateX(0px)',opacity:'1'}
        },
        manager: {
          'from': { transform: 'translateY(10px)', opacity: '0.5' },
          'to':{transform:'translateY(0px)',opacity:'1'}
        },
        image: {
          'from': { transform: 'scale(0.1)', opacity: '0.5' },
          'to':{transform:'scale(1)',opacity:'1'}
        },
        box: {
           'from': { transform: 'scale(0.1)', opacity: '0.5' },
          'to':{transform:'scale(1)',opacity:'1'}
        }
      }
  },
  plugins: [],
}

