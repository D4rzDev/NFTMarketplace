import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Shared per-section animations, driven by data attributes:
//   data-reveal="up|left|right|zoom" — scroll-triggered entrance
//   data-hover                       — hover/press scale micro-interaction
//   data-lift                        — card lift + glow on hover
const useSectionAnimations = () => {
  const scope = useRef(null)

  useGSAP(
    (context, contextSafe) => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('[data-reveal]', scope.current).forEach((el) => {
          const from = { autoAlpha: 0, duration: 0.9, ease: 'power3.out' }
          const dir = el.dataset.reveal || 'up'
          if (dir === 'up') from.y = 48
          if (dir === 'left') from.x = -64
          if (dir === 'right') from.x = 64
          if (dir === 'zoom') from.scale = 0.9
          gsap.from(el, {
            ...from,
            scrollTrigger: {
              trigger: el,
              // clamp() keeps the trigger reachable for elements near the page bottom
              start: 'clamp(top 88%)',
              toggleActions: 'play none none reverse',
            },
          })
        })
      })

      const cleanups = []
      const on = (el, event, handler) => {
        el.addEventListener(event, handler)
        cleanups.push(() => el.removeEventListener(event, handler))
      }

      gsap.utils.toArray('[data-hover]', scope.current).forEach((el) => {
        on(el, 'mouseenter', contextSafe(() => gsap.to(el, { scale: 1.06, duration: 0.25, ease: 'power2.out' })))
        on(el, 'mouseleave', contextSafe(() => gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' })))
        on(el, 'pointerdown', contextSafe(() => gsap.to(el, { scale: 0.94, duration: 0.1, ease: 'power2.out' })))
        on(el, 'pointerup', contextSafe(() => gsap.to(el, { scale: 1.06, duration: 0.25, ease: 'back.out(3)' })))
      })

      gsap.utils.toArray('[data-lift]', scope.current).forEach((el) => {
        on(el, 'mouseenter', contextSafe(() =>
          gsap.to(el, {
            y: -8,
            scale: 1.02,
            boxShadow: '0 18px 40px rgba(214, 239, 14, 0.12)',
            duration: 0.35,
            ease: 'power2.out',
          })
        ))
        on(el, 'mouseleave', contextSafe(() =>
          gsap.to(el, {
            y: 0,
            scale: 1,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            duration: 0.4,
            ease: 'power2.out',
          })
        ))
      })

      return () => cleanups.forEach((fn) => fn())
    },
    { scope }
  )

  return scope
}

export default useSectionAnimations
