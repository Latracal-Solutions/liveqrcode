// Programmatic SVG illustrations for the SEO article
// These render as inline images with annotations for Google indexing

export function QRAnatomyDiagram() {
  return (
    <figure className="my-8 not-prose">
      <div className="bg-white border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8 overflow-hidden">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Diagram</span>
          <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-900 mt-1">Anatomy of a QR Code</h4>
        </div>
        <svg viewBox="0 0 520 400" className="w-full max-w-lg mx-auto" role="img" aria-label="Anatomy of a QR Code diagram showing finder patterns, timing patterns, data modules, quiet zone, alignment pattern, and format information">
          {/* Background */}
          <rect x="80" y="40" width="280" height="280" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />

          {/* Quiet Zone Label */}
          <rect x="80" y="40" width="280" height="280" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 3" />

          {/* QR Code Grid - simplified representation */}
          {/* Top-left finder pattern */}
          <rect x="100" y="60" width="56" height="56" rx="2" fill="#18181b" />
          <rect x="106" y="66" width="44" height="44" rx="1" fill="white" />
          <rect x="114" y="74" width="28" height="28" rx="1" fill="#18181b" />

          {/* Top-right finder pattern */}
          <rect x="284" y="60" width="56" height="56" rx="2" fill="#18181b" />
          <rect x="290" y="66" width="44" height="44" rx="1" fill="white" />
          <rect x="298" y="74" width="28" height="28" rx="1" fill="#18181b" />

          {/* Bottom-left finder pattern */}
          <rect x="100" y="244" width="56" height="56" rx="2" fill="#18181b" />
          <rect x="106" y="250" width="44" height="44" rx="1" fill="white" />
          <rect x="114" y="258" width="28" height="28" rx="1" fill="#18181b" />

          {/* Timing pattern horizontal */}
          {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
            <rect key={`th-${i}`} x={166 + i * 10} y="84" width={i % 2 === 0 ? 8 : 0} height="8" fill="#18181b" />
          ))}

          {/* Timing pattern vertical */}
          {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
            <rect key={`tv-${i}`} x="124" y={126 + i * 10} width="8" height={i % 2 === 0 ? 8 : 0} fill="#18181b" />
          ))}

          {/* Alignment pattern */}
          <rect x="252" y="212" width="20" height="20" rx="1" fill="#18181b" />
          <rect x="256" y="216" width="12" height="12" rx="1" fill="white" />
          <rect x="259" y="219" width="6" height="6" rx="1" fill="#18181b" />

          {/* Data modules - scattered pattern */}
          {[
            [170,130],[182,130],[194,142],[170,154],[206,130],[218,142],[194,166],
            [170,178],[182,166],[218,154],[206,178],[230,166],[242,178],[170,190],
            [194,190],[218,190],[230,202],[242,130],[254,142],[266,154],[278,166],
            [266,190],[278,202],[182,202],[206,202],[230,130],[242,142],[254,166],
            [170,142],[194,130],[230,190],[266,130],[278,142],[254,202],[182,178],
            [206,154],[218,166],[242,154],[266,178],[254,154],[230,142],[278,190],
            [182,142],[218,130],[242,166],[194,202],[230,154],[266,142],[278,154],
          ].map(([x, y], i) => (
            <rect key={`d-${i}`} x={x} y={y} width="8" height="8" fill="#18181b" opacity="0.7" />
          ))}

          {/* Format info strip */}
          <rect x="100" y="118" width="56" height="6" fill="#8b5cf6" opacity="0.4" rx="1" />
          <rect x="158" y="60" width="6" height="56" fill="#8b5cf6" opacity="0.4" rx="1" />

          {/* ---- ANNOTATION LINES & LABELS ---- */}

          {/* Finder Pattern - top-left */}
          <line x1="128" y1="58" x2="128" y2="20" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="128" y1="20" x2="20" y2="20" stroke="#ef4444" strokeWidth="1.5" />
          <circle cx="128" cy="58" r="3" fill="#ef4444" />
          <rect x="0" y="8" width="90" height="24" rx="6" fill="#ef4444" />
          <text x="45" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Finder Pattern</text>

          {/* Timing Pattern */}
          <line x1="200" y1="84" x2="200" y2="12" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="200" cy="84" r="3" fill="#f59e0b" />
          <rect x="170" y="0" width="110" height="24" rx="6" fill="#f59e0b" />
          <text x="225" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Timing Pattern</text>

          {/* Quiet Zone */}
          <line x1="362" y1="60" x2="420" y2="38" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="362" cy="60" r="3" fill="#3b82f6" />
          <rect x="390" y="26" width="120" height="24" rx="6" fill="#3b82f6" />
          <text x="450" y="42" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Quiet Zone</text>

          {/* Data Modules */}
          <line x1="230" y1="166" x2="420" y2="150" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="230" cy="166" r="3" fill="#10b981" />
          <rect x="390" y="138" width="120" height="24" rx="6" fill="#10b981" />
          <text x="450" y="154" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Data Modules</text>

          {/* Alignment Pattern */}
          <line x1="262" y1="234" x2="420" y2="240" stroke="#8b5cf6" strokeWidth="1.5" />
          <circle cx="262" cy="234" r="3" fill="#8b5cf6" />
          <rect x="390" y="228" width="130" height="24" rx="6" fill="#8b5cf6" />
          <text x="455" y="244" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Alignment Pattern</text>

          {/* Format Info */}
          <line x1="158" y1="121" x2="20" y2="160" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" />
          <circle cx="158" cy="121" r="3" fill="#a78bfa" />
          <rect x="0" y="148" width="110" height="24" rx="6" fill="#a78bfa" />
          <text x="55" y="164" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Format Info</text>

          {/* Legend at bottom */}
          <text x="220" y="350" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="system-ui">
            Every QR code contains these structural elements that enable reliable scanning
          </text>
          <text x="220" y="370" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="system-ui">
            liveqrcode.com — Free QR Code Generator
          </text>
        </svg>
      </div>
      <figcaption className="text-center text-xs text-zinc-400 mt-3">
        Figure 1: The anatomy of a QR code — finder patterns enable orientation detection, timing patterns establish the grid, and data modules encode the actual information.
      </figcaption>
    </figure>
  );
}

export function ErrorCorrectionDiagram() {
  const levels = [
    { label: "L", name: "Low", pct: "7%", fill: "#3b82f6", barW: 40, desc: "Smallest size" },
    { label: "M", name: "Medium", pct: "15%", fill: "#f59e0b", barW: 85, desc: "Standard" },
    { label: "Q", name: "Quartile", pct: "25%", fill: "#8b5cf6", barW: 140, desc: "With logos" },
    { label: "H", name: "High", pct: "30%", fill: "#ef4444", barW: 170, desc: "Max protection" },
  ];

  return (
    <figure className="my-8 not-prose">
      <div className="bg-white border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Comparison</span>
          <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 mt-1">QR Code Error Correction Levels</h4>
        </div>
        <svg viewBox="0 0 480 260" className="w-full max-w-lg mx-auto" role="img" aria-label="QR Code error correction levels comparison showing Level L at 7%, Level M at 15%, Level Q at 25%, and Level H at 30% recovery">
          {levels.map((lv, i) => {
            const y = 30 + i * 56;
            return (
              <g key={lv.label}>
                {/* Level badge */}
                <rect x="10" y={y} width="36" height="36" rx="10" fill={lv.fill} />
                <text x="28" y={y + 23} textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="system-ui">{lv.label}</text>

                {/* Name */}
                <text x="58" y={y + 15} fill="#18181b" fontSize="13" fontWeight="700" fontFamily="system-ui">{lv.name}</text>
                <text x="58" y={y + 30} fill="#71717a" fontSize="10" fontFamily="system-ui">{lv.desc}</text>

                {/* Bar background */}
                <rect x="180" y={y + 6} width="200" height="22" rx="6" fill="#f4f4f5" />
                {/* Bar fill */}
                <rect x="180" y={y + 6} width={lv.barW} height="22" rx="6" fill={lv.fill} opacity="0.85" />
                {/* Percentage text */}
                <text x={185 + lv.barW} y={y + 22} fill={lv.fill} fontSize="12" fontWeight="700" fontFamily="system-ui">{lv.pct}</text>

                {/* Recovery label */}
                <text x="400" y={y + 21} fill="#a1a1aa" fontSize="10" fontFamily="system-ui">recovery</text>
              </g>
            );
          })}
          <text x="240" y="255" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="system-ui">liveqrcode.com — Free QR Code Generator</text>
        </svg>
      </div>
      <figcaption className="text-center text-xs text-zinc-400 mt-3">
        Figure 2: Higher error correction levels allow more damage tolerance but increase QR code density. Use Level H when adding logos or AI art backgrounds.
      </figcaption>
    </figure>
  );
}

export function StaticVsDynamicDiagram() {
  return (
    <figure className="my-8 not-prose">
      <div className="bg-white border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Comparison</span>
          <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 mt-1">Static vs Dynamic QR Codes</h4>
        </div>
        <svg viewBox="0 0 520 320" className="w-full max-w-xl mx-auto" role="img" aria-label="Comparison diagram of Static QR codes versus Dynamic QR codes showing how each works">

          {/* Static Side */}
          <rect x="10" y="30" width="235" height="240" rx="16" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
          <rect x="10" y="30" width="235" height="40" rx="16" fill="#10b981" />
          <rect x="10" y="54" width="235" height="16" fill="#10b981" />
          <text x="127" y="56" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">STATIC QR CODE</text>

          {/* Static flow */}
          {/* Phone icon */}
          <rect x="65" y="90" width="40" height="55" rx="6" fill="white" stroke="#10b981" strokeWidth="2" />
          <rect x="69" y="96" width="32" height="36" rx="2" fill="#d1fae5" />
          <circle cx="85" cy="138" r="3" fill="#10b981" />
          <text x="85" y="112" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="700" fontFamily="system-ui">SCAN</text>

          {/* Arrow */}
          <line x1="115" y1="117" x2="145" y2="117" stroke="#10b981" strokeWidth="2" />
          <polygon points="145,112 155,117 145,122" fill="#10b981" />

          {/* Destination */}
          <rect x="158" y="95" width="70" height="45" rx="6" fill="white" stroke="#10b981" strokeWidth="2" />
          <text x="193" y="115" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="700" fontFamily="system-ui">YOUR</text>
          <text x="193" y="128" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="700" fontFamily="system-ui">WEBSITE</text>

          {/* Static features */}
          {[
            ["✓", "Works offline forever"],
            ["✓", "No server needed"],
            ["✓", "Zero maintenance"],
            ["✓", "Complete privacy"],
          ].map(([icon, text], i) => (
            <g key={i}>
              <text x="40" y={170 + i * 22} fill="#10b981" fontSize="12" fontWeight="800" fontFamily="system-ui">{icon}</text>
              <text x="58" y={170 + i * 22} fill="#374151" fontSize="11" fontFamily="system-ui">{text}</text>
            </g>
          ))}

          {/* Dynamic Side */}
          <rect x="275" y="30" width="235" height="240" rx="16" fill="#fef3c7" stroke="#fde68a" strokeWidth="1.5" />
          <rect x="275" y="30" width="235" height="40" rx="16" fill="#f59e0b" />
          <rect x="275" y="54" width="235" height="16" fill="#f59e0b" />
          <text x="392" y="56" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">DYNAMIC QR CODE</text>

          {/* Dynamic flow */}
          {/* Phone icon */}
          <rect x="300" y="90" width="40" height="55" rx="6" fill="white" stroke="#f59e0b" strokeWidth="2" />
          <rect x="304" y="96" width="32" height="36" rx="2" fill="#fef3c7" />
          <circle cx="320" cy="138" r="3" fill="#f59e0b" />
          <text x="320" y="112" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="700" fontFamily="system-ui">SCAN</text>

          {/* Arrow 1 */}
          <line x1="350" y1="117" x2="370" y2="117" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="370,112 380,117 370,122" fill="#f59e0b" />

          {/* Server */}
          <rect x="383" y="100" width="36" height="34" rx="4" fill="white" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="401" cy="112" r="4" fill="#fde68a" stroke="#f59e0b" strokeWidth="1" />
          <rect x="391" y="120" width="20" height="3" rx="1" fill="#fde68a" />
          <rect x="391" y="126" width="20" height="3" rx="1" fill="#fde68a" />

          {/* Arrow 2 */}
          <line x1="423" y1="117" x2="440" y2="117" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="440,112 450,117 440,122" fill="#f59e0b" />

          {/* Globe */}
          <circle cx="465" cy="117" r="16" fill="white" stroke="#f59e0b" strokeWidth="2" />
          <text x="465" y="121" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="system-ui">🌐</text>

          {/* Dynamic features */}
          {[
            ["⚠", "Requires server"],
            ["⚠", "May have scan limits"],
            ["⚠", "Can stop working"],
            ["✓", "Editable destination"],
          ].map(([icon, text], i) => (
            <g key={i}>
              <text x="305" y={170 + i * 22} fill={icon === "✓" ? "#10b981" : "#f59e0b"} fontSize="12" fontWeight="800" fontFamily="system-ui">{icon}</text>
              <text x="323" y={170 + i * 22} fill="#374151" fontSize="11" fontFamily="system-ui">{text}</text>
            </g>
          ))}

          {/* Badge */}
          <rect x="160" y="280" width="200" height="28" rx="14" fill="#10b981" />
          <text x="260" y="299" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui">Live QR Code = Static ✓</text>
        </svg>
      </div>
      <figcaption className="text-center text-xs text-zinc-400 mt-3">
        Figure 3: Static QR codes encode data directly — they never expire and work offline. Live QR Code generates static codes for maximum reliability.
      </figcaption>
    </figure>
  );
}

export function HowToUseDiagram() {
  return (
    <figure className="my-8 not-prose">
      <div className="bg-white border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Step-by-Step</span>
          <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 mt-1">How to Create a QR Code with Live QR Code</h4>
        </div>
        <svg viewBox="0 0 560 500" className="w-full max-w-2xl mx-auto" role="img" aria-label="Step by step guide showing how to create a QR code using Live QR Code generator: Step 1 choose type, Step 2 enter content, Step 3 customize design, Step 4 download">

          {/* Step 1 */}
          <g>
            <rect x="10" y="10" width="255" height="210" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            {/* Step number */}
            <circle cx="38" cy="36" r="16" fill="#18181b" />
            <text x="38" y="41" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">1</text>
            <text x="62" y="41" fill="#18181b" fontSize="13" fontWeight="700" fontFamily="system-ui">Choose QR Type</text>

            {/* Mock type selector */}
            <rect x="25" y="58" width="225" height="145" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            {/* Tab bar */}
            <rect x="35" y="68" width="55" height="20" rx="10" fill="#18181b" />
            <text x="62" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="system-ui">Popular</text>
            <text x="115" y="82" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="system-ui">All</text>
            <text x="150" y="82" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="system-ui">Social</text>
            <text x="195" y="82" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontFamily="system-ui">Business</text>

            {/* Type grid */}
            {[
              ["⊕", "URL", true], ["T", "Text", false], ["✉", "Email", false], ["☎", "Phone", false],
              ["💬", "SMS", false], ["📶", "WiFi", false],
            ].map(([icon, label, active], i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const x = 38 + col * 53;
              const y = 100 + row * 45;
              return (
                <g key={i}>
                  <rect x={x} y={y} width="45" height="38" rx="6"
                    fill={active ? "#18181b" : "white"}
                    stroke={active ? "#18181b" : "#e5e7eb"} strokeWidth="1" />
                  <text x={x + 22} y={y + 18} textAnchor="middle" fill={active ? "white" : "#71717a"} fontSize="10" fontFamily="system-ui">{icon}</text>
                  <text x={x + 22} y={y + 30} textAnchor="middle" fill={active ? "white" : "#71717a"} fontSize="7" fontWeight="600" fontFamily="system-ui">{label as string}</text>
                </g>
              );
            })}

            {/* Annotation arrow */}
            <rect x="120" y="192" width="140" height="20" rx="10" fill="#ef4444" />
            <text x="190" y="206" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">Select your QR type here</text>
          </g>

          {/* Step 2 */}
          <g>
            <rect x="295" y="10" width="255" height="210" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            <circle cx="323" cy="36" r="16" fill="#18181b" />
            <text x="323" y="41" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">2</text>
            <text x="347" y="41" fill="#18181b" fontSize="13" fontWeight="700" fontFamily="system-ui">Enter Content</text>

            {/* Mock form */}
            <rect x="310" y="58" width="225" height="145" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            <text x="325" y="82" fill="#18181b" fontSize="9" fontWeight="700" fontFamily="system-ui">⊕ URL Content</text>

            <text x="325" y="105" fill="#71717a" fontSize="8" fontFamily="system-ui">Website URL</text>
            <rect x="325" y="110" width="195" height="28" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            <text x="335" y="128" fill="#18181b" fontSize="9" fontFamily="system-ui">https://liveqrcode.com</text>

            {/* Annotation */}
            <rect x="325" y="150" width="80" height="18" rx="9" fill="#10b981" />
            <text x="365" y="163" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="system-ui">Live preview ↗</text>

            {/* QR preview mini */}
            <rect x="440" y="145" width="48" height="48" rx="6" fill="#f4f4f5" stroke="#e5e7eb" strokeWidth="1" />
            {/* Mini QR pattern */}
            <rect x="446" y="151" width="10" height="10" rx="1" fill="#18181b" />
            <rect x="472" y="151" width="10" height="10" rx="1" fill="#18181b" />
            <rect x="446" y="177" width="10" height="10" rx="1" fill="#18181b" />
            <rect x="459" y="160" width="6" height="6" fill="#18181b" opacity="0.5" />
            <rect x="467" y="168" width="6" height="6" fill="#18181b" opacity="0.5" />
            <rect x="459" y="176" width="6" height="6" fill="#18181b" opacity="0.5" />
          </g>

          {/* Step 3 */}
          <g>
            <rect x="10" y="250" width="255" height="230" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            <circle cx="38" cy="276" r="16" fill="#18181b" />
            <text x="38" y="281" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">3</text>
            <text x="62" y="281" fill="#18181b" fontSize="13" fontWeight="700" fontFamily="system-ui">Customize Design</text>

            {/* Style presets */}
            <rect x="25" y="298" width="225" height="165" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            <text x="40" y="318" fill="#18181b" fontSize="9" fontWeight="700" fontFamily="system-ui">Quick Presets</text>

            {/* Color swatches */}
            {[
              "#18181b", "#6366f1", "#3b82f6", "#ec4899", "#ef4444", "#10b981", "#06b6d4", "#6b21a8",
            ].map((color, i) => (
              <g key={i}>
                <circle cx={46 + i * 25} cy={340} r="9" fill={color} stroke={i === 0 ? "#18181b" : "none"} strokeWidth={i === 0 ? 2 : 0} />
              </g>
            ))}

            {/* Pattern options */}
            <text x="40" y="370" fill="#18181b" fontSize="9" fontWeight="700" fontFamily="system-ui">Dot Pattern</text>
            {["Square", "Rounded", "Dots", "Classy"].map((name, i) => (
              <g key={i}>
                <rect x={38 + i * 50} y={378} width="42" height="28" rx="6" fill={i === 2 ? "#18181b" : "#f4f4f5"} stroke={i === 2 ? "none" : "#e5e7eb"} strokeWidth="1" />
                <text x={59 + i * 50} y={396} textAnchor="middle" fill={i === 2 ? "white" : "#71717a"} fontSize="7" fontFamily="system-ui">{name}</text>
              </g>
            ))}

            {/* Colors */}
            <text x="40" y="425" fill="#18181b" fontSize="9" fontWeight="700" fontFamily="system-ui">Colors & Gradient</text>
            <rect x="38" y="432" width="24" height="24" rx="4" fill="#18181b" />
            <rect x="66" y="432" width="24" height="24" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            <text x="100" y="448" fill="#71717a" fontSize="8" fontFamily="system-ui">+ Logo, Frames, AI Art...</text>

            {/* Annotation */}
            <rect x="115" y="460" width="120" height="18" rx="9" fill="#8b5cf6" />
            <text x="175" y="473" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="system-ui">12 presets + full control</text>
          </g>

          {/* Step 4 */}
          <g>
            <rect x="295" y="250" width="255" height="230" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            <circle cx="323" cy="276" r="16" fill="#18181b" />
            <text x="323" y="281" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">4</text>
            <text x="347" y="281" fill="#18181b" fontSize="13" fontWeight="700" fontFamily="system-ui">Download & Share</text>

            {/* Preview card */}
            <rect x="310" y="298" width="225" height="165" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />

            {/* QR Preview */}
            <rect x="365" y="308" width="110" height="110" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            {/* Stylized QR inside */}
            <rect x="378" y="321" width="16" height="16" rx="3" fill="#6366f1" />
            <rect x="445" y="321" width="16" height="16" rx="3" fill="#6366f1" />
            <rect x="378" y="388" width="16" height="16" rx="3" fill="#6366f1" />
            <circle cx="414" cy="364" r="8" fill="#6366f1" opacity="0.3" />
            <circle cx="420" cy="350" r="3" fill="#6366f1" />
            <circle cx="430" cy="360" r="3" fill="#6366f1" />
            <circle cx="410" cy="375" r="3" fill="#6366f1" />
            <circle cx="400" cy="345" r="3" fill="#6366f1" />
            <circle cx="435" cy="340" r="3" fill="#6366f1" />
            <circle cx="425" cy="380" r="3" fill="#6366f1" />
            <circle cx="445" cy="395" r="4" fill="#6366f1" opacity="0.5" />
            <circle cx="395" cy="395" r="3" fill="#6366f1" />

            {/* Format selector */}
            <rect x="345" y="425" width="40" height="20" rx="6" fill="#18181b" />
            <text x="365" y="439" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">PNG</text>
            <rect x="390" y="425" width="32" height="20" rx="6" fill="#f4f4f5" stroke="#e5e7eb" strokeWidth="1" />
            <text x="406" y="439" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="system-ui">SVG</text>
            <rect x="427" y="425" width="40" height="20" rx="6" fill="#f4f4f5" stroke="#e5e7eb" strokeWidth="1" />
            <text x="447" y="439" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="system-ui">JPEG</text>

            {/* Download button */}
            <rect x="330" y="450" width="160" height="28" rx="14" fill="#18181b" />
            <text x="410" y="468" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">↓ Download QR Code</text>
          </g>

          {/* Connecting arrows between steps */}
          <text x="280" y="125" textAnchor="middle" fill="#d4d4d8" fontSize="24" fontFamily="system-ui">→</text>
          <text x="280" y="375" textAnchor="middle" fill="#d4d4d8" fontSize="24" fontFamily="system-ui">→</text>
          <text x="140" y="245" textAnchor="middle" fill="#d4d4d8" fontSize="24" fontFamily="system-ui">↓</text>
        </svg>
      </div>
      <figcaption className="text-center text-xs text-zinc-400 mt-3">
        Figure 4: Create a professional QR code in 4 simple steps — choose type, enter content, customize design, and download in your preferred format.
      </figcaption>
    </figure>
  );
}

export function PrintSizeGuideDiagram() {
  const sizes = [
    { label: "Business Card", size: "1.5cm", px: 30, color: "#6366f1", distance: "10-15cm" },
    { label: "Flyer / Brochure", size: "3-5cm", px: 55, color: "#3b82f6", distance: "20-40cm" },
    { label: "Poster / Sign", size: "5-10cm", px: 85, color: "#f59e0b", distance: "0.5-2m" },
    { label: "Banner / Billboard", size: "30cm+", px: 130, color: "#ef4444", distance: "5-50m" },
  ];

  return (
    <figure className="my-8 not-prose">
      <div className="bg-white border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Guide</span>
          <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 mt-1">QR Code Print Size Guide</h4>
          <p className="text-xs text-zinc-500 mt-1">Recommended QR code sizes for different print materials</p>
        </div>
        <svg viewBox="0 0 480 280" className="w-full max-w-lg mx-auto" role="img" aria-label="QR code print size guide showing recommended sizes for business cards, flyers, posters, and billboards">
          {/* Header row */}
          <text x="20" y="22" fill="#a1a1aa" fontSize="9" fontWeight="600" fontFamily="system-ui">MATERIAL</text>
          <text x="180" y="22" fill="#a1a1aa" fontSize="9" fontWeight="600" fontFamily="system-ui">MIN SIZE</text>
          <text x="260" y="22" fill="#a1a1aa" fontSize="9" fontWeight="600" fontFamily="system-ui">VISUAL SCALE</text>
          <text x="420" y="22" fill="#a1a1aa" fontSize="9" fontWeight="600" fontFamily="system-ui">DISTANCE</text>
          <line x1="10" y1="32" x2="470" y2="32" stroke="#f4f4f5" strokeWidth="1" />

          {sizes.map((s, i) => {
            const y = 50 + i * 58;
            return (
              <g key={i}>
                {/* Row background */}
                {i % 2 === 0 && <rect x="10" y={y - 10} width="460" height="50" rx="6" fill="#fafafa" />}

                {/* Material name */}
                <text x="20" y={y + 14} fill="#18181b" fontSize="12" fontWeight="600" fontFamily="system-ui">{s.label}</text>

                {/* Size */}
                <text x="180" y={y + 14} fill={s.color} fontSize="12" fontWeight="700" fontFamily="system-ui">{s.size}</text>

                {/* Visual scale QR */}
                <rect x="260" y={y + 14 - s.px/2} width={s.px} height={s.px} rx="3" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="1.5" />
                {/* Mini QR pattern inside */}
                <rect x={264} y={y + 14 - s.px/2 + 4} width={Math.max(s.px * 0.22, 5)} height={Math.max(s.px * 0.22, 5)} rx="1" fill={s.color} opacity="0.6" />
                <rect x={260 + s.px - Math.max(s.px * 0.22, 5) - 4} y={y + 14 - s.px/2 + 4} width={Math.max(s.px * 0.22, 5)} height={Math.max(s.px * 0.22, 5)} rx="1" fill={s.color} opacity="0.6" />
                <rect x={264} y={y + 14 + s.px/2 - Math.max(s.px * 0.22, 5) - 4} width={Math.max(s.px * 0.22, 5)} height={Math.max(s.px * 0.22, 5)} rx="1" fill={s.color} opacity="0.6" />

                {/* Scan distance */}
                <text x="420" y={y + 14} fill="#71717a" fontSize="11" fontFamily="system-ui">{s.distance}</text>
              </g>
            );
          })}

          {/* Formula */}
          <rect x="80" y="250" width="320" height="24" rx="12" fill="#f4f4f5" />
          <text x="240" y="266" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="system-ui">
            Formula: Scan Distance ÷ 10 = Minimum QR Size
          </text>
        </svg>
      </div>
      <figcaption className="text-center text-xs text-zinc-400 mt-3">
        Figure 5: Choose the right QR code size based on your print material and expected scanning distance. Always use SVG format for large-format printing.
      </figcaption>
    </figure>
  );
}
