"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  QR_TYPES, DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES,
  STYLE_PRESETS, CATEGORIES, FRAME_STYLES, FRAME_TEXT_PRESETS,
  getScannabilityScore,
  type StylePreset,
} from "@/src/lib/qr-config";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HexColorPicker } from "react-colorful";
import { motion, AnimatePresence } from "motion/react";
import {
  Download, ChevronDown, Palette, Image as ImageIcon, Settings2,
  Sparkles, Copy, Loader2, Wand2, Check, Grid3X3, Upload,
  Frame, RotateCcw, ShieldCheck, AlertTriangle, Code2, ImagePlus, Share2,
} from "lucide-react";

// ============================================================
// HOOKS
// ============================================================

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// ============================================================
// COLLAPSIBLE SECTION
// ============================================================

function Section({
  title, icon: Icon, defaultOpen = false, badge, children,
}: {
  title: string;
  icon: React.ElementType;
  defaultOpen?: boolean;
  badge?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 px-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <span className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-zinc-400" />
          {title}
          {badge && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 font-semibold">{badge}</span>}
        </span>
        <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// DOT STYLE PREVIEW
// ============================================================

function DotPreview({ type }: { type: string }) {
  const cls = (() => {
    switch (type) {
      case "square": return "rounded-none";
      case "rounded": return "rounded-[2px]";
      case "dots": return "rounded-full";
      case "extra-rounded": return "rounded-[3px]";
      case "classy": return "rounded-none rotate-45 scale-75";
      case "classy-rounded": return "rounded-[2px] rotate-45 scale-75";
      default: return "";
    }
  })();
  return (
    <div className="grid grid-cols-3 gap-[2px] w-7 h-7 mx-auto">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className={`bg-current ${cls}`} />
      ))}
    </div>
  );
}

// ============================================================
// COLOR PICKER
// ============================================================

function ColorPick({ color, onChange, label }: { color: string; onChange: (c: string) => void; label: string }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-zinc-500">{label}</Label>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger
            className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm cursor-pointer shrink-0"
            style={{ backgroundColor: color }}
          />
          <PopoverContent className="w-auto p-3">
            <HexColorPicker color={color} onChange={onChange} />
          </PopoverContent>
        </Popover>
        <Input value={color} onChange={(e) => onChange(e.target.value)} className="w-24 h-8 font-mono text-xs uppercase" />
      </div>
    </div>
  );
}

// ============================================================
// SCANNABILITY BAR
// ============================================================

function ScannabilityBar({ score, label, color, warnings }: { score: number; label: string; color: string; warnings: string[] }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-500 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> Scannability
        </span>
        <span className="text-xs font-bold" style={{ color }}>{label} ({score}%)</span>
      </div>
      <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {warnings.length > 0 && (
        <div className="space-y-1">
          {warnings.slice(0, 2).map((w, i) => (
            <p key={i} className="text-[10px] text-amber-600 dark:text-amber-400 flex items-start gap-1">
              <AlertTriangle className="w-3 h-3 shrink-0 mt-px" />
              {w}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export function QRGenerator() {
  // -- Content State --
  const [qrType, setQrType] = useState("url");
  const [contentData, setContentData] = useState<Record<string, string>>({ url: "https://www.liveqrcode.com" });
  const [typeFilter, setTypeFilter] = useState("popular");

  // -- Style State --
  const [dotType, setDotType] = useState("rounded");
  const [cornerSquareType, setCornerSquareType] = useState("extra-rounded");
  const [cornerDotType, setCornerDotType] = useState("dot");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColor1, setGradientColor1] = useState("#000000");
  const [gradientColor2, setGradientColor2] = useState("#6d28d9");
  const [gradientType, setGradientType] = useState<"linear" | "radial">("linear");
  const [gradientRotation, setGradientRotation] = useState(135);
  const [cornerColor, setCornerColor] = useState("");
  const [useCustomCornerColor, setUseCustomCornerColor] = useState(false);
  const [logoDataUrl, setLogoDataUrl] = useState("");
  const [logoSize, setLogoSize] = useState([0.4]);
  const [errorCorrection, setErrorCorrection] = useState("Q");
  const [margin, setMargin] = useState([8]);

  // -- Frame State --
  const [frameStyle, setFrameStyle] = useState("none");
  const [frameText, setFrameText] = useState("Scan Me");

  // -- Download State --
  const [downloadFormat, setDownloadFormat] = useState("png");
  const [downloadSize, setDownloadSize] = useState(1024);
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);

  // -- AI State --
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiBgImage, setAiBgImage] = useState<string | null>(null);

  // -- Background Image State --
  const [bgImageUrl, setBgImageUrl] = useState("");

  // -- Refs --
  const qrContainerRef = useRef<HTMLDivElement>(null);
  const qrInstanceRef = useRef<any>(null);

  // -- Derived --
  const currentType = useMemo(() => QR_TYPES.find((t) => t.id === qrType)!, [qrType]);
  const encodedData = useMemo(() => currentType.encode(contentData), [currentType, contentData]);
  const debouncedData = useDebounce(encodedData, 250);
  const currentFrame = useMemo(() => FRAME_STYLES.find((f) => f.id === frameStyle)!, [frameStyle]);

  const filteredTypes = useMemo(
    () => typeFilter === "all" ? QR_TYPES : QR_TYPES.filter((t) => t.category === typeFilter),
    [typeFilter]
  );

  const scannability = useMemo(() => getScannabilityScore({
    fgColor,
    bgColor,
    errorCorrection,
    dataLength: debouncedData.length,
    hasLogo: !!logoDataUrl,
    hasAiBg: !!aiBgImage || !!bgImageUrl,
    useGradient,
    gradientColor1,
    gradientColor2,
  }), [fgColor, bgColor, errorCorrection, debouncedData, logoDataUrl, aiBgImage, bgImageUrl, useGradient, gradientColor1, gradientColor2]);

  // qrOptions is now split into qrBaseOptions + qrFullOptions below

  // -- QR Code Rendering --
  const QRClassRef = useRef<any>(null);
  const [qrModuleReady, setQrModuleReady] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const mod = await import("qr-code-styling");
      if (active) {
        QRClassRef.current = mod.default;
        setQrModuleReady(true);
      }
    })();
    return () => { active = false; };
  }, []);

  // Build options WITHOUT logo for the update path (logo handled separately)
  const qrBaseOptions = useMemo(() => {
    const dotsColor = useGradient
      ? {
          gradient: {
            type: gradientType,
            rotation: (gradientRotation / 180) * Math.PI,
            colorStops: [
              { offset: 0, color: gradientColor1 },
              { offset: 1, color: gradientColor2 },
            ],
          },
        }
      : { color: fgColor };
    const resolvedCornerColor = useCustomCornerColor && cornerColor
      ? cornerColor
      : useGradient ? gradientColor1 : fgColor;
    return {
      width: 280,
      height: 280,
      data: debouncedData || "https://www.liveqrcode.com",
      type: "canvas" as const,
      margin: margin[0],
      dotsOptions: { type: dotType as any, ...dotsColor },
      cornersSquareOptions: { type: cornerSquareType as any, color: resolvedCornerColor },
      cornersDotOptions: { type: cornerDotType as any, color: resolvedCornerColor },
      backgroundOptions: { color: bgColor === "transparent" ? undefined : bgColor },
      qrOptions: { errorCorrectionLevel: errorCorrection as any },
    };
  }, [
    debouncedData, dotType, cornerSquareType, cornerDotType,
    fgColor, bgColor, useGradient, gradientColor1, gradientColor2,
    gradientType, gradientRotation, cornerColor, useCustomCornerColor,
    errorCorrection, margin,
  ]);

  // Full options with logo - only recalculated when logo changes
  const qrFullOptions = useMemo(() => {
    if (!logoDataUrl) return qrBaseOptions;
    return {
      ...qrBaseOptions,
      image: logoDataUrl,
      imageOptions: { hideBackgroundDots: true, imageSize: logoSize[0], margin: 8 },
    };
  }, [qrBaseOptions, logoDataUrl, logoSize]);

  // Recreate QR only when logo is toggled on/off; update() for everything else
  const prevHadLogoRef = useRef(false);

  useEffect(() => {
    const QRCodeStyling = QRClassRef.current;
    if (!QRCodeStyling || !qrContainerRef.current) return;

    const hasLogo = !!logoDataUrl;
    const logoToggled = prevHadLogoRef.current !== hasLogo;
    prevHadLogoRef.current = hasLogo;

    if (!qrInstanceRef.current || logoToggled) {
      qrContainerRef.current.innerHTML = "";
      const qr = new QRCodeStyling(qrFullOptions);
      qr.append(qrContainerRef.current);
      qrInstanceRef.current = qr;
    } else {
      qrInstanceRef.current.update(qrFullOptions);
    }
  }, [qrFullOptions, qrModuleReady]);

  // -- Handlers --
  const handleTypeChange = useCallback((typeId: string) => {
    setQrType(typeId);
    const type = QR_TYPES.find((t) => t.id === typeId);
    if (type) setContentData({ ...type.defaultData });
  }, []);

  const updateField = useCallback((key: string, value: string) => {
    setContentData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const applyPreset = useCallback((preset: StylePreset) => {
    setDotType(preset.dotType);
    setCornerSquareType(preset.cornerSquareType);
    setCornerDotType(preset.cornerDotType);
    setFgColor(preset.fgColor);
    setBgColor(preset.bgColor);
    setUseGradient(preset.useGradient);
    if (preset.gradientColor1) setGradientColor1(preset.gradientColor1);
    if (preset.gradientColor2) setGradientColor2(preset.gradientColor2);
    if (preset.gradientType) setGradientType(preset.gradientType as "linear" | "radial");
    if (preset.gradientRotation !== undefined) setGradientRotation(preset.gradientRotation);
  }, []);

  const handleReset = useCallback(() => {
    setDotType("rounded"); setCornerSquareType("extra-rounded"); setCornerDotType("dot");
    setFgColor("#000000"); setBgColor("#ffffff");
    setUseGradient(false); setGradientColor1("#000000"); setGradientColor2("#6d28d9");
    setGradientType("linear"); setGradientRotation(135);
    setCornerColor(""); setUseCustomCornerColor(false);
    setLogoDataUrl(""); setLogoSize([0.4]); setErrorCorrection("Q"); setMargin([8]);
    setFrameStyle("none"); setFrameText("Scan Me");
    setAiBgImage(null); setBgImageUrl(""); setAiPrompt("");
  }, []);

  // Compress uploaded images to avoid huge base64 strings that freeze the QR renderer
  const compressImage = useCallback((file: File, maxSize: number): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;
        if (width > maxSize || height > maxSize) {
          const ratio = Math.min(maxSize / width, maxSize / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/png", 0.85));
      };
      img.src = URL.createObjectURL(file);
    });
  }, []);

  const handleLogoUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const compressed = await compressImage(file, 200);
    setLogoDataUrl(compressed);
    if (errorCorrection !== "H" && errorCorrection !== "Q") setErrorCorrection("Q");
  }, [errorCorrection, compressImage]);

  const handleBgImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const compressed = await compressImage(file, 512);
    setBgImageUrl(compressed);
    setErrorCorrection("H");
  }, [compressImage]);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      const QRCodeStyling = QRClassRef.current;
      if (!QRCodeStyling) return;

      if (frameStyle !== "none" && frameText && downloadFormat === "png") {
        // Download with frame via canvas composition
        const qrSize = downloadSize;
        const framePad = 32;
        const textH = 48;
        const totalW = qrSize + framePad * 2;
        const totalH = qrSize + framePad * 2 + textH;
        const canvas = document.createElement("canvas");
        canvas.width = totalW;
        canvas.height = totalH;
        const ctx = canvas.getContext("2d")!;

        // Frame background
        ctx.fillStyle = currentFrame.bgColor === "transparent" ? "#ffffff" : currentFrame.bgColor;
        const r = currentFrame.borderRadius * (qrSize / 280);
        ctx.beginPath();
        ctx.roundRect(0, 0, totalW, totalH, r);
        ctx.fill();

        // Frame border
        if (currentFrame.borderWidth > 0) {
          ctx.strokeStyle = currentFrame.borderColor;
          ctx.lineWidth = currentFrame.borderWidth * 2;
          ctx.beginPath();
          ctx.roundRect(currentFrame.borderWidth, currentFrame.borderWidth, totalW - currentFrame.borderWidth * 2, totalH - currentFrame.borderWidth * 2, r);
          ctx.stroke();
        }

        // QR code
        const dlQR = new QRCodeStyling({ ...qrFullOptions, width: qrSize, height: qrSize });
        const rawData = await dlQR.getRawData("png");
        if (rawData) {
          const blob = rawData instanceof Blob ? rawData : new Blob([rawData], { type: "image/png" });
          const bmp = await createImageBitmap(blob);
          ctx.drawImage(bmp, framePad, framePad, qrSize, qrSize);
        }

        // Frame text
        if (frameText) {
          ctx.fillStyle = currentFrame.textColor;
          ctx.font = `bold ${Math.round(qrSize / 18)}px 'Geist Variable', system-ui, sans-serif`;
          ctx.textAlign = "center";
          ctx.fillText(frameText, totalW / 2, totalH - framePad / 2 - 4);
        }

        canvas.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url; a.download = `liveqrcode-${Date.now()}.png`;
          a.click(); URL.revokeObjectURL(url);
        }, "image/png");
      } else {
        // Standard download
        const dlQR = new QRCodeStyling({ ...qrFullOptions, width: downloadSize, height: downloadSize });
        await dlQR.download({ name: `liveqrcode-${Date.now()}`, extension: downloadFormat as any });
      }
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setIsDownloading(false);
    }
  }, [qrFullOptions, downloadSize, downloadFormat, frameStyle, frameText, currentFrame]);

  const handleCopy = useCallback(async () => {
    try {
      const QRCodeStyling = QRClassRef.current;
      if (!QRCodeStyling) return;
      const copyQR = new QRCodeStyling({ ...qrFullOptions, width: 512, height: 512 });
      const rawData = await copyQR.getRawData("png");
      if (rawData) {
        const blob = rawData instanceof Blob ? rawData : new Blob([rawData], { type: "image/png" });
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }, [qrFullOptions]);

  const handleCopyEmbed = useCallback(() => {
    const embed = `<img src="data:image/png;base64,..." alt="QR Code" width="256" height="256" />`;
    navigator.clipboard.writeText(embed).then(() => {
      setEmbedCopied(true);
      setTimeout(() => setEmbedCopied(false), 2000);
    });
  }, []);

  const handleShare = useCallback(async () => {
    try {
      const QRCodeStyling = QRClassRef.current;
      if (!QRCodeStyling) return;
      const shareQR = new QRCodeStyling({ ...qrFullOptions, width: 512, height: 512 });
      const rawData = await shareQR.getRawData("png");
      if (rawData && navigator.share) {
        const blob = rawData instanceof Blob ? rawData : new Blob([rawData], { type: "image/png" });
        const file = new File([blob], "qrcode.png", { type: "image/png" });
        await navigator.share({ title: "QR Code from Live QR Code", files: [file] });
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") console.error("Share failed:", err);
    }
  }, [qrFullOptions]);

  const handleGenerateAI = useCallback(async () => {
    if (!aiPrompt) return;
    setIsGeneratingAI(true);
    try {
      const res = await fetch("/api/generate-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: aiPrompt, style: "artistic" }),
      });
      const data = await res.json();
      if (data.image) {
        setAiBgImage(data.image); setFgColor("#ffffff"); setBgColor("transparent"); setErrorCorrection("H");
      }
    } catch {
      setAiBgImage(`https://picsum.photos/seed/${encodeURIComponent(aiPrompt)}/512/512?blur=2`);
      setFgColor("#ffffff"); setBgColor("transparent");
    } finally {
      setIsGeneratingAI(false);
    }
  }, [aiPrompt]);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* ── Type Category Filter ── */}
      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setTypeFilter(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              typeFilter === cat.id
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Type Grid ── */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 mb-8">
        {filteredTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleTypeChange(type.id)}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
              qrType === type.id
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900 shadow-md scale-[1.02]"
                : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400"
            }`}
          >
            <type.icon className="w-5 h-5" />
            <span className="text-[11px] font-medium leading-tight">{type.name}</span>
          </button>
        ))}
      </div>

      {/* ── Main Layout ── */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* ── Preview (first on mobile) ── */}
        <div className="w-full lg:w-5/12 xl:w-[400px] shrink-0 order-first lg:order-last">
          <div className="lg:sticky lg:top-6 space-y-4">
            {/* Preview Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-sm" />
              <Card className="relative border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden">
                <div className="bg-zinc-50 dark:bg-zinc-900 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Live Preview</span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <CardContent className="p-6 flex flex-col items-center">
                  {/* QR Preview with optional frame */}
                  <div
                    className="mb-5 transition-all duration-300"
                    style={frameStyle !== "none" ? {
                      backgroundColor: currentFrame.bgColor,
                      border: currentFrame.borderWidth > 0 ? `${currentFrame.borderWidth}px solid ${currentFrame.borderColor}` : "none",
                      borderRadius: `${currentFrame.borderRadius}px`,
                      padding: "16px 16px 8px",
                    } : undefined}
                  >
                    <div
                      className={`bg-white p-2 ${frameStyle === "none" ? "rounded-2xl shadow-inner border border-zinc-100 dark:border-zinc-800" : "rounded-xl"}`}
                      style={(aiBgImage || bgImageUrl) ? {
                        backgroundImage: `url(${aiBgImage || bgImageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      } : undefined}
                    >
                      <div ref={qrContainerRef} className="[&>canvas]:rounded-xl" />
                    </div>
                    {frameStyle !== "none" && frameText && (
                      <p
                        className="text-center font-bold mt-2 text-sm"
                        style={{ color: currentFrame.textColor }}
                      >
                        {frameText}
                      </p>
                    )}
                  </div>

                  {/* Scannability */}
                  <div className="w-full mb-4">
                    <ScannabilityBar {...scannability} />
                  </div>

                  {/* Format + Size + Download */}
                  <div className="w-full space-y-3">
                    <div className="flex gap-1">
                      {(["png", "svg", "jpeg", "webp"] as const).map((fmt) => (
                        <button
                          key={fmt}
                          onClick={() => setDownloadFormat(fmt)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-semibold uppercase transition-all ${
                            downloadFormat === fmt
                              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                          }`}
                        >
                          {fmt}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {[512, 1024, 2048, 4096].map((size) => (
                        <button
                          key={size}
                          onClick={() => setDownloadSize(size)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            downloadSize === size
                              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                          }`}
                        >
                          {size}px
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 h-11 text-sm font-semibold" onClick={handleDownload} disabled={isDownloading}>
                        {isDownloading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                        Download
                      </Button>
                      <Button variant="outline" className="h-11 px-3" onClick={handleCopy} title="Copy to clipboard">
                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button variant="outline" className="h-11 px-3" onClick={handleCopyEmbed} title="Copy embed code">
                        {embedCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Code2 className="w-4 h-4" />}
                      </Button>
                    </div>
                    <p className="text-center text-[11px] text-zinc-400">
                      Free forever. No watermarks. No sign-up required.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="w-full lg:flex-1 space-y-4">
          {/* Content Form */}
          <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <currentType.icon className="w-4 h-4 text-zinc-500" />
                <h2 className="font-semibold text-sm">{currentType.name} Content</h2>
              </div>
            </div>
            <CardContent className="p-5">
              <div className="grid grid-cols-2 gap-3">
                {currentType.fields.map((field) => (
                  <div key={field.key} className={field.half ? "col-span-1" : "col-span-2"}>
                    {field.type === "checkbox" ? (
                      <label className="flex items-center gap-2 cursor-pointer py-1">
                        <input
                          type="checkbox"
                          checked={contentData[field.key] === "true"}
                          onChange={(e) => updateField(field.key, e.target.checked ? "true" : "false")}
                          className="w-4 h-4 rounded border-zinc-300"
                        />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{field.label}</span>
                      </label>
                    ) : (
                      <>
                        <Label className="text-xs text-zinc-500 mb-1 block">{field.label}</Label>
                        {field.type === "textarea" ? (
                          <textarea
                            value={contentData[field.key] || ""}
                            onChange={(e) => updateField(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            rows={3}
                            className="flex w-full rounded-lg border border-input bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 resize-none"
                          />
                        ) : field.type === "select" ? (
                          <Select value={contentData[field.key] || field.options?.[0]?.value} onValueChange={(v) => v && updateField(field.key, v)}>
                            <SelectTrigger className="h-9 bg-zinc-50 dark:bg-zinc-900"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              {field.options?.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            type={field.type}
                            value={contentData[field.key] || ""}
                            onChange={(e) => updateField(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            className="h-9 bg-zinc-50 dark:bg-zinc-900"
                          />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Style Panel */}
          <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <h2 className="font-semibold text-sm">Customize Style</h2>
              <button onClick={handleReset} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 transition-colors" title="Reset to defaults">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
            <CardContent className="px-5 py-2">
              {/* Quick Presets */}
              <div className="py-3 border-b border-zinc-100 dark:border-zinc-800">
                <Label className="text-xs text-zinc-500 mb-2.5 block">Quick Presets</Label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {STYLE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset)}
                      className="flex flex-col items-center gap-1.5 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-sm"
                    >
                      <div
                        className="w-7 h-7 rounded-lg shadow-inner"
                        style={{
                          background: preset.useGradient
                            ? `linear-gradient(${preset.gradientRotation || 0}deg, ${preset.gradientColor1}, ${preset.gradientColor2})`
                            : preset.fgColor,
                        }}
                      />
                      <span className="text-[9px] font-medium text-zinc-500 leading-tight">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pattern & Shape */}
              <Section title="Pattern & Shape" icon={Grid3X3} defaultOpen>
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-zinc-500 mb-2 block">Dot Pattern</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {DOT_STYLES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setDotType(s.id)}
                          className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition-all ${
                            dotType === s.id
                              ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800 shadow-sm"
                              : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                          }`}
                        >
                          <DotPreview type={s.id} />
                          <span className="text-[10px] font-medium text-zinc-500 mt-0.5">{s.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs text-zinc-500 mb-2 block">Corner Square</Label>
                      <div className="flex gap-2">
                        {CORNER_SQUARE_STYLES.map((s) => (
                          <button key={s.id} onClick={() => setCornerSquareType(s.id)}
                            className={`flex-1 py-2 rounded-lg border text-xs font-medium transition-all ${
                              cornerSquareType === s.id ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800" : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
                            }`}>{s.name}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-500 mb-2 block">Corner Dot</Label>
                      <div className="flex gap-2">
                        {CORNER_DOT_STYLES.map((s) => (
                          <button key={s.id} onClick={() => setCornerDotType(s.id)}
                            className={`flex-1 py-2 rounded-lg border text-xs font-medium transition-all ${
                              cornerDotType === s.id ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800" : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
                            }`}>{s.name}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Colors */}
              <Section title="Colors" icon={Palette}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <ColorPick color={fgColor} onChange={setFgColor} label="Foreground" />
                    <ColorPick color={bgColor === "transparent" ? "#ffffff" : bgColor} onChange={setBgColor} label="Background" />
                  </div>
                  <button onClick={() => setBgColor("transparent")}
                    className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${
                      bgColor === "transparent" ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                    }`}>Transparent BG</button>
                  <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={useGradient} onChange={(e) => setUseGradient(e.target.checked)} className="w-4 h-4 rounded" />
                      <span className="text-sm font-medium">Use Gradient</span>
                    </label>
                    {useGradient && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <ColorPick color={gradientColor1} onChange={setGradientColor1} label="Color 1" />
                          <ColorPick color={gradientColor2} onChange={setGradientColor2} label="Color 2" />
                        </div>
                        <div className="flex gap-2">
                          {(["linear", "radial"] as const).map((t) => (
                            <button key={t} onClick={() => setGradientType(t)}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-medium border ${gradientType === t ? "border-zinc-900 bg-zinc-50" : "border-zinc-200"}`}>
                              {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                          ))}
                        </div>
                        {gradientType === "linear" && (
                          <div>
                            <Label className="text-xs text-zinc-500 mb-1 block">Angle: {gradientRotation}°</Label>
                            <Slider value={[gradientRotation]} onValueChange={(v) => setGradientRotation(Array.isArray(v) ? v[0] : v)} max={360} min={0} step={5} />
                          </div>
                        )}
                        <div className="h-6 rounded-lg" style={{
                          background: gradientType === "linear"
                            ? `linear-gradient(${gradientRotation}deg, ${gradientColor1}, ${gradientColor2})`
                            : `radial-gradient(${gradientColor1}, ${gradientColor2})`,
                        }} />
                      </motion.div>
                    )}
                  </div>
                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={useCustomCornerColor} onChange={(e) => setUseCustomCornerColor(e.target.checked)} className="w-4 h-4 rounded" />
                      <span className="text-sm font-medium">Custom Corner Color</span>
                    </label>
                    {useCustomCornerColor && <ColorPick color={cornerColor || fgColor} onChange={setCornerColor} label="Corner Color" />}
                  </div>
                </div>
              </Section>

              {/* Frame & Label */}
              <Section title="Frame & Label" icon={Frame} badge="NEW">
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-zinc-500 mb-2 block">Frame Style</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {FRAME_STYLES.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setFrameStyle(f.id)}
                          className={`p-2 rounded-xl border text-center transition-all ${
                            frameStyle === f.id
                              ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800 shadow-sm"
                              : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
                          }`}
                        >
                          <div className="w-6 h-6 mx-auto mb-1 rounded"
                            style={{ backgroundColor: f.bgColor === "transparent" ? "#f4f4f5" : f.bgColor, border: f.borderWidth > 0 ? `2px solid ${f.borderColor}` : "1px solid #e4e4e7", borderRadius: `${Math.min(f.borderRadius, 8)}px` }} />
                          <span className="text-[9px] font-medium text-zinc-500">{f.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  {frameStyle !== "none" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="space-y-3">
                      <div>
                        <Label className="text-xs text-zinc-500 mb-1 block">Label Text</Label>
                        <Input value={frameText} onChange={(e) => setFrameText(e.target.value)} placeholder="Scan Me" className="h-9" />
                      </div>
                      <div>
                        <Label className="text-xs text-zinc-500 mb-2 block">Quick Labels</Label>
                        <div className="flex flex-wrap gap-1.5">
                          {FRAME_TEXT_PRESETS.map((t) => (
                            <button key={t} onClick={() => setFrameText(t)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-medium border transition-all ${
                                frameText === t ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                              }`}>{t}</button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </Section>

              {/* Logo */}
              <Section title="Logo" icon={ImageIcon}>
                <div className="space-y-3">
                  <label className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-zinc-400" />
                    <span className="text-xs text-zinc-500 font-medium">{logoDataUrl ? "Change Logo" : "Upload Logo"}</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                  </label>
                  {logoDataUrl && (
                    <>
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logoDataUrl} alt="Logo" className="w-10 h-10 rounded-lg object-cover border" />
                        <div className="flex-1">
                          <Label className="text-xs text-zinc-500 mb-1 block">Size: {Math.round(logoSize[0] * 100)}%</Label>
                          <Slider value={logoSize} onValueChange={(v) => setLogoSize(Array.isArray(v) ? [...v] : [v])} max={0.5} min={0.1} step={0.05} />
                        </div>
                      </div>
                      <button onClick={() => setLogoDataUrl("")} className="text-xs text-red-500 hover:text-red-600 font-medium">Remove Logo</button>
                    </>
                  )}
                  <p className="text-[11px] text-zinc-400">Use error correction Q or H when adding a logo.</p>
                </div>
              </Section>

              {/* Background Image */}
              <Section title="Background Image" icon={ImagePlus}>
                <div className="space-y-3">
                  <label className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 cursor-pointer transition-colors">
                    <ImagePlus className="w-5 h-5 text-zinc-400" />
                    <span className="text-xs text-zinc-500 font-medium">{bgImageUrl ? "Change Background" : "Upload Background"}</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleBgImageUpload} />
                  </label>
                  {bgImageUrl && (
                    <div className="flex items-center justify-between p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                      <span className="text-xs font-medium">Background Applied</span>
                      <button onClick={() => { setBgImageUrl(""); setFgColor("#000000"); setBgColor("#ffffff"); }}
                        className="text-xs text-red-500 hover:text-red-600 font-medium">Remove</button>
                    </div>
                  )}
                  <p className="text-[11px] text-zinc-400">Use white/light QR foreground and high error correction with backgrounds.</p>
                </div>
              </Section>

              {/* AI Art */}
              <Section title="AI Art Background" icon={Sparkles} badge="AI">
                <div className="space-y-3">
                  <p className="text-xs text-zinc-500">Generate an AI-powered artistic background.</p>
                  <div className="relative">
                    <Input value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="e.g., Futuristic neon cityscape..."
                      className="h-10 pr-12 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
                      onKeyDown={(e) => e.key === "Enter" && handleGenerateAI()} />
                    <Button size="icon" className="absolute right-1 top-1 h-8 w-8 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
                      onClick={handleGenerateAI} disabled={isGeneratingAI || !aiPrompt}>
                      {isGeneratingAI ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Wand2 className="w-3.5 h-3.5" />}
                    </Button>
                  </div>
                  {aiBgImage && (
                    <div className="flex items-center justify-between p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl">
                      <span className="text-xs font-medium text-purple-700 dark:text-purple-300">AI Background Applied</span>
                      <button onClick={() => { setAiBgImage(null); setFgColor("#000000"); setBgColor("#ffffff"); }}
                        className="text-xs text-purple-500 hover:text-purple-700 font-medium">Remove</button>
                    </div>
                  )}
                </div>
              </Section>

              {/* Advanced */}
              <Section title="Advanced" icon={Settings2}>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label className="text-xs text-zinc-500">Error Correction</Label>
                      <span className="text-xs font-mono text-zinc-400">{errorCorrection}</span>
                    </div>
                    <Select value={errorCorrection} onValueChange={(v) => v && setErrorCorrection(v)}>
                      <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">Low (7%) - Smallest size</SelectItem>
                        <SelectItem value="M">Medium (15%) - Standard</SelectItem>
                        <SelectItem value="Q">Quartile (25%) - Good for logos</SelectItem>
                        <SelectItem value="H">High (30%) - Best for logos/AI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs text-zinc-500 mb-1 block">Quiet Zone (Margin): {margin[0]}px</Label>
                    <Slider value={margin} onValueChange={(v) => setMargin(Array.isArray(v) ? [...v] : [v])} max={40} min={0} step={2} />
                    <p className="text-[11px] text-zinc-400 mt-1">White space around the QR code. Recommended: 8-16px.</p>
                  </div>
                </div>
              </Section>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Floating Download Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 px-4 py-3 safe-area-bottom">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <div className="flex gap-1 shrink-0">
            {(["png", "svg"] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setDownloadFormat(fmt)}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase ${
                  downloadFormat === fmt
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
          <Button className="flex-1 h-10 text-sm font-semibold" onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : <Download className="w-4 h-4 mr-1.5" />}
            Download QR
          </Button>
          <Button variant="outline" className="h-10 px-3 shrink-0" onClick={handleCopy}>
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </Button>
          <Button variant="outline" className="h-10 px-3 shrink-0" onClick={handleShare}>
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {/* Spacer for mobile floating bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
