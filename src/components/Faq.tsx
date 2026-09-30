import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { faq } from '../content'
import { MaskLines, Reveal } from './Reveal'
import { Button, Eyebrow } from './ui'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-paper text-ink">
      <div className="container-page grid gap-14 py-24 md:py-36 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow className="text-bronze">Before you book</Eyebrow>
          </Reveal>
          <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
            <MaskLines
              lines={[
                'Questions owners',
                <>
                  <em className="text-bronze">ask first.</em>
                </>,
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm leading-relaxed text-ink-soft">
              Every year without a system usually means more stress, more cleanup and more missed deductions. The sooner
              it’s built, the easier every tax season gets.
            </p>
            <Button tone="ink" className="mt-10">
              Ask me on a call
            </Button>
          </Reveal>
        </div>

        <ul className="border-t border-ink/80">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal as="li" key={item.q} delay={i * 0.03} y={12} className="border-b border-line-dark">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-tight transition-colors group-hover:text-bronze">
                      {item.q}
                    </span>
                    <Plus
                      aria-hidden
                      strokeWidth={1.25}
                      className={`size-6 shrink-0 text-stone-dark transition-transform duration-500 ease-out-expo ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 text-lg leading-relaxed text-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
