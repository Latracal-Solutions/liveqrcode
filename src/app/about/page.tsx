import { PageShell } from "@/src/components/page-shell";
import { QrCode, Sparkles, Shield, Zap, Globe, Heart, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Live QR Code - Free Open Source AI QR Code Generator",
  description: "Learn about Live QR Code, the most powerful free open-source AI QR code generator. Create custom QR codes with patterns, gradients, logos, and AI art. No sign-up required.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Live QR Code - Free Open Source QR Code Generator",
    description: "The most powerful free open-source AI QR code generator. Create stunning QR codes with custom patterns, gradients, logos, and AI art.",
  },
};

const values = [
  { icon: Shield, title: "100% Free Forever", description: "No hidden fees, no premium tiers, no watermarks. Every feature is completely free." },
  { icon: Zap, title: "Instant & Private", description: "QR codes are generated instantly in your browser. We never store your data on our servers." },
  { icon: Sparkles, title: "AI-Powered Design", description: "Use AI to generate stunning artistic backgrounds that make your QR codes stand out." },
  { icon: Globe, title: "27+ QR Code Types", description: "URL, WiFi, vCard, WhatsApp, Instagram, Email, Bitcoin, Events, and many more." },
  { icon: Heart, title: "Built with Care", description: "Every pixel is crafted for the best user experience on desktop and mobile devices." },
  { icon: Users, title: "For Everyone", description: "Whether you are a small business, marketer, student, or developer, Live QR Code is for you." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-full px-4 py-1.5 mb-6">
            <QrCode className="w-4 h-4" />
            <span className="text-sm font-medium">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            About Live QR Code
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We believe everyone deserves access to professional-grade QR code tools without paying a dime.
            Live QR Code is the most powerful free QR code generator on the web.
          </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none mb-16">
          <h2>Our Mission</h2>
          <p>
            Live QR Code was created with a simple mission: to democratize QR code creation. While other
            tools charge monthly subscriptions for basic features like custom colors or logo uploads, we
            believe these should be free for everyone. Our generator runs entirely in your browser, meaning
            your data never leaves your device.
          </p>
          <h2>What Makes Us Different</h2>
          <p>
            Unlike traditional QR code generators, Live QR Code offers advanced customization features
            that are typically locked behind paywalls elsewhere. With 27+ QR code types, 6 dot patterns,
            gradient colors, logo embedding, frame labels, and AI-powered artistic backgrounds, we offer
            the most comprehensive free QR code generator available today.
          </p>
          <h2>How It Works</h2>
          <p>
            Our QR code generator works entirely client-side using modern web technologies. When you create
            a QR code, it is generated instantly in your browser using JavaScript. This means your data
            is never sent to any server, ensuring complete privacy. You can download your QR codes in
            multiple formats including PNG, SVG, JPEG, and WebP at resolutions up to 4096x4096 pixels.
          </p>
          <h2>Technology</h2>
          <p>
            Built with Next.js, React, and Tailwind CSS, Live QR Code is a modern Progressive Web
            Application optimized for speed and accessibility. Our QR engine supports advanced styling
            with customizable dot patterns, corner styles, gradient colors, and error correction levels
            ranging from 7% to 30% data recovery.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <v.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="font-bold text-sm mb-1">{v.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
