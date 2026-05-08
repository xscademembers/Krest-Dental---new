import type { APIRoute } from "astro";
import { clearAdminCookie } from "@/lib/admin-auth";

export const prerender = false;

const handler: APIRoute = ({ cookies, redirect }) => {
  clearAdminCookie(cookies);
  return redirect("/admin", 303);
};

export const GET: APIRoute = handler;
export const POST: APIRoute = handler;
