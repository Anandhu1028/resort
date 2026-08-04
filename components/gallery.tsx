import Image from "next/image"

const galleryItems = [
  {
    title: "Misty Sunrises",
    image: "/images/room-poolvilla.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Quiet Forest Decks",
    image: "/images/room-treehouse.png",
    className: "",
  },
  {
    title: "Infinity Views",
    image: "/images/infinity-pool.png",
    className: "",
  },
  {
    title: "Luxury Interiors",
    image: "/images/room-hillsuite.png",
    className: "md:col-span-2",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-5 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">Gallery</span>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-foreground text-balance md:text-5xl">
              Quiet scenes of mist, texture and cinematic light.
            </h2>
          </div>
          <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground text-pretty md:text-base">
            A collection of secluded settings and atmospheric details that reveal the emotional tone of Aurelia Highlands.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article key={item.title} className={`group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-card/60 ${item.className}`}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[0.6rem] font-light uppercase tracking-[0.32em] text-primary">Aurelia Visuals</p>
                <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
