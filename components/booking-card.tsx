import { CalendarDays, Users, BedDouble, ArrowRight } from "lucide-react"

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="group flex cursor-pointer flex-col gap-2 border-b border-border/60 pb-4 transition-colors focus-within:border-primary hover:border-primary/60">
      <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </span>
      <span className="flex items-center gap-2 text-primary/80">
        {icon}
        {children}
      </span>
    </label>
  )
}

const inputClass =
  "w-full bg-transparent text-sm font-light text-foreground outline-none placeholder:text-foreground/50 [color-scheme:dark]"

export function BookingCard() {
  return (
    <div className="border border-border/60 bg-card/70 p-8 backdrop-blur-xl">
      <span className="mb-5 inline-block border border-primary/40 bg-primary/10 px-3 py-1.5 text-[0.6rem] font-light uppercase tracking-[0.28em] text-primary">
        Best Rate Guaranteed
      </span>
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="font-serif text-xl font-light text-foreground">
          Reserve your stay
        </h2>
        <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-primary">
          Est. 1932
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <Field label="Check In" icon={<CalendarDays className="h-4 w-4" strokeWidth={1.25} />}>
            <input type="date" className={inputClass} aria-label="Check in date" />
          </Field>
          <Field label="Check Out" icon={<CalendarDays className="h-4 w-4" strokeWidth={1.25} />}>
            <input type="date" className={inputClass} aria-label="Check out date" />
          </Field>
        </div>

        <Field label="Guests" icon={<Users className="h-4 w-4" strokeWidth={1.25} />}>
          <select className={`${inputClass} cursor-pointer`} aria-label="Number of guests" defaultValue="2">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </Field>

        <Field label="Room Type" icon={<BedDouble className="h-4 w-4" strokeWidth={1.25} />}>
          <select className={`${inputClass} cursor-pointer`} aria-label="Room type" defaultValue="treehouse">
            <option value="treehouse">Forest Tree House</option>
            <option value="pool-villa">Infinity Pool Villa</option>
            <option value="plantation">Plantation Suite</option>
            <option value="residence">Highlands Residence</option>
          </select>
        </Field>

        <button
          type="button"
          className="group mt-2 flex w-full items-center justify-center gap-3 bg-primary py-4 text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground transition-all hover:gap-4 hover:brightness-110"
        >
          Reserve Your Stay
          <ArrowRight className="h-4 w-4 transition-transform" strokeWidth={1.5} />
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center border border-border/60 py-4 text-xs font-light uppercase tracking-[0.28em] text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
        >
          Explore Resort
        </button>
      </div>
    </div>
  )
}
