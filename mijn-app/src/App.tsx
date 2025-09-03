import React from 'react'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Reviews } from './components/Reviews'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { PricingTable } from './components/PricingTable'
import { FAQ } from './components/FAQ'
import type { PricePlan } from './types/pricing'

const pricingPlans: PricePlan[] = [
  {
    name: 'Starter',
    monthly: 29,
    yearly: 290, // ~2 maanden korting
    blurb: 'Snel online met een strakke one-pager.',
    features: ['1 pagina', 'SSL & domein', 'Basis SEO', 'E-mail support'],
    cta: 'Start met Starter'
  },
  {
    name: 'Pro',
    monthly: 79,
    yearly: 790,
    blurb: 'Groei met meer pagina’s en integraties.',
    features: ['Tot 10 pagina’s', 'Formulieren & analytics', 'Snelle hosting', 'Chat & e-mail support'],
    cta: 'Ga voor Pro',
    highlight: true
  },
  {
    name: 'All-in',
    monthly: 149,
    yearly: 1490,
    blurb: 'Volledig ontzorgd: design, hosting en data.',
    features: ['Onbeperkt pagina’s', 'Headless CMS / datahosting', 'Performance & SEO pro', 'Prioriteit support'],
    cta: 'Kies All-in'
  }
]

const faqItems = [
  { q: 'Kan ik maandelijks opzeggen?', a: 'Ja, al onze pakketten zijn maandelijks opzegbaar. Bij jaarlijks betaal je vooruit met korting.' },
  { q: 'Regelen jullie ook domein & e-mail?', a: 'Zeker. We registreren het domein, zetten e-mailadressen op en configureren DNS & SSL.' },
  { q: 'Migreren jullie bestaande websites?', a: 'Ja. We verhuizen je site en data veilig, met minimale downtime.' },
  { q: 'Doen jullie maatwerk?', a: 'Ja, vanaf Pro is maatwerkcomponenten/flows mogelijk. We denken graag mee.' }
]

const App: React.FC = () => {
  useRevealOnScroll()
  React.useEffect(() => {
    const saved = localStorage.getItem('wm-theme')
    if (saved === 'dark') document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <div className="bg"></div>
      <Header />
      <Hero />
      <PricingTable plans={pricingPlans} defaultCycle="monthly" />
      <Features />
      <Reviews />
      <CTA />
      <FAQ items={faqItems} />
      <Footer />
    </>
  )
}

export default App