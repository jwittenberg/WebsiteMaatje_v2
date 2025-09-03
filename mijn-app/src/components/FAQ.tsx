import React from 'react'

export type FAQItem = { q: string; a: string }

type Props = {
  items: FAQItem[]
}

export const FAQ: React.FC<Props> = ({ items }) => {
  return (
    <section id="faq" className="container faq reveal">
      <h2>Veelgestelde vragen</h2>
      <div className="accordion">
        {items.map((it, idx) => <Row key={idx} {...it} idx={idx} />)}
      </div>
    </section>
  )
}

const Row: React.FC<FAQItem & { idx: number }> = ({ q, a, idx }) => {
  const [open, setOpen] = React.useState(false)
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
      <div
        id={id}
        className="acc-panel"
        role="region"
        aria-labelledby={id + '-label'}
        style={{ gridTemplateRows: open ? '1fr' : '0fr' } as React.CSSProperties}
      >
        <div className="acc-content">{a}</div>
      </div>
    </div>
  )
}