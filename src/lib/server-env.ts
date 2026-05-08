/**
 * Server-side env reader.
 *
 * In dev, Astro/Vite loads `.env` into `import.meta.env` only — it does NOT
 * populate `process.env`. In a deployed Node server (started from a shell
 * that exports the variables), `process.env` is populated. We read from both
 * so the same code works in dev and prod.
 */
export function getEnv(key: string): string | undefined {
  const fromImportMeta = (
    import.meta.env as unknown as Record<string, string | undefined>
  )[key];
  if (typeof fromImportMeta === "string" && fromImportMeta.length > 0) {
    return fromImportMeta;
  }
  return process.env[key];
}
