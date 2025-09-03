import React from 'react'
import { Button } from './Button'

export const CTA: React.FC = () => (
  <section id="cta" className="cta container reveal">
    <div className="cta__box glass">
      <h2>Klaar voor een website zonder zorgen?</h2>
      <p>Plan een gratis intake — we denken graag mee en geven eerlijk advies.</p>
      <Button as="a" href="#contact" size="lg">Plan gratis intake</Button>
    </div>
  </section>
)