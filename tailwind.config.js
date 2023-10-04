/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#C214A2",
          "secondary": "#E6C2FA",
          "accent": "#9613DD",
          "neutral": "#F4E2FE",
          "base-100": "#1D022C",
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
