import { useLenis } from 'lenis/react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { links, nav } from '../content'
import { publicUrl } from './ui'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Freeze the page behind the mobile menu
  useEffect(() => {
    if (open) lenis?.stop()
    else lenis?.start()
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open, lenis])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        scrolled || open ? 'border-b border-line bg-ink/95 py-3' : 'border-b border-transparent py-5 md:py-7'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <a href="#top" className="shrink-0" aria-label="Luigi & Associates — back to top">
          <img src={publicUrl('img/luigi-logo.png')} alt="Luigi & Associates LLC" className="h-8 w-auto md:h-10" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="eyebrow text-stone transition-colors duration-300 hover:text-bone">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow hidden border border-gold/50 px-5 py-3 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink sm:inline-block"
          >
            Book a call
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center text-bone lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] bottom-0 bg-ink lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex h-full flex-col pt-8 pb-10">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display block py-4 text-4xl text-bone"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={links.book}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-auto bg-gold py-5 text-center text-ink"
              >
                Book a discovery call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
