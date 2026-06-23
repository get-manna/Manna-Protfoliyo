import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiLocationMarker, HiMail, HiPhone, HiBadgeCheck } from 'react-icons/hi'
import SectionLabel from '../components/SectionLabel'

const info = [
  { icon: <HiLocationMarker />, label: 'Location', value: 'Sylhet, Bangladesh' },
  { icon: <HiMail />, label: 'Email', value: 'mujiburrahmanmanna@gmail.com', href: 'mailto:mujiburrahmanmanna@gmail.com' },
  { icon: <HiPhone />, label: 'Phone', value: '+880 1758 135961', href: 'tel:+8801758135961' },
  { icon: <HiBadgeCheck />, label: 'Freelance', value: 'Available' },
]

const whyMe = [
  'Clean and Maintainable Code',
  'Fully Responsive Design',
  'SEO-Friendly Development',
  'Fast Loading Performance',
  'Modern UI/UX Design',
  'On-Time Project Delivery',
]

export default function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-label',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      gsap.fromTo(
        '.about-heading',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      gsap.fromTo(
        '.about-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      )

      gsap.fromTo(
        '.info-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        }
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      gsap.fromTo(
        '.why-item',
        { opacity: 0, x: 20 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.08,
          scrollTrigger: { trigger: '.why-grid', start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{
          background: 'radial-gradient(ellipse at right, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Outer border frame */}
              <div className="absolute -inset-4 border border-[#c9a84c]/15 rounded-sm" />
              <div className="absolute -inset-2 border border-[#c9a84c]/10 rounded-sm" />

              {/* Image placeholder with initials */}
              <div className="relative w-full h-full bg-dark-600 overflow-hidden rounded-sm">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-transparent z-10" />

                {/* Initials / placeholder */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center">
                    <div className="w-36 h-36 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading text-5xl font-bold text-[#c9a84c]">M</span>
                    </div>
                    <p className="font-mono text-xs text-white/30 tracking-widest">YOUR PHOTO HERE</p>
                  </div>
                </div>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 z-30 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(201,168,76,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 gold-glow">
                <div className="stat-number text-3xl font-heading font-bold">3+</div>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Years Exp.</p>
              </div>

              {/* Status badge */}
              <div className="absolute -top-4 -left-4 glass-card px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/60 text-xs font-mono tracking-widest">Available</span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div ref={contentRef}>
            <div className="about-label">
              <SectionLabel number="01" label="About Me" />
            </div>

            <h2 className="heading-lg text-white mb-6 about-heading">
              Turning Ideas Into{' '}
              <span className="text-[#c9a84c]">Powerful</span>{' '}
              Digital Experiences
            </h2>

            <p className="text-white/50 leading-relaxed mb-4 about-text">
              Hello! I'm <span className="text-white font-medium">Mujibur Rahman Manna</span>, a passionate
              Frontend Web Developer and WordPress Expert from Sylhet, Bangladesh.
            </p>
            <p className="text-white/50 leading-relaxed mb-8 about-text">
              I specialize in creating modern, responsive, and visually engaging websites that deliver
              exceptional user experiences. My expertise spans HTML5, CSS3, JavaScript, Tailwind CSS,
              React.js, GSAP Animations, WordPress, and Website Optimization.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {info.map((item) => (
                <div key={item.label} className="info-item flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/70 text-sm hover:text-[#c9a84c] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm ${item.label === 'Freelance' ? 'text-green-400' : 'text-white/70'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Me */}
            <div className="why-grid">
              <p className="label-text mb-4">Why Choose Me</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyMe.map((item) => (
                  <div key={item} className="why-item flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
