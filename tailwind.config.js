/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#1b1035', dusk: '#3a1a5c', asphalt: '#140f22', ink: '#1b1035',
        aqua: '#2de2c8', lime: '#b6f542', sun: '#ffd23f', coral: '#ff5d73',
        violet: '#7b5cff', paper: '#fff8ec',
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', '"Arial Black"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
