import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors'
import typography_styles from './typography';

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fff5ed',
          '100': '#ffe9d5',
          '200': '#fdceab',
          '300': '#fbac76',
          '400': '#f98142',
          '500': '#f65c19',
          '600': '#e8420e',
          '700': '#c02f0e',
          '800': '#982714',
          '900': '#7b2313',
          '950': '#420e08',
        },
        secondary: colors.zinc
      }
    },
  },
  variants: {
    extend: {},
  },
  typography: typography_styles,
};
