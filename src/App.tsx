import { useEffect } from 'react'
import { About } from './components/About'
import { Cfo500 } from './components/Cfo500'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Hero } from './components/Hero'
import { Meetup } from './components/Meetup'
import { MobileCta } from './components/MobileCta'
import { Nav } from './components/Nav'
import { Problem } from './components/Problem'
import { ScrollGovernor } from './components/ScrollGovernor'
import { Services } from './components/Services'

export default function App() {
  // Once the hero has painted, fetch the below-the-fold photos so they are ready before they scroll in
  useEffect(() => {
    const warm = () =>
      document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => (img.loading = 'eager'))
    if (document.readyState === 'complete') setTimeout(warm, 1200)
    else window.addEventListener('load', () => setTimeout(warm, 1200), { once: true })
  }, [])

  return (
    <>
      <ScrollGovernor />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Cfo500 />
        <Services />
        <About />
        <Meetup />
        <Faq />
      </main>
      <Contact />
      <MobileCta />
    </>
  )
}
