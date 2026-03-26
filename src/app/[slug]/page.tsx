import { notFound } from "next/navigation";
import Link from "next/link";
import { QR_LANDING_PAGES } from "@/src/lib/qr-landing-data";
import { PageShell } from "@/src/components/page-shell";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

// Static pages that should NOT be matched by this dynamic route
const RESERVED_SLUGS = ["about", "contact", "privacy", "terms", "disclaimer"];

export async function generateStaticParams() {
  return QR_LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = QR_LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: { title: page.metaTitle, description: page.metaDescription },
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function QRTypeLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (RESERVED_SLUGS.includes(slug)) notFound();
  const page = QR_LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-700 dark:text-zinc-300">{page.title}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            {page.h1}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {page.intro}
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            >
              Create {page.title.replace("Free ", "")} Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* What Is */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{page.whatIs.heading}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{page.whatIs.content}</p>
        </section>

        {/* How To */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Create a {page.title.replace("Free ", "")}</h2>
          <div className="space-y-4">
            {page.howTo.steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefits of {page.title.replace("Free ", "")}s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.benefits.map((b) => (
              <div key={b.title} className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
          <div className="space-y-3">
            {page.bestPractices.map((bp) => (
              <div key={bp} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{bp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-zinc-400 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-xs text-zinc-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6">
          <h2 className="text-2xl font-extrabold mb-3">Ready to Create Your {page.title.replace("Free ", "")}?</h2>
          <p className="text-zinc-300 dark:text-zinc-600 text-sm mb-6 max-w-md mx-auto">
            100% free, no sign-up required. Create professional QR codes with custom patterns, colors, logos, and frames.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: page.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: `How to Create a ${page.title.replace("Free ", "")}`,
              step: page.howTo.steps.map((text, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                text,
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://liveqrcode.com" },
                { "@type": "ListItem", position: 2, name: page.title, item: `https://liveqrcode.com/${page.slug}` },
              ],
            }),
          }}
        />
      </div>
    </PageShell>
  );
}
