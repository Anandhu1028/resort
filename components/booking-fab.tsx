'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CalendarDays, ChevronUp, Sparkles, Users, X } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.004 2.002a9.998 9.998 0 0 0-8.58 15.19L2.004 22l4.83-1.27A9.99 9.99 0 1 0 12.004 2.002Zm0 1.8a8.2 8.2 0 0 1 4.63 1.31 8.2 8.2 0 0 1 2.57 11.03l.53 1.35-1.44-.38a8.17 8.17 0 0 1-3.98 1.02c-4.53 0-8.2-3.67-8.2-8.2 0-4.53 3.67-8.2 8.2-8.2Zm-1.02 3.53c-.11 0-.24.01-.38.04-.14.03-.3.09-.46.18-.16.09-.3.19-.43.31-.13.12-.25.26-.37.43-.12.17-.18.36-.18.56 0 .2.06.37.19.54.13.17.24.31.37.46.12.16.25.33.38.5.12.17.26.33.42.49.16.16.33.31.5.46.18.15.34.28.5.4.16.12.29.18.47.19.18.01.38-.04.58-.13.19-.09.36-.2.52-.34.16-.14.31-.29.46-.45.15-.16.29-.32.43-.49.14-.16.27-.32.39-.49.11-.17.15-.34.12-.53-.03-.19-.13-.37-.3-.55-.17-.18-.38-.3-.62-.39-.24-.08-.47-.12-.72-.12-.16 0-.33.02-.5.07-.17.05-.35.12-.51.22-.16.1-.3.22-.43.36-.13.14-.23.29-.3.45-.07.16-.11.29-.11.42 0 .16.06.29.19.42.12.13.27.25.44.35.17.1.24.15.22.24.46.55.35.67.88.42.03.24.06.47.09.76.12.3.29.56.54.79.25.23.49.43.72.57.24.15.45.23.73.14.28-.09.58-.2.86-.36.28-.15.5-.34.63-.62.13-.28.17-.54.11-.81-.06-.27-.22-.53-.42-.73-.19-.2-.39-.39-.58-.56-.19-.17-.36-.3-.62-.42-.26-.11-.51-.18-.73-.14-.22.04-.4.12-.56.24-.16.12-.29.27-.4.45-.11.18-.18.37-.18.56 0 .4.19.72.48.95.29.23.61.39.96.48.35.09.6.21.74.37.14.16.26.37.36.57.1.2.17.2.31.26.49.06.18.12.38.17.58.05.2.11.4.19.59l.08.2c.11.11.17.18.2.27.04.1.06.2.08.31.02.11.03.2.02.29-.01.09-.03.18-.08.27-.05.09-.1.18-.16.28-.07.1-.16.2-.27.3-.11.11-.23.22-.36.33-.13.11-.27.23-.43.35-.16.12-.33.25-.52.38-.19.13-.4.26-.64.4-.24.14-.48.28-.73.39-.25.11-.52.2-.81.28-.29.08-.6.17-.95.28-.35.11-.74.2-1.12.24-.38.04-.75.02-1.09-.06-.34-.09-.66-.23-.95-.43-.29-.2-.54-.42-.76-.64-.22-.22-.4-.47-.55-.73-.15-.27-.25-.55-.31-.83-.05-.28-.08-.57-.08-.83 0-.26.04-.52.11-.77.07-.25.16-.49.28-.72.12-.23.25-.44.4-.62.15-.18.32-.35.5-.49.17-.14.36-.25.54-.32.18-.08.36-.13.54-.14.18-.01.35.03.5.1.15.06.28.16.39.3.11.14.18.24.21.34.03.1.07.24.1.4.03.16.04.28.04.39 0 .11.02.21.08.34v.2c.01.1.02.18.04.25.03.07.07.13.12.17.05.04.1.06.17.06.07 0 .16-.02.26-.07.1-.05.17-.1.25-.16.08-.06.17-.12.26-.17l.18-.1c.15-.08.26-.16.35-.24.09-.08.17-.17.26-.27.09-.11.18-.2.28-.3.1-.1.22-.19.36-.29.14-.09.3-.17.49-.24.18-.07.37-.12.57-.16.2-.04.39-.06.57-.05.18.01.35.05.5.11.15.06.29.14.4.24.11.1.2.2.28.32.08.11.15.24.2.39.06.15.1.31.13.47.03.16.06.32.1.5.04.18.08.35.13.53.05.18.13.34.22.52.09.18.19.35.29.49.1.14.2.22.31.3.38.08.16.16.29.24.4.08.11.15.2.21.28.06.08.13.16.22.25.09.09.21.17.34.24.13.07.28.1.48.09.2-.01.39-.02.57-.04.75-.02.18.01.35.06.49.05.14.12.32.2.49.08.17.16.34.24.49.08.15.16.28.23.4.07.12.14.25.21.4.08.15.14.29.2.45.06.16.12.31.18.43.06.12.14.22.25.28.34.06.09.14.16.23.2.09.04.17.05.25.02.08-.03.18-.12.34-.23.52-.11.18-.24.34-.38.47-.14.12-.29.23-.45.31-.15.08-.31.2-.49.32-.18.12-.37.25-.58.39-.21.14-.43.27-.71.4-.28.12-.57.25-.95.42-.38.17-.75.34-1.13.56-.38.22-.74.44-1.12.67-.38.24-.74.48-1.1.73-.36.25-.69.5-1.03.76-.34.26-.67.52-.98.76-.31.24-.59.47-.84.68-.25.21-.48.4-.66.57-.18.17-.34.31-.43.4-.1.09-.18.14-.22.18-.05.03-.13.06-.2.09-.08.03-.14.04-.19.03-.05-.01-.12-.03-.2-.09-.08-.06-.15-.16-.2-.29-.05-.14-.08-.34-.09-.61-.02-.27-.02-.55-.01-.87.01-.32.05-.64.1-.95.05-.31.13-.62.22-.91.09-.29.19-.56.29-.81.1-.25.2-.48.31-.71.1-.23.2-.44.33-.63.45-.2.12-.38.21-.56.28-.18.08-.34.15-.49.21-.15.06-.28.11-.4.16-.12.05-.22.09-.31.12-.09.03-.18.05-.26.06-.08.02-.16.02-.23.02-.08 0-.16-.01-.24-.06-.08-.05-.16-.12-.23-.22-.07-.1-.13-.22-.18-.37-.05-.15-.09-.32-.11-.5-.02-.18-.02-.36 0-.54.02-.18.06-.35.12-.53.2-.17.08-.33.17-.47.28-.14.11-.24.22-.33.33-.09.11-.16.23-.2.36-.04.14-.06.29-.04.46.02.18.1.39.25.57.16.18.3.35.43.49.13.14.25.28.37.42.12.14.24.28.38.43.14.16.26.31.4.5.15.18.31.4.48.63.17.24.35.48.54.71.2.24.35.49.54.72.74.23.2.46.4.7.57.24.17.47.35.7.56.24.2.48.38.77.56.28.18.57.38.92.46.36.08.7.15 1.02.32.32.16.62.34.84.58.22.24.39.43.54.6.16.17.36.29.62.4.26.11.54.2.83.3.29.11.57.23.84.36.27.12.52.24.82.34.3.1.61.13.95.15 1.35.08.4-.08.74-.16 1.03-.25.29-.09.53-.18.72-.28.07-.04.14-.09.2-.13.06-.04.11-.08.16-.12.05-.04.11-.08.18-.11.07-.03.15-.07.24-.1.09-.04.19-.1.3-.16.11-.06.22-.14.33-.24.11-.1.23-.2.37-.3.57-.13.17-.27.34-.43.48-.16.14-.33.25-.5.34-.17.09-.35.15-.54.23-.19.08-.4.15-.62.24-.22.09-.43.2-.62.37-.19.17-.35.35-.48.55-.15.21-.26.45-.34.72-.08.27-.13.56-.12.86.01.3.07.58.18.84.1.26.26.49.48.74.22.25.43.56.6.87.17.31.34.52.53.74.19.22.39.43.57.64.18.22.36.42.53.61.17.2.33.37.5.54.18.17.34.3.53.49.19.17.37.34.56.52.19.18.39.36.61.53.22.17.46.3.75.44.1.18.24.39.36.56.56.17.2.34.38.49.58.15.19.32.36.49.56.17.19.38.35.57.49.19.14.34.28.56.4.22.12.43.2.61.25.19.05.4.11.52.22.12.11.19.19.24.16.05-.03.11-.08.16-.14.05-.06.09-.15.11-.27.02-.12-.01-.29-.08-.43-.07-.14-.18-.28-.32-.41-.14-.13-.29-.27-.44-.41-.15-.14-.32-.26-.47-.34-.15-.08-.28-.12-.4-.13-.12-.01-.23 0-.34.02-.11.02-.22.07-.35.15-.13.07-.26.20-.37.39-.11.19-.18.38-.2.57-.02.19.01.37.1.55.09.18.22.34.39.49.17.14.35.28.53.4.18.12.37.22.57.3.2.08.39.14.54.2.15.06.28.09.37.1.09.01.18-.02.24-.08.06-.06.09-.13.08-.21-.01-.08-.06-.17-.13-.24-.08-.07-.19-.12-.3-.16-.11-.03-.23-.03-.34.0-.11.03-.22.1-.33.18-.11.08-.22.17-.3.29-.08.12-.15.25-.2.38-.05.13-.11.29-.17.46-.06.17-.12.33-.22.49-.1.16-.18.3-.25.45-.08.15-.13.29-.16.43-.03.14-.04.28-.03.42.02.14.04.28.08.42.04.14.1.29.18.45.08.16.17.35.25.54.08.19.17.39.24.63.07.24.15.53.22.84.25.31.03.63.06.97.1.33.03.68.04 1.06.03.39-.01.74-.04 1.02-.1.28-.06.52-.14.74-.24.22-.1.44-.25.58-.41.13-.15.18-.29.22-.45.56.05.34.13.6.27.77.13.17.22.3.31.41.08.11.16.2.28.27.12.07.24.12.36.08.12-.04.24-.08.36-.13.12-.05.25-.1.39-.16.14-.06.29-.12.44-.2.15-.08.3-.15.46-.26.16-.11.32-.25.48-.4.16-.15.32-.3.49-.46.16-.16.34-.31.54-.45.2-.14.41-.25.65-.33.24-.08.46-.1.69-.1.24 0 .51.04.74.1.23.07.47.12.73.16.26.04.55.09.89.16.34.07.7.16.99.26.29.1.54.24.73.41.19.17.36.34.5.53.14.19.28.38.53.54.25.19.46.42.75.63.26.17.52.27.89.29 1.23.02.34.02.68.02.99-.01.31-.03.57-.09.82-.06.25-.14.47-.24.66-.1.19-.24.36-.4.52-.16.16-.34.3-.54.41-.2.11-.42.18-.67.22-.25.04-.51.04-.76.02-.25-.02-.51-.08-.77-.16-.26-.08-.53-.16-.8-.25-.27-.08-.53-.15-.79-.2-.26-.05-.52-.06-.76-.05-.24.01-.46.04-.67.11-.21.06-.41.15-.6.29-.19.14-.34.31-.46.51-.12.2-.23.4-.31.61-.08.21-.13.43-.13.64 0 .21.05.4.14.6.09.2.23.38.41.56.18.18.38.34.58.47.21.13.42.2.63.2.21 0 .39-.02.58-.04.19-.02.39-.05.59-.08.2-.03.39-.04.58-.04.19 0 .37.01.54.03.17.02.33.05.49.11.16.06.31.16.45.3.14.14.28.3.38.47.1.17.22.36.34.58.44.22.1.46.15.73.19.96.19.3 0 .56-.04.8-.13.24-.09.45-.24.55-.41.1-.18.1-.43.06-.56-.14-.04-.06-.06-.14-.05-.22.01-.08.05-.15.14-.2.09-.05.2-.1.33-.16.13-.06.27-.13.43-.22.16-.09.33-.18.52-.31.18-.13.37-.28.56-.47.19-.19.4-.46.64-.8.25-.34.54-.72.85-1.13.31-.41.6-.84.8-1.27.2-.43.38-.88.69-1.35.95-1.47.26-.59.49-1.2.88-1.86.4-.66.87-1.3 1.17-2.02.27-.71.5-1.37.84-2.1 1.16-2.83.32-.72.64-1.41 1.03-2.05.39-.64.77-1.24 1.07-1.79.3-.55.57-1.1.84-1.62.27-.52.59-1.04.96-1.53.66-.49.31-.85.47-1.12.5-.27.03-.54.0-.82-.03-.28-.04-.56-.12-.86-.23-.3-.11-.57-.24-.84-.4-.27-.15-.51-.33-.74-.53-.23-.19-.42-.39-.58-.63-.16-.24-.3-.48-.38-.73-.08-.25-.1-.5-.04-.74.06-.24.2-.46.37-.67.15-.21.29-.4.46-.57.17-.17.34-.31.54-.43.2-.12.39-.23.58-.32.19-.09.37-.16.57-.23.2-.07.4-.12.62-.18.22-.06.45-.11.7-.15.25-.04.49-.1.73-.17.24-.07.46-.16.68-.25.22-.09.43-.2.65-.29.22-.09.47-.17.67-.24.21-.07.44-.1.66-.1.22 0 .43.02.64.07.2.05.36.13.5.23.14.1.25.2.37.3.12.1.27.15.39.2.13.05.26.07.4.07.14 0 .28-.03.4-.09.12-.06.24-.14.36-.25.12-.12.23-.24.32-.36.09-.12.17-.24.23-.36.06-.12.1-.24.13-.39.03-.14.04-.29.03-.44-.02-.14-.05-.26-.15-.36-.28-.09-.13-.16-.28-.2-.41-.05-.14-.07-.29-.07-.43 0-.14.02-.29.07-.42.05-.13.12-.28.22-.39.27-.11.05-.25.07-.39.05-.14-.01-.28-.06-.39-.15-.11-.1-.21-.22-.29-.37-.08-.15-.15-.32-.19-.48-.04-.16-.05-.3-.03-.43.02-.13.06-.24.12-.32.06-.09.14-.18.2-.26.06-.08.11-.15.16-.2.04-.05.08-.09.13-.11.04-.02.09-.05.15-.09.06-.04.12-.09.17-.15.06-.06.1-.12.13-.19.03-.07.04-.14.03-.2-.01-.06-.04-.12-.08-.17-.05-.04-.1-.08-.16-.12-.06-.04-.12-.07-.19-.08-.06-.01-.14-.01-.23-.01-.1 0-.2.01-.3.03-.1.03-.2.07-.29.12-.09.06-.17.13-.23.21-.06.08-.1.18-.1.29-.01.11.01.23.03.35.07.12.04.23.1.32.16.09.06.17.14.25.24.08.1.15.2.25.24.32.08.07.17.15.28.21.11.06.24.12.39.15.15.03.29.04.42.01.13-.03.27-.07.4-.15.13-.08.27-.2.41-.36.14-.16.27-.32.4-.5.13-.18.25-.37.35-.56.11-.19.18-.43.23-.69.05-.26.1-.57.14-.97.14-.41 0-.82-.09-1.23-.22-.42-.13-.8-.35-1.15-.64-.34-.3-.64-.68-.89-1.11-.25-.42-.41-.9-.47-1.34-.07-.43-.04-.88.05-1.3.1-.43.25-.84.46-1.2.21-.35.48-.64.8-.89.32-.25.68-.46 1.08-.57 1.4-.11.33-.12.65-.1.95.02.3.07.58.12.83.05.25.11.49.19.72.07.23.22.48.41.63.19.15.36.32.5.49.14.17.24.35.28.51.04.16.08.3.1.43.02.13.0.25-.01.33-.04.08-.03.16-.08.22-.14.06-.06.12-.15.15-.24.03-.09.05-.18.07-.27.02-.09.03-.18.03-.27 0-.09-.01-.18-.09-.26-.08-.08-.18-.17-.29-.28-.11-.11-.21-.24-.3-.39-.09-.15-.18-.32-.23-.49-.05-.17-.09-.35-.1-.53-.01-.18.01-.36.07-.53.06-.17.17-.31.31-.5.41-.19.1-.39.13-.58.13-.19 0-.38-.03-.56-.1-.18-.07-.34-.18-.48-.31-.14-.14-.24-.31-.32-.48-.08-.17-.11-.34-.1-.5.01-.16.06-.32.14-.47.08-.15.19-.27.31-.42.44-.14.17-.28.32-.41.45-.13.13-.25.25-.37.34-.13.1-.25.2-.37.27-.12.08-.22.12-.31.12-.1 0-.18-.01-.26-.02-.08-.02-.16-.04-.24-.09-.08-.05-.14-.11-.2-.2-.06-.09-.1-.18-.11-.27-.01-.09 0-.18.04-.26.04-.08.11-.15.2-.25.3-.14.1-.29.2-.46.3-.17.1-.35.2-.55.3-.2.1-.41.18-.61.26-.2.08-.4.15-.58.2-.18.05-.35.09-.5.1-.15.01-.3 0-.43-.01-.13-.03-.24-.08-.35-.16-.11-.08-.21-.19-.29-.32-.08-.13-.12-.28-.13-.42-.01-.14.01-.28.05-.41.04-.13.12-.24.24-.39.36-.14.12-.3.22-.46.3-.16.08-.32.11-.48.11-.16 0-.31-.03-.46-.08-.15-.05-.28-.13-.41-.23-.13-.1-.23-.22-.32-.35-.09-.13-.16-.27-.2-.42-.04-.15-.04-.3 0-.46.04-.16.12-.31.26-.52.36-.2.10-.42.18-.64.22-.22.04-.42.03-.61-.02-.19-.05-.37-.15-.53-.29-.16-.14-.3-.3-.4-.49-.1-.19-.15-.4-.15-.62 0-.22.06-.44.17-.64.11-.2.26-.37.51-.5.73-.14.22-.25.45-.32.66-.07.21-.08.42-.03.62.05.2.15.38.28.56.13.18.27.35.44.54.17.19.34.36.5.53.16.17.29.34.41.53.12.19.25.37.38.55.13.18.25.33.36.46.11.13.22.23.31.31.09.08.19.14.3.2.11.06.23.09.33.09.11 0 .19-.01.25-.04.06-.03.13-.08.2-.16.07-.08.13-.17.17-.28.05-.11.07-.24.07-.39.01-.15-.05-.3-.13-.46-.23-.16-.1-.3-.2-.44-.31-.14-.11-.28-.23-.44-.37-.16-.14-.34-.3-.52-.47-.18-.17-.37-.33-.57-.47-.2-.14-.4-.24-.61-.3-.2-.06-.39-.07-.58-.04-.19.03-.37.11-.55.24-.18.13-.33.31-.45.5-.12.19-.2.39-.24.58-.03.19-.03.39.03.58.06.19.16.37.29.53.13.15.28.32.45.49.17.17.35.33.53.47.18.14.39.25.61.33.22.08.45.13.68.17.23.04.47.04.68-.02.21-.06.4-.17.57-.28.17-.11.3-.25.41-.4.11-.15.2-.29.28-.43.08-.14.13-.27.17-.38.04-.11.04-.2 0-.26-.06-.06-.06-.1-.15-.11-.25-.01-.1.01-.2.05-.3.04-.1.11-.18.19-.25.08-.07.17-.12.28-.15.11-.03.23-.05.36-.05 0 0 .01 0 .01 0Z" />
    </svg>
  )
}

const stayOptions = [
  {
    id: 'treehouse',
    title: 'Forest Treehouse',
    subtitle: 'Canopy calm',
    price: 'From ₹24,000 / night',
    image: '/images/hero/frame_020.jpg',
    blurb: 'Suspended decks, private cedar baths, and misted dawn views.',
  },
  {
    id: 'villa',
    title: 'Infinity Pool Villa',
    subtitle: 'Skyline stillness',
    price: 'From ₹36,000 / night',
    image: '/images/hero/frame_046.jpg',
    blurb: 'A panoramic retreat with long horizon pool and open-air living.',
  },
  {
    id: 'residence',
    title: 'Highlands Residence',
    subtitle: 'Residence in the mist',
    price: 'From ₹44,000 / night',
    image: '/images/hero/frame_071.jpg',
    blurb: 'A grand estate-style stay for slow afternoons and private hosting.',
  },
]

const floatingButtonBase =
  'group relative flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/10 bg-[rgba(10,10,10,0.96)] text-foreground/90 shadow-[0_20px_45px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary/45 hover:shadow-[0_22px_55px_rgba(0,0,0,0.34)]'

export function BookingFab() {
  const [showTop, setShowTop] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStay, setSelectedStay] = useState(stayOptions[0].id)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const selectedStayData = stayOptions.find((stay) => stay.id === selectedStay) ?? stayOptions[0]

  return (
    <>
      <div className="fixed right-4 bottom-4 z-[70] sm:right-6 sm:bottom-6">
        <div className="flex flex-col items-end gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={scrollToTop}
              className={`${floatingButtonBase} ${showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </button>
            <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden rounded-full border border-white/10 bg-black/85 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
              Top
            </span>
          </div>

          <div className="relative">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className={`${floatingButtonBase} border-[#25D366]/30 bg-[linear-gradient(135deg,rgba(10,16,12,0.98),rgba(20,34,22,0.96))] text-[#25D366] hover:border-[#25D366]/45 hover:shadow-[0_22px_55px_rgba(37,211,102,0.16)]`}
              aria-label="Contact via WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6.6 18.4 4 20l1.6-4.2A7.95 7.95 0 1 1 6.6 18.4Zm.6-8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden rounded-full border border-white/10 bg-black/85 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
              WhatsApp
            </span>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className={`${floatingButtonBase} bg-[linear-gradient(135deg,rgba(198,165,106,0.2),rgba(10,10,10,0.96))] text-primary hover:border-primary/60 hover:shadow-[0_22px_55px_rgba(198,165,106,0.18)]`}
              aria-label="Book now"
            >
              <CalendarDays className="h-5 w-5 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" strokeWidth={1.8} />
            </button>
            <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden rounded-full border border-white/10 bg-black/85 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
              Book
            </span>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md sm:px-6">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,10,10,0.96)] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/30 p-2 text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Close booking modal"
            >
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex items-center gap-2 text-[0.65rem] font-light uppercase tracking-[0.34em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Curated stays
                </div>

                <div className="space-y-3">
                  {stayOptions.map((stay) => {
                    const isActive = selectedStay === stay.id
                    return (
                      <button
                        key={stay.id}
                        type="button"
                        onClick={() => setSelectedStay(stay.id)}
                        className={`group flex w-full items-center gap-3 rounded-[1.25rem] border p-3 text-left transition-all ${isActive ? 'border-primary/50 bg-primary/10 shadow-[0_10px_30px_rgba(198,165,106,0.12)]' : 'border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-white/[0.05]'}`}
                      >
                        <img src={stay.image} alt={stay.title} className="h-16 w-20 rounded-[1rem] object-cover" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-medium text-foreground">{stay.title}</p>
                            {isActive ? <span className="rounded-full border border-primary/40 px-2 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-primary">Selected</span> : null}
                          </div>
                          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{stay.subtitle}</p>
                          <p className="mt-2 text-xs text-muted-foreground">{stay.blurb}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[0.65rem] font-light uppercase tracking-[0.34em] text-primary">Reserve your escape</p>
                    <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{selectedStayData.title}</h3>
                  </div>
                  <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-primary">
                    {selectedStayData.price}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-muted-foreground">
                      <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-muted-foreground">Check in</span>
                      <input type="date" defaultValue="2026-08-12" disabled className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-foreground/90 outline-none disabled:cursor-not-allowed disabled:opacity-80" />
                    </label>
                    <label className="space-y-2 text-sm text-muted-foreground">
                      <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-muted-foreground">Check out</span>
                      <input type="date" defaultValue="2026-08-16" disabled className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-foreground/90 outline-none disabled:cursor-not-allowed disabled:opacity-80" />
                    </label>
                  </div>

                  <label className="mt-4 block space-y-2 text-sm text-muted-foreground">
                    <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-muted-foreground">Guests</span>
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-foreground/90">
                      <Users className="h-4 w-4 text-primary" />
                      <select defaultValue="2" disabled className="w-full bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-80">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                  </label>

                  <label className="mt-4 block space-y-2 text-sm text-muted-foreground">
                    <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-muted-foreground">Stay type</span>
                    <input value={selectedStayData.title} disabled className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-foreground/90 outline-none disabled:cursor-not-allowed disabled:opacity-80" />
                  </label>

                  <label className="mt-4 block space-y-2 text-sm text-muted-foreground">
                    <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-muted-foreground">Notes</span>
                    <textarea rows={3} defaultValue="Private breakfast, late check-in, and a candlelit terrace dinner." disabled className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-foreground/90 outline-none disabled:cursor-not-allowed disabled:opacity-80" />
                  </label>
                </div>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary-foreground transition-all hover:gap-3 hover:brightness-110"
                >
                  Request this stay
                  <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
