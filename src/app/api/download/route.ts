import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getProduct } from "@/data/products";
import { verifyDownloadToken } from "@/lib/download";

// Serves a purchased PDF from private/pdfs. Only works with a valid signed token.
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  const grant = verifyDownloadToken(token);
  const product = grant && getProduct(grant.productId);
  if (!grant || !product) {
    return NextResponse.json({ error: "This download link is invalid or has expired" }, { status: 403 });
  }

  const fileName = product.file[grant.locale];
  try {
    const file = await readFile(path.join(process.cwd(), "private", "pdfs", fileName));
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "This guide has not been uploaded yet" }, { status: 404 });
  }
}
