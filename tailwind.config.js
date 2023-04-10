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
