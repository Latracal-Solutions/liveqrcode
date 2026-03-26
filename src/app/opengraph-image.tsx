import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Live QR Code - Free AI QR Code Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          backgroundImage: "linear-gradient(to bottom right, #fafafa, #f4f4f5)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                backgroundColor: "#18181b",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              QR
            </div>
            <span
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#18181b",
                letterSpacing: "-0.03em",
              }}
            >
              Live QR Code
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#18181b",
              letterSpacing: "-0.02em",
            }}
          >
            Free AI QR Code Generator
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#71717a",
              maxWidth: 600,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            27+ types, custom patterns, gradients, logos, frames, and AI art. No sign-up required.
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 8,
            }}
          >
            {["PNG", "SVG", "JPEG", "WebP"].map((fmt) => (
              <div
                key={fmt}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#18181b",
                  color: "white",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {fmt}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
