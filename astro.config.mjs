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

/**
 * Canonical site URL (optional). If set, must match the URL users type in the browser for
 * Astro's origin check when security.checkOrigin is true. On Vercel, preview deployments use
 * *.vercel.app while PUBLIC_SITE_URL might be a custom domain — that mismatch causes 403 on
 * form POST ("Cross-site POST form submissions are forbidden"). We disable checkOrigin below.
 */
const site =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  output: "server",
  adapter: onVercel
    ? vercel({
        // Mongo cold start + SRV DNS on first invocation can exceed default (10s on hobby)
        maxDuration: 60,
      })
    : node({ mode: "standalone" }),
  /** Vercel / multi-host: origin check often blocks same-site HTML form POSTs (admin login, contact). */
  security: {
    checkOrigin: false,
  },
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
