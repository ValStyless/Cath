/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#EBEAE8',
        subtitles: '#F5E7DC',
        elements: '#DACABD',
        accent: '#89725B',
        mainText: '#000000',
      },
      fontFamily: {
        title: ['"DM Serif Display"', 'serif'],
        content: ['Raleway', 'sans-serif'],
        sub: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}