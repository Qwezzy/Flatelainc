import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Flatela";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const png = await readFile(join(process.cwd(), "public/flatela-wordmark-primary-leaf-1024.png"));
  const src = `data:image/png;base64,${png.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F3F0E6" }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={src} width={760} />
        <div style={{ fontSize: 30, marginTop: 36, color: "#2B2118" }}>FLATELA (PTY) LTD · 2026/291183/07</div>
      </div>
    ),
    size,
  );
}
