/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#CE64AB",
          "secondary": "#be185d",
          "accent": "#f472b6",
          "neutral": "#2a323c",
          "base-100": "#000000",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#991b1b",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
