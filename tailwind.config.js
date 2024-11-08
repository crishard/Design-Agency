/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black": "#000000",
        "white": "#FFFFFF",
        "orange": "#F55F1D",
        "bg-secondary": "#D7F5DC",
        "bg-green": "#06FB68",
        "bg-primary": "#F8FFF9",
        "green-variant": "#20B15A"
      }
    },
  },
  plugins: [],
}

