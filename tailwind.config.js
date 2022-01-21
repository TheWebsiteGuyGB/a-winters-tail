module.exports = {
  content: [
  './content/**/*.htm', 
  './pages/**/*.htm', 
  './partials/**/*.htm', 
  './layouts/*.htm'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
