import { about } from '../content'
import { ImageReveal, MaskLines, Reveal } from './Reveal'
import { Eyebrow, publicUrl } from './ui'

export function About() {
  return (
    <section id="about" className="grain relative bg-surface">
      <div className="container-page grid gap-14 py-24 md:py-36 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ImageReveal className="aspect-[4/5] overflow-hidden">
            <img
              src={publicUrl('img/handy-portrait.jpg')}
              alt="Handy Luigi"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </ImageReveal>
          <Reveal>
            <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
              {about.roles.map((role) => (
                <li key={role} className="text-sm text-stone">
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:pt-6">
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
          </Reveal>
          <h2 className="font-display mt-7 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
            <MaskLines
              lines={[
                'Built in the field.',
                <>
                  <em className="text-gold">Trained</em> in
                </>,
                'the numbers.',
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <div className="mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-bone/75">
              {about.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <dl className="mt-14 border-t border-line">
            {about.credentials.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 0.05}
                y={16}
                className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8"
              >
                <dt className="font-display text-4xl text-gold">{c.value}</dt>
                <dd className="leading-relaxed text-bone/80">{c.label}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal>
            <aside className="mt-14 border-l-2 border-gold bg-ink/60 p-8 md:p-10">
              <p className="eyebrow text-gold">{about.mission.title}</p>
              <p className="font-display mt-5 text-[1.7rem] leading-snug text-bone">{about.mission.text}</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
