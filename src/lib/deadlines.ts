/** Federal tax deadlines that matter to Handy's clients. Weekend dates roll to Monday
 *  (holidays are not accounted for; confirm with client if one lands on a holiday). */
const schedule: { month: number; day: number; label: string }[] = [
  { month: 0, day: 15, label: 'Q4 estimated tax payment' },
  { month: 2, day: 15, label: 'S-corp & partnership returns' },
  { month: 3, day: 15, label: 'Individual returns & Q1 estimated tax' },
  { month: 5, day: 15, label: 'Q2 estimated tax payment' },
  { month: 8, day: 15, label: 'Q3 estimated tax & extended business returns' },
  { month: 9, day: 15, label: 'Extended individual tax returns' },
]

export type Deadline = { date: Date; label: string }

function rollWeekend(d: Date) {
  const day = d.getDay()
  if (day === 6) d.setDate(d.getDate() + 2)
  if (day === 0) d.setDate(d.getDate() + 1)
  return d
}

/** The next deadline, due at 11:59 pm local time on its date. */
export function nextDeadline(now = new Date()): Deadline {
  for (const year of [now.getFullYear(), now.getFullYear() + 1]) {
    for (const s of schedule) {
      const date = rollWeekend(new Date(year, s.month, s.day, 23, 59, 59))
      if (date > now) return { date, label: s.label }
    }
  }
  throw new Error('unreachable')
}

export function formatDeadline(d: Date) {
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

export function timeLeft(d: Date, now = new Date()) {
  const ms = Math.max(0, d.getTime() - now.getTime())
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
  }
}
