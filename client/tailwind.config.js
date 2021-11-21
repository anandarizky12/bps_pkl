// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {  
      backgroundImage:{
      'bps_login' : "url('https://webapi.bps.go.id/consumen/assets/img/login-desktop.svg')",
    }},
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}