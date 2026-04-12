import type { Config } from 'tailwindcss';

// eslint-disable-next-line import/no-default-export
export default {
   content: [
     "./index.html", // 追加
     './src/**/*.{js,jsx,ts,tsx}'
   ],
   safelist: [],
   darkMode: 'media',
   theme: {
     extend: {}, // {} -> {}, 変更
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