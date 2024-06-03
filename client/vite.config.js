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
		VITE_API_DOMAIN_PROD: JSON.stringify(process.env.VITE_API_DOMAIN_PROD),
	}
});
