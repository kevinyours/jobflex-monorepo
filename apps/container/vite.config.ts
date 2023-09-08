import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://velog.io/@ckstn0777/Vite-Module-Federation-%EC%9C%BC%EB%A1%9C-Micro-Frontends-%EA%B2%BD%ED%97%98%ED%95%B4%EB%B3%B4%EA%B8%B0

export default defineConfig({
  resolve: {
    dedupe: ['react'],
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        remoteApp: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    tsconfigPaths(),
  ],
});
