import { cpSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

if (!existsSync(indexPath)) {
  console.warn(`[copy-404] Skipped: ${indexPath} not found.`);
  process.exit(0);
}

cpSync(indexPath, fallbackPath);
console.log("[copy-404] Created dist/404.html for GitHub Pages fallback.");
