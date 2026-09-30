import { useEffect, useState } from 'react'
import { links, nav } from '../content'
import { formatDeadline, nextDeadline, timeLeft } from '../lib/deadlines'
import { MaskLines, Reveal } from './Reveal'
import { Button, Eyebrow, publicUrl } from './ui'

function Countdown() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])
  const deadline = nextDeadline(now)
  const left = timeLeft(deadline.date, now)
  const units = [
    { value: left.days, label: 'Days' },
    { value: left.hours, label: 'Hours' },
    { value: left.minutes, label: 'Minutes' },
  ]

  return (
    <div className="border border-line bg-surface p-8 md:p-10">
      <p className="eyebrow text-stone">Next tax deadline</p>
      <p className="font-display mt-4 text-5xl text-bone">{formatDeadline(deadline.date)}</p>
      <p className="mt-2 text-stone">{deadline.label}</p>
      <dl className="mt-8 grid grid-cols-3 border-t border-line pt-6" aria-live="off">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col-reverse">
            <dt className="eyebrow mt-1 text-[0.62rem] text-stone">{u.label}</dt>
            <dd className="font-display text-5xl text-gold tabular-nums">{String(u.value).padStart(2, '0')}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Contact() {
  return (
    <footer id="contact" className="grain relative bg-ink">
      <div className="container-page grid gap-16 py-24 md:py-36 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>Book a free discovery call</Eyebrow>
          </Reveal>
          <h2 className="font-display mt-7 text-[clamp(3.2rem,6.4vw,6rem)] leading-[0.92] tracking-[-0.01em]">
            <MaskLines
              lines={[
                'Ready to get',
                'your numbers',
                <>
                  <em className="text-gold">under control?</em>
                </>,
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone/75">
              A free Zoom call. We’ll look at where you are, where you want to go, and how to close the gap.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button>Book a Zoom call</Button>
              <a
                href="#pricing"
                className="eyebrow self-start border-b border-stone pb-1.5 text-bone transition-colors hover:border-gold hover:text-gold sm:self-auto"
              >
                View pricing
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <Countdown />
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="container-page grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <img
              src={publicUrl('img/luigi-logo.png')}
              alt="Luigi & Associates LLC"
              loading="lazy"
              className="h-12 w-auto"
            />
            <p className="font-display mt-5 text-2xl text-bone">
              Structure. Clarity. <em className="text-gold">Control.</em>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 sm:grid-cols-3">
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-stone transition-colors hover:text-bone">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {[
                { label: 'Instagram · @handyluigi', href: links.instagram },
                { label: 'LinkedIn', href: links.linkedin },
                { label: 'Luigi & Associates', href: links.instagramFirm },
                { label: 'The Business Meetup', href: links.meetup },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone transition-colors hover:text-bone"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="col-span-2 text-sm leading-relaxed text-stone sm:col-span-1">
              Luigi &amp; Associates LLC
              <br />
              Stamford, Connecticut
              <br />
              Serving small businesses across the US
            </p>
          </div>
        </div>
        <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-stone/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Luigi &amp; Associates LLC. All rights reserved.</p>
          <p>Strategy · Accounting · Management</p>
        </div>
      </div>
    </footer>
  )
}
