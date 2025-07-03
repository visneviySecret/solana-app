import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            shared: path.resolve(__dirname, "./src/shared"),
            entities: path.resolve(__dirname, "./src/entities"),
            features: path.resolve(__dirname, "./src/features"),
            widgets: path.resolve(__dirname, "./src/widgets"),
            pages: path.resolve(__dirname, "./src/pages"),
            app: path.resolve(__dirname, "./src/app"),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "build",
        sourcemap: true,
    },
    define: {
        global: "globalThis",
    },
});
