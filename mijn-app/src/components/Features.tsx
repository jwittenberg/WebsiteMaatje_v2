import React from 'react'

const items: [string,string][] = [
  ['Razendsnel', 'Vite + moderne best-practices voor topsnelheid.'],
  ['SEO-klaar', 'Schone HTML, meta’s en core web vitals in scope.'],
  ['Schaalbaar', 'Van one-pager tot headless CMS en datahosting.'],
  ['Veilig', 'HTTPS, updates en monitoring geregeld.'],
  ['Design op maat', 'UI-kit en componenten afgestemd op jouw merk.'],
  ['Support', 'Menselijke helpdesk via chat/mail, duidelijke SLAs.'],
]

export const Features: React.FC = () => (
  <section id="features" className="container features reveal">
    <h2>Wat je krijgt</h2>
    <div className="grid">
      {items.map(([t,d], i) => (
        <div className="feature glass reveal" key={t + i}>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>
      ))}
    </div>
  </section>
)