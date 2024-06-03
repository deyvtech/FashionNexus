import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			"@": path.resolve(__dirname, "./src"),
		},
	},
	define: {
		// eslint-disable-next-line no-undef
		VITE_PUBLIC_API_DOMAIN_PROD: process.env.VITE_PUBLIC_API_DOMAIN_PROD,
	}
});
