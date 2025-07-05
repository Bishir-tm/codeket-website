import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindcssNesting from "@tailwindcss/nesting";

export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssNesting,
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
