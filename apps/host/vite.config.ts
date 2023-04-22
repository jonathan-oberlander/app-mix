import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";

function renderChunks(deps: Record<string, string>) {
  // don't include local projects
  // don't include dependencies you want to bundle together in a common chunk

  return Object.keys(deps).reduce((chunks: Record<string, string>, key) => {
    if (
      [
        "react",
        "react-dom",
        "react-router-dom",
        "project-a",
        "project-b",
      ].includes(key)
    ) {
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
          // group chunks you want to bundle together
          vendor: ["react", "react-dom", "react-router-dom"],

          // automatic chunks
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
