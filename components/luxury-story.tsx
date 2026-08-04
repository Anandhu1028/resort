'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const chapters = [
  {
    eyebrow: 'Arrival',
    title: 'Where mist, tea estates and mountain air begin the story',
    copy:
      'Wander through mist-covered tea estates as the morning sun slowly unveils the breathtaking beauty of Kuttikkanam. Every arrival begins with hush, green light, and the feeling of being gently welcomed into another world.',
    image: '/images/hero/frame_024.jpg',
  },
  {
    eyebrow: 'Retreat',
    title: 'Stone, timber and firelight shaped for stillness',
    copy:
      'Our cottages and villas are composed like quiet chapters in the forest, each one rooted in Kerala warmth and designed to feel calm, intimate and deeply restorative.',
    image: '/images/room-treehouse.png',
  },
  {
    eyebrow: 'Experiences',
    title: 'Slow luxury designed around the rhythm of the hills',
    copy:
      'From dawn walks through pine forests to evenings beneath the stars, every experience is created to feel personal, cinematic and unhurried.',
    image: '/images/infinity-pool.png',
  },
]

const stays = [
  { name: 'Tree House', image: '/images/room-treehouse.png' },
  { name: 'Infinity Pool Villa', image: '/images/room-poolvilla.png' },
  { name: 'Hill View Suite', image: '/images/room-hillsuite.png' },
  { name: 'Honeymoon Villa', image: '/images/room-honeymoon.png' },
]

const experiences = [
  'Tea Estate Walk',
  'Pine Forest Walk',
  'Campfire Evening',
  'Private Dining',
  'Sunrise Viewpoint',
  'Jeep Safari',
]

export default function LuxuryStory() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 82%', once: true },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#050505] py-24 text-[#f4f0ea] sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="reveal mb-16 max-w-3xl space-y-6">
          <p className="text-[0.7rem] uppercase tracking-[0.45em] text-[#c8a96a]">The journey</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A cinematic escape shaped by mist, forest and the hush of Kuttikkanam.
          </h2>
          <p className="text-lg leading-8 text-[#f4f0ea]/75">
            Each chapter unfolds slowly, revealing the natural elegance of the high ranges through intimate design, precise storytelling and a rhythm that feels wonderfully unhurried.
          </p>
        </div>

        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <article key={chapter.title} className="reveal overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] backdrop-blur-[24px]">
              <div className={`grid gap-8 p-8 lg:grid-cols-2 lg:p-10 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
                  <img src={chapter.image} alt={chapter.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[0.65rem] uppercase tracking-[0.42em] text-[#c8a96a]">{chapter.eyebrow}</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#f4f0ea] sm:text-4xl">{chapter.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#f4f0ea]/75">{chapter.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="reveal grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-[24px]">
            <p className="text-[0.7rem] uppercase tracking-[0.45em] text-[#c8a96a]">Accommodation</p>
            <h3 className="mt-4 font-serif text-3xl text-[#f4f0ea] sm:text-4xl">Luxury retreats shaped to feel deeply at home within the forest.</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stays.map((stay) => (
                <div key={stay.name} className="overflow-hidden rounded-[1.25rem] border border-white/10">
                  <img src={stay.image} alt={stay.name} className="h-44 w-full object-cover" />
                  <div className="bg-[#0b0b0b] px-4 py-4 text-sm uppercase tracking-[0.3em] text-[#f4f0ea]/80">{stay.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-[24px]">
            <p className="text-[0.7rem] uppercase tracking-[0.45em] text-[#c8a96a]">Signature experiences</p>
            <div className="mt-6 space-y-4">
              {experiences.map((experience) => (
                <div key={experience} className="flex items-center justify-between border-b border-white/10 pb-4 text-sm uppercase tracking-[0.32em] text-[#f4f0ea]/80">
                  <span>{experience}</span>
                  <span className="text-[#c8a96a]">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
