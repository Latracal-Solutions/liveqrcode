import { PageShell } from "@/src/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Live QR Code",
  description: "Disclaimer for Live QR Code. Important information about the use of our free QR code generator service.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer - Live QR Code",
    description: "Important disclaimer information about the Live QR Code free QR generator service.",
  },
};

export default function DisclaimerPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
          Disclaimer
        </h1>
        <p className="text-sm text-zinc-400 mb-10">Last updated: March 26, 2026</p>

        <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none">
          <h2>General Disclaimer</h2>
          <p>
            The information and tools provided by Live QR Code (liveqrcode.com) are for general informational
            and utility purposes only. While we strive to provide accurate and functional QR code generation tools,
            we make no representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, or suitability of the QR codes generated through our service.
          </p>

          <h2>No Guarantee of Scannability</h2>
          <p>
            While our tool includes a scannability score feature to help you create scannable QR codes, we cannot
            guarantee that every QR code generated will be scannable by all devices in all conditions. Factors
            affecting scannability include but are not limited to: color contrast, print quality, print size,
            lighting conditions, camera quality, and QR code reader software. We recommend testing your QR codes
            on multiple devices before printing or distributing them at scale.
          </p>

          <h2>AI-Generated Content</h2>
          <p>
            Our AI Art Background feature uses third-party AI services (Google Gemini API) to generate images.
            We do not control the output of these AI models and cannot guarantee that AI-generated images will
            be free of errors, biases, or inappropriate content. Users are responsible for reviewing AI-generated
            content before use. AI-generated backgrounds may affect QR code scannability.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            QR codes generated using our service may contain links to third-party websites. We have no control
            over the content, privacy policies, or practices of any third-party websites or services. We do not
            endorse or assume any responsibility for any third-party sites, information, materials, products,
            or services linked through QR codes created with our tool.
          </p>

          <h2>Professional Advice</h2>
          <p>
            Our service is a utility tool and does not constitute professional advice. For specific requirements
            related to QR codes in regulated industries (healthcare, finance, government), please consult with
            appropriate professionals to ensure compliance with applicable standards and regulations.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we make every effort to keep our website and tools up to date, we make no representations
            or warranties that the information on our site, including our About page, blog posts, and FAQs,
            is accurate, complete, or current. Information may change without notice.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Live QR Code, its creators, or its contributors be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising from the use of or inability to use
            our service, including but not limited to:
          </p>
          <ul>
            <li>QR codes that fail to scan or redirect to incorrect destinations</li>
            <li>Business losses resulting from non-functional QR codes</li>
            <li>Issues with AI-generated backgrounds or images</li>
            <li>Data entry errors in QR code content</li>
            <li>Printing or distribution of QR codes with errors</li>
          </ul>

          <h2>User Responsibility</h2>
          <p>
            Users are solely responsible for the content they encode in QR codes created with our service.
            Users must ensure that:
          </p>
          <ul>
            <li>QR code content complies with all applicable laws and regulations</li>
            <li>They have the right to use any logos or images uploaded to our service</li>
            <li>QR codes are tested before mass printing or distribution</li>
            <li>URLs and contact information encoded in QR codes are accurate and up to date</li>
          </ul>

          <h2>Advertising Disclaimer</h2>
          <p>
            Live QR Code may display advertisements through third-party advertising networks. These advertisements
            are provided by third-party companies and we do not endorse or guarantee the accuracy of advertising
            claims. The presence of advertisements does not imply endorsement by Live QR Code.
          </p>

          <h2>Changes to This Disclaimer</h2>
          <p>
            We may update this disclaimer from time to time. We encourage users to review this page periodically
            for any changes. Changes are effective immediately upon posting to this page.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this disclaimer, please visit our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
