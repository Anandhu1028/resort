import { HeartHandshake, MoonStar, Waves } from "lucide-react"

const rituals = [
  {
    title: "Forest Spa",
    text: "Therapeutic rituals inspired by local herbs, warm oils and the cooling air of the high ranges.",
    icon: HeartHandshake,
  },
  {
    title: "Sunrise Yoga",
    text: "Gentle movement on terraces that open to the first light over mist-wrapped valleys and tea estates.",
    icon: MoonStar,
  },
  {
    title: "Nature Therapy",
    text: "Quiet experiences designed for restoration, breath and deep stillness in the shelter of the forest.",
    icon: Waves,
  },
]

export function Wellness() {
  return (
    <section className="bg-[linear-gradient(135deg,_rgba(23,54,46,0.18),_rgba(12,13,14,0.95))] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="mb-6 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">Wellness & Stillness</span>
          <h2 className="font-serif text-4xl font-light leading-[1.08] text-foreground text-balance md:text-5xl">
            Reconnect with the body, breath and hush of the hills.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {rituals.map((ritual) => {
            const Icon = ritual.icon
            return (
              <div key={ritual.title} className="rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">{ritual.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">{ritual.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
