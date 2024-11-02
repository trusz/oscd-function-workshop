import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: {
		port: 54187,
	},
	build: {
		lib: {
			entry:   "src/plugin.ts",
			fileName: "index",
			formats: ["es"],
		},
	},
})
