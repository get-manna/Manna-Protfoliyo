import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import SectionLabel from '../components/SectionLabel'

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'CEO, TechVentures Dubai',
    text: 'Manna delivered an outstanding website that completely exceeded our expectations. His attention to detail, animations, and responsive design are world-class. Best investment we made for our business.',
    rating: 5,
    initials: 'AA',
    color: '#c9a84c',
  },
  {
    name: 'Sarah Johnson',
    role: 'E-Commerce Entrepreneur, USA',
    text: 'Professional communication, excellent development skills, and he delivered well before the deadline. Our WooCommerce store\'s conversion rate doubled after his optimization work. Highly recommend!',
    rating: 5,
    initials: 'SJ',
    color: '#8b5cf6',
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder, Singapore',
    text: 'The website Manna built for us is fast, modern, and perfectly responsive on all devices. The GSAP animations added a premium feel that our competitors simply don\'t have. Outstanding work!',
    rating: 5,
    initials: 'MC',
    color: '#10b981',
  },
  {
    name: 'Fatima Al-Zahraa',
    role: 'Business Owner, Saudi Arabia',
    text: 'Incredible talent and professionalism. Manna transformed our outdated website into a beautiful, high-converting digital experience. The results speak for themselves — 40% more inquiries!',
    rating: 5,
    initials: 'FA',
    color: '#f59e0b',
  },
  {
    name: 'David Williams',
    role: 'Agency Director, UK',
    text: 'We\'ve worked with many developers, but Manna stands out for his code quality, creativity, and reliability. His React.js skills are exceptional. He\'s our go-to developer for all frontend projects.',
    rating: 5,
    initials: 'DW',
    color: '#ef4444',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.test-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [active])

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    gsap.to(cardRef.current, {
      opacity: 0, y: 20, duration: 0.3,
      onComplete: () => {
        setActive(index)
        gsap.fromTo(cardRef.current, { opacity: 0, y: -20 }, {
          opacity: 1, y: 0, duration: 0.4,
          onComplete: () => setAnimating(false),
        })
      },
    })
  }

  const goPrev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const goNext = () => goTo((active + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-dark-700 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="test-header text-center mb-20">
          <SectionLabel number="06" label="Testimonials" />
          <h2 className="heading-lg text-white">
            What Clients{' '}
            <span className="text-[#c9a84c]">Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div ref={cardRef} className="glass-card p-10 lg:p-14 text-center mb-12 relative">
            {/* Quote mark */}
            <div
              className="absolute top-8 left-10 font-heading text-8xl leading-none text-[#c9a84c]/10 select-none"
              aria-hidden
            >
              "
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <HiStar key={i} className="text-[#c9a84c] text-lg" />
              ))}
            </div>

            <blockquote className="font-heading text-xl lg:text-2xl font-medium text-white/80 leading-relaxed mb-10 italic">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-dark-900"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goPrev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300"
            >
              <HiChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-8 h-1 bg-[#c9a84c]'
                      : 'w-1 h-1 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
