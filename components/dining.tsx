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
    <section id="dining" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <Image src="/images/aurelia-about.png" alt="Elegant dining experience in Aurelia Highlands with a candlelit table overlooking the misty valley" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-foreground/90 backdrop-blur-md">
              <UtensilsCrossed className="h-4 w-4 text-primary" strokeWidth={1.6} />
              Fine Dining
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
                <div key={dish.title} className="rounded-[1.5rem] border border-border/50 bg-card/50 p-6 backdrop-blur-xl">
                  <h3 className="font-serif text-2xl font-light text-foreground">{dish.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{dish.text}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="group mt-10 inline-flex items-center gap-3 text-[0.7rem] font-light uppercase tracking-[0.3em] text-foreground/80 transition-all hover:gap-4 hover:text-primary">
              Reserve a tasting
              <ArrowRight className="h-4 w-4 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
