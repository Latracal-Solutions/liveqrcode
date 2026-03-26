import { QrCode, Globe, Wifi, UserRound, MessageCircle, Instagram, Mail, Bitcoin, CalendarDays, Smartphone, Star, CreditCard, Phone, MapPin, Sparkles, Shield, Zap, Palette, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { QRAnatomyDiagram, ErrorCorrectionDiagram, StaticVsDynamicDiagram, HowToUseDiagram, PrintSizeGuideDiagram } from "./article-illustrations";

// ============================================================
// QR TYPE SHOWCASE DATA
// ============================================================

const qrTypeShowcase = [
  {
    icon: Globe, name: "URL QR Code", slug: "url",
    description: "Convert any website link into a scannable QR code. Perfect for marketing materials, business cards, flyers, and product packaging. Users simply scan and are taken directly to your website.",
    useCases: ["Marketing campaigns", "Business cards", "Product packaging", "Restaurant table tents"],
  },
  {
    icon: Wifi, name: "WiFi QR Code", slug: "wifi",
    description: "Share your WiFi network credentials instantly. Guests scan the QR code and connect automatically without typing passwords. Supports WPA/WPA2, WEP, and open networks.",
    useCases: ["Hotels & Airbnb", "Offices & coworking", "Restaurants & cafes", "Home guest access"],
  },
  {
    icon: UserRound, name: "vCard QR Code", slug: "vcard",
    description: "Create digital business cards that save contact information directly to the scanner's phone. Include name, title, company, phone, email, website, and address.",
    useCases: ["Business networking", "Conference badges", "Email signatures", "Presentations"],
  },
  {
    icon: MessageCircle, name: "WhatsApp QR Code", slug: "whatsapp",
    description: "Let customers message you on WhatsApp with one scan. Pre-fill a custom message to streamline conversations and customer support inquiries.",
    useCases: ["Customer support", "Order inquiries", "Sales outreach", "Event RSVPs"],
  },
  {
    icon: Instagram, name: "Instagram QR Code", slug: "instagram",
    description: "Grow your Instagram following by making it effortless for people to find and follow your profile. Ideal for in-store displays, product labels, and events.",
    useCases: ["Retail stores", "Product labels", "Event displays", "Influencer marketing"],
  },
  {
    icon: Mail, name: "Email QR Code", slug: "email",
    description: "Generate a QR code that opens a pre-composed email with recipient, subject, and body text already filled in. Simplify feedback collection and contact requests.",
    useCases: ["Feedback forms", "Support requests", "Newsletter signups", "Job applications"],
  },
  {
    icon: Bitcoin, name: "Bitcoin QR Code", slug: "bitcoin",
    description: "Accept cryptocurrency payments with a scannable QR code. Supports Bitcoin, Ethereum, and Litecoin with optional pre-filled amounts and payment labels.",
    useCases: ["Crypto payments", "Donations", "Invoicing", "Point of sale"],
  },
  {
    icon: CalendarDays, name: "Event QR Code", slug: "event",
    description: "Create QR codes that add events directly to the scanner's calendar app. Include event name, date, time, location, and description for seamless scheduling.",
    useCases: ["Event invitations", "Conference schedules", "Webinar links", "Appointment booking"],
  },
  {
    icon: Smartphone, name: "App Store QR Code", slug: "appstore",
    description: "Direct users to download your app from the iOS App Store or Google Play Store. Smart QR codes can detect the device and redirect to the correct store automatically.",
    useCases: ["App launches", "Product inserts", "Print ads", "In-store displays"],
  },
  {
    icon: Star, name: "Google Review QR Code", slug: "google-review",
    description: "Make it easy for customers to leave Google reviews. Place QR codes on receipts, table tents, or follow-up emails to boost your online reputation and local SEO.",
    useCases: ["Restaurants", "Local businesses", "Service providers", "Healthcare offices"],
  },
  {
    icon: CreditCard, name: "PayPal QR Code", slug: "paypal",
    description: "Accept PayPal payments instantly with a QR code. Set a pre-filled amount and currency for quick checkout at markets, events, or small business transactions.",
    useCases: ["Market vendors", "Freelancers", "Small businesses", "Charity donations"],
  },
  {
    icon: MapPin, name: "Google Maps QR Code", slug: "google-maps",
    description: "Help people find your location with a QR code that opens Google Maps with directions. Perfect for businesses, events, and any physical location visitors need to find.",
    useCases: ["Storefronts", "Event venues", "Delivery instructions", "Tourism guides"],
  },
];

// ============================================================
// HOW-TO STEPS
// ============================================================

const howToSteps = [
  {
    step: 1,
    title: "Choose your QR code type",
    description: "Select from 27+ QR code types including URL, WiFi, vCard, WhatsApp, Instagram, Email, Bitcoin, Event, App Store, Google Review, PayPal, UPI, and more. Each type is optimized for its specific use case.",
  },
  {
    step: 2,
    title: "Enter your content",
    description: "Fill in the relevant information for your chosen QR type. For URLs, paste your link. For WiFi, enter your network name and password. For vCards, add your contact details. The form adapts to each type automatically.",
  },
  {
    step: 3,
    title: "Customize the design",
    description: "Make your QR code unique with 12 style presets, 6 dot patterns, gradient colors, custom corner styles, logo upload, frame labels, and even AI-generated artistic backgrounds. Our real-time preview shows changes instantly.",
  },
  {
    step: 4,
    title: "Download and share",
    description: "Export your QR code in PNG, SVG, JPEG, or WebP format at resolutions up to 4096x4096 pixels. Perfect for everything from social media posts to large-format print materials like billboards and banners.",
  },
];

// ============================================================
// FAQS
// ============================================================

const faqs = [
  {
    q: "Is Live QR Code really free?",
    a: "Yes, Live QR Code is 100% free with no hidden fees, no premium tiers, and no watermarks. Every feature including custom patterns, gradient colors, logo upload, frame labels, and AI art backgrounds is completely free to use. We believe professional QR code tools should be accessible to everyone.",
  },
  {
    q: "What types of QR codes can I create?",
    a: "Live QR Code supports 27+ QR code types including URL, Text, Email, Phone, SMS, WiFi, vCard, WhatsApp, Instagram, X/Twitter, YouTube, LinkedIn, TikTok, Facebook, Telegram, Snapchat, Pinterest, Messenger, Spotify, Event/Calendar, Location, Google Maps, Bitcoin/Crypto, App Store, PayPal, Google Review, and UPI payments.",
  },
  {
    q: "Do I need to sign up or create an account?",
    a: "No. Live QR Code works entirely without registration. You can create, customize, and download QR codes immediately with no sign-up, no email required, and no account needed. Your data stays in your browser and is never sent to our servers.",
  },
  {
    q: "What file formats can I download?",
    a: "You can download QR codes in four formats: PNG (best for web and social media), SVG (best for print and scaling), JPEG (universal compatibility), and WebP (modern web optimization). All formats support resolutions from 512px to 4096px for crystal-clear quality at any size.",
  },
  {
    q: "Can I add a logo to my QR code?",
    a: "Yes! You can upload any logo or image to be displayed in the center of your QR code. Our tool automatically compresses the image for optimal performance and adjusts the error correction level to ensure the QR code remains scannable even with a logo overlay.",
  },
  {
    q: "What customization options are available?",
    a: "Live QR Code offers extensive customization: 6 dot patterns (Square, Rounded, Dots, Smooth, Classy, Elegant), 3 corner square styles, 2 corner dot styles, 12 style presets, solid and gradient colors (linear and radial), custom corner colors, logo upload with size control, 6 frame styles with customizable label text, background image upload, AI art backgrounds, adjustable error correction (L/M/Q/H), and quiet zone margin control.",
  },
  {
    q: "Do the QR codes expire?",
    a: "No. QR codes created with Live QR Code are static codes that never expire. Once generated, they will work forever as long as the destination (URL, email, phone number, etc.) remains active. There are no time limits or scan limits.",
  },
  {
    q: "Is my data safe and private?",
    a: "Absolutely. Live QR Code generates all QR codes directly in your browser using client-side JavaScript. Your data (URLs, WiFi passwords, contact information, etc.) never leaves your device and is never transmitted to or stored on our servers. The only exception is the optional AI Art feature, which sends your text prompt (not your QR data) to generate an image.",
  },
  {
    q: "Can I use the QR codes for commercial purposes?",
    a: "Yes. QR codes you create with Live QR Code are yours to use however you like, including for commercial purposes, marketing campaigns, product packaging, business cards, and any other professional use. There are no attribution requirements.",
  },
  {
    q: "What is the best QR code size for printing?",
    a: "For print materials, we recommend downloading at 2048px or 4096px resolution in SVG or PNG format. The minimum recommended print size is 2cm x 2cm (about 0.8 x 0.8 inches). For billboards or large displays, use SVG format which scales infinitely without losing quality. Always test your QR code at the intended print size before mass production.",
  },
  {
    q: "What is error correction and which level should I use?",
    a: "Error correction determines how much of the QR code can be damaged or obscured while still remaining scannable. Low (L) recovers 7% and produces the smallest codes. Medium (M) recovers 15% and is the standard choice. Quartile (Q) recovers 25% and is recommended when adding logos. High (H) recovers 30% and is best for QR codes with logos or AI art backgrounds.",
  },
  {
    q: "How do I create a WiFi QR code?",
    a: "Select the WiFi type, enter your network name (SSID), password, and encryption type (WPA/WPA2, WEP, or None). You can also mark the network as hidden. When someone scans this QR code, their phone will automatically connect to your WiFi network without typing the password.",
  },
  {
    q: "What is the scannability score?",
    a: "The scannability score is a real-time quality indicator that rates your QR code from 0-100% based on color contrast, error correction level, data density, logo presence, and background complexity. An Excellent score (80-100%) means your QR code will scan reliably on virtually all devices. We also show specific warnings if any settings might reduce scannability.",
  },
  {
    q: "Can I create QR codes in bulk?",
    a: "Currently, Live QR Code focuses on creating individual high-quality QR codes. For bulk generation needs, you can use our tool's API or contact us for custom solutions. Each QR code can be fully customized before downloading.",
  },
  {
    q: "What makes Live QR Code different from other generators?",
    a: "Live QR Code combines the most features of any free QR generator: 27+ types, 6 dot patterns, gradient colors, logo upload, frame labels, AI art backgrounds, scannability scoring, and exports up to 4096px — all completely free with no sign-up. Most competitors charge $5-15/month for features we offer for free. Plus, your data never leaves your browser, ensuring complete privacy.",
  },
];

// ============================================================
// USE CASES
// ============================================================

const useCases = [
  {
    title: "For Businesses",
    items: [
      "Product packaging with URL QR codes linking to manuals, registration, or support",
      "Business cards with vCard QR codes for instant contact saving",
      "Storefront windows with Google Maps QR codes for easy navigation",
      "Receipts with Google Review QR codes to collect customer feedback",
      "Payment collection with PayPal, UPI, or Bitcoin QR codes",
    ],
  },
  {
    title: "For Restaurants & Hospitality",
    items: [
      "Table tents with menu URL QR codes for contactless dining",
      "Guest WiFi QR codes in hotel rooms and lobbies",
      "Google Review QR codes on receipts and table cards",
      "Event QR codes for reservations and special dining events",
      "Instagram QR codes to grow your restaurant's social following",
    ],
  },
  {
    title: "For Marketing & Events",
    items: [
      "Flyers and posters with URL QR codes to landing pages",
      "Event badges with vCard QR codes for networking",
      "Social media QR codes on print ads to drive followers",
      "App Store QR codes in magazine ads for app downloads",
      "WhatsApp QR codes for instant customer engagement",
    ],
  },
  {
    title: "For Personal Use",
    items: [
      "Share your WiFi password with guests effortlessly",
      "Create digital business cards for job fairs and meetups",
      "Share your Spotify playlist or Instagram profile at parties",
      "Send Bitcoin or crypto to friends with payment QR codes",
      "Share your location via Google Maps QR code for gatherings",
    ],
  },
];

// ============================================================
// COMPONENT
// ============================================================

export function SEOContent() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* How to Create Section */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="how-to">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            How to Create a QR Code — Free in 4 Steps
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Generate professional, fully customizable QR codes in seconds. No sign-up required, no software to install.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howToSteps.map((s) => (
            <div key={s.step} className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-lg mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Visual step-by-step diagram */}
        <HowToUseDiagram />
      </section>

      {/* QR Code Types Showcase */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="qr-types">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            27+ QR Code Types — Every Type You Need
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            From website URLs to cryptocurrency payments, Live QR Code supports the widest range of QR code types of any free generator.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qrTypeShowcase.map((type) => (
            <div key={type.slug} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow" id={type.slug}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <type.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <h3 className="font-bold text-sm">{type.name}</h3>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">{type.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {type.useCases.map((uc) => (
                  <span key={uc} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="why-choose">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Why Choose Live QR Code?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            The most feature-rich free QR code generator available. Here&apos;s what sets us apart from every competitor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "100% Free, No Hidden Costs", desc: "Every feature is free. No premium tier, no watermarks, no scan limits. Other generators charge $5-15/month for features we offer for free." },
            { icon: Zap, title: "Instant & Private", desc: "QR codes are generated instantly in your browser. Your data never touches our servers. Complete privacy guaranteed — no tracking, no data collection." },
            { icon: Sparkles, title: "AI-Powered Art", desc: "Generate stunning artistic backgrounds using AI. Create QR codes that are true works of art while remaining perfectly scannable." },
            { icon: Palette, title: "Unmatched Customization", desc: "6 dot patterns, gradient colors, corner styles, frame labels, logo upload, 12 presets, and more. The deepest customization of any free QR generator." },
            { icon: Download, title: "Print-Ready Exports", desc: "Download in PNG, SVG, JPEG, or WebP at up to 4096x4096 pixels. SVG provides infinite scalability for billboards and large-format printing." },
            { icon: CheckCircle2, title: "Scannability Guarantee", desc: "Our real-time scannability score ensures your QR code works. Get warnings about low contrast, oversized logos, and other issues before downloading." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <item.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="use-cases">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            QR Code Use Cases — Who Uses QR Codes?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            QR codes are used by millions of businesses, marketers, and individuals worldwide. Here are the most popular use cases.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-base mb-4">{uc.title}</h3>
              <ul className="space-y-2.5">
                {uc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="comparison">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Live QR Code vs Other QR Code Generators
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            See how Live QR Code compares to popular alternatives like QR Code AI, QR TIGER, QR Code Monkey, and ME-QR.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                <th className="text-left px-4 py-3 font-semibold">Feature</th>
                <th className="text-center px-4 py-3 font-semibold">Live QR Code</th>
                <th className="text-center px-4 py-3 font-semibold">Others (Avg)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "Free forever", "$5-15/mo"],
                ["QR Code Types", "27+", "10-20"],
                ["Custom Dot Patterns", "6 styles", "1-3 styles"],
                ["Gradient Colors", "Yes (linear + radial)", "Premium only"],
                ["Logo Upload", "Free", "Premium only"],
                ["Frame & Labels", "6 styles + custom text", "Premium only"],
                ["AI Art Backgrounds", "Free", "Premium only"],
                ["Scannability Score", "Yes, real-time", "No"],
                ["Export Formats", "PNG, SVG, JPEG, WebP", "PNG, SVG"],
                ["Max Resolution", "4096 x 4096px", "1024-2048px"],
                ["Sign-up Required", "No", "Yes"],
                ["Watermarks", "Never", "Free tier has watermarks"],
                ["Data Privacy", "100% client-side", "Server-processed"],
                ["QR Code Expiry", "Never expires", "Free codes may expire"],
              ].map(([feature, us, them]) => (
                <tr key={feature} className="border-t border-zinc-100 dark:border-zinc-800">
                  <td className="px-4 py-2.5 font-medium text-zinc-700 dark:text-zinc-300">{feature}</td>
                  <td className="px-4 py-2.5 text-center text-emerald-600 dark:text-emerald-400 font-semibold">{us}</td>
                  <td className="px-4 py-2.5 text-center text-zinc-400">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Long-Form Article */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="guide">
        <article className="prose prose-zinc dark:prose-invert prose-sm max-w-none">
          <h2>The Complete Guide to QR Codes in 2026</h2>
          <p>
            QR codes (Quick Response codes) have become an essential tool for businesses, marketers, and individuals
            worldwide. Originally invented in 1994 by Denso Wave for tracking automotive parts, QR codes have
            evolved into a universal bridge between the physical and digital worlds. In 2026, QR code usage
            continues to grow exponentially, with over 11 million QR codes scanned daily in the United States alone.
          </p>

          <h3>What is a QR Code?</h3>
          <p>
            A QR code is a two-dimensional barcode that can store various types of data including URLs, text,
            contact information, WiFi credentials, and payment details. Unlike traditional barcodes that store
            data in horizontal lines, QR codes store data in both horizontal and vertical patterns, allowing
            them to hold significantly more information — up to 7,089 numeric characters or 4,296 alphanumeric
            characters.
          </p>

          <QRAnatomyDiagram />

          <h3>Static vs. Dynamic QR Codes</h3>
          <p>
            <strong>Static QR codes</strong> have their data encoded directly into the pattern. Once created,
            the data cannot be changed. They work offline, never expire, and don&apos;t require any server
            infrastructure. Live QR Code generates static QR codes, which means your codes will work forever
            with no maintenance required.
          </p>
          <p>
            <strong>Dynamic QR codes</strong> contain a short redirect URL that points to a server which then
            forwards the user to the actual destination. This allows the destination to be changed after the QR
            code is printed, and enables scan tracking. However, dynamic codes require server infrastructure,
            may have scan limits, and can stop working if the service shuts down.
          </p>

          <StaticVsDynamicDiagram />

          <h3>QR Code Error Correction</h3>
          <p>
            One of the most important features of QR codes is error correction, which allows the code to be
            read even when partially damaged or obscured. QR codes use Reed-Solomon error correction with four
            levels:
          </p>
          <ul>
            <li><strong>Level L (Low):</strong> Recovers up to 7% of data. Produces the smallest, least dense QR codes.</li>
            <li><strong>Level M (Medium):</strong> Recovers up to 15% of data. The standard recommendation for most use cases.</li>
            <li><strong>Level Q (Quartile):</strong> Recovers up to 25% of data. Recommended when adding logos or in challenging scanning conditions.</li>
            <li><strong>Level H (High):</strong> Recovers up to 30% of data. Required when using logos, AI backgrounds, or when codes will be printed on textured surfaces.</li>
          </ul>

          <ErrorCorrectionDiagram />

          <h3>Best Practices for QR Code Design</h3>
          <p>
            Creating an effective QR code requires balancing aesthetics with scannability. Here are the key
            best practices:
          </p>
          <ul>
            <li><strong>Maintain high contrast:</strong> The foreground should be significantly darker than the background. A minimum contrast ratio of 4:1 is recommended.</li>
            <li><strong>Keep the quiet zone:</strong> Maintain a white border (quiet zone) around the QR code equal to at least 4 modules wide. Live QR Code&apos;s margin control lets you adjust this.</li>
            <li><strong>Test before printing:</strong> Always scan your QR code with multiple devices (iPhone, Android, different apps) before mass production.</li>
            <li><strong>Use appropriate error correction:</strong> Increase error correction when adding logos or artistic elements.</li>
            <li><strong>Size matters:</strong> The minimum recommended size is 2cm x 2cm for close-range scanning. For scanning at a distance, use the formula: scanning distance ÷ 10 = minimum QR code size.</li>
            <li><strong>Don&apos;t invert colors:</strong> Dark modules on a light background is the standard and most reliable configuration.</li>
          </ul>

          <h3>QR Codes for Business: ROI and Statistics</h3>
          <p>
            QR codes deliver measurable business results. Studies show that QR code interactions increased by
            323% between 2021 and 2025. Restaurants using QR code menus report 30% faster table turnover.
            Businesses using QR codes on product packaging see 20-30% higher engagement with post-purchase content.
            Google Review QR codes can increase review volume by up to 400%.
          </p>

          <h3>QR Codes and Print Materials</h3>
          <p>
            When using QR codes on print materials, consider these guidelines for optimal results:
          </p>
          <ul>
            <li><strong>Business cards:</strong> Minimum 1.5cm x 1.5cm, use vCard type with error correction Q or H</li>
            <li><strong>Flyers and brochures:</strong> 3-5cm recommended, URL type with clear call-to-action text</li>
            <li><strong>Posters:</strong> At least 5cm x 5cm, consider adding a frame label like &quot;Scan Me&quot;</li>
            <li><strong>Billboards:</strong> Use SVG format for infinite scalability, minimum 30cm x 30cm for highway viewing</li>
            <li><strong>Product labels:</strong> Test at actual print size on the actual surface material</li>
          </ul>

          <PrintSizeGuideDiagram />

          <h3>The Future of QR Codes</h3>
          <p>
            QR codes continue to evolve. Trends for 2026 and beyond include AI-generated artistic QR codes that
            blend into visual designs, augmented reality experiences triggered by QR scans, NFC/QR hybrid tags,
            and standardized GS1 Digital Link QR codes for supply chain management. As smartphone cameras become
            more capable, QR codes are being scanned from greater distances and at more extreme angles than ever before.
          </p>
        </article>
      </section>

      {/* Multi-Language QR Code Generator Section */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="languages">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Free QR Code Generator — Available Worldwide
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Live QR Code is used by millions of people across the globe. Create QR codes in any language — our tool works universally.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { lang: "English", native: "English", term: "QR Code Generator", flag: "🇺🇸" },
            { lang: "Spanish", native: "Español", term: "Generador de códigos QR", flag: "🇪🇸" },
            { lang: "French", native: "Français", term: "Générateur de code QR", flag: "🇫🇷" },
            { lang: "German", native: "Deutsch", term: "QR-Code-Generator", flag: "🇩🇪" },
            { lang: "Portuguese", native: "Português", term: "Gerador de código QR", flag: "🇧🇷" },
            { lang: "Italian", native: "Italiano", term: "Generatore di codice QR", flag: "🇮🇹" },
            { lang: "Dutch", native: "Nederlands", term: "QR-code generator", flag: "🇳🇱" },
            { lang: "Russian", native: "Русский", term: "Генератор QR-кодов", flag: "🇷🇺" },
            { lang: "Japanese", native: "日本語", term: "QRコードジェネレーター", flag: "🇯🇵" },
            { lang: "Korean", native: "한국어", term: "QR 코드 생성기", flag: "🇰🇷" },
            { lang: "Chinese", native: "中文", term: "二维码生成器", flag: "🇨🇳" },
            { lang: "Arabic", native: "العربية", term: "مولد رمز الاستجابة السريعة QR", flag: "🇸🇦" },
            { lang: "Hindi", native: "हिन्दी", term: "QR कोड जनरेटर", flag: "🇮🇳" },
            { lang: "Turkish", native: "Türkçe", term: "QR kod oluşturucu", flag: "🇹🇷" },
            { lang: "Polish", native: "Polski", term: "Generator kodów QR", flag: "🇵🇱" },
            { lang: "Thai", native: "ไทย", term: "เครื่องสร้างคิวอาร์โค้ด", flag: "🇹🇭" },
            { lang: "Vietnamese", native: "Tiếng Việt", term: "Tạo mã QR miễn phí", flag: "🇻🇳" },
            { lang: "Indonesian", native: "Bahasa", term: "Pembuat kode QR gratis", flag: "🇮🇩" },
            { lang: "Swedish", native: "Svenska", term: "QR-kodgenerator", flag: "🇸🇪" },
            { lang: "Czech", native: "Čeština", term: "Generátor QR kódů", flag: "🇨🇿" },
            { lang: "Danish", native: "Dansk", term: "QR-kode generator", flag: "🇩🇰" },
            { lang: "Greek", native: "Ελληνικά", term: "Γεννήτρια κωδικών QR", flag: "🇬🇷" },
            { lang: "Hebrew", native: "עברית", term: "מחולל קוד QR", flag: "🇮🇱" },
            { lang: "Romanian", native: "Română", term: "Generator de coduri QR", flag: "🇷🇴" },
            { lang: "Hungarian", native: "Magyar", term: "QR-kód generátor", flag: "🇭🇺" },
            { lang: "Finnish", native: "Suomi", term: "QR-koodigeneraattori", flag: "🇫🇮" },
            { lang: "Norwegian", native: "Norsk", term: "QR-kode generator", flag: "🇳🇴" },
            { lang: "Ukrainian", native: "Українська", term: "Генератор QR-кодів", flag: "🇺🇦" },
            { lang: "Malay", native: "Melayu", term: "Penjana kod QR percuma", flag: "🇲🇾" },
            { lang: "Filipino", native: "Filipino", term: "Libreng QR code generator", flag: "🇵🇭" },
            { lang: "Bengali", native: "বাংলা", term: "QR কোড জেনারেটর", flag: "🇧🇩" },
            { lang: "Urdu", native: "اردو", term: "QR کوڈ جنریٹر", flag: "🇵🇰" },
          ].map((item) => (
            <div key={item.lang} className="group p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-base" role="img" aria-label={item.lang}>{item.flag}</span>
                <div>
                  <p className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{item.native}</p>
                  <p className="text-[9px] text-zinc-400 leading-tight">{item.lang}</p>
                </div>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium leading-snug" lang={item.lang.toLowerCase().slice(0, 2)}>
                {item.term}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-400 mt-6 max-w-2xl mx-auto">
          Live QR Code works in every language. Simply enter your content in any language and our generator creates a perfectly scannable QR code. All 27+ QR code types support Unicode text, making it the ideal <strong className="text-zinc-500">free QR code generator</strong> for users worldwide — from <em>generador de códigos QR</em> to <em>QRコードジェネレーター</em> to <em>二维码生成器</em>.
        </p>
      </section>

      {/* FAQ Section with Schema Markup */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about creating QR codes with Live QR Code.
          </p>
        </div>
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
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

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
          Ready to Create Your QR Code?
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto mb-6">
          Join millions of users who trust Live QR Code. Start creating stunning, professional QR codes in seconds — completely free.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
        >
          Create QR Code Now <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
