import { About } from '@/components/about'
import { Accommodation } from '@/components/accommodation'
import { BookingFab } from '@/components/booking-fab'
import { Dining } from '@/components/dining'
import { Experiences } from '@/components/experiences'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import LuxuryStory from '@/components/luxury-story'
import { SocialProof } from '@/components/social-proof'
import { Wellness } from '@/components/wellness'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <Hero />
      <LuxuryStory />
      <About />
      <Accommodation />
      <Experiences />
      <Dining />
      <SocialProof />
      <Wellness />
      <Gallery />
      <Footer />
      <BookingFab />
    </main>
  )
}
