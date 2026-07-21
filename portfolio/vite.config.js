import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
//
// `base: "./"` makes every built asset path relative, so the site works
// no matter what sub-path GitHub Pages serves it from (project pages live
// at https://<user>.github.io/<repo>/, user/org pages live at the root).
// If you deploy to a custom domain at the root, you can safely change
// this back to "/".
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
