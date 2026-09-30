// All copy lives here. Every fact, price and stat is taken from Handy's current site
// (handyluigi.com, Sept 2026). Anything new is marked "confirm with client".

export const links = {
  book: 'https://calendly.com/handyluigi/discovery',
  meetup: 'https://www.meetup.com/thebusinessmeetup/',
  instagram: 'https://www.instagram.com/handyluigi/',
  linkedin: 'https://www.linkedin.com/in/handyluigi/',
  instagramFirm: 'https://instagram.com/luigiassociatesllc',
  instagramMeetup: 'https://instagram.com/thebusinessmeetupct',
  linkedinMeetup: 'https://www.linkedin.com/company/the-business-meetup',
}

export const nav = [
  { label: 'CFO 500', href: '#cfo-500' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'The Meetup', href: '#meetup' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'Luigi & Associates · Stamford, CT',
  lede: 'Bookkeeping, tax and a monthly CFO conversation for owners doing $100K–$1M, so you finally know what you’re making and what to do next.',
  primary: 'Book a discovery call',
  secondary: 'See CFO 500 — $500/mo',
  name: 'Handy Luigi',
  role: 'Founder & your CFO',
  proof: [
    { value: '12+ yrs', label: 'Financial services' },
    { value: '20+ yrs', label: 'In the trades' },
    { value: '235', label: 'Business Meetup events' },
    { value: '4.9', label: 'Member rating, 199 reviews' },
  ],
}

export const problem = {
  eyebrow: 'The problem, in plain English',
  body: 'The business has outgrown the way the money is managed. Pricing, hiring, debt and expansion are being decided without reliable numbers. These are the moments owners describe to me:',
  quotes: [
    'I don’t know where the money is going.',
    'I owe more tax than I expected.',
    'I’m busy, but I don’t know what I’m making.',
    'The bank wants financial statements.',
    'I don’t know if I’m charging enough.',
    'Nobody is looking at the whole picture.',
  ],
}

export const cfo500 = {
  eyebrow: 'CFO 500 · Year-round financial management',
  body: 'Instead of disconnected providers and once-a-year conversations, your bookkeeping, tax and strategy run on one monthly rhythm, with one advisor who knows your business.',
  price: '$500',
  priceNote: 'per month, starting investment',
  discount: 'Quarterly and annual payment discounts available.',
  included: [
    {
      title: 'Accounting system setup & cleanup',
      text: 'We build or fix your QuickBooks so the books are structured correctly from day one.',
    },
    {
      title: 'Monthly bookkeeping & reconciliations',
      text: 'Every bank and card account reconciled. If it’s not reconciled, it’s not real.',
    },
    {
      title: 'Monthly financial statements',
      text: 'Profit & Loss, Balance Sheet and Cash Flow you can actually trust.',
    },
    {
      title: 'Tax planning & preparation',
      text: 'Federal, state, sales, payroll and estimated taxes, handled before they become surprises.',
    },
    {
      title: 'Monthly 1:1 CFO review',
      text: 'We walk through your numbers, your tax position and your next 30-60-90 day moves.',
    },
    {
      title: 'Planning, forecasting & growth advisory',
      text: 'Budgets, cash-flow planning, pricing and margin analysis.',
    },
    {
      title: 'Year-round advisor access',
      text: 'Deadlines tracked, notices handled, questions answered when they come up.',
    },
  ],
  rhythm: [
    'Keep the books current',
    'Reconcile the accounts',
    'Produce the financials',
    'Review the numbers',
    'Decide what happens next',
  ],
  result:
    'The result: you can answer, with evidence. Are we profitable? Where is the cash going? What can we afford? Are we ready to hire, borrow, invest or grow?',
  builtFor: [
    'Established businesses doing roughly $100K–$1M in revenue',
    'Service businesses: contractors, builders, developers, professional services',
    'Owners who are growth-minded and ready to be accountable to the numbers',
    'Anyone looking for one long-term advisor, not another once-a-year transaction',
  ],
}

export const services = [
  {
    title: 'Cleanup & catch-up bookkeeping',
    text: 'Past months reconstructed and reconciled, so you stop flying blind and stop dreading tax season.',
  },
  {
    title: 'Income tax returns',
    text: 'Business and personal returns prepared accurately and on time, with the planning that moves the numbers in your favor.',
  },
  {
    title: 'CFO 500 monthly advisory',
    text: 'Monthly books, financial statements and a recurring CFO-level review of what the numbers mean.',
    href: '#cfo-500',
  },
  {
    title: 'QuickBooks setup & training',
    text: 'Set up correctly once, and you and your team know how to keep it clean.',
  },
  {
    title: 'Business startup consulting',
    text: 'Entity choice, LLC setup and the financial system to build before the business, not after.',
  },
  {
    title: 'Forecasting & financial strategy',
    text: 'Business and personal: budgets, projections and a plan from cash flow to long-term wealth.',
  },
]

export const pricing = {
  plans: [
    {
      name: 'Advisory & special projects',
      price: '$125',
      unit: '/ hour',
      fit: 'One issue, one project, one cleanup or one strategic conversation.',
      items: ['Tax preparation', 'Bookkeeping cleanup', 'Financial review', 'Business consulting'],
      cta: 'Book a session',
    },
    {
      name: 'CFO 500',
      price: '$500',
      unit: '/ month',
      fit: 'Ongoing monthly accounting and financial management.',
      items: [
        'Monthly bookkeeping',
        'Accounting oversight',
        'Monthly financial statements',
        'Tax planning & preparation',
        'Monthly strategy call',
      ],
      cta: 'Get started',
      featured: true,
    },
    {
      name: '1% CFO model',
      price: '1%',
      unit: 'of gross revenue',
      fit: 'Higher-level CFO support focused on growth, optimization and oversight.',
      items: [
        'Full-scope CFO services',
        'Growth & scaling strategy',
        'Financial forecasting',
        'Investor-ready reporting',
        'Direct advisory access',
      ],
      cta: 'Schedule a call',
    },
  ],
  speaking:
    'Keynotes, panels and workshops on financial literacy, entrepreneurship and business strategy, from $1,500 / day.',
}

export const about = {
  eyebrow: 'Who you’ll work with',
  bio: [
    'You’re not hiring a software platform or a faceless firm. You work directly with me: no outsourced desk, no junior hand-off, no waiting in a queue.',
    'I spent two decades in residential and commercial home improvement (selling jobs, managing subs, chasing receivables, pricing work) and 12 years as a financial advisor before founding Luigi & Associates. I speak the language of contractors and service businesses because I’ve lived it.',
  ],
  credentials: [
    { value: '20+ yrs', label: 'Home improvement, residential & commercial' },
    {
      value: '12+ yrs',
      label: 'Financial advisor: Rookie of the Year, New Org Agent of the Year (twice), NAIFA 4 Under 40',
    },
    { value: 'Master’s', label: 'Accounting & Financial Management, CFA track' },
  ],
  roles: [
    'Founder, Luigi & Associates LLC',
    'Founder & Organizer, The Business Meetup',
    'Co-Chair, Economic Empowerment Committee, 100 Black Men of Stamford',
  ],
  mission: {
    title: 'The 100: Capital Ready',
    text: 'This year I set out to help 100 Black-owned businesses improve their financial strength: financial literacy, real rooms to build relationships, and businesses strong enough to reinvest in their communities.',
  },
}

export const meetup = {
  eyebrow: 'The Business Meetup',
  body: 'For over 13 years I’ve built a regional business-development community across Fairfield County and New York: structured events where entrepreneurs build referral networks, sharpen their skills and get in front of the right rooms.',
  stats: [
    { value: '235', label: 'Networking & development events' },
    { value: '1,419', label: 'Members in the community' },
    { value: '4.9', label: 'Average rating, 199 ratings' },
    { value: '2013', label: 'Convening entrepreneurs since' },
  ],
  photos: [
    { src: 'img/event-1.jpg', alt: 'Entrepreneurs exchanging contacts at The Business Meetup' },
    { src: 'img/event-6.jpg', alt: 'Members of The Business Meetup together at an event' },
    { src: 'img/event-2.jpg', alt: 'Business owners in conversation at a networking table' },
    { src: 'img/event-4.jpg', alt: 'Women entrepreneurs connecting at The Business Meetup' },
    { src: 'img/event-3.jpg', alt: 'Professionals networking at the MINT venue' },
    { src: 'img/event-5.jpg', alt: 'Attendees building relationships at a networking mixer' },
  ],
}

export const faq = [
  {
    q: 'How much does it cost?',
    a: 'Rates start at $125/hour. Fixed monthly packages, like CFO 500 at $500/month, are available once we understand the scope of your books and the support you need.',
  },
  {
    q: 'How does this actually work?',
    a: 'We set up, clean up and maintain your books, produce monthly financial statements, handle your tax filings, and meet with you regularly to review the numbers and plan ahead.',
  },
  {
    q: 'Can you clean up past years?',
    a: 'Yes. Back-bookkeeping and multi-year cleanup is one of the most common things we do. We get you current, then keep you current.',
  },
  {
    q: 'What if my books are behind?',
    a: 'That’s exactly what we handle. We reconstruct, reconcile and bring everything up to date, then build the rhythm that keeps it from happening again.',
  },
  {
    q: 'Do I need QuickBooks?',
    a: 'Not necessarily, but we strongly recommend QuickBooks Online and can set it up correctly so your books stay clean going forward.',
  },
  {
    q: 'When should I become an LLC?',
    a: 'The moment your business is generating real revenue or taking on real liability, you want the legal and tax separation of an entity. We help you choose the right structure and set it up properly.',
  },
  {
    q: 'Can you help with strategy too?',
    a: 'Yes, because the goal isn’t just filing taxes. The goal is building a real financial system behind the business.',
  },
]
