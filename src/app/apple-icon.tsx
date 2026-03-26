import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          backgroundColor: "#18181b",
          borderRadius: 36,
          display: "flex",
          position: "relative",
        }}
      >
        {/* Top-left finder */}
        <div style={{ position: "absolute", left: 22, top: 22, width: 44, height: 44, backgroundColor: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 22, height: 22, backgroundColor: "#18181b", borderRadius: 5 }} />
        </div>
        {/* Top-right finder */}
        <div style={{ position: "absolute", right: 22, top: 22, width: 44, height: 44, backgroundColor: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 22, height: 22, backgroundColor: "#18181b", borderRadius: 5 }} />
        </div>
        {/* Bottom-left finder */}
        <div style={{ position: "absolute", left: 22, bottom: 22, width: 44, height: 44, backgroundColor: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 22, height: 22, backgroundColor: "#18181b", borderRadius: 5 }} />
        </div>
        {/* Center dot */}
        <div style={{ position: "absolute", left: 78, top: 78, width: 24, height: 24, backgroundColor: "white", borderRadius: 6 }} />
        {/* Data dots */}
        <div style={{ position: "absolute", left: 80, top: 28, width: 18, height: 18, backgroundColor: "white", borderRadius: 5, opacity: 0.9 }} />
        <div style={{ position: "absolute", left: 28, top: 80, width: 18, height: 18, backgroundColor: "white", borderRadius: 5, opacity: 0.9 }} />
        <div style={{ position: "absolute", left: 80, top: 134, width: 18, height: 18, backgroundColor: "white", borderRadius: 5, opacity: 0.9 }} />
        <div style={{ position: "absolute", left: 134, top: 80, width: 18, height: 18, backgroundColor: "white", borderRadius: 5, opacity: 0.7 }} />
        <div style={{ position: "absolute", left: 114, top: 114, width: 18, height: 18, backgroundColor: "white", borderRadius: 5, opacity: 0.5 }} />
        <div style={{ position: "absolute", left: 134, top: 134, width: 24, height: 24, backgroundColor: "white", borderRadius: 6, opacity: 0.4 }} />
      </div>
    ),
    { ...size }
  );
}
