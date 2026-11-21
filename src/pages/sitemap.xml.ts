import type { APIRoute } from "astro";
import { BLOG_POSTS } from "@/lib/krest-content";

export const prerender = true;

const site = "https://www.krest.dental";
const staticPages = [
  "",
  "/about-us",
  "/drsuneeta",
  "/our-services",
  "/implants",
  "/invisilign",
  "/dental-implants-vizag",
  "/invisalign-treatment-vizag",
  "/blogs",
  "/contact",
  "/privacy-policy",
];

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = () => {
  const staticUrls = staticPages.map(
    (path) => `<url><loc>${escapeXml(`${site}${path || "/"}`)}</loc></url>`,
  );
  const blogUrls = BLOG_POSTS.map(
    (post) =>
      `<url><loc>${escapeXml(`${site}/blogs/${post.slug}`)}</loc><lastmod>${post.date}</lastmod></url>`,
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
      ...staticUrls,
      ...blogUrls,
    ].join("\n")}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
