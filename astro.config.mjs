import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Vercel sets this during `vercel build` / production deploy — SSR must use their adapter. */
const onVercel = process.env.VERCEL === "1";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: onVercel
    ? vercel({
        // Mongo cold start + SRV DNS on first invocation can exceed default (10s on hobby)
        maxDuration: 60,
      })
    : node({ mode: "standalone" }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
