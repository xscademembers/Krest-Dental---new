import type { APIRoute } from "astro";
import { LEADS_COLLECTION, getCollection, type LeadDoc } from "@/lib/mongodb";

export const prerender = false;

const MAX_FIELD = 4000;

function clamp(v: unknown): string {
  return typeof v === "string" ? v.slice(0, MAX_FIELD).trim() : "";
}

async function readPayload(request: Request): Promise<Record<string, string>> {
  const ctype = request.headers.get("content-type") || "";
  if (ctype.includes("application/json")) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(body)) out[k] = clamp(v);
    return out;
  }
  const fd = await request.formData().catch(() => null);
  if (!fd) return {};
  const out: Record<string, string> = {};
  for (const [k, v] of fd.entries()) out[k] = clamp(v);
  return out;
}

/**
 * Public browser origin (scheme + host) for post-submit redirects.
 * Uses proxy headers on Vercel so we never send users to a stale PUBLIC_SITE_URL
 * baked into prerendered HTML (e.g. old domain while testing on *.vercel.app).
 */
function getPublicOrigin(request: Request): string {
  const host = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const proto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  if (host && proto) return `${proto}://${host}`;
  return new URL(request.url).origin;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let data: Record<string, string>;
  try {
    data = await readPayload(request);
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid payload" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (data.botcheck) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  const name = data.name;
  const phone = data.phone;
  const email = data.email;
  if (!name || !phone || !email) {
    return new Response(
      JSON.stringify({ ok: false, error: "Name, phone and email are required." }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  const doc: LeadDoc = {
    name,
    phone,
    email,
    interest: data.interest || undefined,
    message: data.message || undefined,
    utm: {
      source: data.utm_source || undefined,
      medium: data.utm_medium || undefined,
      campaign: data.utm_campaign || undefined,
      term: data.utm_term || undefined,
      content: data.utm_content || undefined,
      gclid: data.gclid || undefined,
      fbclid: data.fbclid || undefined,
    },
    meta: {
      ip:
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        clientAddress ||
        undefined,
      userAgent: request.headers.get("user-agent") || undefined,
      referer: request.headers.get("referer") || undefined,
    },
    createdAt: new Date(),
  };

  try {
    const col = await getCollection<LeadDoc>(LEADS_COLLECTION);
    await col.insertOne(doc);
  } catch (err) {
    console.error("[/api/leads] Mongo insert failed:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Could not save your message. Please try again." }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }

  const wantsJson = (request.headers.get("accept") || "").includes("application/json");
  if (wantsJson) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  // Always thank-you on the same host the user actually used (ignore client "redirect" — it was
  // often baked from PUBLIC_SITE_URL at prerender time and points at an old / wrong domain).
  const successUrl = `${getPublicOrigin(request)}/contact?success=1`;
  return new Response(null, { status: 303, headers: { Location: successUrl } });
};

export const GET: APIRoute = () =>
  new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
