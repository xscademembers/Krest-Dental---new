import fs from "fs";

const h = fs.readFileSync("invisilign.html", "utf8");
const idx = h.indexOf("comp-mawiea0i2");
console.log("idx", idx);
const chunk = h.slice(idx, idx + 12000);
const ids = [...chunk.matchAll(/id="(comp-mawie[a-z0-9]+)"/g)].map((m) => m[1]);
console.log([...new Set(ids)].join("\n"));

// Extract styles for s14 and children
for (const id of [...new Set(ids)]) {
  const re = new RegExp(`#${id}\\{[^}]+\\}`, "g");
  const rules = [...h.matchAll(re)];
  const bgRule = rules.find((r) => r[0].includes("--bg:") || r[0].includes("width:"));
  if (bgRule) console.log("\n" + bgRule[0].slice(0, 350));
}
