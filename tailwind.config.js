/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      animation: {
        'blink-fast': 'blink-fast 0.8s steps(1, start) infinite',
      },
      keyframes: {
        'blink-fast': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      
    },
  },
  plugins: [],
}
