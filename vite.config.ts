import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), svgr()],
	build: {
		minify: true,
	},
	server: {
		port: 3001,
		proxy: {
			'/api/airtable': {
				target: 'http://localhost:8888/.netlify/functions',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/api/create': {
				target: 'http://localhost:8888/.netlify/functions',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
