import React from 'react'
import { Button } from './Button'

export const Hero: React.FC = () => (
  <section id="home" className="hero container reveal">
    <div className="hero__content glass">
      <h1>Websites <span className="grad">zonder zorgen</span>.</h1>
      <p className="lead">
        Kies een <strong>all-in pakket</strong>: front-end design, <strong>data hosting</strong> en
        <strong> website hosting + domein</strong>. Jij focust op je business — wij fixen je website.
      </p>
      <div className="hero__cta">
        <Button as="a" href="#pakketten" size="lg">Bekijk pakketten</Button>
        <Button as="a" href="#cta" variant="ghost" size="lg">Plan gratis intake</Button>
      </div>
      <ul className="bullets">
        <li>Supersnel & SEO-vriendelijk</li>
        <li>Design op maat</li>
        <li>Persoonlijke support</li>
      </ul>
    </div>
    <div className="hero__mock">
      <div className="mock-card reveal delay-1">
        <div className="mock-top"><span></span><span></span><span></span></div>
        <div className="mock-body">
          <div className="skeleton title"></div>
          <div className="skeleton line"></div>
          <div className="skeleton line"></div>
          <div className="skeleton grid"></div>
        </div>
      </div>
    </div>
  </section>
)