const items = [
  'Frontend Development',
  'React.js',
  'WordPress',
  'GSAP Animation',
  'Tailwind CSS',
  'UI/UX Design',
  'Responsive Design',
  'Web Performance',
  'SEO Optimization',
  'WooCommerce',
]

export default function Marquee() {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="py-6 bg-[#c9a84c]/5 border-y border-[#c9a84c]/10 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-8 text-sm font-mono tracking-[0.2em] uppercase text-white/40 whitespace-nowrap"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
