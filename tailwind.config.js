module.exports = {
  purge: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        balticsea: {
          DEFAULT: '#556473',
          light: '#343A40'
        },
        bluegtrey:{
          DEFAULT: '#FFF',
          dark: '#151D20'
        }
      },
    },
  },
  plugins: [],
}
