import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, backgroundColor: "white", borderRadius: 6, display: "flex", position: "relative" }}>
        {/* Top-left finder */}
        <div style={{ position: "absolute", left: 1, top: 1, width: 12, height: 12, border: "2.5px solid #18181b", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 5, height: 5, backgroundColor: "#18181b", borderRadius: 1.2 }} />
        </div>
        {/* Top-right finder */}
        <div style={{ position: "absolute", right: 1, top: 1, width: 12, height: 12, border: "2.5px solid #18181b", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 5, height: 5, backgroundColor: "#18181b", borderRadius: 1.2 }} />
        </div>
        {/* Bottom-left finder */}
        <div style={{ position: "absolute", left: 1, bottom: 1, width: 12, height: 12, border: "2.5px solid #18181b", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 5, height: 5, backgroundColor: "#18181b", borderRadius: 1.2 }} />
        </div>
        {/* Green accent dot bottom-right */}
        <div style={{ position: "absolute", right: 3, bottom: 3, width: 8, height: 8, backgroundColor: "#10b981", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 3.5, height: 3.5, backgroundColor: "white", borderRadius: 4 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
