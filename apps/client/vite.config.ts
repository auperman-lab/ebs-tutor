/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/client',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),],

  resolve: {
    alias: {
      '@clientApi': path.resolve(__dirname, 'src/api/api'),
      '@clientAssets': path.resolve(__dirname, 'src/assets'),
      '@clientTypes': path.resolve(__dirname, 'src/types'),
      '@clientContext': path.resolve(__dirname, 'src/context'),
      '@clientConst': path.resolve(__dirname, 'src/const.ts'),
      '@clientHooks': path.resolve(__dirname, 'src/hooks'),
      '@clientUtils': path.resolve(__dirname, 'src/utils'),
      '@clientComponents': path.resolve(__dirname, 'src/components'),
      '@clientFeatures': path.resolve(__dirname, 'src/features'),
      '@clientLayout': path.resolve(__dirname, 'src/layout'),
    },
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
