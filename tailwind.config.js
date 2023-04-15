/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    styled: true,
    themes: [
      {
        myTheme: {
          primary: '#1a365d',
          secondary: '#818ea2',
          accent: '#ffc107',
          neutral: '#a7a9ac',
          'base-100': '#f4f7fe',
          info: '#17a2b8',
          success: '#28a745',
          warning: '#dc3545',
          error: '#6c757d',
        },
        screens: {
          sm: '640px',
          // => @media (min-width: 640px) { ... }

          md: '768px',
          // => @media (min-width: 768px) { ... }

          lg: '1024px',
          // => @media (min-width: 1024px) { ... }

          xl: '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
      },
      'light',
      'cupcake',
      'business',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  plugins: [daisyui],
};
