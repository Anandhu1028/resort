import Image from "next/image"
import { ArrowRight, Trees, Eye, DoorOpen } from "lucide-react"

const stats = [
  { icon: Trees, value: "12", label: "Luxury Tree Houses" },
  { icon: Eye, value: "360°", label: "Forest View" },
  { icon: DoorOpen, value: "Private", label: "Balcony" },
]

export function TreeHouse() {
  return (
    <section
      id="tree-house"
      className="relative flex min-h-screen items-end overflow-hidden bg-background"
    >
      {/* Full-width cinematic image */}
      <div className="absolute inset-0">
        <Image
          src="/images/treehouse-experience.png"
          alt="Luxury elevated tree house glowing at dusk amid the misty forest canopy of Munnar"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Editorial grading for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-20 pt-32 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:pb-28">
        {/* Text block */}
        <div className="max-w-xl">
          <span className="mb-6 inline-block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">
            Tree House Experience
          </span>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Sleep Among <span className="italic text-primary">the Trees</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-sm font-light leading-relaxed text-foreground/70 sm:text-base">
            Wake above the forest canopy in handcrafted tree houses designed for
            complete privacy, panoramic views, and unforgettable mornings above
            the clouds.
          </p>
          <button
            type="button"
            className="group mt-9 inline-flex items-center gap-3 border border-primary/50 bg-primary/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-primary backdrop-blur-sm transition-all hover:gap-4 hover:bg-primary hover:text-primary-foreground"
          >
            Explore Tree Houses
            <ArrowRight className="h-4 w-4 transition-transform" strokeWidth={1.5} />
          </button>
        </div>

        {/* Floating statistics */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 border border-border/50 bg-card/40 px-6 py-5 backdrop-blur-xl transition-colors hover:border-primary/50"
                style={{ animation: `floatY 5s ease-in-out ${i * 0.6}s infinite` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-serif text-xl font-light leading-none text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[0.65rem] font-light uppercase tracking-[0.22em] text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
