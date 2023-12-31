
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      popppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      'mainBg': '#1e1e32',
      'mainText': '#ffffff',
      'subMainText': '#d1d1d1',
      'iconBg': '#2f2f50',
      'iconbgHover': '#52527a',
      'violet': '#c082ff',
    },
    extend: {
      animation: {
        'pulse-fast': 'pulse 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}