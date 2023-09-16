/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,cjs,mjs,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '8xl':'1980px'
      }
    },
  },
  plugins: [],
}