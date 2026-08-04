import { About } from '@/components/about'
import { Accommodation } from '@/components/accommodation'
import { BookingFab } from '@/components/booking-fab'
import { Dining } from '@/components/dining'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import LuxuryStory from '@/components/luxury-story'
import { Wellness } from '@/components/wellness'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-[#f4f0ea]">
      <Hero />
      <LuxuryStory />
      <About />
      <Accommodation />
      <Dining />
      <Wellness />
      <Gallery />
      <Footer />
      <BookingFab />
    </main>
  )
}
