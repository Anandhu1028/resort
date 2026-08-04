import Image from "next/image"
import { ArrowRight, Compass, Leaf, Sparkles } from "lucide-react"

const principles = [
  {
    title: "Quiet Luxury",
    text: "Every suite invites stillness with soft textures, forest views, and uninterrupted calm.",
    icon: Sparkles,
  },
  {
    title: "Organic Craft",
    text: "Natural materials, sculptural forms, and handcrafted details echo the mountain landscape.",
    icon: Leaf,
  },
  {
    title: "Immersive Nature",
    text: "From misty mornings to lantern-lit evenings, the resort feels woven into the hills.",
    icon: Compass,
  },
]

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <span className="mb-6 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">
              The Aurelia Philosophy
            </span>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-foreground text-balance md:text-5xl lg:text-6xl">
              A retreat shaped by mist, memory, and silence.
            </h2>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground text-pretty md:text-lg">
              Aurelia Highlands is crafted as a cinematic sanctuary where luxury feels effortless,
              intimate, and deeply rooted in the mountain landscape. Every experience is designed to
              slow time and open the senses.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {principles.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-border/50 bg-card/50 p-5 backdrop-blur-xl"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-light text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <a
              href="#stay"
              className="group mt-10 inline-flex items-center gap-3 border border-primary/40 px-8 py-4 text-[0.7rem] font-light uppercase tracking-[0.3em] text-primary transition-all hover:gap-4 hover:bg-primary hover:text-primary-foreground"
            >
              Discover the stay
              <ArrowRight className="h-4 w-4 transition-transform" strokeWidth={1.5} />
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-card/60 p-3 shadow-2xl shadow-black/40">
              <Image
                src="/images/treehouse-experience.png"
                alt="Aurelia Highlands tree house terraces overlooking the mist-filled Munnar hills"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/10 bg-black/25 p-6 backdrop-blur-xl">
                <p className="text-[0.6rem] font-light uppercase tracking-[0.34em] text-primary">
                  Crafted Atmosphere
                </p>
                <p className="mt-3 font-serif text-2xl font-light leading-tight text-foreground text-balance">
                  Private pavilions, mountain mist, and candlelit evenings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
