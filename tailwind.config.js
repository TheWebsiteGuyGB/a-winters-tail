module.exports = {
  content: [
    './content/**/*.htm',
    './partials/**/*.htm',
    './pages/**/*.htm',
    './layouts/*.htm', 
    './src/**/*.js',
  ],
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
