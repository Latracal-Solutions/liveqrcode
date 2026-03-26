import {
  Globe, Type, Mail, Phone, MessageSquare, Wifi, UserRound,
  MessageCircle, Instagram, Twitter, Youtube, Linkedin,
  Music2, Facebook, CalendarDays, MapPin, Bitcoin, Send,
  Smartphone, Star, CreditCard, Navigation, Camera, Pin, IndianRupee, Music,
  type LucideIcon,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================

export type QRFieldType = "text" | "url" | "email" | "tel" | "password" | "textarea" | "select" | "checkbox" | "datetime-local";

export interface QRField {
  key: string;
  label: string;
  placeholder?: string;
  type: QRFieldType;
  options?: { value: string; label: string }[];
  half?: boolean;
}

export interface QRTypeConfig {
  id: string;
  name: string;
  icon: LucideIcon;
  category: "popular" | "social" | "business" | "other";
  fields: QRField[];
  encode: (data: Record<string, string>) => string;
  defaultData: Record<string, string>;
}

export interface StylePreset {
  id: string;
  name: string;
  dotType: string;
  cornerSquareType: string;
  cornerDotType: string;
  fgColor: string;
  bgColor: string;
  useGradient: boolean;
  gradientColor1?: string;
  gradientColor2?: string;
  gradientType?: string;
  gradientRotation?: number;
}

export interface FrameStyle {
  id: string;
  name: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  borderRadius: number;
  borderWidth: number;
}

// ============================================================
// QR TYPES (27 types)
// ============================================================

export const QR_TYPES: QRTypeConfig[] = [
  {
    id: "url", name: "URL", icon: Globe, category: "popular",
    fields: [{ key: "url", label: "Website URL", placeholder: "https://example.com", type: "url" }],
    encode: (d) => d.url || "https://example.com",
    defaultData: { url: "https://liveqrcode.com" },
  },
  {
    id: "text", name: "Text", icon: Type, category: "popular",
    fields: [{ key: "text", label: "Text Content", placeholder: "Enter your text here...", type: "textarea" }],
    encode: (d) => d.text || "",
    defaultData: { text: "" },
  },
  {
    id: "email", name: "Email", icon: Mail, category: "popular",
    fields: [
      { key: "email", label: "Email Address", placeholder: "hello@example.com", type: "email" },
      { key: "subject", label: "Subject", placeholder: "Email subject", type: "text", half: true },
      { key: "body", label: "Message Body", placeholder: "Your message...", type: "textarea" },
    ],
    encode: (d) => {
      const params: string[] = [];
      if (d.subject) params.push(`subject=${encodeURIComponent(d.subject)}`);
      if (d.body) params.push(`body=${encodeURIComponent(d.body)}`);
      return `mailto:${d.email || ""}${params.length ? "?" + params.join("&") : ""}`;
    },
    defaultData: { email: "", subject: "", body: "" },
  },
  {
    id: "phone", name: "Phone", icon: Phone, category: "popular",
    fields: [{ key: "phone", label: "Phone Number", placeholder: "+1 234 567 8900", type: "tel" }],
    encode: (d) => `tel:${d.phone || ""}`,
    defaultData: { phone: "" },
  },
  {
    id: "sms", name: "SMS", icon: MessageSquare, category: "popular",
    fields: [
      { key: "phone", label: "Phone Number", placeholder: "+1 234 567 8900", type: "tel" },
      { key: "message", label: "Message", placeholder: "Your message...", type: "textarea" },
    ],
    encode: (d) => `sms:${d.phone || ""}${d.message ? `?body=${encodeURIComponent(d.message)}` : ""}`,
    defaultData: { phone: "", message: "" },
  },
  {
    id: "wifi", name: "WiFi", icon: Wifi, category: "popular",
    fields: [
      { key: "ssid", label: "Network Name (SSID)", placeholder: "MyWiFi", type: "text" },
      { key: "password", label: "Password", placeholder: "Enter password", type: "password", half: true },
      { key: "encryption", label: "Encryption", type: "select", half: true, options: [
        { value: "WPA", label: "WPA/WPA2" },
        { value: "WEP", label: "WEP" },
        { value: "nopass", label: "None" },
      ]},
      { key: "hidden", label: "Hidden Network", type: "checkbox" },
    ],
    encode: (d) => `WIFI:T:${d.encryption || "WPA"};S:${d.ssid || ""};P:${d.password || ""};H:${d.hidden === "true" ? "true" : "false"};;`,
    defaultData: { ssid: "", password: "", encryption: "WPA", hidden: "false" },
  },
  {
    id: "vcard", name: "vCard", icon: UserRound, category: "business",
    fields: [
      { key: "firstName", label: "First Name", placeholder: "John", type: "text", half: true },
      { key: "lastName", label: "Last Name", placeholder: "Doe", type: "text", half: true },
      { key: "org", label: "Company", placeholder: "Acme Inc.", type: "text", half: true },
      { key: "title", label: "Job Title", placeholder: "CEO", type: "text", half: true },
      { key: "phone", label: "Phone", placeholder: "+1 234 567 8900", type: "tel", half: true },
      { key: "email", label: "Email", placeholder: "john@example.com", type: "email", half: true },
      { key: "url", label: "Website", placeholder: "https://example.com", type: "url" },
      { key: "street", label: "Street", placeholder: "123 Main St", type: "text" },
      { key: "city", label: "City", placeholder: "New York", type: "text", half: true },
      { key: "state", label: "State", placeholder: "NY", type: "text", half: true },
      { key: "zip", label: "ZIP Code", placeholder: "10001", type: "text", half: true },
      { key: "country", label: "Country", placeholder: "US", type: "text", half: true },
    ],
    encode: (d) => {
      const lines = ["BEGIN:VCARD", "VERSION:3.0"];
      lines.push(`N:${d.lastName || ""};${d.firstName || ""};;;`);
      lines.push(`FN:${[d.firstName, d.lastName].filter(Boolean).join(" ")}`);
      if (d.org) lines.push(`ORG:${d.org}`);
      if (d.title) lines.push(`TITLE:${d.title}`);
      if (d.phone) lines.push(`TEL;TYPE=CELL:${d.phone}`);
      if (d.email) lines.push(`EMAIL:${d.email}`);
      if (d.url) lines.push(`URL:${d.url}`);
      if (d.street || d.city || d.state || d.zip || d.country) {
        lines.push(`ADR;TYPE=HOME:;;${d.street || ""};${d.city || ""};${d.state || ""};${d.zip || ""};${d.country || ""}`);
      }
      lines.push("END:VCARD");
      return lines.join("\n");
    },
    defaultData: { firstName: "", lastName: "", org: "", title: "", phone: "", email: "", url: "", street: "", city: "", state: "", zip: "", country: "" },
  },
  {
    id: "whatsapp", name: "WhatsApp", icon: MessageCircle, category: "social",
    fields: [
      { key: "phone", label: "Phone (with country code)", placeholder: "+1234567890", type: "tel" },
      { key: "message", label: "Pre-filled Message", placeholder: "Hello!", type: "textarea" },
    ],
    encode: (d) => `https://wa.me/${(d.phone || "").replace(/[^0-9]/g, "")}${d.message ? `?text=${encodeURIComponent(d.message)}` : ""}`,
    defaultData: { phone: "", message: "" },
  },
  {
    id: "instagram", name: "Instagram", icon: Instagram, category: "social",
    fields: [{ key: "username", label: "Username", placeholder: "username", type: "text" }],
    encode: (d) => `https://instagram.com/${d.username || ""}`,
    defaultData: { username: "" },
  },
  {
    id: "twitter", name: "X / Twitter", icon: Twitter, category: "social",
    fields: [{ key: "username", label: "Username", placeholder: "username", type: "text" }],
    encode: (d) => `https://x.com/${d.username || ""}`,
    defaultData: { username: "" },
  },
  {
    id: "youtube", name: "YouTube", icon: Youtube, category: "social",
    fields: [{ key: "url", label: "YouTube URL", placeholder: "https://youtube.com/@channel", type: "url" }],
    encode: (d) => d.url || "",
    defaultData: { url: "" },
  },
  {
    id: "linkedin", name: "LinkedIn", icon: Linkedin, category: "social",
    fields: [{ key: "url", label: "LinkedIn URL", placeholder: "https://linkedin.com/in/username", type: "url" }],
    encode: (d) => d.url || "",
    defaultData: { url: "" },
  },
  {
    id: "tiktok", name: "TikTok", icon: Music2, category: "social",
    fields: [{ key: "username", label: "Username", placeholder: "username", type: "text" }],
    encode: (d) => `https://tiktok.com/@${d.username || ""}`,
    defaultData: { username: "" },
  },
  {
    id: "facebook", name: "Facebook", icon: Facebook, category: "social",
    fields: [{ key: "url", label: "Facebook URL", placeholder: "https://facebook.com/page", type: "url" }],
    encode: (d) => d.url || "",
    defaultData: { url: "" },
  },
  {
    id: "telegram", name: "Telegram", icon: Send, category: "social",
    fields: [{ key: "username", label: "Username", placeholder: "username", type: "text" }],
    encode: (d) => `https://t.me/${d.username || ""}`,
    defaultData: { username: "" },
  },
  {
    id: "event", name: "Event", icon: CalendarDays, category: "business",
    fields: [
      { key: "title", label: "Event Name", placeholder: "My Event", type: "text" },
      { key: "startDate", label: "Start", type: "datetime-local", half: true },
      { key: "endDate", label: "End", type: "datetime-local", half: true },
      { key: "location", label: "Location", placeholder: "Event venue", type: "text" },
      { key: "description", label: "Description", placeholder: "Event details...", type: "textarea" },
    ],
    encode: (d) => {
      const fmt = (s: string) => s ? s.replace(/[-:]/g, "") : "";
      const lines = ["BEGIN:VEVENT", `SUMMARY:${d.title || ""}`];
      if (d.startDate) lines.push(`DTSTART:${fmt(d.startDate)}`);
      if (d.endDate) lines.push(`DTEND:${fmt(d.endDate)}`);
      if (d.location) lines.push(`LOCATION:${d.location}`);
      if (d.description) lines.push(`DESCRIPTION:${d.description}`);
      lines.push("END:VEVENT");
      return lines.join("\n");
    },
    defaultData: { title: "", startDate: "", endDate: "", location: "", description: "" },
  },
  {
    id: "location", name: "Location", icon: MapPin, category: "other",
    fields: [
      { key: "latitude", label: "Latitude", placeholder: "40.7128", type: "text", half: true },
      { key: "longitude", label: "Longitude", placeholder: "-74.0060", type: "text", half: true },
    ],
    encode: (d) => `geo:${d.latitude || "0"},${d.longitude || "0"}`,
    defaultData: { latitude: "", longitude: "" },
  },
  {
    id: "crypto", name: "Bitcoin", icon: Bitcoin, category: "other",
    fields: [
      { key: "currency", label: "Cryptocurrency", type: "select", options: [
        { value: "bitcoin", label: "Bitcoin (BTC)" },
        { value: "ethereum", label: "Ethereum (ETH)" },
        { value: "litecoin", label: "Litecoin (LTC)" },
      ]},
      { key: "address", label: "Wallet Address", placeholder: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", type: "text" },
      { key: "amount", label: "Amount", placeholder: "0.01", type: "text", half: true },
      { key: "label", label: "Label", placeholder: "Payment", type: "text", half: true },
    ],
    encode: (d) => {
      let uri = `${d.currency || "bitcoin"}:${d.address || ""}`;
      const params: string[] = [];
      if (d.amount) params.push(`amount=${d.amount}`);
      if (d.label) params.push(`label=${encodeURIComponent(d.label)}`);
      if (params.length) uri += `?${params.join("&")}`;
      return uri;
    },
    defaultData: { currency: "bitcoin", address: "", amount: "", label: "" },
  },
  // -- Additional Types --
  {
    id: "appstore", name: "App Store", icon: Smartphone, category: "business",
    fields: [
      { key: "ios", label: "iOS App Store URL", placeholder: "https://apps.apple.com/app/...", type: "url" },
      { key: "android", label: "Google Play URL", placeholder: "https://play.google.com/store/apps/...", type: "url" },
    ],
    encode: (d) => d.ios || d.android || "",
    defaultData: { ios: "", android: "" },
  },
  {
    id: "googlemaps", name: "Google Maps", icon: Navigation, category: "other",
    fields: [
      { key: "query", label: "Place Name or Address", placeholder: "Eiffel Tower, Paris", type: "text" },
    ],
    encode: (d) => `https://maps.google.com/?q=${encodeURIComponent(d.query || "")}`,
    defaultData: { query: "" },
  },
  {
    id: "paypal", name: "PayPal", icon: CreditCard, category: "business",
    fields: [
      { key: "username", label: "PayPal.me Username", placeholder: "username", type: "text" },
      { key: "amount", label: "Amount (optional)", placeholder: "10.00", type: "text", half: true },
      { key: "currency", label: "Currency", type: "select", half: true, options: [
        { value: "USD", label: "USD" }, { value: "EUR", label: "EUR" }, { value: "GBP", label: "GBP" },
        { value: "CAD", label: "CAD" }, { value: "AUD", label: "AUD" }, { value: "JPY", label: "JPY" },
      ]},
    ],
    encode: (d) => `https://paypal.me/${d.username || ""}${d.amount ? `/${d.amount}${d.currency || "USD"}` : ""}`,
    defaultData: { username: "", amount: "", currency: "USD" },
  },
  {
    id: "googlereview", name: "Google Review", icon: Star, category: "business",
    fields: [
      { key: "placeId", label: "Google Place ID or Review URL", placeholder: "https://g.page/r/...", type: "text" },
    ],
    encode: (d) => d.placeId?.startsWith("http") ? d.placeId : `https://search.google.com/local/writereview?placeid=${d.placeId || ""}`,
    defaultData: { placeId: "" },
  },
  {
    id: "snapchat", name: "Snapchat", icon: Camera, category: "social",
    fields: [{ key: "username", label: "Username", placeholder: "username", type: "text" }],
    encode: (d) => `https://snapchat.com/add/${d.username || ""}`,
    defaultData: { username: "" },
  },
  {
    id: "pinterest", name: "Pinterest", icon: Pin, category: "social",
    fields: [{ key: "url", label: "Pinterest URL", placeholder: "https://pinterest.com/username", type: "url" }],
    encode: (d) => d.url || "",
    defaultData: { url: "" },
  },
  {
    id: "messenger", name: "Messenger", icon: MessageCircle, category: "social",
    fields: [{ key: "username", label: "Facebook Username or Page", placeholder: "username", type: "text" }],
    encode: (d) => `https://m.me/${d.username || ""}`,
    defaultData: { username: "" },
  },
  {
    id: "upi", name: "UPI", icon: IndianRupee, category: "business",
    fields: [
      { key: "pa", label: "UPI ID", placeholder: "name@upi", type: "text" },
      { key: "pn", label: "Payee Name", placeholder: "John Doe", type: "text", half: true },
      { key: "am", label: "Amount", placeholder: "100", type: "text", half: true },
      { key: "tn", label: "Note (optional)", placeholder: "Payment for...", type: "text" },
    ],
    encode: (d) => {
      const params: string[] = [`pa=${d.pa || ""}`];
      if (d.pn) params.push(`pn=${encodeURIComponent(d.pn)}`);
      if (d.am) params.push(`am=${d.am}`);
      if (d.tn) params.push(`tn=${encodeURIComponent(d.tn)}`);
      return `upi://pay?${params.join("&")}`;
    },
    defaultData: { pa: "", pn: "", am: "", tn: "" },
  },
  {
    id: "spotify", name: "Spotify", icon: Music, category: "social",
    fields: [{ key: "url", label: "Spotify URL", placeholder: "https://open.spotify.com/track/...", type: "url" }],
    encode: (d) => d.url || "",
    defaultData: { url: "" },
  },
];

// ============================================================
// STYLE OPTIONS
// ============================================================

export const DOT_STYLES = [
  { id: "square", name: "Square" },
  { id: "rounded", name: "Rounded" },
  { id: "dots", name: "Dots" },
  { id: "extra-rounded", name: "Smooth" },
  { id: "classy", name: "Classy" },
  { id: "classy-rounded", name: "Elegant" },
] as const;

export const CORNER_SQUARE_STYLES = [
  { id: "square", name: "Square" },
  { id: "extra-rounded", name: "Rounded" },
  { id: "dot", name: "Circle" },
] as const;

export const CORNER_DOT_STYLES = [
  { id: "square", name: "Square" },
  { id: "dot", name: "Circle" },
] as const;

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: "classic", name: "Classic",
    dotType: "square", cornerSquareType: "square", cornerDotType: "square",
    fgColor: "#000000", bgColor: "#ffffff", useGradient: false,
  },
  {
    id: "modern", name: "Modern",
    dotType: "rounded", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#1a1a2e", bgColor: "#ffffff", useGradient: false,
  },
  {
    id: "dots", name: "Dotted",
    dotType: "dots", cornerSquareType: "dot", cornerDotType: "dot",
    fgColor: "#2563eb", bgColor: "#ffffff", useGradient: false,
  },
  {
    id: "elegant", name: "Elegant",
    dotType: "classy-rounded", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#6d28d9", bgColor: "#ffffff",
    useGradient: true, gradientColor1: "#6d28d9", gradientColor2: "#db2777",
    gradientType: "linear", gradientRotation: 135,
  },
  {
    id: "bold", name: "Bold",
    dotType: "extra-rounded", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#dc2626", bgColor: "#ffffff",
    useGradient: true, gradientColor1: "#dc2626", gradientColor2: "#f97316",
    gradientType: "linear", gradientRotation: 45,
  },
  {
    id: "ocean", name: "Ocean",
    dotType: "rounded", cornerSquareType: "dot", cornerDotType: "dot",
    fgColor: "#0891b2", bgColor: "#ffffff",
    useGradient: true, gradientColor1: "#0891b2", gradientColor2: "#6366f1",
    gradientType: "radial", gradientRotation: 0,
  },
  {
    id: "forest", name: "Forest",
    dotType: "classy", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#059669", bgColor: "#ffffff",
    useGradient: true, gradientColor1: "#059669", gradientColor2: "#0d9488",
    gradientType: "linear", gradientRotation: 180,
  },
  {
    id: "midnight", name: "Midnight",
    dotType: "rounded", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#312e81", bgColor: "#ffffff",
    useGradient: true, gradientColor1: "#312e81", gradientColor2: "#1e1b4b",
    gradientType: "linear", gradientRotation: 90,
  },
  {
    id: "rose", name: "Rose",
    dotType: "dots", cornerSquareType: "dot", cornerDotType: "dot",
    fgColor: "#e11d48", bgColor: "#fff1f2",
    useGradient: true, gradientColor1: "#e11d48", gradientColor2: "#be185d",
    gradientType: "linear", gradientRotation: 135,
  },
  {
    id: "gold", name: "Gold",
    dotType: "classy", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#92400e", bgColor: "#fffbeb",
    useGradient: true, gradientColor1: "#b45309", gradientColor2: "#78350f",
    gradientType: "linear", gradientRotation: 45,
  },
  {
    id: "neon", name: "Neon",
    dotType: "extra-rounded", cornerSquareType: "dot", cornerDotType: "dot",
    fgColor: "#06b6d4", bgColor: "#0f172a",
    useGradient: true, gradientColor1: "#06b6d4", gradientColor2: "#8b5cf6",
    gradientType: "linear", gradientRotation: 90,
  },
  {
    id: "sunset", name: "Sunset",
    dotType: "rounded", cornerSquareType: "extra-rounded", cornerDotType: "dot",
    fgColor: "#ea580c", bgColor: "#ffffff",
    useGradient: true, gradientColor1: "#ea580c", gradientColor2: "#dc2626",
    gradientType: "radial", gradientRotation: 0,
  },
];

export const CATEGORIES = [
  { id: "popular", label: "Popular" },
  { id: "all", label: "All" },
  { id: "social", label: "Social" },
  { id: "business", label: "Business" },
  { id: "other", label: "Other" },
] as const;

// ============================================================
// FRAME STYLES
// ============================================================

export const FRAME_STYLES: FrameStyle[] = [
  { id: "none", name: "None", bgColor: "transparent", borderColor: "transparent", textColor: "#000000", borderRadius: 0, borderWidth: 0 },
  { id: "simple", name: "Simple", bgColor: "#ffffff", borderColor: "#e4e4e7", textColor: "#18181b", borderRadius: 12, borderWidth: 2 },
  { id: "rounded", name: "Rounded", bgColor: "#ffffff", borderColor: "#18181b", textColor: "#18181b", borderRadius: 24, borderWidth: 3 },
  { id: "dark", name: "Dark", bgColor: "#18181b", borderColor: "#18181b", textColor: "#ffffff", borderRadius: 16, borderWidth: 0 },
  { id: "blue", name: "Blue", bgColor: "#eff6ff", borderColor: "#3b82f6", textColor: "#1d4ed8", borderRadius: 16, borderWidth: 2 },
  { id: "purple", name: "Purple", bgColor: "#faf5ff", borderColor: "#a855f7", textColor: "#7c3aed", borderRadius: 16, borderWidth: 2 },
];

export const FRAME_TEXT_PRESETS = [
  "Scan Me",
  "Scan to Connect",
  "Scan for WiFi",
  "Scan to Order",
  "Scan for Menu",
  "Learn More",
  "Visit Us",
  "Download App",
  "Follow Us",
  "Get Discount",
];

// ============================================================
// SCANNABILITY HELPERS
// ============================================================

function getLuminance(hex: string): number {
  if (!hex || hex === "transparent") return 1;
  const h = hex.replace("#", "");
  if (h.length !== 6) return 0.5;
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const [R, G, B] = [r, g, b].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function getContrastRatio(fg: string, bg: string): number {
  const l1 = getLuminance(fg);
  const l2 = getLuminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function getScannabilityScore(options: {
  fgColor: string;
  bgColor: string;
  errorCorrection: string;
  dataLength: number;
  hasLogo: boolean;
  hasAiBg: boolean;
  useGradient: boolean;
  gradientColor1?: string;
  gradientColor2?: string;
}): { score: number; label: string; color: string; warnings: string[] } {
  const warnings: string[] = [];
  let score = 100;

  // Color contrast (most important - up to 40 points)
  const effectiveFg = options.useGradient ? (options.gradientColor1 || options.fgColor) : options.fgColor;
  const effectiveBg = options.bgColor === "transparent" ? "#ffffff" : options.bgColor;
  const contrast = getContrastRatio(effectiveFg, effectiveBg);

  if (contrast < 2) { score -= 40; warnings.push("Very low color contrast - QR may not scan"); }
  else if (contrast < 3) { score -= 25; warnings.push("Low color contrast - may have scanning issues"); }
  else if (contrast < 4.5) { score -= 10; warnings.push("Moderate contrast - works but could be better"); }

  // Gradient secondary color contrast check
  if (options.useGradient && options.gradientColor2) {
    const gc2 = getContrastRatio(options.gradientColor2, effectiveBg);
    if (gc2 < 2) { score -= 10; warnings.push("Gradient end color has very low contrast"); }
  }

  // Error correction (up to 15 points)
  const ecMap: Record<string, number> = { L: -15, M: -5, Q: 0, H: 5 };
  score += ecMap[options.errorCorrection] || 0;

  // Data length (up to 15 points)
  if (options.dataLength > 500) { score -= 15; warnings.push("Very long data - QR will be very dense"); }
  else if (options.dataLength > 200) { score -= 8; warnings.push("Long data - QR will be denser"); }
  else if (options.dataLength > 100) { score -= 3; }

  // Logo (up to 10 points)
  if (options.hasLogo) {
    score -= 10;
    if (options.errorCorrection === "L" || options.errorCorrection === "M") {
      warnings.push("Logo with low error correction may prevent scanning");
      score -= 10;
    }
  }

  // AI background (up to 15 points)
  if (options.hasAiBg) {
    score -= 15;
    warnings.push("AI background reduces scannability - test thoroughly");
  }

  score = Math.max(0, Math.min(100, score));

  let label: string;
  let color: string;
  if (score >= 80) { label = "Excellent"; color = "#22c55e"; }
  else if (score >= 60) { label = "Good"; color = "#84cc16"; }
  else if (score >= 40) { label = "Fair"; color = "#f59e0b"; }
  else if (score >= 20) { label = "Poor"; color = "#ef4444"; }
  else { label = "Bad"; color = "#dc2626"; }

  return { score, label, color, warnings };
}
