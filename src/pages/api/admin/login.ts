import type { APIRoute } from "astro";
import { checkCredentials, setAdminCookie } from "@/lib/admin-auth";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const ctype = request.headers.get("content-type") || "";
  let username = "";
  let password = "";

  if (ctype.includes("application/json")) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    username = String(body.username ?? "").trim();
    password = String(body.password ?? "");
  } else {
    const fd = await request.formData().catch(() => null);
    username = String(fd?.get("username") ?? "").trim();
    password = String(fd?.get("password") ?? "");
  }

  if (!checkCredentials(username, password)) {
    if (ctype.includes("application/json")) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid credentials" }), {
        status: 401,
        headers: { "content-type": "application/json" },
      });
    }
    return redirect("/admin?error=1", 303);
  }

  setAdminCookie(cookies, username);
  if (ctype.includes("application/json")) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
  return redirect("/admin/dashboard", 303);
};
