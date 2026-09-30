import { motion } from 'motion/react'
import { hero } from '../content'
import { formatDeadline, nextDeadline, timeLeft } from '../lib/deadlines'
import { MaskLines } from './Reveal'
import { Button, Eyebrow, publicUrl } from './ui'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease, delay },
})

export function Hero() {
  const deadline = nextDeadline()
  const { days } = timeLeft(deadline.date)

  return (
    <section id="top" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Portrait: Handy sits left of frame on desktop, the copy takes the dark right side */}
      <motion.picture
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease }}
        className="absolute inset-0 -z-10"
      >
        <source media="(min-width: 768px)" srcSet={publicUrl('img/handy-hero.jpg')} />
        <img
          src={publicUrl('img/handy-hero-mobile.jpg')}
          alt="Handy Luigi, founder of Luigi & Associates"
          fetchPriority="high"
          className="h-full w-full object-cover object-[50%_15%] brightness-[.85] md:object-[8%_30%]"
        />
      </motion.picture>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,12,10,.35)_0%,rgba(13,12,10,0)_22%,rgba(13,12,10,.72)_42%,rgba(13,12,10,.92)_56%,#0d0c0a_80%)] md:bg-[linear-gradient(90deg,rgba(13,12,10,0)_22%,rgba(13,12,10,.72)_46%,rgba(13,12,10,.96)_62%),linear-gradient(0deg,rgba(13,12,10,.9),rgba(13,12,10,0)_34%)]"
      />

      <div className="container-page flex flex-1 flex-col pt-[48svh] md:pt-0">
        <div className="flex flex-1 items-center md:justify-end">
          <div className="w-full md:w-[52%] md:max-w-[620px] md:pt-20">
            <motion.div {...fadeUp(0.4)}>
              <Eyebrow>
                {hero.eyebrow.split(' · ')[0]}
                <span className="-ml-4 hidden sm:inline">&nbsp;· {hero.eyebrow.split(' · ')[1]}</span>
              </Eyebrow>
            </motion.div>
            <h1 className="font-display mt-6 text-[clamp(3.6rem,7.6vw,7.25rem)] leading-[0.92] tracking-[-0.01em] whitespace-nowrap text-bone md:mt-8">
              <MaskLines
                animateOnMount
                delay={0.5}
                lines={[
                  <>
                    Count on <em className="text-gold">me.</em>
                  </>,
                ]}
              />
            </h1>
            <motion.p
              {...fadeUp(0.8)}
              className="mt-6 max-w-[30rem] text-[1.05rem] leading-relaxed text-bone/80 md:mt-8 md:text-lg"
            >
              {hero.lede}
            </motion.p>
            <motion.div
              {...fadeUp(0.95)}
              className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 md:mt-11"
            >
              <Button>{hero.primary}</Button>
              <a
                href="#cfo-500"
                className="eyebrow self-start border-b border-stone pb-1.5 text-bone transition-colors hover:border-gold hover:text-gold sm:self-auto"
              >
                {hero.secondary}
              </a>
            </motion.div>
            <motion.p {...fadeUp(1.1)} className="mt-8 flex items-center gap-3 text-sm text-stone md:mt-10">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-gold" />
              </span>
              Next tax deadline: <span className="text-bone">{formatDeadline(deadline.date)}</span>
              <span className="hidden sm:inline">
                · {deadline.label.toLowerCase()} · {days} days left
              </span>
            </motion.p>
          </div>
        </div>

        <motion.div {...fadeUp(1.2)} className="pt-12 pb-8 md:pb-11">
          <p className="eyebrow mb-7 hidden text-bone md:block">
            {hero.name}
            <span className="mt-2 block text-stone">{hero.role}</span>
          </p>
          <dl className="grid grid-cols-2 gap-y-6 border-t border-line pt-6 md:grid-cols-4 md:pt-7">
            {hero.proof.map((p) => (
              <div key={p.label} className="flex flex-col-reverse">
                <dt className="eyebrow mt-1.5 text-[0.62rem] text-stone md:text-[0.68rem]">{p.label}</dt>
                <dd className="font-display text-3xl text-bone md:text-[2.6rem]">{p.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
