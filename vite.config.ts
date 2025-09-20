import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // Use relative base so built assets are referenced relative to index.html.
  // This avoids 404s when the site is served from a custom domain or a subpath.
  base: './',
  plugins: [react()],
})
