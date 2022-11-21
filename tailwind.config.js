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
      colors: {
        'primary': '#F24405',
        'secondary': '#323AD9',
        'darkpurple': '#222673',
        'neonpink': '#F2059F',
        'dark': '#0D0D0D',
        // 'box': '#323859',
        // 'box': '#133340',
        // 'box': '#1B378C',
        // 'box': '#010B40',
        'box': '#262626',
      },
    },
  },
  plugins: [],
}
