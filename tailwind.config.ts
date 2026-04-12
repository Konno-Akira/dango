import type { Config } from 'tailwindcss';

// eslint-disable-next-line import/no-default-export
export default {
   content: [
     './src/**/*.{js,jsx,ts,tsx}'
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

// 変更後
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//    "./src/pages/**/*.{js,ts,jsx,tsx}",
//    "./src/components/**/*.{js,ts,jsx,tsx}",
//    "./src/styles/**/*.{css}"
//  ],
//  safelist: [],
//  darkMode: "media",
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//  variants: {
//    backgroundColor: ["responsive", "hover", "focus", "active"],
//    extend: {
//      borderRadius: ["hover", "focus"],
//      fontWeight: ["hover", "focus"],
//    },
//  },
//};