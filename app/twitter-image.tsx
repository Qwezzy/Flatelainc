import { ImageResponse } from "next/og";

export const alt = "Flatela";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F3F0E6", color: "#533E2B" }}>
        <div style={{ fontSize: 140, fontFamily: "serif", letterSpacing: 3 }}>Flatela</div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#2B2118" }}>FLATELA (PTY) LTD · 2026/291183/07</div>
      </div>
    ),
    size,
  );
}
