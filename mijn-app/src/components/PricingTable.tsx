import React from 'react'
import type { BillingCycle, PricePlan } from '../types/pricing'
import { Button } from './Button'

type Props = {
  plans: PricePlan[]
  defaultCycle?: BillingCycle
  showPerMonthOnYearly?: boolean // toont bij yearly ook het omgerekende /m bedrag
}

const currency = (n: number) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

export const PricingTable: React.FC<Props> = ({
  plans,
  defaultCycle = 'monthly',
  showPerMonthOnYearly = true
}) => {
  const [cycle, setCycle] = React.useState<BillingCycle>(defaultCycle)

  return (
    <section id="prijzen" className="container packages reveal">
      <div className="pricing-header">
        <h2>Prijzen</h2>
        <p className="sub">Transparant & maandelijks opzegbaar. Jaarlijks extra voordelig.</p>

        <div className="billing-toggle" role="tablist" aria-label="Facturatie">
          <button
            role="tab"
            aria-selected={cycle === 'monthly'}
            className={`toggle-seg ${cycle === 'monthly' ? 'is-active' : ''}`}
            onClick={() => setCycle('monthly')}
          >
            Maandelijks
          </button>
          <button
            role="tab"
            aria-selected={cycle === 'yearly'}
            className={`toggle-seg ${cycle === 'yearly' ? 'is-active' : ''}`}
            onClick={() => setCycle('yearly')}
            title="Meestal voordeliger"
          >
            Jaarlijks
            <span className="save-pill">Bespaar</span>
          </button>
          <span className={`toggle-indicator ${cycle}`} aria-hidden />
        </div>
      </div>

      <div className="cards">
        {plans.map((p, i) => {
          const isYearly = cycle === 'yearly'
          const price = isYearly ? p.yearly : p.monthly
          const priceLabel = isYearly
            ? `${currency(p.yearly)} /jaar${showPerMonthOnYearly ? ` • ${currency(Math.round(p.yearly/12))}/m` : ''}`
            : `${currency(p.monthly)} /m`

          return (
            <article key={p.name} className={`card ${p.highlight ? 'card--featured' : ''} reveal delay-${(i % 4) + 1}`}>
              {p.highlight && <span className="badge">Populair</span>}
              <header>
                <h3>{p.name}</h3>
                <div className="price">{priceLabel}</div>
                <p className="blurb">{p.blurb}</p>
              </header>

              <ul className="list">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>

              <Button as="a" href="#cta" variant={p.highlight ? 'solid' : 'ghost'}>
                {p.cta}
              </Button>
            </article>
          )
        })}
      </div>
    </section>
  )
}