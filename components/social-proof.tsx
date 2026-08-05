import Image from 'next/image'
import { Award, Star, Sparkles } from 'lucide-react'

const featured = ['Condé Nast Traveler', 'Architectural Digest', 'Travel + Leisure', 'Forbes Travel Guide']
const testimonials = [
  {
    quote:
      'Aurelia Highlands redefined our understanding of quiet luxury. Every detail felt handcrafted and cinematic from the moment we arrived.',
    guest: 'Ananya R., Mumbai',
  },
  {
    quote:
      'The forest villas, the candlelit dining and the service felt as refined as the world’s finest resort destinations.',
    guest: 'James P., London',
  },
]

const awards = [
  { title: 'Awwwards Nominee 2026' },
  { title: 'Best Resort Experience' },
  { title: 'Luxury Travel Gold Award' },
]

export function SocialProof() {
  return (
    <section id="social-proof" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(215,180,106,0.12),_transparent_30%),_linear-gradient(180deg,_rgba(7,18,14,1),_rgba(13,26,21,0.98))] px-6 py-24 text-foreground sm:px-10 lg:px-14">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(215,180,106,0.08),transparent_48%)] opacity-80" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(215,180,106,0.12),transparent_35%)]" />
          <div className="relative space-y-6">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-secondary">Trusted by discerning travelers</span>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl">
              The quiet luxury that critics, guests and industry experts cannot stop talking about.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted">
              Aurelia Highlands is celebrated for its immersive forest retreats, intimate culinary storytelling and the cinematic calm of its hilltop experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {featured.map((name) => (
                <div key={name} className="rounded-[1.5rem] border border-white/10 bg-background/70 px-5 py-4 text-sm text-foreground/70 backdrop-blur-xl">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-primary">
                <Star className="h-5 w-5" />
                <span className="text-[0.65rem] uppercase tracking-[0.4em]">5★ Reviews</span>
              </div>
              <p className="mt-5 text-4xl font-serif font-light text-foreground">Rated exceptional by every guest.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-accent">
                <Award className="h-5 w-5" />
                <span className="text-[0.65rem] uppercase tracking-[0.4em]">Awarded 2026</span>
              </div>
              <p className="mt-5 text-4xl font-serif font-light text-foreground">Luxury travel honors, elevated hospitality.</p>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-secondary">
              <Sparkles className="h-4 w-4" />
              Guest testimonials
            </div>
            <div className="space-y-6">
              {testimonials.map((item) => (
                <blockquote key={item.guest} className="space-y-4 rounded-[1.75rem] border border-white/10 bg-background/70 p-6 text-sm leading-7 text-muted shadow-[0_15px_50px_rgba(0,0,0,0.16)]">
                  <p className="text-foreground/90">“{item.quote}”</p>
                  <footer className="text-xs uppercase tracking-[0.3em] text-secondary">{item.guest}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
