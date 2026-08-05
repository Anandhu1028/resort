import Image from "next/image"
import { ArrowRight, UtensilsCrossed } from "lucide-react"

const dishes = [
  {
    title: "Firelit Kerala Feast",
    text: "Slow-cooked curries, smoked seafood and fresh local produce served beneath lantern light and cloud-soft evening air.",
  },
  {
    title: "Chef’s Tasting Table",
    text: "A private menu of highland ingredients and contemporary refinement, shaped to feel intimate and entirely unforgettable.",
  },
]

export function Dining() {
  return (
    <section id="dining" className="bg-[linear-gradient(180deg,_rgba(7,18,14,0.95),_rgba(13,26,21,0.98))] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_35px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/aurelia-about.png"
                alt="Elegant dining experience in Aurelia Highlands with a candlelit table overlooking the misty valley"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/90 backdrop-blur-md">
              <UtensilsCrossed className="h-4 w-4 text-primary" strokeWidth={1.6} />
              Fine dining
            </div>
          </div>

          <div className="max-w-2xl">
            <span className="mb-6 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">Culinary Storytelling</span>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-foreground text-balance md:text-5xl">
              Plates shaped by the region, the season and the hour.
            </h2>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground text-pretty md:text-lg">
              Guests dine in intimate settings with slow service, local ingredients and a menu that blends Kerala tradition with contemporary luxury in the most graceful way.
            </p>

            <div className="mt-10 space-y-4">
              {dishes.map((dish) => (
                <div key={dish.title} className="rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-xl transition hover:border-primary/40 hover:bg-black/30">
                  <h3 className="font-serif text-2xl font-light text-foreground">{dish.title}</h3>
                  <p className="mt-3 text-sm font-light leading-8 text-muted-foreground">{dish.text}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="group mt-10 inline-flex items-center gap-3 text-[0.72rem] font-light uppercase tracking-[0.3em] text-foreground/80 transition-all hover:gap-4 hover:text-primary">
              Reserve a tasting
              <ArrowRight className="h-4 w-4 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
