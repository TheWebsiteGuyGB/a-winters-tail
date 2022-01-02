module.exports = {
  content: ['./content/**/*.htm', './pages/**/*.htm', './partials/**/*.htm', './layouts/*.htm'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
