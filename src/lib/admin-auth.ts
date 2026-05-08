import { createHmac, timingSafeEqual } from "node:crypto";
import type { AstroCookies } from "astro";
import { getEnv } from "@/lib/server-env";

/** httpOnly cookie name for the admin session. */
export const ADMIN_COOKIE = "krest_admin";

/** Session lifetime: 7 days. */
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

type SessionPayload = {
  /** username */
  u: string;
  /** issued-at (ms epoch) */
  iat: number;
  /** expires-at (ms epoch) */
  exp: number;
};

function getSecret(): string {
  const secret = getEnv("SESSION_SECRET");
  if (!secret || secret.length < 32) {
    throw new Error(
      "SESSION_SECRET missing or too short (need 32+ chars). Set it in .env.",
    );
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

function safeEq(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

/** Build a signed token: <base64url(payload)>.<base64url(hmac)> */
export function createSessionToken(username: string): string {
  const now = Date.now();
  const payload: SessionPayload = {
    u: username,
    iat: now,
    exp: now + SESSION_TTL_MS,
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function verifySessionToken(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const dot = token.indexOf(".");
  if (dot < 1) return null;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!safeEq(sig, sign(body))) return null;
  try {
    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as SessionPayload;
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function setAdminCookie(cookies: AstroCookies, username: string) {
  cookies.set(ADMIN_COOKIE, createSessionToken(username), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: import.meta.env.PROD,
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
}

export function clearAdminCookie(cookies: AstroCookies) {
  cookies.delete(ADMIN_COOKIE, { path: "/" });
}

/** Read + verify the cookie. Returns the username, or null if signed-out / expired. */
export function getAdminUser(cookies: AstroCookies): string | null {
  const token = cookies.get(ADMIN_COOKIE)?.value;
  const payload = verifySessionToken(token);
  return payload?.u ?? null;
}

/** Constant-time check of submitted credentials against env values. */
export function checkCredentials(username: string, password: string): boolean {
  const expectedUser = getEnv("ADMIN_USERNAME") ?? "";
  const expectedPass = getEnv("ADMIN_PASSWORD") ?? "";
  if (!expectedUser || !expectedPass) return false;
  const a =
    safeEq(username, expectedUser) ||
    safeEq(username.toLowerCase(), expectedUser.toLowerCase());
  const b = safeEq(password, expectedPass);
  return a && b;
}
