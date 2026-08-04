import Image from "next/image"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "35", label: "Acres" },
  { value: "52", label: "Luxury Suites" },
  { value: "5200 ft", label: "Elevation" },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div className="flex flex-col">
            <span className="mb-8 text-[0.7rem] font-light uppercase tracking-[0.4em] text-primary">
              Welcome to Kuttikkanam
            </span>

            <h2 className="max-w-xl font-serif text-4xl font-light leading-[1.08] text-foreground md:text-5xl lg:text-6xl">
              A hidden refuge where cloud forests, cardamom estates and quiet luxury meet.
            </h2>

            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Set high above the valleys of Kuttikkanam, Aurelia Highlands welcomes guests into a world of pine-scented air, sunrise views and warm Kerala hospitality shaped into a deeply personal luxury escape.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span className="font-serif text-3xl font-light text-primary md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-[0.7rem] font-light uppercase tracking-[0.25em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-primary/40 px-9 py-4 text-xs font-medium uppercase tracking-[0.28em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Discover the Resort
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/aurelia-about.png"
                alt="Aurelia Highlands Resort villas and infinity pool nestled among the misty forests of Kuttikkanam at golden hour"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2rem] border border-primary/30 md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
