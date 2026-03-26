import { PageShell } from "@/src/components/page-shell";
import { Mail, MessageSquare, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Live QR Code",
  description: "Get in touch with the Live QR Code team. We'd love to hear your feedback, feature requests, or questions about our free QR code generator.",
  openGraph: {
    title: "Contact Us - Live QR Code",
    description: "Get in touch with the Live QR Code team for feedback, feature requests, or support.",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Have feedback, a feature request, or a question? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center">
            <Mail className="w-6 h-6 mx-auto mb-3 text-zinc-600 dark:text-zinc-400" />
            <h3 className="font-bold text-sm mb-1">Email</h3>
            <p className="text-xs text-zinc-500">hello@liveqrcode.com</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center">
            <MessageSquare className="w-6 h-6 mx-auto mb-3 text-zinc-600 dark:text-zinc-400" />
            <h3 className="font-bold text-sm mb-1">Feedback</h3>
            <p className="text-xs text-zinc-500">Submit via GitHub Issues</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center">
            <Globe className="w-6 h-6 mx-auto mb-3 text-zinc-600 dark:text-zinc-400" />
            <h3 className="font-bold text-sm mb-1">Social</h3>
            <p className="text-xs text-zinc-500">Follow us on X / Twitter</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Name</label>
                <input type="text" placeholder="Your name"
                  className="w-full h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Email</label>
                <input type="email" placeholder="you@example.com"
                  className="w-full h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1.5">Subject</label>
              <select className="w-full h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20">
                <option>General Inquiry</option>
                <option>Feature Request</option>
                <option>Bug Report</option>
                <option>Business Partnership</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1.5">Message</label>
              <textarea rows={5} placeholder="Tell us what's on your mind..."
                className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 resize-none" />
            </div>
            <button type="submit"
              className="w-full sm:w-auto px-6 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 text-center">
          <h3 className="font-bold text-sm mb-2">Frequently Asked Questions</h3>
          <p className="text-xs text-zinc-500 mb-4">Before reaching out, check if your question is answered below.</p>
          <div className="text-left max-w-xl mx-auto space-y-4">
            {[
              { q: "Is Live QR Code really free?", a: "Yes, 100% free with no hidden fees. All features including custom patterns, gradients, logos, frames, and AI art are free forever." },
              { q: "Do you store my QR code data?", a: "No. All QR codes are generated in your browser. Your data never touches our servers." },
              { q: "Can I use the QR codes for commercial purposes?", a: "Absolutely. QR codes you create are yours to use however you like, including for business and commercial use." },
              { q: "What formats can I download?", a: "PNG, SVG, JPEG, and WebP at resolutions from 512px to 4096px." },
              { q: "Do the QR codes expire?", a: "No. Static QR codes generated by Live QR Code never expire." },
            ].map((faq) => (
              <div key={faq.q} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-xs mb-1">{faq.q}</h4>
                <p className="text-xs text-zinc-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
