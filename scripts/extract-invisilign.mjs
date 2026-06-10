import fs from "fs";

const h = fs.readFileSync("invisilign.html", "utf8");

const uris = [...new Set([...h.matchAll(/2139b1_[a-f0-9]+~mv2\.(jpg|jpeg|png|webp)/gi)].map((m) => m[0]))];
console.log("=== IMAGE URIS ===");
uris.forEach((u) => console.log(u));

const infos = [...h.matchAll(/data-image-info="(\{[^"]+\})"/g)].map((m) => {
  try {
    return JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  } catch {
    return null;
  }
}).filter(Boolean);

console.log("\n=== DATA IMAGE INFO ===");
infos.forEach((info, i) => {
  const d = info.imageData;
  if (d?.uri) console.log(`${i}: ${d.uri} (${d.width}x${d.height}) name=${d.name || ""}`);
});

// Extract inline styles with background-color near hero comp ids
const compIds = ["comp-mawiea0j14", "comp-mawiea0l5", "comp-mawiea0i2", "comp-mawiea0h2"];
for (const id of compIds) {
  const re = new RegExp(`id="${id}"[^>]*style="([^"]*)"`, "i");
  const m = h.match(re);
  if (m) console.log(`\n${id} style:`, m[1].slice(0, 200));
}

// Find style blocks for comp-mawie
const styleBlocks = [...h.matchAll(/#comp-mawie[a-z0-9]+[^{]*\{[^}]+\}/gi)].slice(0, 30);
console.log("\n=== STYLE BLOCKS (first 30) ===");
styleBlocks.forEach((m) => console.log(m[0].slice(0, 300)));
