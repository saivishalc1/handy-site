import { links, meetup } from '../content'
import { ImageReveal, MaskLines, Reveal } from './Reveal'
import { Button, Eyebrow, publicUrl } from './ui'

// Asymmetric mosaic: one lead photo, the rest stepping down in size
const tiles = [
  'col-span-2 md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto',
  'md:col-span-5 aspect-[4/3]',
  'md:col-span-5 aspect-[4/3]',
  'md:col-span-4 aspect-[4/3]',
  'md:col-span-4 aspect-[4/3]',
  'col-span-2 md:col-span-4 aspect-[4/3]',
]

export function Meetup() {
  return (
    <section id="meetup" className="bg-ink">
      <div className="container-page py-24 md:py-36">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>{meetup.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
              <MaskLines
                lines={[
                  'Proven in',
                  <>
                    <em className="text-gold">real rooms.</em>
                  </>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <img
              src={publicUrl('img/business-meetup-logo.png')}
              alt="The Business Meetup"
              loading="lazy"
              className="h-9 w-auto opacity-70 brightness-0 invert md:h-11"
            />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/75">{meetup.body}</p>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-line pt-10 md:mt-20 md:grid-cols-4">
          {meetup.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} y={16} className="flex flex-col-reverse">
              <dt className="eyebrow mt-2 pr-4 text-[0.64rem] leading-relaxed text-stone">{s.label}</dt>
              <dd className="font-display text-5xl text-bone md:text-6xl">{s.value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-16 grid grid-cols-2 gap-2 md:mt-20 md:grid-cols-12 md:gap-3">
          {meetup.photos.map((photo, i) => (
            <ImageReveal key={photo.src} className={`overflow-hidden ${tiles[i]}`}>
              <img
                src={publicUrl(photo.src)}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo hover:scale-[1.03]"
              />
            </ImageReveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button href={links.meetup} tone="outline-light">
              Explore the Meetup
            </Button>
            <p className="text-sm text-stone">Ratings and event counts are public on Meetup.com.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
