import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { links } from '../content'

/** Resolves a /public path against Vite's base, so the site also works from a sub-folder. */
export const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

type Tone = 'gold' | 'ink' | 'outline-dark' | 'outline-light'

const tones: Record<Tone, string> = {
  gold: 'bg-gold text-ink hover:bg-gold-hover',
  ink: 'bg-ink text-bone hover:bg-surface-2',
  'outline-dark': 'border border-line-dark text-ink hover:border-ink',
  'outline-light': 'border border-line text-bone hover:border-bone/60',
}

/** Primary call to action. Defaults to Handy's Calendly discovery call in a new tab. */
export function Button({
  children,
  href = links.book,
  tone = 'gold',
  className = '',
}: {
  children: ReactNode
  href?: string
  tone?: Tone
  className?: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-3 px-7 py-[1.15rem] text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      {children}
      {external && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  )
}

/** Eyebrow with the short leading rule used across the site. */
export function Eyebrow({ children, className = 'text-gold' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${className}`}>
      <span aria-hidden className="h-px w-10 bg-current" />
      {children}
    </p>
  )
}
