import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ⚠️ Top-level await is only allowed in modules; make sure `type` is set to "module" in package.json
const cartographerPlugin =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer()
        ),
      ]
    : [];

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), ...cartographerPlugin],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // 🔥 This is the key fix — Vercel expects `dist`, not `dist/public`
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
