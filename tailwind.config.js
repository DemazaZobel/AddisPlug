/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#112639', // Navy Blue
      lightPrimary: '#4F94A8',// Light Blue
      darkPrimary: '#0B101E',     // Dark Navy 
      secondary: '#E99522',     // Orange
      accent: '#487249',        // Olive Green
      light: '#FAF6F6',         // Off White
      dark: '#152D3D',  
      navy: {
        600: '#1E3A8A',
        700: '#172554',
        800: '#1E40AF'
      },        // Deep Blue
    },},
  },
  plugins: [],
}