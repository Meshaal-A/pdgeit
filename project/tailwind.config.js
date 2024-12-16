/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        salmon: {
          50: '#fff5f5',
          100: '#ffe4e4',
          200: '#fbc2c2',
          300: '#f89999',
          400: '#f57272',
          500: '#f04a4a',
          600: '#d83636',
          700: '#b82b2b',
          800: '#961e1e',
          900: '#7a1717',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
    },
  },
  plugins: [],
};
