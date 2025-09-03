import React from 'react'

export const Footer: React.FC = () => (
  <footer id="contact" className="footer container">
    <div className="cols">
      <div>
        <span className="logo">WebsiteMaatje</span>
        <p className="muted">All-in webpakketten voor MKB, startups en zzp’ers.</p>
      </div>
      <div>
        <h4>Diensten</h4>
        <ul className="list">
          <li>Front-end design</li>
          <li>Data hosting</li>
          <li>Website hosting & domein</li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul className="list">
          <li><a href="mailto:hallo@websitemaatje.nl">hallo@websitemaatje.nl</a></li>
          <li><a href="tel:+31101234567">+31 10 123 4567</a></li>
        </ul>
      </div>
    </div>
    <p className="tiny">© {new Date().getFullYear()} WebsiteMaatje • KvK 12345678</p>
  </footer>
)