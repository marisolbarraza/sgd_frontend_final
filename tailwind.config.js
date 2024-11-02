/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-azul': '#345071',
        'custom-blanco': '#F4F3F2',
        'custom-gris': '#B3B3B3',
        'custom-advertecia': '#FFB800',
        'custom-error': '#A30000',
        'custom-exito': '#258D00',
        'custom-negro':'#212121',
      },
      fontFamily: {
        'sans': ['Maven Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}