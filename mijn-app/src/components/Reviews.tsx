import React from 'react'
const quotes: [string,string][] = [
  ['⭐️⭐️⭐️⭐️⭐️', 'Binnen een week live en meteen leads. Aanrader!'],
  ['⭐️⭐️⭐️⭐️⭐️', 'Design is strak en snel. Fijne communicatie.'],
  ['⭐️⭐️⭐️⭐️⭐️', 'Overstap inclusief hosting geregeld — nul gedoe.'],
]
export const Reviews: React.FC = () => (
  <section id="reviews" className="container reviews reveal">
    <h2>Klanten over WebsiteMaatje</h2>
    <div className="quotes">
      {quotes.map(([stars,text], i) => (
        <blockquote className="quote glass reveal" key={i}>
          <p className="stars">{stars}</p>
          <p>{text}</p>
        </blockquote>
      ))}
    </div>
  </section>
)