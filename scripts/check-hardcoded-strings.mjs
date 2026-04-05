import fs from "node:fs";
import path from "node:path";

const SECTIONS_ROOT = path.resolve("src/sections");
const FILE_EXTENSIONS = new Set([".tsx", ".ts"]);
const violations = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(entryPath);
      continue;
    }

    if (!FILE_EXTENSIONS.has(path.extname(entry.name))) continue;

    const content = fs.readFileSync(entryPath, "utf8");

    const jsxTextMatches = [...content.matchAll(/>([^<{\n]*[A-Za-z][^<{\n]*)</g)];
    for (const match of jsxTextMatches) {
      const value = match[1].trim();
      if (!value) continue;
      if (/^(use client|http|https|mailto:)/i.test(value)) continue;

      const line = content.slice(0, match.index).split("\n").length;
      violations.push({ file: entryPath, line, value });
    }
  }
}

if (fs.existsSync(SECTIONS_ROOT)) {
  walk(SECTIONS_ROOT);
}

if (violations.length === 0) {
  console.log("No hardcoded section JSX text found.");
  process.exit(0);
}

console.error("Hardcoded section strings detected:");
for (const v of violations) {
  console.error(`- ${path.relative(process.cwd(), v.file)}:${v.line} -> ${v.value}`);
}
process.exit(1);
