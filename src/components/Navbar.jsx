import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    gsap.fromTo(
      navRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, delay: 2.2, ease: 'power3.out' }
    )

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      gsap.to(window, { scrollTo: target, duration: 1, ease: 'power3.inOut' })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-24 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="font-heading text-2xl font-bold tracking-tight text-white"
          >
            Manna<span className="text-[#c9a84c]">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium text-white/60 hover:text-white tracking-widest uppercase transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNav('#contact')}
            className="hidden lg:flex btn-primary text-xs"
          >
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[8999] bg-dark-900/98 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-heading text-4xl font-bold text-white/80 hover:text-[#c9a84c] transition-colors duration-300 uppercase tracking-widest"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-4">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
