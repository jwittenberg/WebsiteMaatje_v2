import React from 'react'

export type FAQItem = { q: string; a: string }
type RowProps = FAQItem & { idx: number }

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const ease = 'cubic-bezier(.2,0,0,1)'

const Row: React.FC<RowProps> = ({ q, a, idx }) => {
  const [open, setOpen] = React.useState(false)
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const el = panelRef.current
    if (!el) return

    const reduce = prefersReducedMotion()

    // clear mogelijke in-flight animaties
    el.style.transition = 'none'

    if (open) {
      // open: 0 -> target
      const target = el.scrollHeight
      if (reduce) {
        el.style.height = 'auto'
        return
      }
      el.style.height = '0px'
      // force reflow
      void el.offsetHeight
      el.style.transition = `height 240ms ${ease}`
      el.style.height = target + 'px'
      const onEnd = () => {
        el.style.transition = 'none'
        el.style.height = 'auto' // zodat responsive tekst meebeweegt
        el.removeEventListener('transitionend', onEnd)
      }
      el.addEventListener('transitionend', onEnd)
    } else {
      // dicht: huidige -> 0
      if (reduce) {
        el.style.height = '0px'
        return
      }
      const start = el.scrollHeight
      el.style.height = start + 'px'
      void el.offsetHeight
      el.style.transition = `height 240ms ${ease}`
      el.style.height = '0px'
    }
  }, [open])

  const id = `faq-${idx}`
  return (
    <div className={`acc-item glass ${open ? 'open' : ''}`}>
      <h3 className="acc-title">
        <button
          className="acc-button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(o => !o)}
        >
          <span>{q}</span>
          <i aria-hidden>{open ? '−' : '+'}</i>
        </button>
      </h3>
      <div id={id} className="acc-panel" ref={panelRef} role="region" aria-labelledby={id + '-label'}>
        <div className="acc-content">{a}</div>
      </div>
    </div>
  )
}

export const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => (
  <section id="faq" className="container faq reveal">
    <h2>Veelgestelde vragen</h2>
    <div className="accordion">
      {items.map((it, idx) => <Row key={idx} {...it} idx={idx} />)}
    </div>
  </section>
)