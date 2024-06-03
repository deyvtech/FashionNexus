import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	// eslint-disable-next-line no-undef
	const env = loadEnv(mode, process.cwd(), "");
	return {
		// vite config
		plugins: [react()],
		resolve: {
			alias: {
				// eslint-disable-next-line no-undef
				"@": path.resolve(__dirname, "./src"),
			},
		},
		define: {
			// eslint-disable-next-line no-undef
			__APP_ENV__: JSON.stringify(env.VITE_VERCEL_ENV),
		},
	};
});
