module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      CustomDark: '#2F4858',
      CustomBlue: '#33658A',
      CustomSkyBlue: '#86BBD8',
      CustomHoneyYellow: '#F6AE2D',
      CustomOrange: '#F26419',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
