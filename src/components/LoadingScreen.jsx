import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen() {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(progressRef.current, {
      width: '100%',
      duration: 1.8,
      ease: 'power2.inOut',
    })
    .to(textRef.current, {
      opacity: 0,
      duration: 0.3,
    }, '-=0.3')
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
      onComplete: () => setVisible(false),
    })

    document.body.style.overflow = 'hidden'
    tl.eventCallback('onComplete', () => {
      document.body.style.overflow = ''
    })

    return () => tl.kill()
  }, [])

  if (!visible) return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] bg-dark-900 flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-center mb-12">
        <p className="label-text mb-4">Loading</p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white">
          Manna<span className="text-[#c9a84c]">.</span>
        </h1>
      </div>
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <div
          ref={progressRef}
          className="absolute inset-y-0 left-0 w-0 bg-[#c9a84c]"
        />
      </div>
    </div>
  )
}
