import { ImageResponse } from "next/og";

export const alt = "GrowVibe | Website Development, AI Solutions & CRM Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B0C10",
          backgroundImage:
            "radial-gradient(circle at 6% 30%, rgba(41,142,95,0.35), transparent 40%), radial-gradient(circle at 100% 80%, rgba(110,231,183,0.12), transparent 35%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 14,
              backgroundColor: "#ffffff",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#0B0C10",
            }}
          >
            G
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#ffffff" }}>
            Grow<span style={{ color: "#34D399" }}>Vibe</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            maxWidth: 900,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          Premium Website Development, AI Solutions &amp; Custom CRM Systems
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Website Development • AI Solutions • Digital Growth
        </div>
      </div>
    ),
    { ...size }
  );
}
