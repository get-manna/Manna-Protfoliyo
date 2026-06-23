import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowRight, HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)
  const bgCircle1 = useRef(null)
  const bgCircle2 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 })

    // Background circles
    gsap.to(bgCircle1.current, {
      scale: 1.2,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to(bgCircle2.current, {
      scale: 1.3,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1,
    })

    // Stagger heading letters
    const lines = headingRef.current.querySelectorAll('.hero-line')
    tl.fromTo(
      lines,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' }
    )

    tl.fromTo(
      subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )

    tl.fromTo(
      ctaRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    )

    tl.fromTo(
      statsRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    )

    // Parallax on scroll
    gsap.to(headingRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  const scrollToAbout = () => {
    gsap.to(window, { scrollTo: '#about', duration: 1, ease: 'power3.inOut' })
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-900"
    >
      {/* Background glows */}
      <div
        ref={bgCircle1}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        ref={bgCircle2}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.03]" />
      </div>

      {/* Social sidebar */}
      <div className="absolute left-6 xl:left-10 bottom-1/3 hidden lg:flex flex-col items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
        >
          <FiGithub size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
        >
          <FiLinkedin size={18} />
        </a>
        <div className="w-px h-20 bg-white/10 mt-2" />
      </div>

      {/* Email sidebar */}
      <div className="absolute right-6 xl:right-10 bottom-1/3 hidden lg:flex flex-col items-center gap-4">
        <a
          href="mailto:mujiburrahmanmanna@gmail.com"
          className="font-mono text-xs tracking-widest text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          mujiburrahmanmanna@gmail.com
        </a>
        <div className="w-px h-20 bg-white/10 mt-2" />
      </div>

      {/* Main content */}
      <div className="section-padding pt-32 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="label-text mb-8">Available for Freelance</p>

          <div ref={headingRef} className="overflow-hidden mb-8">
            <div className="overflow-hidden">
              <div className="hero-line heading-xl text-white opacity-0">
                Frontend
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line heading-xl opacity-0">
                <span className="text-stroke">Web</span>
                <span className="text-white"> Developer</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line heading-xl opacity-0">
                <span className="text-[#c9a84c]">&amp;</span>
                <span className="text-white"> WordPress</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line heading-xl text-white opacity-0">
                Expert<span className="text-[#c9a84c]">.</span>
              </div>
            </div>
          </div>

          <div ref={subRef} className="max-w-xl opacity-0">
            <p className="text-white/50 text-lg leading-relaxed mb-2">
              I'm <span className="text-white font-medium">Mujibur Rahman Manna</span> — a passionate developer
              from Bangladesh crafting modern, responsive, high-converting websites.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-5 mt-10">
            <button
              onClick={() => gsap.to(window, { scrollTo: '#contact', duration: 1, ease: 'power3.inOut' })}
              className="btn-primary opacity-0"
            >
              Hire Me <HiArrowRight />
            </button>
            <button
              onClick={() => gsap.to(window, { scrollTo: '#projects', duration: 1, ease: 'power3.inOut' })}
              className="btn-outline opacity-0"
            >
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-10 mt-20 pt-10 border-t border-white/5">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '100+', label: 'Projects Completed' },
              { value: '50+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="opacity-0">
                <div className="stat-number text-5xl lg:text-6xl font-heading font-bold leading-none">
                  {stat.value}
                </div>
                <p className="text-white/40 text-sm tracking-wider mt-2 uppercase font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
      >
        <span className="font-mono text-xs tracking-widest">Scroll</span>
        <HiArrowDown className="animate-bounce" />
      </button>
    </section>
  )
}
