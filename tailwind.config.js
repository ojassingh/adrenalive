/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
      flex: {
        '2': '2 2 0%'
      },
    },
  },
  plugins: [],
}
