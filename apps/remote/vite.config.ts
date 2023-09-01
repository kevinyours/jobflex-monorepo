import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

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
			name: 'remote-app',
			filename: 'remoteEntry.js',
			// Modules to expose
			exposes: {
				'./App': './src/App.tsx',
			},
			shared: {
				react: { singleton: true },
				'react-dom': { singleton: true },
			},
		}),
	],
});
