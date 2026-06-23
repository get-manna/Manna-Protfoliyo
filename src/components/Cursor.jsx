import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current

    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 })
    }

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.12
      outlineY += (mouseY - outlineY) * 0.12
      gsap.set(outline, { x: outlineX, y: outlineY })
      requestAnimationFrame(animateOutline)
    }

    const onEnter = () => outline?.classList.add('hovered')
    const onLeave = () => outline?.classList.remove('hovered')

    window.addEventListener('mousemove', onMove)
    animateOutline()

    const interactables = document.querySelectorAll('a, button, [data-cursor]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={outlineRef} className="cursor-outline hidden lg:block" />
    </>
  )
}
