/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainBlue': '#003F62',
        'mainYellow': '#EDA415', 
        'mainRed': '#C33131',
        'whiteTextColor': '#FFFFFF',
        'blackTextColor': '#292D32',
        'lightBlueColor': '#E22F4F', 
        'lightGreenColor': '#30BD57'
      }
    },
  },
  plugins: [],
}
