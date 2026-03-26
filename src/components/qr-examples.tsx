"use client";

import { useEffect, useRef, useState } from "react";

interface ExampleCard {
  title: string;
  annotation: string;
  description: string;
  qrData: string;
  style: {
    dotType: string;
    fgColor: string;
    bgColor: string;
    gradient?: { color1: string; color2: string; type: string; rotation: number };
    cornerSquareType?: string;
    cornerDotType?: string;
  };
}

const examples: ExampleCard[] = [
  {
    title: "Classic URL QR Code",
    annotation: "Simple & Clean",
    description: "Standard black and white QR code with square dots. Best for print materials and business documents.",
    qrData: "https://www.liveqrcode.com",
    style: { dotType: "square", fgColor: "#000000", bgColor: "#ffffff" },
  },
  {
    title: "Rounded Style QR Code",
    annotation: "Modern & Friendly",
    description: "Rounded dot pattern with smooth corners. Popular for consumer-facing brands and social media.",
    qrData: "https://www.liveqrcode.com",
    style: { dotType: "rounded", fgColor: "#1a1a2e", bgColor: "#ffffff", cornerSquareType: "extra-rounded", cornerDotType: "dot" },
  },
  {
    title: "Gradient QR Code",
    annotation: "Vibrant & Eye-catching",
    description: "Purple-to-pink gradient with elegant dot pattern. Makes your QR code a visual brand asset.",
    qrData: "https://www.liveqrcode.com",
    style: {
      dotType: "classy-rounded", fgColor: "#6d28d9", bgColor: "#ffffff",
      gradient: { color1: "#6d28d9", color2: "#db2777", type: "linear", rotation: 135 },
      cornerSquareType: "extra-rounded", cornerDotType: "dot",
    },
  },
  {
    title: "Dot Pattern QR Code",
    annotation: "Artistic & Unique",
    description: "Circular dots with ocean blue gradient. Perfect for creative industries and event marketing.",
    qrData: "https://www.liveqrcode.com",
    style: {
      dotType: "dots", fgColor: "#0891b2", bgColor: "#ffffff",
      gradient: { color1: "#0891b2", color2: "#6366f1", type: "radial", rotation: 0 },
      cornerSquareType: "dot", cornerDotType: "dot",
    },
  },
];

function QRExampleCard({ example }: { example: ExampleCard }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (rendered || !containerRef.current) return;
    import("qr-code-styling").then(({ default: QRCodeStyling }) => {
      if (!containerRef.current) return;
      const dotsColor = example.style.gradient
        ? {
            gradient: {
              type: example.style.gradient.type,
              rotation: (example.style.gradient.rotation / 180) * Math.PI,
              colorStops: [
                { offset: 0, color: example.style.gradient.color1 },
                { offset: 1, color: example.style.gradient.color2 },
              ],
            },
          }
        : { color: example.style.fgColor };

      const opts: any = {
        width: 180,
        height: 180,
        data: example.qrData,
        type: "canvas",
        margin: 8,
        dotsOptions: { type: example.style.dotType, ...dotsColor },
        cornersSquareOptions: { type: example.style.cornerSquareType || "square", color: example.style.gradient?.color1 || example.style.fgColor },
        cornersDotOptions: { type: example.style.cornerDotType || "square", color: example.style.gradient?.color1 || example.style.fgColor },
        backgroundOptions: { color: example.style.bgColor },
        qrOptions: { errorCorrectionLevel: "M" },
      };
      const qr = new QRCodeStyling(opts);
      containerRef.current.innerHTML = "";
      qr.append(containerRef.current);
      setRendered(true);
    });
  }, [example, rendered]);

  return (
    <div className="flex flex-col items-center p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lg transition-shadow">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
        {example.annotation}
      </span>
      <div ref={containerRef} className="mb-4 [&>canvas]:rounded-xl" />
      <h3 className="font-bold text-sm text-center mb-1">{example.title}</h3>
      <p className="text-[11px] text-zinc-500 text-center leading-relaxed">{example.description}</p>
    </div>
  );
}

export function QRExamples() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
          QR Code Design Examples
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          See what you can create with Live QR Code. All styles below are 100% free.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {examples.map((ex) => (
          <QRExampleCard key={ex.title} example={ex} />
        ))}
      </div>
    </section>
  );
}
