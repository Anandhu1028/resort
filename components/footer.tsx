import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(8,12,15,0.98),rgba(4,6,8,1))] py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.42em] text-primary">
            Aurelia Highlands Resort
          </p>
          <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Let the hills welcome you into something unforgettable.
          </h2>
          <p className="mt-5 max-w-xl text-sm font-light leading-7 text-muted-foreground text-pretty sm:text-base">
            A cinematic sanctuary in Kuttikkanam, where luxury is quiet, every sunrise feels cinematic and every stay is shaped for memory.
          </p>
        </div>

        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.36em] text-primary">
            Contact
          </p>
          <div className="mt-5 space-y-4">
            <a
              href="mailto:stay@aureliahighlands.com"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
              stay@aureliahighlands.com
            </a>
            <a
              href="tel:+914860002200"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
              +91 486 000 2200
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/10 px-6 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center lg:px-10">
        <span>© 2026 Aurelia Highlands Resort</span>
        <span className="text-[0.72rem] uppercase tracking-[0.32em] text-foreground/60">
          Crafted for quiet luxury
        </span>
      </div>
    </footer>
  )
}
