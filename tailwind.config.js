
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-border': 'linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(74,21,108,1) 25%, rgba(255,169,0,1) 50%, rgba(74,21,108,1) 75%, rgba(2,0,36,1) 100%)',
      },
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        },
      }
    },
  },
  plugins: [],
}