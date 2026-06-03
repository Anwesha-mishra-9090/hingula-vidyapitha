import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // Generates `dist/stats.html` after build for bundle analysis
    visualizer({ filename: "dist/stats.html", open: false }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.split('node_modules/')[1];
            if (!parts) return 'vendor_misc';
            const segs = parts.split('/');
            const pkg = segs[0].startsWith('@') ? `${segs[0]}/${segs[1]}` : segs[0];
            return `vendor_${pkg.replace('/', '_').replace('@', '')}`;
          }
        },
      },
    },
  },
});
