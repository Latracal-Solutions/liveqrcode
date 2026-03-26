<div align="center">

# Live QR Code

### The Free, Open-Source AI QR Code Generator

Create beautiful, customizable QR codes with custom patterns, gradients, logos, frames, and AI-generated art.
27+ QR code types. No sign-up. No watermarks. No limits.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Latracal-Solutions/liveqrcode/blob/main/LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)](https://tailwindcss.com/)

[Live Demo](https://www.liveqrcode.com) &middot; [Report Bug](https://github.com/Latracal-Solutions/liveqrcode/issues) &middot; [Request Feature](https://github.com/Latracal-Solutions/liveqrcode/issues)

</div>

---

## Features

- **27+ QR Code Types** &mdash; URL, Text, Email, Phone, SMS, WiFi, vCard, WhatsApp, Instagram, YouTube, LinkedIn, TikTok, Facebook, Telegram, X/Twitter, Event, Location, Bitcoin, Ethereum, UPI, PayPal, Google Maps, Google Reviews, App Store, Spotify, Snapchat, Pinterest
- **Custom Dot Patterns** &mdash; Square, Rounded, Dots, Classy, Classy Rounded, Extra Rounded
- **Corner Styles** &mdash; Square, Rounded, Dots for both outer and inner corners
- **Color Customization** &mdash; Solid colors and gradient support for foreground and background
- **Logo Upload** &mdash; Add your brand logo to the center of any QR code with adjustable size
- **Frame Labels** &mdash; Add "Scan Me" or custom CTA text around your QR code
- **AI Art Backgrounds** &mdash; Generate artistic QR codes using AI (requires Gemini API key)
- **12+ Style Presets** &mdash; One-click professional styles including Classic, Modern, Dotted, Elegant, Bold, Ocean, Forest, Midnight, Sunset, Candy, Corporate, Neon
- **Scannability Score** &mdash; Real-time feedback on QR code readability
- **Multiple Export Formats** &mdash; PNG, SVG, JPEG
- **Mobile-First Design** &mdash; Fully responsive with floating download bar on mobile
- **Web Share API** &mdash; Native sharing on mobile devices
- **SEO Optimized** &mdash; Full meta tags, Open Graph, JSON-LD structured data, FAQ schema
- **100% Free** &mdash; No sign-up, no watermarks, no limits, forever

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Latracal-Solutions/liveqrcode.git

# Navigate to the project
cd liveqrcode

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables (Optional)

AI Art background generation requires a Gemini API key. Copy the example env file and add your key:

```bash
cp .env.example .env.local
```

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> The app works fully without an API key. AI Art is the only feature that requires it.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [qr-code-styling](https://github.com/nickmessing/qr-code-styling) | QR code rendering engine |
| [Lucide Icons](https://lucide.dev/) | Icon library |
| [shadcn/ui](https://ui.shadcn.com/) | UI components |

## Project Structure

```
liveqrcode/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage with QR generator
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── [slug]/page.tsx     # Dynamic SEO landing pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── privacy/            # Privacy Policy
│   │   ├── terms/              # Terms of Service
│   │   ├── disclaimer/         # Disclaimer
│   │   ├── icon.tsx            # Dynamic favicon
│   │   ├── opengraph-image.tsx # Dynamic OG image
│   │   └── api/generate-ai/    # AI art generation endpoint
│   ├── components/
│   │   ├── qr-generator.tsx    # Main QR generator component
│   │   ├── seo-content.tsx     # SEO article content
│   │   ├── qr-examples.tsx     # QR code examples showcase
│   │   ├── brand-logo.tsx      # Logo component
│   │   └── page-shell.tsx      # Layout wrapper for sub-pages
│   └── lib/
│       ├── qr-config.ts        # QR types, presets, configuration
│       └── qr-landing-data.ts  # SEO landing page data
├── components/ui/              # shadcn/ui components
├── public/                     # Static assets
├── LICENSE                     # MIT License
└── package.json
```

## Supported QR Code Types

| Category | Types |
|---|---|
| **Popular** | URL, Text, Email, Phone, SMS, WiFi |
| **Social** | WhatsApp, Instagram, YouTube, TikTok, Facebook, X/Twitter, LinkedIn, Telegram, Snapchat, Pinterest, Spotify |
| **Business** | vCard, Event, Location, Google Maps, Google Reviews, App Store, UPI, PayPal |
| **Other** | Bitcoin, Ethereum |

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Latracal-Solutions/liveqrcode)

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Other Platforms

The app is a standard Next.js application and can be deployed to any platform that supports Node.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Docker**
- **AWS Amplify**
- **Google Cloud Run**

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software for personal and commercial purposes.

## Acknowledgments

- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) for the QR rendering engine
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for the icon set
- [Google Gemini](https://ai.google.dev/) for AI art generation

---

<div align="center">

Built with ❤️ by [Latracal Solutions](https://github.com/Latracal-Solutions)

[Website](https://www.liveqrcode.com) &middot; [GitHub](https://github.com/Latracal-Solutions/liveqrcode) &middot; [Issues](https://github.com/Latracal-Solutions/liveqrcode/issues)

</div>
