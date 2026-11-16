import { readFile } from "node:fs/promises";
import path from "node:path";
import { get } from "@vercel/blob";

// Where the paid PDFs live.
// - Production (Vercel): a private Vercel Blob store. The PDFs are git-ignored, so they are not part of the
//   deployment; "npm run upload:guides" puts them in the store under guides/<file name>.
// - Local development: private/pdfs, filled by "npm run build:guides".
// Blob is used as soon as BLOB_READ_WRITE_TOKEN is set (Vercel sets it when the store is connected to the project).

export const GUIDE_BLOB_PREFIX = "guides/";

export function guideStorage(): "blob" | "local" {
  return process.env.BLOB_READ_WRITE_TOKEN ? "blob" : "local";
}

/** Returns the PDF as a response body, or null when the file does not exist. */
export async function readGuide(fileName: string): Promise<BodyInit | null> {
  if (guideStorage() === "blob") {
    const result = await get(`${GUIDE_BLOB_PREFIX}${fileName}`, { access: "private", useCache: false });
    return result?.statusCode === 200 ? result.stream : null;
  }
  try {
    return new Uint8Array(await readFile(path.join(process.cwd(), "private", "pdfs", fileName)));
  } catch {
    return null;
  }
}
