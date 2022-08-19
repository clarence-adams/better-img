import { sveltekit } from '@sveltejs/kit/vite';
import wasmPack from 'vite-plugin-wasm-pack';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), wasmPack('./wasm')],
	optimizeDeps: {
		exclude: ['./wasm'],
	},
};

export default config;
