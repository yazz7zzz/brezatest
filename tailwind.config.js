/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'breza': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};