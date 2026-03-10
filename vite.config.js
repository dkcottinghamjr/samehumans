import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set base to your GitHub repo name, e.g. base: "/the-same-humans/"
// Leave as "/" if using a custom domain or GitHub user/org page
export default defineConfig({
  plugins: [react()],
  base: "/samehumans/",
});
