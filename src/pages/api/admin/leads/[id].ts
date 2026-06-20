import type { APIRoute } from "astro";
import { getAdminUser } from "@/lib/admin-auth";
import { deleteLead } from "@/lib/leads-store";

export const prerender = false;

export const DELETE: APIRoute = async ({ cookies, params }) => {
  if (!getAdminUser(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }
  const id = params.id;
  if (!id) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid id" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
  try {
    const deleted = await deleteLead(id);
    return new Response(
      JSON.stringify({ ok: true, deleted: deleted ? 1 : 0 }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  } catch (err) {
    console.error("[/api/admin/leads/:id] delete failed", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
