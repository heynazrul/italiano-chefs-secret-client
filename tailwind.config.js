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
        primary: '#FA023C',
        'primary-light': '#e10538',
        secondary: '#4B000F',
        tertiary: '#C8FF00',
        dark: '#040004',
        grey: '#413D3D',
      },
    },
  },
  plugins: [],
};

// primary: '#121223',
//         secondary: '#AE445A',
// FF7622;
