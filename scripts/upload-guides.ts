/**
 * Uploads the rendered PDFs from private/pdfs to the private Vercel Blob store, under guides/<file name>.
 * Run "npm run build:guides" first. Needs BLOB_READ_WRITE_TOKEN (in .env.local, or `vercel env pull .env.local`).
 *
 *   npm run upload:guides
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";
import { products } from "../src/data/products";
import { locales } from "../src/i18n/config";
import { GUIDE_BLOB_PREFIX } from "../src/lib/guide-storage";

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not set. Create a private Blob store in Vercel and pull the env vars first.");
  }
  for (const product of products) {
    for (const locale of locales) {
      const fileName = product.file[locale];
      const data = await readFile(path.join(process.cwd(), "private", "pdfs", fileName)).catch(() => null);
      if (!data) throw new Error(`private/pdfs/${fileName} is missing. Run "npm run build:guides" first.`);
      const blob = await put(`${GUIDE_BLOB_PREFIX}${fileName}`, data, {
        access: "private",
        contentType: "application/pdf",
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      console.log(`✓ ${blob.pathname}  ${(data.length / 1024).toFixed(0)} kB`);
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
