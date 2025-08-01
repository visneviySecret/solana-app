import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const isProduction = mode === "production";
    const isGitHubPages =
        process.env.GITHUB_PAGES === "true" || process.env.CI === "true";

    return {
        base: isProduction && isGitHubPages ? "/solana-app/" : "/",
        plugins: [
            react({
                babel: {
                    plugins: [
                        [
                            "babel-plugin-styled-components",
                            {
                                displayName: true,
                                fileName: false, // по желанию, чтобы убрать из класса имя файла
                            },
                        ],
                    ],
                },
            }),
            nodePolyfills({
                include: [
                    "buffer",
                    "process",
                    "util",
                    "crypto",
                    "stream",
                    "assert",
                    "events",
                    "url",
                    "querystring",
                ],
                globals: {
                    Buffer: true,
                    global: true,
                    process: true,
                },
            }),
        ],
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
            rollupOptions: {
                external: [],
            },
        },
        define: {
            global: "globalThis",
            // Переменные для подавления dev warnings
            "process.env.NODE_ENV": JSON.stringify(
                process.env.NODE_ENV || "development"
            ),
            "import.meta.env.DEV": true,
        },
    };
});
