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
import {
  GlobeAltIcon,
  EnvelopeIcon,
  ChartBarIcon,
  BoltIcon,
  ServerIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline"

import type { PricePlan } from "./types/pricing"

const pricingPlans: PricePlan[] = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 290,
    blurb: "Snel online met een strakke one-pager.",
    features: [
      { icon: GlobeAltIcon, label: "Eigen domein & SSL" },
      { icon: EnvelopeIcon, label: "Zakelijke e-mail" },
      { icon: ChartBarIcon, label: "Basis analytics" },
      { icon: BoltIcon, label: "Snelle hosting" }
    ],
    cta: "Start met Starter"
  },
  {
    name: "Pro",
    monthly: 79,
    yearly: 790,
    blurb: "Groei met meer pagina’s en integraties.",
    features: [
      { icon: GlobeAltIcon, label: "Tot 10 pagina’s" },
      { icon: DevicePhoneMobileIcon, label: "Responsive design" },
      { icon: SparklesIcon, label: "SEO optimalisatie" },
      { icon: ShieldCheckIcon, label: "Uitgebreide beveiliging" }
    ],
    cta: "Ga voor Pro",
    highlight: true
  },
  {
    name: "All-in",
    monthly: 149,
    yearly: 1490,
    blurb: "Volledig ontzorgd: design, hosting en data.",
    features: [
      { icon: ServerIcon, label: "Onbeperkte hosting & CMS" },
      { icon: GlobeAltIcon, label: "Onbeperkte pagina’s" },
      { icon: SparklesIcon, label: "Performance & SEO Pro" },
      { icon: ShieldCheckIcon, label: "Prioriteit support" }
    ],
    cta: "Kies All-in"
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