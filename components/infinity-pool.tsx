import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"

const features = [
  "Heated Infinity Pool",
  "Mountain Panorama",
  "Sunrise Deck",
  "Private Lounge",
  "Poolside Dining",
]

const stats = [
  { value: "25m", label: "Infinity Edge" },
  { value: "Heated", label: "All Year" },
  { value: "Adults", label: "Only Hours" },
]

export function InfinityPool() {
  return (
    <section id="infinity-pool" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Panoramic image — 65% on desktop */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-8 lg:aspect-[16/11]">
            <Image
              src="/images/infinity-pool.png"
              alt="Heated infinity pool at Aurelia Highlands merging into the misty mountains of Munnar at sunset, lined with lounge chairs and umbrellas"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
            />
            {/* Soft charcoal grading */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10 transition-colors duration-700 group-hover:ring-primary/25" />
          </div>

          {/* Content — 35% on desktop */}
          <div className="lg:col-span-4">
            <span className="text-[0.65rem] font-light uppercase tracking-[0.35em] text-primary">
              Infinity Pool
            </span>
            <h2 className="mt-6 text-pretty font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
              Where Water Meets{" "}
              <span className="italic text-primary">the Sky</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Overlooking the mist-covered valleys of Munnar, our heated infinity
              pool offers uninterrupted mountain views, handcrafted stone finishes,
              and a tranquil atmosphere from sunrise to sunset.
            </p>

            {/* Feature list */}
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm font-light text-foreground/85"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Statistics */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-border/50 py-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-light text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-light uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                type="button"
                className="group flex items-center gap-3 bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:gap-4 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
              >
                Explore Pool Villas
                <ArrowRight className="h-4 w-4 transition-transform" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="border-b border-primary/40 pb-1 text-xs font-light uppercase tracking-[0.28em] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
