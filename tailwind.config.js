/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'header-image' : "url(/images/logo.png)",
      }
    },
  },
  plugins: [],
}