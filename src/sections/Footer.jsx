import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'
import { HiArrowUp } from 'react-icons/hi'
import { gsap } from 'gsap'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FiGithub size={16} />, href: '#', label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: '#', label: 'LinkedIn' },
  { icon: <FiFacebook size={16} />, href: '#', label: 'Facebook' },
  { icon: <FiInstagram size={16} />, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1.2, ease: 'power3.inOut' })
  }

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* Top strip */}
      <div className="bg-[#c9a84c]/5 border-b border-[#c9a84c]/10 py-4">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-24 flex items-center justify-between">
          <p className="font-mono text-xs text-white/30 tracking-widest">
            AVAILABLE FOR FREELANCE PROJECTS
          </p>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-green-400">Open to Work</span>
          </span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-24 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#hero" className="font-heading text-3xl font-bold text-white mb-4 block">
              Manna<span className="text-[#c9a84c]">.</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Frontend Web Developer &amp; WordPress Expert crafting premium digital experiences from Sylhet, Bangladesh.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-6">Get in Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:mujiburrahmanmanna@gmail.com"
                className="block text-white/40 text-sm hover:text-[#c9a84c] transition-colors duration-300"
              >
                mujiburrahmanmanna@gmail.com
              </a>
              <a
                href="tel:+8801758135961"
                className="block text-white/40 text-sm hover:text-[#c9a84c] transition-colors duration-300"
              >
                +880 1758 135961
              </a>
              <p className="text-white/40 text-sm">Sylhet, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono tracking-widest">
            © 2026 Mujibur Rahman Manna. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/30 hover:text-[#c9a84c] transition-colors duration-300 text-xs font-mono tracking-widest"
          >
            Back to Top
            <HiArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
