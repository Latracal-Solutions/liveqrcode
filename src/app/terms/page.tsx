import { PageShell } from "@/src/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Live QR Code",
  description: "Terms of Service for Live QR Code. Read our terms and conditions for using our free QR code generator.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service - Live QR Code",
    description: "Terms and conditions for using Live QR Code, the free AI QR code generator.",
  },
};

export default function TermsPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-zinc-400 mb-10">Last updated: March 26, 2026</p>

        <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Live QR Code (liveqrcode.com), you agree to be bound by these Terms of
            Service. If you do not agree with any part of these terms, please do not use our service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Live QR Code provides a free, browser-based QR code generator that allows users to create
            customizable QR codes with various styling options including patterns, colors, gradients, logos,
            frames, and AI-generated backgrounds. The service generates QR codes entirely client-side in your
            web browser.
          </p>

          <h2>3. Free Service</h2>
          <p>
            Live QR Code is provided free of charge. All features are available without registration, subscription,
            or payment. We reserve the right to introduce premium features in the future, but existing free
            features will remain free.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to use Live QR Code to:</p>
          <ul>
            <li>Create QR codes that link to malicious, illegal, or harmful content</li>
            <li>Generate QR codes for phishing, fraud, or deceptive purposes</li>
            <li>Distribute malware or viruses through QR codes</li>
            <li>Violate any applicable local, national, or international law</li>
            <li>Infringe upon the intellectual property rights of others</li>
            <li>Create QR codes containing content that is defamatory, obscene, or offensive</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <h3>Your Content</h3>
          <p>
            You retain full ownership of the QR codes you create using our service. You are free to use,
            distribute, and modify your QR codes for any lawful purpose, including commercial use.
          </p>
          <h3>Our Content</h3>
          <p>
            The Live QR Code website, including its design, code, features, and branding, is protected by
            intellectual property laws. You may not copy, modify, or distribute our website code or branding
            without permission.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            Live QR Code is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either
            express or implied. We do not guarantee that:
          </p>
          <ul>
            <li>The service will be uninterrupted or error-free</li>
            <li>QR codes will be scannable by all devices in all conditions</li>
            <li>AI-generated backgrounds will always be available or produce expected results</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Live QR Code shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of the service,
            including but not limited to damages from QR codes that fail to scan or link to incorrect destinations.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            Our AI Art Background feature uses Google&apos;s Gemini API. Use of this feature is subject to
            Google&apos;s terms of service and AI usage policies. We are not responsible for the content generated
            by third-party AI services.
          </p>

          <h2>9. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon
            posting to this page. Your continued use of the service after changes constitutes acceptance of the
            modified terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable laws, without regard
            to conflict of law principles.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these terms, please visit our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
