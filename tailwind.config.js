/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  darkMode:'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        primary:'#5263FA',
        white:'#FFf',
        black:'#000',
        darkground:'#040115',
        lightground:'#F9F9FA'
      },
      colors:{
        primary:'#5263FA',
        'light-primary':'#040115',
        white:'#fff',
        black:'#000',
        dark:'#D5C6F6',
        light:'#040115',
      },
      lineHeight:{
        'n-1.2':'-50px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

