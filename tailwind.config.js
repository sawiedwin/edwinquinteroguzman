/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'app-primary': '##f6403d',
        'app-white': '#FFFFFF',
        'app-red': '#EA4335',
        'app-background-main': '#F4F7FE',
        'app-gray': {
          50: '#fef2f2',
          100: '#ffe2e1',
          200: '#ffc9c8',
          300: '#ffa4a2',
          400: '#fd5956',
          500: '#f6403d',
          600: '#e3231f',
          700: '#bf1916',
          800: '#9e1816',
          900: '#831b19',
          950: '#470908',
        },
      },
    },
  },
  plugins: [],
};

