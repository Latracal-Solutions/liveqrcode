import Link from "next/link";
import { Github } from "lucide-react";
import { BrandLogo } from "@/src/components/brand-logo";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact", href: "/contact" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandLogo size={32} />
            <span className="font-bold text-lg tracking-tight">
              Live <span className="text-zinc-900 dark:text-zinc-100">QR Code</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:inline">
              QR Generator
            </Link>
            <a href="https://github.com/Latracal-Solutions/liveqrcode" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Open Source</span>
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

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
                The most powerful free AI QR code generator. Create beautiful, customizable QR codes with custom patterns, gradients, logos, and AI art.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-3">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300 mb-3">QR Code Types</h3>
              <nav className="flex flex-col gap-2">
                {[
                  { name: "URL", slug: "url-qr-code-generator" },
                  { name: "WiFi", slug: "wifi-qr-code-generator" },
                  { name: "vCard", slug: "vcard-qr-code-generator" },
                  { name: "WhatsApp", slug: "whatsapp-qr-code-generator" },
                  { name: "Instagram", slug: "instagram-qr-code-generator" },
                  { name: "Email", slug: "email-qr-code-generator" },
                  { name: "Bitcoin", slug: "bitcoin-qr-code-generator" },
                  { name: "Google Review", slug: "google-review-qr-code-generator" },
                ].map((t) => (
                  <Link key={t.slug} href={`/${t.slug}`}
                    className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    {t.name} QR Code
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-400">
              Free forever. No watermarks. No sign-up. Your data stays in your browser.
            </p>
            <span className="text-xs text-zinc-400">&copy; 2026 Live QR Code. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
