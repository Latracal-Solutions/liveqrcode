import "@/src/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Live QR Code - Free AI QR Code Generator | Create Custom QR Codes Instantly",
    template: "%s | Live QR Code",
  },
  description:
    "Free open-source AI QR code generator. Create beautiful, customizable QR codes with 27+ types including URL, WiFi, vCard, WhatsApp, Instagram, Email, Bitcoin. Custom patterns, colors, gradients, logos, frames. No sign-up required.",
  keywords: [
    "QR code generator", "free QR code", "AI QR code", "custom QR code",
    "QR code maker", "WiFi QR code", "vCard QR code", "WhatsApp QR code",
    "Instagram QR code", "QR code with logo", "QR code design",
    "QR code creator", "online QR code generator", "QR code free",
    "generate QR code", "QR code patterns", "QR code gradients",
    "best QR code generator", "QR code no sign up",
    "open source QR code generator", "QR code generator open source",
  ],
  authors: [{ name: "Latracal Solutions", url: "https://github.com/Latracal-Solutions" }],
  creator: "Live QR Code",
  publisher: "Live QR Code",
  metadataBase: new URL("https://www.liveqrcode.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Live QR Code",
    title: "Live QR Code - Free Open Source AI QR Code Generator",
    description: "Create stunning QR codes with custom patterns, gradients, logos, and AI art. 100% free and open source. No sign-up required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live QR Code - Free Open Source AI QR Code Generator",
    description: "Create stunning QR codes with custom patterns, gradients, logos, and AI art. 100% free and open source.",
  },
  verification: {
    google: "68dZyZ_MCjsPunBOrzHnTPXyh9KGOPuvzY5vszsA7R8",
  },
  category: "Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1HXBBZ2D26" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1HXBBZ2D26');`,
          }}
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Live QR Code",
              description: "Free AI QR Code Generator with 27+ types, custom patterns, gradients, logos, and frames.",
              url: "https://www.liveqrcode.com",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "27+ QR Code Types",
                "Custom Dot Patterns",
                "Gradient Colors",
                "Logo Upload",
                "AI Art Backgrounds",
                "Frame & Label",
                "PNG, SVG, JPEG, WebP Export",
                "Up to 4096px Resolution",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
