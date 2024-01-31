/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [require("daisyui")],
}