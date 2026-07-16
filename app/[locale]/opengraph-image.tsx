import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WebAgency — Développeur Web Freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.4) 0%, rgba(37,99,235,0.15) 40%, transparent 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "white",
          }}
        >
          WebAgency
          <span style={{ color: "#A78BFA" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#D4D4D9",
            textAlign: "center",
          }}
        >
          Sites Vitrines · E-commerce · Applications Web
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: 20,
            color: "#93B7FD",
          }}
        >
          Développeur Web Freelance
        </div>
      </div>
    ),
    { ...size }
  );
}