import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import SectionLabel from '../components/SectionLabel'

const contactInfo = [
  {
    icon: <HiMail size={20} />,
    label: 'Email',
    value: 'mujiburrahmanmanna@gmail.com',
    href: 'mailto:mujiburrahmanmanna@gmail.com',
  },
  {
    icon: <HiPhone size={20} />,
    label: 'Phone',
    value: '+880 1758 135961',
    href: 'tel:+8801758135961',
  },
  {
    icon: <SiWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '+880 1758 135961',
    href: 'https://wa.me/8801758135961',
  },
  {
    icon: <HiLocationMarker size={20} />,
    label: 'Location',
    value: 'Sylhet, Bangladesh',
    href: null,
  },
]

const socials = [
  { icon: <FiGithub size={18} />, label: 'GitHub', href: '#' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: '#' },
  { icon: <FiFacebook size={18} />, label: 'Facebook', href: '#' },
  { icon: <FiInstagram size={18} />, label: 'Instagram', href: '#' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      gsap.fromTo(
        '.contact-info-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.12,
          scrollTrigger: { trigger: '.contact-info', start: 'top 80%' },
        }
      )

      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.9,
          scrollTrigger: { trigger: '.contact-form', start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-dark-800 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-20">
          <SectionLabel number="07" label="Contact" />
          <h2 className="heading-lg text-white mb-4">
            Let's Build Something{' '}
            <span className="text-[#c9a84c]">Amazing</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto leading-relaxed">
            Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div className="contact-info space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info-item flex items-start gap-5">
                <div className="w-12 h-12 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[#c9a84c] transition-colors duration-300 text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-8 border-t border-white/5">
              <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card p-6 mt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-sm">Available for Work</span>
              </div>
              <p className="text-white/40 text-sm">
                Currently accepting new projects. Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form space-y-5"
          >
            {submitted ? (
              <div className="glass-card p-10 text-center border-[#c9a84c]/20">
                <div className="w-14 h-14 rounded-full border border-[#c9a84c] flex items-center justify-center mx-auto mb-4">
                  <HiArrowRight className="text-[#c9a84c] text-xl" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#c9a84c] text-sm font-mono tracking-widest hover:underline"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-white/30 tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-dark-600 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300 placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/30 tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-dark-600 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300 placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/30 tracking-widest uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-dark-600 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300 placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/30 tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full bg-dark-600 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300 placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <HiArrowRight />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
