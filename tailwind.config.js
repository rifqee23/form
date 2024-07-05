/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
    
       backgroundImage: {
        'gradient-three-colors': 'linear-gradient(to right, #F72585, #5F69D3, #7209B7)',
       },
       backgroundColor: {
        'custom-gray': 'rgba(217, 217, 217, 0.2)',
        green: {
          400: '#13DE33', // Misalnya, hijau terang
  
        }
       },
       boxShadow: {
        'custom' : '1px 1px 40px rgba(0,0,0,0.2), 0 -1px 10px rgba(0,0,0,0.1)',
       }
    },
  },
  plugins: [],
}