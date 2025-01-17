/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {

      screens: {
        'xs' : '580px',
        'sxl' :'920px',
      },
    
       backgroundImage: {
        'gradient-three-colors': 'linear-gradient(to right, #F72585, #5F69D3, #7209B7)',
        'gradient-heading' :  'linear-gradient(to right, #7209B7, #3A0CA3)',
       },
       backgroundColor: {
        'custom-gray': 'rgba(217, 217, 217, 0.2)',
        green: {
          400: '#13DE33', 
  
        },

        'primary' : "#7209B7",
        'secondary' : '#F72585'
       },
       boxShadow: {
        'custom' : '1px 1px 40px rgba(0,0,0,0.2), 0 -1px 10px rgba(0,0,0,0.1)',
       },
       fontSize: {
        'heading' : '2.5rem',
        'sub-heading' : '1.75rem'

       },
       textColor: {
        'primary' : '#132D46',
        'secondary' : '#7209B7',
        'third' : '#F72585'
       },
       animation: {
        "loop-scroll" : "loop-scroll 50s linear infinite",
        'down': 'down .4s ease-in-out forwards',
        'up': 'up .4s ease-in-out forwards',
       },
       keyframes: {
        "loop-scroll" : {
          from : { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"},
        },
        "down" : {
          '0%' : {transform : 'translateY(-100%)'},
          '100%' : {transform : 'translateY(0%)'}
        },
        "up" : {
          '0%' : {transform : 'translateY(0%)'},
          '100%' : {transform : 'translateY(-100%)'}
        },

       },
       borderColor: {
        'primary' : "#7209B7",
        'secondary' : '#F72585'
       }
    },
  },
  
  plugins: [
    require('tailwindcss-animated'),
    require('daisyui'),

  ],
}