import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { links } from '../content'

/** Phone-only booking bar: appears after the hero, steps aside once the contact section is on screen. */
export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('contact')
    let pastHero = false
    let atContact = false
    const update = () => setShow(pastHero && !atContact)
    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.8
      update()
    }
    const io = new IntersectionObserver(([entry]) => {
      atContact = entry.isIntersecting
      update()
    })
    if (contact) io.observe(contact)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          exit={{ y: '110%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <a
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow block bg-gold py-4 text-center text-ink"
          >
            Book a free discovery call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
