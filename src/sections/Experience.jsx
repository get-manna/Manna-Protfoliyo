import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SectionLabel from '../components/SectionLabel'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Senior Frontend Developer',
    company: 'Freelance / Self-Employed',
    location: 'Sylhet, Bangladesh',
    description: 'Developing premium websites and web applications for international clients using React.js, Tailwind CSS, GSAP animations and modern JavaScript. Delivering high-performance, conversion-focused digital experiences.',
    tags: ['React.js', 'Tailwind CSS', 'GSAP', 'JavaScript', 'Figma'],
    active: true,
  },
  {
    period: '2022 — 2024',
    role: 'WordPress Developer',
    company: 'Freelance — Upwork / Fiverr',
    location: 'Remote',
    description: 'Created custom WordPress websites, WooCommerce stores, and business solutions for clients across multiple industries. Specialized in Elementor Pro, performance optimization and SEO.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'SEO'],
    active: false,
  },
  {
    period: '2021 — 2022',
    role: 'HTML/CSS Developer',
    company: 'Self-Learning & Projects',
    location: 'Sylhet, Bangladesh',
    description: 'Built foundational skills through intensive self-study and real-world project implementation. Developed 20+ static websites and landing pages using HTML5, CSS3, Bootstrap and vanilla JavaScript.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    active: false,
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
        }
      )

      gsap.fromTo(
        '.exp-item',
        { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
        {
          opacity: 1, x: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline', start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-dark-900 relative overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2"
        style={{
          background: 'radial-gradient(ellipse at right, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="exp-header text-center mb-20">
          <SectionLabel number="05" label="Experience" />
          <h2 className="heading-lg text-white">
            My Professional{' '}
            <span className="text-[#c9a84c]">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline relative max-w-4xl mx-auto">
          {/* Center line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/40 to-transparent origin-top"
          />

          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`exp-item relative lg:flex lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:mb-16`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className={`glass-card p-6 lg:p-8 relative group hover:border-[#c9a84c]/20 transition-colors duration-300 ${exp.active ? 'border-[#c9a84c]/20' : ''}`}>
                    {exp.active && (
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-mono text-xs text-green-400 tracking-widest">Current</span>
                      </div>
                    )}

                    <p className="font-mono text-xs text-[#c9a84c] tracking-widest mb-3">
                      {exp.period}
                    </p>

                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>

                    <p className="text-white/50 text-sm mb-1">{exp.company}</p>
                    <p className="text-white/30 text-xs font-mono tracking-widest mb-4">{exp.location}</p>

                    <p className="text-white/40 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-mono border border-[#c9a84c]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#c9a84c] bg-dark-900 z-10 items-center justify-center">
                  <div className={`w-1.5 h-1.5 rounded-full ${exp.active ? 'bg-[#c9a84c] animate-pulse' : 'bg-[#c9a84c]/50'}`} />
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
