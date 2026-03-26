import Link from "next/link";
import { Github, Sparkles, Palette, Download, Shield, Zap, Globe } from "lucide-react";
import { BrandLogo } from "@/src/components/brand-logo";
import { QRGenerator } from "@/src/components/qr-generator";
import { SEOContent } from "@/src/components/seo-content";
import { QRExamples } from "@/src/components/qr-examples";

const features = [
  { icon: Globe, label: "27+ QR Types" },
  { icon: Palette, label: "Custom Patterns" },
  { icon: Sparkles, label: "AI Art" },
  { icon: Download, label: "PNG / SVG / JPEG" },
  { icon: Shield, label: "No Watermarks" },
  { icon: Zap, label: "100% Open Source" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BrandLogo size={32} />
            <span className="font-bold text-lg tracking-tight">
              Live <span className="text-zinc-900 dark:text-zinc-100">QR Code</span>
            </span>
          </div>
          <a
            href="https://github.com/Latracal-Solutions/liveqrcode"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">Open Source</span>
          </a>
        </div>
      </header>

      {/* Hero - compact, seamless with generator */}
      <section className="bg-zinc-50 dark:bg-zinc-950 pt-4 sm:pt-6 pb-0 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
            Free QR Code Generator
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Create custom QR codes with patterns, gradients, logos, frames, and AI art. 27+ types. No sign-up.
          </p>
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-1.5 mt-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 text-[11px] font-medium"
              >
                <f.icon className="w-3 h-3" />
                {f.label}
              </div>
            ))}
          </div>
          <p className="sm:hidden mt-1.5 text-[11px] text-zinc-400 dark:text-zinc-500">
            Free forever. No watermarks. No sign-up required.
          </p>
        </div>
      </section>

      {/* Main */}
      <main>
        <QRGenerator />
      </main>

      {/* QR Code Examples with real generated images */}
      <QRExamples />

      {/* SEO Content */}
      <SEOContent />

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <BrandLogo size={24} />
                <span className="font-bold text-sm">Live QR Code</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                The most powerful free AI QR code generator. Create stunning QR codes with custom patterns, gradients, logos, and AI art.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-3">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/about" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</Link>
                <Link href="/contact" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</Link>
                <Link href="/privacy" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Disclaimer</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-3">QR Code Types</h3>
              <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
                {["URL", "WiFi", "vCard", "WhatsApp", "Instagram", "Email", "Bitcoin", "Event"].map((t) => (
                  <span key={t} className="text-xs text-zinc-500">{t} QR Code</span>
                ))}
              </nav>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-400">Free forever. No watermarks. No sign-up. Your data stays in your browser.</p>
            <span className="text-xs text-zinc-400">&copy; 2026 Live QR Code. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
