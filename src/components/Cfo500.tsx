import { Check } from 'lucide-react'
import { cfo500 } from '../content'
import { MaskLines, Reveal } from './Reveal'
import { Button, Eyebrow } from './ui'

export function Cfo500() {
  return (
    <section id="cfo-500" className="grain relative bg-ink">
      <div className="container-page py-24 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Offer */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>{cfo500.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
              <MaskLines
                lines={[
                  'One advisor.',
                  <>
                    One <em className="text-gold">rhythm.</em>
                  </>,
                ]}
              />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/75">{cfo500.body}</p>
              <div className="mt-12 flex items-end gap-5 border-t border-line pt-8">
                <span className="font-display text-7xl leading-none text-gold md:text-8xl">{cfo500.price}</span>
                <span className="pb-2 text-sm leading-snug text-stone">
                  {cfo500.priceNote}
                  <br />
                  {cfo500.discount}
                </span>
              </div>
              <Button className="mt-10">Start CFO 500</Button>
            </Reveal>
          </div>

          {/* What's included */}
          <div>
            <Reveal>
              <p className="eyebrow text-stone">What’s included</p>
            </Reveal>
            <ul className="mt-6 border-t border-line">
              {cfo500.included.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 0.03}
                  y={16}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-7 md:grid-cols-[3rem_1fr]"
                >
                  <span className="grid size-8 place-items-center rounded-full border border-gold/40 text-gold">
                    <Check className="size-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.75rem] leading-tight text-bone">{item.title}</h3>
                    <p className="mt-2 max-w-lg leading-relaxed text-stone">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* The monthly rhythm */}
        <div className="mt-28 md:mt-40">
          <Reveal>
            <p className="eyebrow text-stone">The monthly rhythm</p>
          </Reveal>
          <ol className="mt-10 grid gap-px bg-line md:grid-cols-5">
            {cfo500.rhythm.map((step, i) => (
              <Reveal
                as="li"
                key={step}
                delay={i * 0.08}
                y={20}
                className="flex flex-row items-center gap-6 bg-ink py-6 md:flex-col md:items-start md:gap-14 md:px-6 md:py-8 md:first:pl-0"
              >
                <span className="font-display text-5xl text-gold md:text-6xl">{String(i + 1).padStart(2, '0')}</span>
                <span className="eyebrow leading-relaxed text-bone">{step}</span>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="font-display mt-14 max-w-4xl text-[clamp(1.6rem,2.6vw,2.4rem)] leading-snug text-bone/90">
              {cfo500.result}
            </p>
          </Reveal>
        </div>

        {/* Who it's for */}
        <div className="mt-24 grid gap-10 border-t border-line pt-14 md:mt-32 lg:grid-cols-[0.9fr_2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-gold">Who this is built for</p>
          </Reveal>
          <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {cfo500.builtFor.map((line, i) => (
              <Reveal as="li" key={line} delay={i * 0.05} y={12} className="flex gap-4 leading-relaxed text-bone/80">
                <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-gold" />
                {line}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
