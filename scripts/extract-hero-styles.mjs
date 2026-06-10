import fs from "fs";

const h = fs.readFileSync("invisilign.html", "utf8");

// Extract all comp-mawiea0* style rules
const heroComps = [...new Set([...h.matchAll(/#comp-mawiea0[a-z0-9]+/gi)].map((m) => m[0]))];
console.log("Hero components:", heroComps.length);

for (const comp of heroComps) {
  const re = new RegExp(`${comp.replace("#", "\\#")}\\{[^}]+\\}`, "gi");
  const rules = [...h.matchAll(re)];
  for (const rule of rules) {
    const text = rule[0];
    if (
      text.includes("--bg:") ||
      text.includes("border-radius") ||
      text.includes("grid-area") ||
      text.includes("width:") ||
      text.includes("background")
    ) {
      console.log("\n" + text.slice(0, 500));
    }
  }
}

// Extract color variables
const colorVars = [...h.matchAll(/--color_\d+:[^;]+/g)].slice(0, 40);
console.log("\n=== COLOR VARS ===");
colorVars.forEach((m) => console.log(m[0]));

// Find hero mosaic container grid
const mosaicMatch = h.match(/#comp-mawiea0h2[^}]{0,800}/);
console.log("\n=== MOSAIC CONTAINER ===");
console.log(mosaicMatch?.[0]?.slice(0, 800));
