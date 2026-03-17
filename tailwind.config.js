/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: { 50: '#fefdf8', 100: '#fdf9ed', 200: '#faf0d0', 300: '#f5e4a8' },
        leaf: { 400: '#5aae4a', 500: '#3d8f31', 600: '#2d7024', 700: '#245a1d', 800: '#1e4818' },
        bark: { 300: '#e8bc8a', 400: '#dc9956', 500: '#d27f33', 600: '#b86628', 700: '#974f22', 800: '#7a4020' },
        espresso: { 800: '#2c1810', 900: '#1a0e08' }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
