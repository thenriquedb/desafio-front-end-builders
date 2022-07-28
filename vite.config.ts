import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /**
     * @see https://stackoverflow.com/a/71667610/9525489
     */
    EnvironmentPlugin(["VITE_APP_OPEN_WEATHER_MAP_KEY"]),
    react(),
    tsconfigPaths(),
  ],
});
