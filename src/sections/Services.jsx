import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  HiCode, HiTemplate, HiColorSwatch, HiLightningBolt, HiCog, HiRefresh
} from 'react-icons/hi'
import SectionLabel from '../components/SectionLabel'

const services = [
  {
    icon: <HiTemplate size={28} />,
    number: '01',
    title: 'Website Design',
    description: 'Professional and modern website designs tailored to your business goals with pixel-perfect precision and brand consistency.',
    tags: ['Figma', 'UI/UX', 'Branding'],
  },
  {
    icon: <HiCode size={28} />,
    number: '02',
    title: 'Frontend Development',
    description: 'Clean, responsive, and interactive user interfaces using React.js, Tailwind CSS, GSAP animations and modern ES6+ JavaScript.',
    tags: ['React.js', 'Tailwind', 'GSAP'],
  },
  {
    icon: <HiColorSwatch size={28} />,
    number: '03',
    title: 'WordPress Development',
    description: 'Custom WordPress websites with Elementor Pro, WooCommerce integration and performance-optimized themes for any business.',
    tags: ['WordPress', 'Elementor', 'WooCommerce'],
  },
  {
    icon: <HiLightningBolt size={28} />,
    number: '04',
    title: 'Landing Page Design',
    description: 'High-converting landing pages for products, services, and marketing campaigns designed to maximize lead generation.',
    tags: ['Conversion', 'CRO', 'Copywriting'],
  },
  {
    icon: <HiCog size={28} />,
    number: '05',
    title: 'Website Optimization',
    description: 'Improve speed, SEO, and user experience for better search rankings and lightning-fast page load performance.',
    tags: ['PageSpeed', 'Core Web Vitals', 'SEO'],
  },
  {
    icon: <HiRefresh size={28} />,
    number: '06',
    title: 'Website Maintenance',
    description: 'Regular updates, backups, security checks, and technical support to keep your website running at peak performance.',
    tags: ['Support', 'Security', 'Updates'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12,
          scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-dark-700 relative overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3"
        style={{
          background: 'radial-gradient(ellipse at left, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="service-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <SectionLabel number="03" label="Services" />
            <h2 className="heading-lg text-white">
              What I{' '}
              <span className="text-[#c9a84c]">Offer</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md lg:text-right leading-relaxed">
            End-to-end web solutions that combine technical excellence with creative design to drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card bg-dark-700 p-8 lg:p-10 group hover:bg-dark-600 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at top left, rgba(201,168,76,0.05) 0%, transparent 60%)',
                }}
              />

              <div className="relative z-10">
                {/* Number */}
                <span className="font-mono text-xs text-white/20 tracking-widest">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mt-6 mb-6 text-[#c9a84c] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-white/30 text-xs font-mono tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/30 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
