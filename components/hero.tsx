"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X } from "lucide-react"

const FRAME_BASE = "/images/hero/frame_"
const FRAME_EXT = ".jpg"
const TOTAL_HERO_FRAMES = 201
const INITIAL_FRAME_BATCH = 18
const LAZY_FRAME_BATCH = 12
const NAV_ITEMS = [
  { label: "Stay", href: "#about" },
  { label: "Experiences", href: "#dining" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#contact" },
  { label: "Contact", href: "#contact" },
]

function padFrame(index: number) {
  return String(index).padStart(3, "0")
}

function isReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const loadingRef = useRef<HTMLDivElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const frameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const frameCountRef = useRef(0)
  const hasLoadedRef = useRef(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    const images = imagesRef.current
    const image = images[index]
    if (!context || !image?.complete) return

    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const ratio = Math.max(width / image.width, height / image.height)
    const imageWidth = image.width * ratio
    const imageHeight = image.height * ratio
    const x = (width - imageWidth) / 2
    const y = (height - imageHeight) / 2

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.imageSmoothingEnabled = true
    context.drawImage(image, 0, 0, image.width, image.height, x, y, imageWidth, imageHeight)
  }

  const requestDraw = (index: number) => {
    frameRef.current = index
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      drawFrame(frameRef.current)
    })
  }

  const updateLoadingProgress = (loaded: number, total: number) => {
    if (progressRef.current) {
      const percent = Math.round((loaded / total) * 100)
      progressRef.current.textContent = `${percent}%`
    }
    if (progressBarRef.current) {
      const percent = Math.max(0, Math.min(100, Math.round((loaded / total) * 100)))
      progressBarRef.current.style.width = `${percent}%`
    }
  }

  const hideLoading = () => {
    if (loadingRef.current) {
      loadingRef.current.style.opacity = "0"
      loadingRef.current.style.pointerEvents = "none"
    }
    document.documentElement.style.overflow = "auto"
    document.body.style.overflow = "auto"
  }

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      if (context) {
        context.setTransform(dpr, 0, 0, dpr, 0, 0)
        context.imageSmoothingQuality = "high"
      }
      drawFrame(Math.round(frameRef.current))
    }

    setSize()
    window.addEventListener("resize", setSize, { passive: true })

    return () => window.removeEventListener("resize", setSize)
  }, [])

  useEffect(() => {
    if (!heroRef.current || !canvasRef.current) return

    const root = document.documentElement
    const body = document.body
    root.style.overflow = "hidden"
    body.style.overflow = "hidden"

    const imagePool: Array<HTMLImageElement | undefined> = []
    let nextFrameToLoad = 1
    let loadedFrames = 0
    const reducedMotion = isReducedMotion()

    const preloadNextBatch = () => {
      if (hasLoadedRef.current) return

      const batchSize = loadedFrames < INITIAL_FRAME_BATCH ? INITIAL_FRAME_BATCH : LAZY_FRAME_BATCH
      const batchEnd = Math.min(TOTAL_HERO_FRAMES, nextFrameToLoad + batchSize - 1)

      for (; nextFrameToLoad <= batchEnd; nextFrameToLoad += 1) {
        const frameIndex = nextFrameToLoad
        const framePath = `${FRAME_BASE}${padFrame(frameIndex)}${FRAME_EXT}`
        const image = new Image()
        image.decoding = "async"
        image.src = framePath

        image.onload = () => {
          imagePool[frameIndex - 1] = image
          loadedFrames += 1
          updateLoadingProgress(loadedFrames, TOTAL_HERO_FRAMES)

          if (loadedFrames >= TOTAL_HERO_FRAMES) {
            finalizeLoad(imagePool.filter(Boolean) as HTMLImageElement[])
            return
          }

          if (loadedFrames >= INITIAL_FRAME_BATCH && nextFrameToLoad <= TOTAL_HERO_FRAMES) {
            const scheduleNextBatch = () => {
              if (!hasLoadedRef.current) {
                preloadNextBatch()
              }
            }

            if (typeof window !== "undefined" && "requestIdleCallback" in window) {
              window.requestIdleCallback(scheduleNextBatch, { timeout: 400 })
            } else {
              window.setTimeout(scheduleNextBatch, 120)
            }
          }
        }

        image.onerror = () => {
          if (!hasLoadedRef.current) {
            finalizeLoad(imagePool.filter(Boolean) as HTMLImageElement[])
          }
        }
      }
    }

    const finalizeLoad = (images: HTMLImageElement[]) => {
      if (hasLoadedRef.current) return
      hasLoadedRef.current = true
      imagesRef.current = images
      frameCountRef.current = images.length
      root.style.overflow = "auto"
      body.style.overflow = "auto"
      updateLoadingProgress(images.length, TOTAL_HERO_FRAMES)
      if (images.length > 0) {
        requestDraw(0)
      }
      if (loadingRef.current) {
        loadingRef.current.style.transition = "opacity 0.8s ease"
        loadingRef.current.style.opacity = "0"
        loadingRef.current.style.pointerEvents = "none"
      }
      if (!reducedMotion) {
        initializeScroll(images.length)
      }
    }

    const initializeScroll = (totalFrames: number) => {
      gsap.registerPlugin(ScrollTrigger)
      const pinDuration = window.innerHeight * 5.2
      const scrollScrub = 1.5
      const premiumEase = "power2.out"
      const scrollObject = { frame: 0 }
      const maxFrame = totalFrames - 1

      gsap.to(scrollObject, {
        frame: maxFrame,
        ease: premiumEase,
        onUpdate: () => {
          const frame = Math.min(maxFrame, Math.round(scrollObject.frame))
          requestDraw(frame)
        },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          scrub: scrollScrub,
          pin: true,
          anticipatePin: 1,
        },
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          scrub: scrollScrub,
        },
      })

      timeline
        .from(
          ".hero-location",
          { y: 24, opacity: 0, ease: premiumEase },
          0.18
        )
        .from(
          ".hero-line",
          { y: 72, opacity: 0, stagger: 0.12, ease: premiumEase },
          0.3
        )
        .from(
          ".hero-copy",
          { y: 28, opacity: 0, ease: premiumEase },
          0.47
        )
        .from(
          ".hero-buttons",
          { y: 30, opacity: 0, ease: premiumEase },
          0.55
        )
        .from(
          ".hero-stats",
          { y: 40, opacity: 0, ease: premiumEase },
          0.72
        )
        .from(
          ".booking-card",
          { y: 48, opacity: 0, ease: premiumEase },
          0.9
        )

      gsap.to(".hero-nav", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          scrub: scrollScrub,
        },
        backgroundColor: "rgba(10,10,10,0.32)",
        borderColor: "rgba(255,255,255,0.12)",
        ease: premiumEase,
      })
    }

    preloadNextBatch()

    return () => {
      root.style.overflow = "auto"
      body.style.overflow = "auto"
      ScrollTrigger.getAll().forEach((instance) => instance.kill())
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 bg-black" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.72),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.55)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-fog absolute -left-20 top-24 h-72 w-[140%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_45%)] opacity-20 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[20rem] overflow-hidden sm:h-[24rem]">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="absolute left-[-18%] bottom-8 h-24 w-[70%] opacity-80 animate-[driftCloudA_42s_linear_infinite] sm:left-[-30%] sm:bottom-10 sm:h-32 sm:w-[48%]">
          <div className="absolute left-0 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-white/18 blur-3xl sm:h-24 sm:w-24" />
          <div className="absolute left-12 top-3 h-24 w-24 rounded-full bg-white/18 blur-3xl sm:left-16 sm:top-4 sm:h-28 sm:w-28" />
          <div className="absolute left-24 top-8 h-16 w-16 rounded-full bg-white/12 blur-3xl sm:left-28 sm:top-10 sm:h-20 sm:w-20" />
        </div>

        <div className="absolute left-[-16%] bottom-20 h-20 w-[72%] opacity-70 animate-[driftCloudB_56s_linear_infinite] sm:left-[-40%] sm:bottom-28 sm:h-28 sm:w-[55%]">
          <div className="absolute left-0 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/12 blur-3xl sm:h-20 sm:w-20" />
          <div className="absolute left-12 top-1 h-20 w-28 rounded-full bg-white/16 blur-3xl sm:left-14 sm:top-2 sm:h-24 sm:w-32" />
          <div className="absolute left-24 top-8 h-14 w-14 rounded-full bg-white/14 blur-3xl sm:left-30 sm:top-10 sm:h-18 sm:w-18" />
        </div>

        <div className="absolute left-[-10%] bottom-4 h-16 w-[60%] opacity-85 animate-[driftCloudC_46s_linear_infinite] sm:left-[-22%] sm:bottom-16 sm:h-20 sm:w-[36%]">
          <div className="absolute left-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-white/14 blur-3xl sm:h-16 sm:w-16" />
          <div className="absolute left-10 top-0 h-16 w-20 rounded-full bg-white/12 blur-3xl sm:left-12 sm:top-1 sm:h-20 sm:w-24" />
          <div className="absolute left-20 top-6 h-12 w-12 rounded-full bg-white/10 blur-3xl sm:left-24 sm:top-8 sm:h-14 sm:w-14" />
        </div>
      </div>

      <div className="absolute inset-x-0 top-6 z-30 px-6 sm:px-10 lg:px-16">
        <div className="hero-nav relative mx-auto flex h-[80px] min-h-[80px] max-w-[1400px] items-center justify-between gap-6 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.18)] px-6 backdrop-blur-[24px] shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 sm:px-10">
          <div className="flex items-center gap-4 text-foreground/90">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-white/5 text-[0.65rem] uppercase tracking-[0.5em] text-foreground/80">
              A
            </div>
            <div className="leading-none">
              <div className="text-[0.7rem] uppercase tracking-[0.48em] text-foreground/70">AURELIA</div>
              <div className="text-[0.58rem] uppercase tracking-[0.4em] text-foreground/50">Highlands Resort</div>
            </div>
          </div>

          <nav className="hidden items-center gap-9 text-[0.68rem] uppercase tracking-[0.38em] text-foreground/65 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="transition duration-300 ease-out hover:text-primary hover:tracking-[0.48em]">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.62rem] uppercase tracking-[0.32em] text-foreground/80 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            Menu
            <span className="flex flex-col gap-[0.2rem]">
              <span className={`h-[1px] w-4 bg-current transition ${isMenuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-[1px] w-4 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[1px] w-4 bg-current transition ${isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>

          {isMenuOpen ? (
            <div className="absolute inset-x-0 top-[calc(100%+0.75rem)] flex flex-col gap-3 rounded-[24px] border border-white/10 bg-[rgba(8,8,8,0.94)] p-4 text-[0.68rem] uppercase tracking-[0.3em] text-foreground/70 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:hidden">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-[100px] pb-10 sm:px-10 lg:grid-cols-[6fr_4fr] lg:px-16 xl:px-20">
        <div className="relative flex flex-col justify-center gap-10 lg:pr-10">
          <div className="hero-location text-sm uppercase tracking-[0.55em] text-foreground/60">
            Munnar · Kerala · India
          </div>

          <div className="space-y-8">
            <h1 className="hero-headline max-w-[720px] text-[clamp(80px,9vw,150px)] leading-[0.92] font-serif font-light tracking-[-0.03em] text-foreground">
              <div className="hero-line overflow-hidden">
                <span className="block">Escape Above</span>
              </div>
              <div className="hero-line overflow-hidden">
                <span className="block italic text-primary">The Clouds</span>
              </div>
            </h1>
            
          </div>

        

          <div className="hero-stats mt-8 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.36em] text-foreground/65 opacity-0">
            <span className="inline-flex items-center gap-3 text-[0.8rem] tracking-[0.45em] text-foreground/60">★★★★★</span>
            <span className="h-5 w-px bg-white/10" />
            <span>52 Luxury Suites</span>
            <span className="h-5 w-px bg-white/10" />
            <span>12 Tree Houses</span>
            <span className="h-5 w-px bg-white/10" />
            <span>5200 ft Elevation</span>
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:pb-0">
          <div className="booking-card opacity-0 w-full max-w-[480px] rounded-[36px] border border-[rgba(255,255,255,0.08)] bg-[rgba(18,18,18,0.35)] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-[32px]">
            <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-[rgba(198,165,106,0.16)] blur-3xl" />
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.45em] text-foreground/50">Bespoke Arrival</p>
              <h2 className="text-3xl font-serif tracking-[-0.03em] text-foreground">Craft your private stay</h2>
              <p className="max-w-sm text-sm leading-7 text-foreground/70">
                Choose arrival rhythm, room mood, and culinary rituals with effortless luxury and calm precision.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <label className="grid gap-2 text-sm text-foreground/60">
                Check-in
                <input
                  type="date"
                  className="w-full rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-5 py-4 text-sm text-foreground outline-none transition duration-300 focus:border-primary/60 focus:ring-1 focus:ring-primary/20"
                />
              </label>
              <label className="grid gap-2 text-sm text-foreground/60">
                Check-out
                <input
                  type="date"
                  className="w-full rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-5 py-4 text-sm text-foreground outline-none transition duration-300 focus:border-primary/60 focus:ring-1 focus:ring-primary/20"
                />
              </label>
              <label className="grid gap-2 text-sm text-foreground/60">
                Guests
                <select className="w-full rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-5 py-4 text-sm text-foreground outline-none transition duration-300 focus:border-primary/60 focus:ring-1 focus:ring-primary/20">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </label>
            </div>

            <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#C6A56A] px-6 py-4 text-sm uppercase tracking-[0.32em] text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(198,165,106,0.24)]">
              Reserve Your Stay
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>

      <div ref={loadingRef} className="absolute inset-0 z-50 flex items-center justify-center bg-black/95 text-center text-white transition-opacity duration-700">
        <div className="w-[min(90vw,24rem)]">
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">Preparing your arrival...</p>
          <div ref={progressRef} className="mt-5 text-4xl font-semibold">0%</div>
          <div className="mt-5 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div ref={progressBarRef} className="h-full w-0 rounded-full bg-[linear-gradient(90deg,_rgba(255,255,255,0.95),_rgba(198,165,106,0.95))] transition-all duration-300" />
          </div>
          <p className="mt-4 text-sm text-foreground/50">Immersive frames are loading with the gentlest possible footprint.</p>
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-8">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
        
        </div>
      ) : null}
    </section>
  )
}
