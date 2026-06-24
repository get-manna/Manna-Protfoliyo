import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import SectionLabel from '../components/SectionLabel'
import {
  CorporateMockup,
  EcommerceMockup,
  RealEstateMockup,
  PortfolioMockup,
  AgencyMockup,
  RestaurantMockup,
} from '../components/ProjectMockup'

const projects = [
  {
    number: '01',
    title: 'Business Corporate Website',
    description: 'Modern corporate website with premium animations, responsive design and lead generation features optimized for conversions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'Corporate',
    color: '#c9a84c',
    Mockup: CorporateMockup,
  },
  {
    number: '02',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with WooCommerce integration, product filters, cart system and payment gateway setup.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    category: 'E-Commerce',
    color: '#8b5cf6',
    Mockup: EcommerceMockup,
  },
  {
    number: '03',
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with advanced search, map integration and IDX feed connectivity.',
    tags: ['WordPress', 'Custom Dev', 'CSS3', 'JS'],
    category: 'Real Estate',
    color: '#10b981',
    Mockup: RealEstateMockup,
  },
  {
    number: '04',
    title: 'Creative Portfolio',
    description: 'Award-worthy portfolio website with smooth GSAP animations, cursor effects, magnetic buttons and horizontal scroll.',
    tags: ['React.js', 'Tailwind CSS', 'GSAP', 'Vite'],
    category: 'Portfolio',
    color: '#f59e0b',
    Mockup: PortfolioMockup,
  },
  {
    number: '05',
    title: 'Digital Agency Website',
    description: 'High-performance agency website with case studies, team section, animated hero and conversion-focused layout.',
    tags: ['React.js', 'Tailwind', 'GSAP', 'Vercel'],
    category: 'Agency',
    color: '#ef4444',
    Mockup: AgencyMockup,
  },
  {
    number: '06',
    title: 'Restaurant & Food Ordering',
    description: 'Modern restaurant website with online menu, table reservation system and online ordering integration.',
    tags: ['WordPress', 'Elementor', 'WooCommerce'],
    category: 'Food & Beverage',
    color: '#ec4899',
    Mockup: RestaurantMockup,
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="project-card group relative overflow-hidden border border-white/5 hover:border-[#c9a84c]/20 transition-colors duration-500">
      {/* Visual */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d0d]">
        {/* SVG Mockup */}
        <div className="project-img absolute inset-0 transition-transform duration-700 ease-out">
          <project.Mockup color={project.color} />
        </div>

        {/* Overlay on hover */}
        <div className="project-overlay absolute inset-0 bg-dark-900/80 opacity-0 transition-opacity duration-400 flex items-center justify-center gap-4">
          <a
            href="#"
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <HiExternalLink />
          </a>
          <a
            href="#"
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <FiGithub />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-3">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
          <span className="font-mono text-xs text-white/20">{project.number}</span>
        </div>

        <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-white/40 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white/5 text-white/30 text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-white/30 group-hover:text-[#c9a84c] transition-colors duration-300 text-sm font-medium">
          <span>View Case Study</span>
          <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-dark-800 relative overflow-hidden">
      <div
        className="absolute inset-0 dot-grid opacity-15"
        style={{ backgroundSize: '50px 50px' }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="projects-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <SectionLabel number="04" label="Featured Projects" />
            <h2 className="heading-lg text-white">
              Selected{' '}
              <span className="text-[#c9a84c]">Works</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm lg:text-right leading-relaxed text-sm">
            A collection of projects that showcase my expertise in frontend development and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
