/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#063168',
      secondary: '#1A5EBF',
      tertiary: '#CDB36E',
      'tertiary-light': '#B8B096',
      accent: '#F6FAFF',
      white: '#FFFFFF',
      black: '#484848',
      'dark-gray': '#4b5f82',
      'light-gray': '#F3F3F3',
      'medium-gray': '#707070',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      arimo: ['Arimo', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      readex: ['Readex Pro', 'sans-serif'],
    },
  },
  plugins: [],
};
