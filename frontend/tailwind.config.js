/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text":"#3D3B40",
        "primary-text-light":"#726E75",
        "secondary-text":"#ffffff",
        "secondary-text-light":"#",
        "color-primary":"#DEF9C4",
        "color-secondary":"#9CDBA6",
        "color-tertiary":"#50B498",
        "color-quaternary":"#468585",
      }
    },
  },
  plugins: [],
}

