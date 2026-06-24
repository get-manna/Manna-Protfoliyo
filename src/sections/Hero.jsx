import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowRight, HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
export default function Hero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const bgCircle1 = useRef(null)
  const bgCircle2 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 })

    // Ambient background circles
    gsap.to(bgCircle1.current, {
      scale: 1.2, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut',
    })
    gsap.to(bgCircle2.current, {
      scale: 1.3, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1,
    })

    // Heading lines reveal
    const lines = headingRef.current.querySelectorAll('.hero-line')
    tl.fromTo(
      lines,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.14, ease: 'power4.out' }
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
      {/* Ambient glows */}
      <div
        ref={bgCircle1}
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        ref={bgCircle2}
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      {/* Subtle vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/[0.025]" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/[0.025]" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.025]" />
      </div>

      {/* Social sidebar */}
      <div className="absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
        >
          <FiGithub size={17} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
        >
          <FiLinkedin size={17} />
        </a>
        <div className="w-px h-16 bg-white/10 mt-2" />
      </div>

      {/* Email sidebar */}
      <div className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <a
          href="mailto:mujiburrahmanmanna@gmail.com"
          className="font-mono text-[10px] tracking-widest text-white/25 hover:text-[#c9a84c] transition-colors duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          mujiburrahmanmanna@gmail.com
        </a>
        <div className="w-px h-16 bg-white/10 mt-2" />
      </div>

      {/* Main content */}
      <div className="section-padding pt-32 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="label-text mb-8">Available for Freelance Work</p>

          <div ref={headingRef} className="overflow-hidden mb-8">
            <div className="overflow-hidden">
              <div className="hero-line heading-xl text-white opacity-0">
                Web Developer
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
                Specialist<span className="text-[#c9a84c]">.</span>
              </div>
            </div>
          </div>

          <div ref={subRef} className="max-w-xl opacity-0">
            <p className="text-white/50 text-lg leading-relaxed">
              I'm <span className="text-white font-medium">Mujibur Rahman Manna</span> — I build fast,
              modern websites that look great, work perfectly, and help your business grow online.
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
              View My Work
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-[#c9a84c] transition-colors duration-300 z-20"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <HiArrowDown className="animate-bounce" size={14} />
      </button>
    </section>
  )
}
