import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

import Package from './package.json';

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      name: Package.name,
      entry: 'src/index.tsx',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', '@wybxc/typst.ts',
        '@wybxc/typst-ts-web-compiler', '@wybxc/typst-ts-renderer'],
    },
  },
})
