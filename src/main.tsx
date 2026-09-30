import { ReactLenis } from 'lenis/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: !reduceMotion,
        anchors: { duration: 1.4 }, // header offset comes from CSS scroll-padding-top
        stopInertiaOnNavigate: true,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
)
