import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function stripTypes(content) {
  let out = content;
  // Remove import type {...} lines entirely
  out = out.replace(
    /import\s+type\s+\{[^}]*\}\s+from\s+['"][^'"]+['"];?\n?/g,
    ""
  );
  // Remove `, type Something` or `type Something,` within import braces
  out = out.replace(/,\s*type\s+\w+\s*/g, "");
  out = out.replace(/type\s+\w+\s*,\s*/g, "");
  // Remove generic on React.forwardRef<...>( in converted JSX
  out = out.replace(/React\.forwardRef<[^>]*>\(/gs, "React.forwardRef(");
  // Remove export interface blocks
  out = out.replace(/export\s+interface[\s\S]*?\n\}/g, "");
  // Remove standalone interface blocks
  out = out.replace(/interface\s+\w+[\s\S]*?\n\}/g, "");
  // Remove simple type aliases (best effort)
  out = out.replace(/^type\s+\w+\s*=\s*[\s\S]*?;\s*$/gm, "");
  // Remove `as const`
  out = out.replace(/\s+as\s+const/g, "");
  // Remove obvious TS generics in React.useState<T>(...)
  out = out.replace(/useState<[^>]+>\(/g, "useState(");
  // Remove non-null assertions ! on identifiers (limited)
  out = out.replace(/(document\.getElementById\([^)]*\))!/g, "$1");
  // Remove React.ElementRef<...>, ComponentPropsWithoutRef<...> in type positions (just strings left from previous replace)
  out = out.replace(/React\.ElementRef<[^>]*>/g, "any");
  out = out.replace(/React\.ComponentPropsWithoutRef<[^>]*>/g, "any");
  out = out.replace(/React\.ComponentProps<[^>]*>/g, "any");
  // Remove HTML*Element references in generics left over
  out = out.replace(/HTML[A-Za-z]+Element/g, "any");
  // Remove satisfies (rare in src)
  out = out.replace(/\s+satisfies\s+[A-Za-z0-9_.]+/g, "");
  return out;
}

function convertFile(filePath) {
  const ext = path.extname(filePath);
  if (ext !== ".ts" && ext !== ".tsx") return;
  const isTSX = ext === ".tsx";
  const newExt = isTSX ? ".jsx" : ".js";
  const newPath = filePath.slice(0, -ext.length) + newExt;

  const content = fs.readFileSync(filePath, "utf8");
  const stripped = stripTypes(content);

  // If target already exists (manually created), just delete the TS file
  if (fs.existsSync(newPath)) {
    fs.unlinkSync(filePath);
    return;
  }

  fs.writeFileSync(newPath, stripped, "utf8");
  fs.unlinkSync(filePath);
}

function main() {
  const files = walk(srcDir).filter(
    (f) => f.endsWith(".ts") || f.endsWith(".tsx")
  );
  for (const file of files) {
    convertFile(file);
  }
  // Remove vite-env.d.ts if present
  const viteEnv = path.join(srcDir, "vite-env.d.ts");
  if (fs.existsSync(viteEnv)) fs.unlinkSync(viteEnv);
}

main();
