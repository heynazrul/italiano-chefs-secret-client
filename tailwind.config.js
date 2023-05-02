/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        logo: ['Satisfy', 'cursive'],
      },
      colors: {
        primary: '#14471E',
        'primary-light': '#68904D',
        secondary: '#DA6A00',
        'secondary-light': '#EE9B01'
      },
    },
  },
  plugins: [],
};

// primary: '#121223',
//         secondary: '#AE445A',
// FF7622;
