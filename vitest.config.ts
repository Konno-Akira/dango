import { defineConfig } from 'node_modules/vite'; //viteに変更
// import react from '@vitejs/plugin-react'; //追加
// import tailwindcss from '@tailwindcss/vite'; //追加

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  // plugins: [react(), tailwindcss()], //追加
  test: {
    include: [
      '**/*.spec.ts',
      '**/*.spec.cts',
      '**/*.spec.mts',
      '**/*.spec.tsx'
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**'
    ],
    globals: true,
    watch: false,
    root: 'src'
  }
});
