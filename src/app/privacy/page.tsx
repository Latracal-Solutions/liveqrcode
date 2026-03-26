import { PageShell } from "@/src/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Live QR Code",
  description: "Privacy Policy for Live QR Code. Learn how we handle your data. Spoiler: we don't collect or store any personal data.",
  openGraph: {
    title: "Privacy Policy - Live QR Code",
    description: "Learn how Live QR Code handles your data and protects your privacy.",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-400 mb-10">Last updated: March 26, 2026</p>

        <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none">
          <h2>Introduction</h2>
          <p>
            Live QR Code (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data.
            This privacy policy explains how we handle information when you use our QR code generator at liveqrcode.com.
          </p>

          <h2>Data We Collect</h2>
          <h3>QR Code Data</h3>
          <p>
            <strong>We do not collect or store any data you enter into our QR code generator.</strong> All QR code
            generation happens entirely in your browser (client-side). The content you enter (URLs, text, WiFi
            credentials, contact information, etc.) never leaves your device and is never transmitted to our servers.
          </p>

          <h3>Analytics Data</h3>
          <p>
            We may use privacy-respecting analytics tools to understand how our website is used. This may include:
          </p>
          <ul>
            <li>Page views and general usage patterns</li>
            <li>Device type and browser information</li>
            <li>Approximate geographic location (country/region level)</li>
          </ul>
          <p>
            This data is aggregated and anonymized. We do not track individual users or create user profiles.
          </p>

          <h3>Cookies</h3>
          <p>
            We use minimal, essential cookies for basic website functionality. We do not use tracking cookies
            or third-party advertising cookies beyond what our advertising partners may require.
          </p>

          <h2>Third-Party Services</h2>
          <h3>AI Art Generation</h3>
          <p>
            If you use the AI Art Background feature, your text prompt (not your QR code data) is sent to
            Google&apos;s Gemini API to generate an image. This is the only feature that transmits data to an
            external service. Please review Google&apos;s privacy policy for how they handle API requests.
          </p>
          <h3>Advertising</h3>
          <p>
            We may display advertisements through Google AdSense or similar services. These services may use
            cookies to serve relevant ads. You can opt out of personalized advertising through your browser
            settings or Google&apos;s ad personalization settings.
          </p>

          <h2>Data Storage</h2>
          <p>
            We do not maintain any databases containing user data. Your QR code designs, uploaded logos, and
            preferences are stored only in your browser&apos;s local storage and are never transmitted to us.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our service is not directed to children under 13. We do not knowingly collect personal information
            from children under 13 years of age.
          </p>

          <h2>Your Rights</h2>
          <p>Since we do not collect personal data, there is typically no data for us to provide, modify, or delete. However, you have the right to:</p>
          <ul>
            <li>Clear your browser&apos;s local storage to remove any locally stored preferences</li>
            <li>Use browser privacy settings to block cookies</li>
            <li>Contact us with any privacy-related questions or concerns</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting
            the new privacy policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us through our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
