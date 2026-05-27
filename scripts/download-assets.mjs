// Downloads krest.dental assets (images + favicon) into public/.
// Run with: node scripts/download-assets.mjs
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";

const PUBLIC_ROOT = "public";
const IMAGES_DIR = join(PUBLIC_ROOT, "images");
const SEO_DIR = join(PUBLIC_ROOT, "seo");

/** [filename, source URL] tuples. We use friendly local names. */
const downloads = [
  // Hero / brand assets
  ["images/hero/design-02.png", "https://static.wixstatic.com/media/494201_56e3ddd3638d4be4bcc0bf92e5b273be~mv2.png/v1/fill/w_502,h_906,al_c,lg_1,q_85,enc_avif,quality_auto/design-02.png"],
  ["images/hero/dr-suneeta-portrait.jpg", "https://static.wixstatic.com/media/9356bd_f7a5ae19e3fd434a91f0a2b74267fe2e~mv2.jpg/v1/crop/x_128,y_1060,w_3872,h_4335/fill/w_856,h_958,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08658.jpg"],
  ["images/dr-suneeta/dsc08627.jpg", "https://static.wixstatic.com/media/9356bd_b6d3a85e9ee043598434f6be969522b9~mv2.jpg/v1/fill/w_1100,h_1040,fp_0.50_0.43,q_90,usm_0.66_1.00_0.01/DSC08627.jpg"],

  // Our Services page
  ["images/our-services/general-dentistry.png", "https://static.wixstatic.com/media/494201_6ce2a400654641178a6942d5fa5ee299~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dentist-chair.png"],
  ["images/our-services/cosmetic-dentistry.png", "https://static.wixstatic.com/media/494201_b097360a8fe440878fba0502aa394dca~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/skincare.png"],
  ["images/our-services/restorative-dentistry.png", "https://static.wixstatic.com/media/494201_44b7ead0a8684c2ab9603202fd30597a~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/toothbrushing.png"],
  ["images/our-services/emergency-care.png", "https://static.wixstatic.com/media/494201_6856c53c786c42758323cecdc9eda624~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/toothache.png"],
  ["images/our-services/appointment-cta.jpg", "https://static.wixstatic.com/media/9356bd_8785d8ca43c44a45bc898bb16b558057~mv2.jpg/v1/fill/w_1400,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08466.jpg"],
  ["images/hero/dr-suneeta-signature.png", "https://static.wixstatic.com/media/2139b1_3bdd8c7e324e45d8b688c7dce334524d~mv2.png/v1/crop/x_106,y_519,w_1351,h_524/fill/w_422,h_164,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr%20Suneeta.png"],

  // Service card illustrations
  ["images/services/implants.png", "https://static.wixstatic.com/media/494201_a371ea3a76724a40b5ee69034edb4c95~mv2.png/v1/fill/w_282,h_452,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png"],
  ["images/services/invisalign.png", "https://static.wixstatic.com/media/494201_15aaf31962cd4cf2831f3424ab15e532~mv2.png/v1/fill/w_282,h_452,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png"],
  ["images/services/aesthetic.png", "https://static.wixstatic.com/media/494201_4a0c943e32314751979475bcd8ac7167~mv2.png/v1/fill/w_282,h_452,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png"],
  ["images/services/comprehensive.png", "https://static.wixstatic.com/media/494201_15af7570613b4e1cb7d0a8c85acda760~mv2.png/v1/fill/w_452,h_452,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png"],

  // Comfort/Care gallery (large clinic photos)
  ["images/gallery/clinic-01.jpg", "https://static.wixstatic.com/media/9356bd_c83eb1e0bb504db9a1c093aa7dad23c4~mv2.jpg/v1/fit/w_1940,h_1294,q_90,enc_avif,quality_auto/9356bd_c83eb1e0bb504db9a1c093aa7dad23c4~mv2.jpg"],
  ["images/gallery/clinic-02.jpg", "https://static.wixstatic.com/media/9356bd_c142aa91024743ff9b780c6c7e2894bc~mv2.jpg/v1/fit/w_836,h_1294,q_90,enc_avif,quality_auto/9356bd_c142aa91024743ff9b780c6c7e2894bc~mv2.jpg"],
  ["images/gallery/clinic-03.jpg", "https://static.wixstatic.com/media/9356bd_8785d8ca43c44a45bc898bb16b558057~mv2.jpg/v1/fit/w_1940,h_1294,q_90,enc_avif,quality_auto/9356bd_8785d8ca43c44a45bc898bb16b558057~mv2.jpg"],
  ["images/gallery/clinic-04.jpg", "https://static.wixstatic.com/media/9356bd_a7c850e24cdb41879ac399e3e200cec1~mv2.jpg/v1/fit/w_1940,h_1294,q_90,enc_avif,quality_auto/9356bd_a7c850e24cdb41879ac399e3e200cec1~mv2.jpg"],
  ["images/gallery/clinic-05.jpg", "https://static.wixstatic.com/media/9356bd_0ac2c8d86d9f449abc51c2a1992111c4~mv2.jpg/v1/fit/w_1940,h_1294,q_90,enc_avif,quality_auto/9356bd_0ac2c8d86d9f449abc51c2a1992111c4~mv2.jpg"],
  ["images/gallery/clinic-06.jpg", "https://static.wixstatic.com/media/9356bd_d6994b373bf84187b346528c3b1aaf6b~mv2.jpg/v1/fit/w_862,h_1294,q_90,enc_avif,quality_auto/9356bd_d6994b373bf84187b346528c3b1aaf6b~mv2.jpg"],
  ["images/gallery/clinic-07.jpg", "https://static.wixstatic.com/media/9356bd_ad1ac3c9bf05413d899265cc14818208~mv2.jpg/v1/fit/w_1940,h_1294,q_90,enc_avif,quality_auto/9356bd_ad1ac3c9bf05413d899265cc14818208~mv2.jpg"],

  // Instagram strip thumbnails (12)
  ["images/instagram/post-01.jpg", "https://static.wixstatic.com/media/9356bd_b8cd1595b8e14b07847c7b34a3e40b3a~mv2.jpg/v1/fill/w_414,h_312,q_90,enc_avif,quality_auto/9356bd_b8cd1595b8e14b07847c7b34a3e40b3a~mv2.jpg"],
  ["images/instagram/post-02.jpg", "https://static.wixstatic.com/media/9356bd_391d5407527d45feb9dcefb05dee3d92~mv2.jpg/v1/fill/w_416,h_312,q_90,enc_avif,quality_auto/9356bd_391d5407527d45feb9dcefb05dee3d92~mv2.jpg"],
  ["images/instagram/post-03.jpg", "https://static.wixstatic.com/media/9356bd_6da07c05c7fe41a3b9cb03e325dd8a19~mv2.jpg/v1/fill/w_414,h_312,q_90,enc_avif,quality_auto/9356bd_6da07c05c7fe41a3b9cb03e325dd8a19~mv2.jpg"],
  ["images/instagram/post-04.jpg", "https://static.wixstatic.com/media/9356bd_59cf8cd74afe4b2288b6db7a00ea6163~mv2.jpg/v1/fill/w_416,h_312,q_90,enc_avif,quality_auto/9356bd_59cf8cd74afe4b2288b6db7a00ea6163~mv2.jpg"],
  ["images/instagram/post-05.jpg", "https://static.wixstatic.com/media/9356bd_6d6fab58285c474b953d5b14e333e332~mv2.jpg/v1/fill/w_414,h_312,q_90,enc_avif,quality_auto/9356bd_6d6fab58285c474b953d5b14e333e332~mv2.jpg"],
  ["images/instagram/post-06.jpg", "https://static.wixstatic.com/media/9356bd_05dfb227cee945c2a0ceb3ea0238eaa3~mv2.jpg/v1/fill/w_414,h_312,q_90,enc_avif,quality_auto/9356bd_05dfb227cee945c2a0ceb3ea0238eaa3~mv2.jpg"],
  ["images/instagram/post-07.jpg", "https://static.wixstatic.com/media/9356bd_be5d6c61c06747c4b7dddf1a5a3f9669~mv2.jpg/v1/fill/w_414,h_312,fp_0.34_0.38,q_90,enc_avif,quality_auto/9356bd_be5d6c61c06747c4b7dddf1a5a3f9669~mv2.jpg"],
  ["images/instagram/post-08.jpg", "https://static.wixstatic.com/media/9356bd_eab23b9e671a47c3b21cf4db3bb8c674~mv2.jpg/v1/fill/w_416,h_312,q_90,enc_avif,quality_auto/9356bd_eab23b9e671a47c3b21cf4db3bb8c674~mv2.jpg"],

  // Favicons / SEO
  ["seo/favicon-192.png", "https://static.wixstatic.com/media/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png/v1/fill/w_192,h_192,lg_1,usm_0.66_1.00_0.01/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png"],
  ["seo/favicon-32.png", "https://static.wixstatic.com/media/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png/v1/fill/w_32,h_32,lg_1,usm_0.66_1.00_0.01/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png"],
  ["seo/apple-touch-icon.png", "https://static.wixstatic.com/media/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png/v1/fill/w_180,h_180,lg_1,usm_0.66_1.00_0.01/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png"],
  ["seo/og-image.png", "https://static.wixstatic.com/media/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png/v1/fit/w_2500,h_1330,al_c/2139b1_3aca976a133d47c892175732c7f05d7b~mv2.png"],
];

async function downloadOne(filename, url) {
  const dest = join(PUBLIC_ROOT, filename);
  if (existsSync(dest)) return { filename, status: "skipped" };
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (krest-dental-clone-asset-fetcher)",
      Accept: "image/avif,image/webp,image/png,image/jpeg,*/*",
      Referer: "https://www.krest.dental/",
    },
  });
  if (!res.ok) {
    return { filename, status: "error", error: `${res.status} ${res.statusText}` };
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return { filename, status: "ok", bytes: buf.length };
}

async function runInBatches(items, batchSize, worker) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(([f, u]) => worker(f, u)));
    results.push(...batchResults);
    batchResults.forEach((r) => {
      const tag = r.status === "ok" ? "OK " : r.status === "skipped" ? "SKP" : "ERR";
      const detail = r.bytes ? `${(r.bytes / 1024).toFixed(1)}KB` : r.error || "";
      console.log(`[${tag}] ${r.filename} ${detail}`);
    });
  }
  return results;
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  await mkdir(SEO_DIR, { recursive: true });
  const results = await runInBatches(downloads, 4, downloadOne);
  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const errored = results.filter((r) => r.status === "error");
  console.log(`\nDone. ${ok} downloaded, ${skipped} skipped, ${errored.length} errored.`);
  if (errored.length) {
    console.log("Errors:");
    errored.forEach((r) => console.log(`  - ${r.filename}: ${r.error}`));
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
