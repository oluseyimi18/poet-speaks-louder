import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview picture shown when the site is shared on WhatsApp, Facebook, X, LinkedIn and so on. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "70px 80px 60px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 6, color: "#C93300" }}>
          A FAITH-BASED NON-PROFIT
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 700, color: "#262322", lineHeight: 1 }}>
            Poets Speak
          </div>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 700, color: "#F93F06", lineHeight: 1.05 }}>
            Louder
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#675F59", marginTop: 24 }}>{site.tagline}</div>
        </div>
        <div
          style={{
            display: "flex",
            height: 18,
            width: "100%",
            background: "linear-gradient(90deg, #FC0F02, #F93F06, #F76C0A, #FF9F1C)",
          }}
        />
      </div>
    ),
    size,
  );
}
