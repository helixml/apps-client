import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'helix-apps-client',
      formats: ['es'],
      fileName: (format) => `index.js`
    },
  }
})
