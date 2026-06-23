import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../components/SectionLabel'

const skillGroups = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript ES6+', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'GSAP Animation', level: 82 },
    ],
  },
  {
    category: 'CMS Development',
    skills: [
      { name: 'WordPress', level: 95 },
      { name: 'Elementor Pro', level: 92 },
      { name: 'WooCommerce', level: 88 },
      { name: 'Custom WP Design', level: 85 },
    ],
  },
  {
    category: 'Design & Tools',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Adobe Photoshop', level: 75 },
      { name: 'Git & GitHub', level: 85 },
    ],
  },
  {
    category: 'Optimization',
    skills: [
      { name: 'Speed Optimization', level: 90 },
      { name: 'SEO Optimization', level: 88 },
      { name: 'Responsive Design', level: 98 },
    ],
  },
]

const techBadges = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS',
  'GSAP', 'WordPress', 'Elementor', 'WooCommerce', 'Figma',
  'Git', 'Bootstrap', 'Photoshop', 'SEO', 'Responsive',
]

function SkillBar({ name, level, delay = 0 }) {
  const barRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 85%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [delay])

  return (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70 text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-[#c9a84c]">{level}%</span>
      </div>
      <div className="h-px bg-white/5 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 right-0 origin-left"
          style={{
            background: `linear-gradient(90deg, #c9a84c ${level}%, transparent ${level}%)`,
            transform: 'scaleX(0)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      gsap.fromTo(
        '.skill-group',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' },
        }
      )

      gsap.fromTo(
        '.tech-badge',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.05,
          scrollTrigger: { trigger: '.badges-section', start: 'top 85%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-dark-900 relative overflow-hidden">
      <div
        className="absolute inset-0 dot-grid opacity-20"
        style={{ backgroundSize: '40px 40px' }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="skills-header max-w-2xl mb-20">
          <SectionLabel number="02" label="My Skills" />
          <h2 className="heading-lg text-white mb-6">
            Tools &amp; Technologies{' '}
            <span className="text-[#c9a84c]">I Master</span>
          </h2>
          <p className="text-white/40 leading-relaxed">
            A curated set of modern web technologies I use to deliver exceptional
            digital experiences — from pixel-perfect frontends to scalable CMS solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group glass-card p-6 rounded-sm">
              <h3 className="font-mono text-xs text-[#c9a84c] tracking-[0.2em] uppercase mb-6">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="badges-section">
          <p className="label-text mb-8 text-center">Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="tech-badge px-4 py-2 border border-white/10 text-white/50 text-xs font-mono tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
