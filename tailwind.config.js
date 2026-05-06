/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        surface: '#1a1a1f',
        border: '#2a2a32',
      },
    },
  },
  plugins: [],
};
