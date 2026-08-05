import Image from "next/image"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "35", label: "Acres" },
  { value: "52", label: "Suites & Villas" },
  { value: "5200 ft", label: "Elevation" },
]

const timeline = [
  {
    label: "Arrival",
    title: "A hush of mist and warm welcome.",
    description:
      "Guests arrive through tea gardens and pine-scented lanes, a slow descent into the forest ritual that sets the tone for every stay.",
  },
  {
    label: "Design",
    title: "Architecture woven into the hills.",
    description:
      "Stone, timber and glass are composed to feel elemental, luxurious and intimately connected to the clouds outside.",
  },
  {
    label: "Ritual",
    title: "Moments shaped around memory.",
    description:
      "Sunrise tea, candlelit dinners and forest walks become the understated practices of a place designed to linger.",
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="flex flex-col gap-8">
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-primary">Welcome to Kuttikkanam</span>
            <h2 className="max-w-xl font-serif text-5xl font-light leading-[1.03] text-foreground md:text-6xl">
              A hidden refuge where cloud forests, cardamom estates and quiet luxury meet.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
              Set above the valleys of Kuttikkanam, Aurelia Highlands invites guests into a world of pine-scented air, warm stone architecture and immersive experiences shaped by the rhythm of the hills.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-surface/70 p-6 backdrop-blur-xl">
                  <p className="font-serif text-4xl font-light text-primary md:text-5xl">{stat.value}</p>
                  <p className="mt-3 text-[0.72rem] uppercase tracking-[0.35em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-primary/40 bg-black/20 px-8 py-4 text-sm uppercase tracking-[0.28em] text-primary transition duration-300 hover:bg-primary hover:text-black"
            >
              Discover the resort
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(255,255,255,0.05)] shadow-[0_35px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/aurelia-about.png"
                  alt="Aurelia Highlands Resort villas and infinity pool nestled among the misty forests of Kuttikkanam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="absolute left-6 bottom-6 rounded-full border border-primary/30 bg-black/40 px-4 py-2 text-[0.7rem] uppercase tracking-[0.34em] text-primary backdrop-blur-xl">
                Forest sanctuary
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-surface/70 p-7 backdrop-blur-xl">
              <p className="text-[0.65rem] uppercase tracking-[0.44em] text-secondary">The story of the place</p>
              <div className="mt-6 space-y-6">
                {timeline.map((item) => (
                  <div key={item.label} className="space-y-3 rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.42em] text-primary">{item.label}</p>
                    <h3 className="font-serif text-2xl font-light text-foreground">{item.title}</h3>
                    <p className="text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
