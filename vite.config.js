import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      overlay: true
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Only add the math import, don't duplicate if files already have it
        additionalData: (content) => {
          if (content.includes('@use "sass:math"') || content.includes("@use 'sass:math'")) {
            return content;
          }
          return `@use "sass:math";\n${content}`;
        }
      }
    }
  }
});