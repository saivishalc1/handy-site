import { useLenis } from 'lenis/react'
import { useEffect } from 'react'

/**
 * Chrome and Safari report trackpad scrolls with wheelDeltaY === -3 * deltaY;
 * notched mouse wheels report ±120 steps instead.
 */
function isTrackpad(e: WheelEvent) {
  const legacy = (e as WheelEvent & { wheelDeltaY?: number }).wheelDeltaY
  if (typeof legacy === 'number' && legacy !== 0) return legacy === -3 * e.deltaY
  return e.deltaMode === 0 && Math.abs(e.deltaY) < 60
}

/** Trackpads already have momentum, so they scroll natively; mouse wheels get Lenis smoothing. */
export function ScrollGovernor() {
  const lenis = useLenis()
  useEffect(() => {
    if (!lenis) return
    // Capture phase on window runs before Lenis's own wheel listener sees the event
    const onWheel = (e: WheelEvent) => {
      lenis.options.smoothWheel = !isTrackpad(e)
    }
    window.addEventListener('wheel', onWheel, { capture: true, passive: true })
    return () => window.removeEventListener('wheel', onWheel, { capture: true })
  }, [lenis])
  return null
}
