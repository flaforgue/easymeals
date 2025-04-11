const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
        mobile: '641px',
        tablet: '769px',
        laptop: '1025px',
      },
    },
    fontFamily: {
      sans: ['quicksand', ...defaultTheme.fontFamily.sans],
      title: ['mali', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
