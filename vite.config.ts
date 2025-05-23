import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        server: './src/entry-server.tsx',
      },
    },
  },
  optimizeDeps: {
    include: ['react-helmet-async'],
    esbuildOptions: {
      // Fix react-helmet-async import issues
      define: {
        global: 'globalThis',
      },
    },
  },
  ssr: {
    // List of dependencies to externalize for SSR
    noExternal: ['react-helmet-async'],
    // Avoid SSR/ESM issues
    target: 'node'
  },
})
