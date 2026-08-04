'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CloudTransition() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=160%',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      })

      const clouds = gsap.utils.toArray<HTMLElement>('.cloud-layer')

      gsap.to(clouds, {
        xPercent: (index) => (index % 2 === 0 ? 24 : -24),
        yPercent: (index) => (index % 2 === 0 ? -8 : 8),
        opacity: 0.95,
        scale: 1.02,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          scrub: 1.2,
        },
      })

      gsap.to(content, {
        y: 80,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: '35% top',
          end: '85% top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-[#03070b]">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(197,230,255,0.18),transparent_30%),linear-gradient(180deg,#0b1730_0%,#07111c_48%,#03070b_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.03)_100%)]" />

        <div className="cloud-layer absolute left-[-12%] top-[16%] h-48 w-[68%] rounded-full bg-white/20 blur-[60px] opacity-70" />
        <div className="cloud-layer absolute right-[-8%] top-[24%] h-40 w-[58%] rounded-full bg-white/20 blur-[64px] opacity-70" />
        <div className="cloud-layer absolute left-[10%] top-[34%] h-24 w-[34%] rounded-full bg-white/25 blur-[44px] opacity-70" />
        <div className="cloud-layer absolute bottom-[18%] left-[20%] h-20 w-[28%] rounded-full bg-white/20 blur-[36px] opacity-70" />
        <div className="cloud-layer absolute bottom-[8%] right-[16%] h-24 w-[34%] rounded-full bg-white/20 blur-[38px] opacity-70" />

        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#03070b] via-[#03070b]/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-[-8%] h-[18rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_70%)] blur-3xl" />

        <div ref={contentRef} className="relative z-10 max-w-4xl text-center">
          <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.45em] text-[#e8f2ff]/70">
            The Highlands Unfold
          </p>
          <h2 className="font-serif text-4xl font-light leading-[1.04] text-[#f7f4eb] sm:text-5xl lg:text-7xl">
            A slow-moving veil of cloud and light that carries you into the next chapter.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#e8f2ff]/70 sm:text-lg">
            As the mist drifts across the screen, the story beneath begins to emerge — calm, cinematic and deeply immersive.
          </p>
        </div>
      </div>
    </section>
  )
}
