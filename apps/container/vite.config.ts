import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://velog.io/@ckstn0777/Vite-Module-Federation-%EC%9C%BC%EB%A1%9C-Micro-Frontends-%EA%B2%BD%ED%97%98%ED%95%B4%EB%B3%B4%EA%B8%B0

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		dedupe: ['react'],
	},
	plugins: [react(), tsconfigPaths()],
});
