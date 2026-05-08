import type { APIRoute } from "astro";
import { ObjectId } from "mongodb";
import { getAdminUser } from "@/lib/admin-auth";
import { LEADS_COLLECTION, getCollection, type LeadDoc } from "@/lib/mongodb";

export const prerender = false;

export const DELETE: APIRoute = async ({ cookies, params }) => {
  if (!getAdminUser(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }
  const id = params.id;
  if (!id || !ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid id" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
  try {
    const col = await getCollection<LeadDoc>(LEADS_COLLECTION);
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return new Response(
      JSON.stringify({ ok: true, deleted: result.deletedCount ?? 0 }),
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
