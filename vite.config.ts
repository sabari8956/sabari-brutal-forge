import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT: If you use a custom domain, set 'homepage' in package.json to your domain (e.g., https://yourdomain.com/)
// and set base to '/' below. If deploying to a subpath, set base to that subpath.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/', // Use '/' for custom domain, or '/repo-name/' for GitHub username.github.io/repo-name
}));
