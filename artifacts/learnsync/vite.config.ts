import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      port: Number(process.env.PORT) || 5173,
      host: true,
    },

    preview: {
      port: Number(process.env.PORT) || 4173,
      host: true,
    },

    build: {
      outDir: "dist",
      sourcemap: isDev,
    },

    define: {
      "process.env": {},
    },
  };
});
