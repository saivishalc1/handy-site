import { problem } from '../content'
import { MaskLines, Reveal } from './Reveal'
import { Eyebrow } from './ui'

export function Problem() {
  return (
    <section className="bg-paper text-ink">
      <div className="container-page grid gap-14 py-24 md:py-36 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow className="text-bronze">{problem.eyebrow}</Eyebrow>
          </Reveal>
          <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
            <MaskLines
              lines={[
                'Revenue is',
                'coming in.',
                <>
                  <em className="text-bronze">Clarity</em> is not.
                </>,
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">{problem.body}</p>
          </Reveal>
        </div>

        <ol className="border-t border-ink/80">
          {problem.quotes.map((quote, i) => (
            <Reveal
              as="li"
              key={quote}
              delay={i * 0.04}
              y={20}
              className="flex items-baseline gap-6 border-b border-line-dark py-7 md:gap-10 md:py-9"
            >
              <span className="font-display w-8 shrink-0 text-lg text-stone-dark">
                {String(i + 1).padStart(2, '0')}
              </span>
              <blockquote className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.1] italic">
                “{quote}”
              </blockquote>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
