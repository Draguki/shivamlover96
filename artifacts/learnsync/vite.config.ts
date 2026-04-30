import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// DO NOT hard fail on missing env vars in config
// Vercel build does not provide PORT

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [react()],

    server: {
      // Safe default for local dev only
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

    // Optional but good hygiene
    define: {
      "process.env": {}, // prevents undefined crashes in frontend
    },
  };
});
