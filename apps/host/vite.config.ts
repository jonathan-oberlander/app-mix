import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";

/**
 * Automatic code splitting using Lazy loading works very well too
 * It would be worth comparing these too approcahes or a mix of the 2
 */

function renderChunks(deps: Record<string, string>) {
  // don't include dependencies you want to bundle together in a common chunk
  return Object.keys(deps).reduce((chunks: Record<string, string>, key) => {
    if (["react", "react-dom", "react-router-dom"].includes(key)) {
      return chunks;
    }
    return { ...chunks, [key]: [key] };
  }, {});
}

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // group deps you want to chunk together
          vendor: ["react", "react-dom", "react-router-dom"],

          // automatic chunks
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
