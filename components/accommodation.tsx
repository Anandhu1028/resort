import Image from "next/image"
import { ArrowRight, Users } from "lucide-react"

type Room = {
  title: string
  description: string
  price: string
  capacity: string
  features: string[]
  image: string
  alt: string
}

const featured: Room = {
  title: "Forest Tree House",
  description:
    "Private tree house suspended above the verdant canopy, where mornings begin with fog, birdsong and sunrise over the valley.",
  price: "₹14,999",
  capacity: "2 Guests",
  features: ["Canopy terrace", "Private cedar bath", "Sunrise views"],
  image: "/images/room-treehouse.png",
  alt: "Elevated timber tree house villa among the forest canopy at golden hour",
}

const rooms: Room[] = [
  {
    title: "Infinity Pool Villa",
    description:
      "An infinity pool overlooking the mist-draped hills, designed for quiet mornings and long golden evenings.",
    price: "₹24,999",
    capacity: "4 Guests",
    features: ["Private infinity pool", "Firelit terrace", "Forest panorama"],
    image: "/images/room-poolvilla.png",
    alt: "Infinity pool villa overlooking misty tea plantations at dawn",
  },
  {
    title: "Premium Hill View Suite",
    description:
      "Floor-to-ceiling glass and layered textures framed by cloud-swept views across the high ranges.",
    price: "₹11,999",
    capacity: "2 Guests",
    features: ["Panoramic windows", "Heated stone bath", "Private balcony"],
    image: "/images/room-hillsuite.png",
    alt: "Premium hill view suite interior with panoramic mountain windows",
  },
  {
    title: "Honeymoon Villa",
    description:
      "A romantic sanctuary of warm wood, private plunge pools and candlelit evenings beneath the stars.",
    price: "₹29,999",
    capacity: "2 Guests",
    features: ["Private plunge pool", "Candlelit dinner", "Star-lit deck"],
    image: "/images/room-honeymoon.png",
    alt: "Romantic honeymoon villa with private plunge pool at dusk",
  },
]

function CapacityBadge({ capacity }: { capacity: string }) {
  return (
    <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-background/45 px-3 py-1.5 text-[0.62rem] font-light uppercase tracking-[0.24em] text-foreground/90 backdrop-blur-md">
      <Users className="h-3.5 w-3.5" strokeWidth={1.5} />
      {capacity}
    </div>
  )
}

function PriceTag({ price }: { price: string }) {
  return (
    <div className="text-right">
      <span className="block text-[0.55rem] font-light uppercase tracking-[0.24em] text-muted-foreground">From</span>
      <span className="font-serif text-lg font-light text-primary">
        {price}
        <span className="ml-1 text-[0.7rem] tracking-normal text-muted-foreground">/ night</span>
      </span>
    </div>
  )
}

function ExploreCta() {
  return (
    <span className="mt-6 flex items-center gap-3 text-[0.72rem] font-light uppercase tracking-[0.28em] text-foreground/80 transition-colors duration-500 group-hover:text-primary">
      Explore suite
      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" strokeWidth={1.5} />
    </span>
  )
}

function FeaturedCard({ room }: { room: Room }) {
  return (
    <a href="#contact" className="group relative flex h-full min-h-[32rem] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out hover:border-primary/60 hover:shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
      <Image src={room.image} alt={room.alt} fill sizes="(max-width: 1024px) 100vw, 55vw" priority className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <CapacityBadge capacity={room.capacity} />
      <span className="absolute right-6 top-6 z-10 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.26em] text-primary backdrop-blur-md">
        Signature
      </span>

      <div className="relative z-10 p-8 transition-transform duration-700 ease-out group-hover:-translate-y-2 lg:p-12">
        <div className="flex items-end justify-between gap-6">
          <h3 className="font-serif text-3xl font-light text-foreground lg:text-4xl">{room.title}</h3>
          <PriceTag price={room.price} />
        </div>
        <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-muted-foreground">{room.description}</p>
        <div className="mt-6 grid gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
          {room.features.map((feature) => (
            <span key={feature}>• {feature}</span>
          ))}
        </div>
        <ExploreCta />
      </div>
    </a>
  )
}

function RoomCard({ room }: { room: Room }) {
  return (
    <a href="#contact" className="group relative flex flex-1 items-end overflow-hidden rounded-[1.8rem] border border-white/10 shadow-xl shadow-black/25 transition-all duration-700 ease-out hover:border-primary/60 hover:shadow-black/45">
      <Image src={room.image} alt={room.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw" className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <CapacityBadge capacity={room.capacity} />

      <div className="relative z-10 w-full p-7 transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-serif text-xl font-light text-foreground lg:text-2xl">{room.title}</h3>
          <PriceTag price={room.price} />
        </div>
        <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">{room.description}</p>
        <div className="mt-5 grid gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
          {room.features.map((feature) => (
            <span key={feature}>• {feature}</span>
          ))}
        </div>
        <ExploreCta />
      </div>
    </a>
  )
}

export function Accommodation() {
  return (
    <section id="accommodation" className="bg-background px-6 py-28 md:px-12 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="mb-6 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-primary">Accommodation</span>
          <h2 className="font-serif text-4xl font-light leading-[1.05] text-foreground text-balance md:text-5xl lg:text-6xl">
            Choose a stay that feels suspended between forest, cloud and calm.
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground text-pretty">
            Each cottage and suite is crafted to feel rooted in the living landscape of Kuttikkanam, with comfort, privacy and views designed to linger in memory.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <FeaturedCard room={featured} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:flex lg:flex-col lg:gap-8">
            {rooms.map((room) => (
              <div key={room.title} className="flex min-h-[17rem] lg:min-h-0 lg:flex-1">
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center text-center lg:mt-28">
          <a href="#contact" className="group flex items-center gap-3 rounded-full border border-primary/50 px-10 py-4 text-xs font-light uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary hover:text-black">
            View all accommodation
            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" strokeWidth={1.5} />
          </a>
          <p className="mt-6 text-xs font-light tracking-wide text-muted-foreground">Discover 52 handcrafted suites, villas and tree houses.</p>
        </div>
      </div>
    </section>
  )
}
