import { ArrowUpRight, Check } from 'lucide-react'
import { links, pricing, services } from '../content'
import { MaskLines, Reveal } from './Reveal'
import { Button, Eyebrow } from './ui'

export function Services() {
  return (
    <section className="bg-paper text-ink">
      {/* Services as an editorial index */}
      <div id="services" className="container-page scroll-mt-4 py-24 md:py-36">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal>
              <Eyebrow className="text-bronze">What I do</Eyebrow>
            </Reveal>
            <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
              <MaskLines
                lines={[
                  'Everything behind',
                  <>
                    <em className="text-bronze">the numbers.</em>
                  </>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm leading-relaxed text-ink-soft">
              From a one-time cleanup to a full monthly CFO relationship. Start where you are.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-ink/80 md:mt-20">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.03} y={16} className="border-b border-line-dark">
              <a
                href={s.href ?? links.book}
                {...(s.href ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-8 md:grid-cols-[4rem_1.1fr_1fr_3rem] md:gap-x-8 md:py-10"
              >
                <span className="font-display text-lg text-stone-dark">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.02] transition-[color,translate] duration-500 group-hover:translate-x-2 group-hover:text-bronze">
                  {s.title}
                </h3>
                <p className="col-start-2 mt-3 max-w-md leading-relaxed text-ink-soft md:col-start-3 md:mt-0">
                  {s.text}
                </p>
                <ArrowUpRight
                  aria-hidden
                  className="col-start-3 row-start-1 size-6 self-center justify-self-end text-stone-dark transition-[color,rotate] duration-500 group-hover:rotate-45 group-hover:text-bronze md:col-start-4"
                  strokeWidth={1.25}
                />
              </a>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Pricing */}
      <div id="pricing" className="border-t border-line-dark bg-paper-2">
        <div className="container-page py-24 md:py-36">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow className="text-bronze">Ways to work with me</Eyebrow>
            </Reveal>
            <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
              <MaskLines
                lines={[
                  'Clear pricing.',
                  <>
                    <em className="text-bronze">No surprises.</em>
                  </>,
                ]}
              />
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:mt-20 lg:grid-cols-3 lg:items-stretch">
            {pricing.plans.map((plan, i) => {
              const dark = plan.featured
              return (
                <Reveal
                  key={plan.name}
                  delay={i * 0.08}
                  className={`relative flex flex-col p-8 md:p-10 ${
                    dark ? 'grain bg-ink text-bone lg:-my-6 lg:py-16' : 'border border-line-dark bg-paper'
                  }`}
                >
                  {dark && (
                    <span className="eyebrow absolute top-0 right-8 -translate-y-1/2 bg-gold px-3 py-1.5 text-[0.62rem] text-ink md:right-10">
                      Most popular
                    </span>
                  )}
                  <h3 className={`eyebrow ${dark ? 'text-gold' : 'text-bronze'}`}>{plan.name}</h3>
                  <p className="mt-8 flex items-baseline gap-3">
                    <span className="font-display text-7xl leading-none">{plan.price}</span>
                    <span className={dark ? 'text-stone' : 'text-stone-dark'}>{plan.unit}</span>
                  </p>
                  <p className={`mt-5 leading-relaxed ${dark ? 'text-bone/75' : 'text-ink-soft'}`}>{plan.fit}</p>
                  <ul className={`mt-8 mb-10 space-y-3.5 border-t pt-8 ${dark ? 'border-line' : 'border-line-dark'}`}>
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[0.95rem]">
                        <Check className={`size-4 shrink-0 ${dark ? 'text-gold' : 'text-bronze'}`} strokeWidth={1.75} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button tone={dark ? 'gold' : 'outline-dark'} className="mt-auto w-full">
                    {plan.cta}
                  </Button>
                </Reveal>
              )
            })}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col gap-6 border-t border-line-dark pt-10 md:mt-20 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl leading-relaxed text-ink-soft">
                <span className="font-display mr-2 text-2xl text-ink">Speaking engagements.</span>
                {pricing.speaking}
              </p>
              <a
                href={links.book}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow shrink-0 self-start border-b border-ink/40 pb-1.5 transition-colors hover:border-bronze hover:text-bronze md:self-auto"
              >
                Inquire
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
