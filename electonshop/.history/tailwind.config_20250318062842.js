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
        'mainYellow': '#EDA415',  // Поправено
        'mainRed': '#C33131',
        'whiteTextColor': '#FFFFFF',
        'blackTextColor': '#292D32',
        'lightBlueColor': '#E22F4F',  // Поправено
        'lightGreenColor': '#30BD57'  // Поправено
      }
    },
  },
  plugins: [],
}
