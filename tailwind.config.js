/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'blue':{
          '1':'#2F80ED'
        },
        'footer':'#EBEBEB'
      },
      height: {
        '18': '4.25rem',
      },
      padding:{
        '26':'6.25rem'
      },
      width:{
        '22':'5.725rem',
        '34':'8.25rem',
        '98':'28.625rem'
      }
    },
  },
  plugins: [],
}

