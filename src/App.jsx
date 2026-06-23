import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Marquee from './components/Marquee'
import LoadingScreen from './components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth'

    // Global ScrollTrigger refresh on load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh()
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <Cursor />
      <LoadingScreen />
      <div className="relative bg-dark-900">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
