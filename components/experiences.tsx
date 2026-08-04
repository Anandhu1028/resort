import { Compass, Mountain, Sparkles } from "lucide-react"

const experiences = [
  {
    title: "Zipline Across the Valley",
    blurb: "Glide above the tea canopy with panoramic views of the Western Ghats.",
    icon: Compass,
  },
  {
    title: "Jeep Safari at Dawn",
    blurb: "Explore hidden ridgelines, forests, and quiet viewpoints before the sun rises.",
    icon: Mountain,
  },
  {
    title: "Tea Factory & Estate Walk",
    blurb: "Discover the soul of Munnar through private tastings and slow heritage walks.",
    icon: Sparkles,
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="bg-[radial-gradient(circle_at_top_left,_rgba(198,165,106,0.12),_transparent_35%)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-5 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">
              Signature Experiences
            </span>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-foreground text-balance md:text-5xl">
              Curated moments that feel rare, cinematic, and deeply personal.
            </h2>
          </div>
          <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground text-pretty md:text-base">
            From sunrise treks to private dining in the forest, each experience is designed to feel
            effortless and unforgettable.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/70 p-8 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative">
                  <span className="text-[0.6rem] font-light uppercase tracking-[0.34em] text-primary">
                    0{index + 1}
                  </span>
                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {item.blurb}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
