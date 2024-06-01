/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        "import.meta.vitest": "undefined",
    },
    plugins: [react()],
    test: {
        environment: "jsdom",
        includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
        coverage: {
            reporter: ["text", "html"],
        },
    },
});
