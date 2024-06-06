/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFD200',
          orange: '#F7971E',
          blue: '#00257D',
        },
        pureWhite: '#FFFFFF',
        white: '#FAFAFA',
        black: '#0B1421',
        darkGrey: '#252A38',
        grey: '#92949B',
        lightGrey: '#EFF1F6',
      },
    },
  },
  plugins: [],
};
