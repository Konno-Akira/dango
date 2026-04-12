import type { Config } from 'tailwindcss';

// eslint-disable-next-line import/no-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}"
    // './src/**/*.{js,jsx,ts,tsx}' から変更
  ],
  safelist: [],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  plugins: [],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {
      borderRadius: ['hover', 'focus'],
      fontWeight: ['hover', 'focus']
    }
  }
} satisfies Config;
