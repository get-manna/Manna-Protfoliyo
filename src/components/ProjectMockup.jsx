/* SVG browser-frame mockups — one unique layout per project category */

function BrowserFrame({ color, children }) {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background */}
      <rect width="800" height="450" fill="#0d0d0d" />

      {/* Browser chrome */}
      <rect width="800" height="40" fill="#1a1a1a" />
      {/* Traffic lights */}
      <circle cx="20" cy="20" r="6" fill="#ff5f57" />
      <circle cx="40" cy="20" r="6" fill="#ffbd2e" />
      <circle cx="60" cy="20" r="6" fill="#28c840" />
      {/* URL bar */}
      <rect x="80" y="10" width="520" height="20" rx="10" fill="#111" />
      <text x="96" y="24" fontFamily="monospace" fontSize="10" fill="#555">
        www.yourproject.com
      </text>
      {/* Tab accent */}
      <rect x="0" y="38" width="800" height="2" fill={color} opacity="0.6" />

      {/* Page content */}
      {children}
    </svg>
  )
}

/* 01 — Corporate */
export function CorporateMockup({ color }) {
  return (
    <BrowserFrame color={color}>
      {/* Hero area */}
      <rect x="0" y="42" width="800" height="180" fill="#111" />
      <rect x="0" y="42" width="800" height="180" fill={color} opacity="0.06" />
      {/* Nav bar */}
      <rect x="40" y="62" width="60" height="10" rx="3" fill={color} opacity="0.8" />
      <rect x="560" y="62" width="50" height="10" rx="3" fill="#222" />
      <rect x="620" y="62" width="50" height="10" rx="3" fill="#222" />
      <rect x="680" y="62" width="50" height="10" rx="3" fill="#222" />
      {/* Heading */}
      <rect x="40" y="100" width="320" height="22" rx="4" fill="#fff" opacity="0.9" />
      <rect x="40" y="132" width="240" height="14" rx="3" fill="#fff" opacity="0.4" />
      <rect x="40" y="154" width="200" height="14" rx="3" fill="#fff" opacity="0.3" />
      {/* CTA button */}
      <rect x="40" y="180" width="100" height="30" rx="4" fill={color} opacity="0.9" />
      <rect x="150" y="180" width="100" height="30" rx="4" fill="transparent" stroke={color} strokeWidth="1" opacity="0.5" />
      {/* Hero image side */}
      <rect x="480" y="55" width="280" height="160" rx="4" fill="#1a1a1a" />
      <rect x="480" y="55" width="280" height="160" rx="4" fill={color} opacity="0.08" />
      <rect x="560" y="110" width="120" height="50" rx="60" fill={color} opacity="0.1" />

      {/* Stats row */}
      <rect x="0" y="222" width="800" height="70" fill="#161616" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={40 + i * 190} y="237" width="60" height="16" rx="3" fill={color} opacity="0.7" />
          <rect x={40 + i * 190} y="261" width="100" height="10" rx="2" fill="#fff" opacity="0.2" />
        </g>
      ))}

      {/* Cards row */}
      <rect x="0" y="292" width="800" height="158" fill="#0d0d0d" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={40 + i * 250} y="308" width="220" height="120" rx="6" fill="#161616" />
          <rect x={40 + i * 250} y="308" width="220" height="120" rx="6" fill={color} opacity="0.04" />
          <rect x={56 + i * 250} y="324" width="40" height="40" rx="4" fill={color} opacity="0.15" />
          <rect x={106 + i * 250} y="328" width="120" height="10" rx="2" fill="#fff" opacity="0.5" />
          <rect x={106 + i * 250} y="346" width="90" height="8" rx="2" fill="#fff" opacity="0.2" />
          <rect x={56 + i * 250} y="376" width="140" height="8" rx="2" fill="#fff" opacity="0.15" />
          <rect x={56 + i * 250} y="392" width="120" height="8" rx="2" fill="#fff" opacity="0.1" />
        </g>
      ))}
    </BrowserFrame>
  )
}

/* 02 — E-Commerce */
export function EcommerceMockup({ color }) {
  return (
    <BrowserFrame color={color}>
      {/* Header */}
      <rect x="0" y="42" width="800" height="50" fill="#111" />
      <rect x="40" y="56" width="80" height="14" rx="3" fill="#fff" opacity="0.7" />
      <rect x="280" y="52" width="240" height="22" rx="11" fill="#1a1a1a" />
      <rect x="700" y="54" width="70" height="26" rx="4" fill={color} opacity="0.9" />

      {/* Category bar */}
      <rect x="0" y="92" width="800" height="36" fill="#161616" />
      {['All','Men','Women','Kids','Sale'].map((_, i) => (
        <rect key={i} x={40 + i * 100} y="104" width="70" height="12" rx="6"
          fill={i === 0 ? color : '#fff'} opacity={i === 0 ? 0.9 : 0.2} />
      ))}

      {/* Product grid */}
      <rect x="0" y="128" width="800" height="322" fill="#0d0d0d" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={32 + i * 186} y="140" width="170" height="200" rx="6" fill="#161616" />
          {/* Product image */}
          <rect x={32 + i * 186} y="140" width="170" height="130" rx="6" fill={color} opacity={0.05 + i * 0.02} />
          <rect x={82 + i * 186} y="165" width="70" height="80" rx="4" fill={color} opacity="0.12" />
          {/* Price & title */}
          <rect x={44 + i * 186} y="282" width="100" height="10" rx="2" fill="#fff" opacity="0.6" />
          <rect x={44 + i * 186} y="298" width="60" height="12" rx="2" fill={color} opacity="0.8" />
          {/* Add to cart */}
          <rect x={44 + i * 186} y="318" width="146" height="16" rx="3" fill={color} opacity="0.2" />
        </g>
      ))}

      {/* Pagination dots */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={370 + i * 16} cy="396" r={i === 0 ? 5 : 3}
          fill={i === 0 ? color : '#333'} />
      ))}
    </BrowserFrame>
  )
}

/* 03 — Real Estate */
export function RealEstateMockup({ color }) {
  return (
    <BrowserFrame color={color}>
      {/* Hero with map-like bg */}
      <rect x="0" y="42" width="800" height="200" fill="#0f1a14" />
      {/* Map grid lines */}
      {[0,1,2,3,4,5].map(i => (
        <line key={`h${i}`} x1="0" y1={70 + i * 34} x2="800" y2={70 + i * 34}
          stroke={color} strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`v${i}`} x1={i * 115} y1="42" x2={i * 115} y2="242"
          stroke={color} strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {/* Location pins */}
      <circle cx="320" cy="140" r="8" fill={color} opacity="0.9" />
      <circle cx="320" cy="140" r="20" fill={color} opacity="0.1" />
      <circle cx="550" cy="110" r="6" fill={color} opacity="0.6" />
      <circle cx="200" cy="170" r="6" fill={color} opacity="0.5" />

      {/* Search overlay */}
      <rect x="60" y="80" width="500" height="50" rx="8" fill="#111" opacity="0.95" />
      <rect x="76" y="94" width="200" height="22" rx="6" fill="#1a1a1a" />
      <rect x="286" y="94" width="130" height="22" rx="6" fill="#1a1a1a" />
      <rect x="426" y="94" width="110" height="22" rx="6" fill={color} opacity="0.85" />
      <rect x="440" y="101" width="80" height="8" rx="2" fill="#000" opacity="0.5" />

      {/* Property cards */}
      <rect x="0" y="242" width="800" height="208" fill="#0d0d0d" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={32 + i * 252} y="258" width="230" height="175" rx="8" fill="#141414" />
          <rect x={32 + i * 252} y="258" width="230" height="105" rx="8" fill={color} opacity={0.06 + i * 0.01} />
          {/* House icon */}
          <polygon points={`${147 + i*252},278 ${117 + i*252},308 ${177 + i*252},308`} fill={color} opacity="0.2" />
          <rect x={127 + i * 252} y="308" width="40" height="28" fill={color} opacity="0.15" />
          {/* Badge */}
          <rect x={44 + i * 252} y="268" width="55" height="18" rx="9" fill={color} opacity="0.85" />
          {/* Price */}
          <rect x={44 + i * 252} y="374" width="80" height="14" rx="2" fill={color} opacity="0.7" />
          <rect x={44 + i * 252} y="396" width="130" height="9" rx="2" fill="#fff" opacity="0.3" />
          <rect x={44 + i * 252} y="413" width="100" height="9" rx="2" fill="#fff" opacity="0.15" />
        </g>
      ))}
    </BrowserFrame>
  )
}

/* 04 — Portfolio */
export function PortfolioMockup({ color }) {
  return (
    <BrowserFrame color={color}>
      {/* Dark full-bleed hero */}
      <rect x="0" y="42" width="800" height="408" fill="#080808" />

      {/* Animated circles bg */}
      <circle cx="600" cy="200" r="180" fill={color} opacity="0.04" />
      <circle cx="600" cy="200" r="120" fill={color} opacity="0.05" />
      <circle cx="600" cy="200" r="60" fill={color} opacity="0.07" />

      {/* Dot grid */}
      {[0,1,2,3,4,5,6,7,8,9].map(yi =>
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(xi => (
          <circle key={`${xi}-${yi}`} cx={xi * 52} cy={50 + yi * 42} r="1"
            fill="#fff" opacity="0.05" />
        ))
      )}

      {/* Nav */}
      <rect x="40" y="62" width="50" height="12" rx="3" fill="#fff" opacity="0.8" />
      {[0,1,2,3].map(i => (
        <rect key={i} x={560 + i * 60} y="64" width="40" height="8" rx="2"
          fill="#fff" opacity="0.25" />
      ))}

      {/* Big hero text blocks */}
      <rect x="40" y="120" width="380" height="36" rx="4" fill="#fff" opacity="0.9" />
      <rect x="40" y="166" width="300" height="36" rx="4" fill={color} opacity="0.8" />
      <rect x="40" y="218" width="260" height="14" rx="2" fill="#fff" opacity="0.25" />
      <rect x="40" y="240" width="200" height="14" rx="2" fill="#fff" opacity="0.15" />

      {/* CTA */}
      <rect x="40" y="276" width="120" height="36" rx="18" fill={color} opacity="0.9" />
      <rect x="172" y="276" width="120" height="36" rx="18" fill="transparent"
        stroke={color} strokeWidth="1.5" opacity="0.5" />

      {/* Work grid preview */}
      <rect x="40" y="340" width="180" height="90" rx="4" fill="#161616" />
      <rect x="40" y="340" width="180" height="90" rx="4" fill={color} opacity="0.07" />
      <rect x="232" y="340" width="120" height="90" rx="4" fill="#161616" />
      <rect x="364" y="340" width="150" height="90" rx="4" fill="#161616" />
      <rect x="364" y="340" width="150" height="90" rx="4" fill={color} opacity="0.05" />

      {/* Scroll indicator */}
      <circle cx="400" cy="430" r="10" fill="none" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="400" y1="424" x2="400" y2="436" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
    </BrowserFrame>
  )
}

/* 05 — Agency */
export function AgencyMockup({ color }) {
  return (
    <BrowserFrame color={color}>
      {/* Split layout hero */}
      <rect x="0" y="42" width="400" height="408" fill="#0a0a0a" />
      <rect x="400" y="42" width="400" height="408" fill="#111" />
      <rect x="400" y="42" width="400" height="408" fill={color} opacity="0.05" />

      {/* Left — text content */}
      <rect x="40" y="70" width="55" height="12" rx="6" fill={color} opacity="0.8" />
      <rect x="40" y="100" width="300" height="28" rx="3" fill="#fff" opacity="0.9" />
      <rect x="40" y="138" width="250" height="28" rx="3" fill="#fff" opacity="0.7" />
      <rect x="40" y="180" width="260" height="10" rx="2" fill="#fff" opacity="0.25" />
      <rect x="40" y="198" width="220" height="10" rx="2" fill="#fff" opacity="0.18" />
      <rect x="40" y="216" width="200" height="10" rx="2" fill="#fff" opacity="0.12" />
      <rect x="40" y="248" width="130" height="36" rx="4" fill={color} opacity="0.9" />
      {/* Stats */}
      <rect x="40" y="316" width="800" height="1" fill="#fff" opacity="0.06" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={40 + i * 110} y="328" width="50" height="16" rx="2" fill={color} opacity="0.7" />
          <rect x={40 + i * 110} y="352" width="80" height="8" rx="2" fill="#fff" opacity="0.2" />
        </g>
      ))}

      {/* Right — visual cards */}
      <rect x="420" y="60" width="360" height="200" rx="8" fill="#161616" />
      <rect x="420" y="60" width="360" height="200" rx="8" fill={color} opacity="0.06" />
      {/* Floating card */}
      <rect x="500" y="100" width="200" height="120" rx="6" fill="#1e1e1e" />
      <rect x="516" y="116" width="80" height="10" rx="2" fill={color} opacity="0.7" />
      <rect x="516" y="134" width="120" height="8" rx="2" fill="#fff" opacity="0.3" />
      <rect x="516" y="150" width="100" height="8" rx="2" fill="#fff" opacity="0.2" />
      <rect x="516" y="180" width="168" height="24" rx="4" fill={color} opacity="0.15" />

      {/* Service chips */}
      {['Branding','UI/UX','Web Dev','SEO'].map((_, i) => (
        <rect key={i} x={420 + i * 88} y="276" width="78" height="22" rx="11"
          fill={i === 0 ? color : '#1a1a1a'} opacity={i === 0 ? 0.85 : 0.9} />
      ))}

      {/* Team row */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={430 + i * 36} cy="340" r="22"
          fill={color} opacity={0.08 + i * 0.03} />
      ))}
      <rect x="580" y="328" width="120" height="10" rx="2" fill="#fff" opacity="0.3" />
      <rect x="580" y="346" width="90" height="8" rx="2" fill="#fff" opacity="0.15" />
    </BrowserFrame>
  )
}

/* 06 — Restaurant */
export function RestaurantMockup({ color }) {
  return (
    <BrowserFrame color={color}>
      {/* Hero */}
      <rect x="0" y="42" width="800" height="170" fill="#0f0a08" />
      <rect x="0" y="42" width="800" height="170" fill={color} opacity="0.07" />
      {/* Plate circle decoration */}
      <circle cx="640" cy="127" r="90" fill={color} opacity="0.06" />
      <circle cx="640" cy="127" r="65" fill={color} opacity="0.07" />
      <circle cx="640" cy="127" r="40" fill={color} opacity="0.09" />

      {/* Nav */}
      <rect x="40" y="60" width="70" height="14" rx="3" fill="#fff" opacity="0.8" />
      {[0,1,2].map(i => (
        <rect key={i} x={500 + i * 80} y="63" width="55" height="8" rx="2"
          fill="#fff" opacity="0.3" />
      ))}
      <rect x="740" y="58" width="0" height="0" />

      {/* Hero text */}
      <rect x="40" y="98" width="280" height="28" rx="4" fill="#fff" opacity="0.9" />
      <rect x="40" y="134" width="200" height="16" rx="3" fill={color} opacity="0.7" />
      <rect x="40" y="162" width="100" height="28" rx="14" fill={color} opacity="0.85" />
      <rect x="150" y="162" width="100" height="28" rx="14" fill="transparent"
        stroke={color} strokeWidth="1.5" opacity="0.5" />

      {/* Menu section */}
      <rect x="0" y="212" width="800" height="238" fill="#0d0d0d" />
      <rect x="40" y="228" width="80" height="10" rx="2" fill={color} opacity="0.7" />
      <rect x="40" y="246" width="180" height="18" rx="3" fill="#fff" opacity="0.8" />

      {/* Food cards */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={40 + i * 186} y="278" width="170" height="150" rx="8" fill="#141414" />
          {/* Food image area */}
          <rect x={40 + i * 186} y="278" width="170" height="90" rx="8" fill={color} opacity={0.06 + i * 0.01} />
          <circle cx={125 + i * 186} cy="323" r="30" fill={color} opacity="0.12" />
          {/* Content */}
          <rect x={54 + i * 186} y="380" width="100" height="10" rx="2" fill="#fff" opacity="0.6" />
          <rect x={54 + i * 186} y="398" width="60" height="12" rx="2" fill={color} opacity="0.75" />
          <rect x={160 + i * 186} y="396" width="34" height="16" rx="8" fill="#1a1a1a" />
        </g>
      ))}
    </BrowserFrame>
  )
}
