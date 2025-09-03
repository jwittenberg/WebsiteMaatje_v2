import React from 'react'
import { Button } from './Button'

const Logo: React.FC = () => (
  <a className="brand" href="#home" aria-label="WebsiteMaatje home">
    <span className="logo">
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <path fill="url(#g)" d="M12 2l3.3 6.8 7.4 1.1-5.3 5.1 1.2 7.3L12 18.6 5.4 22.3l1.2-7.3L1.3 9.9l7.4-1.1z"/>
      </svg>
      WebsiteMaatje
    </span>
  </a>
)

export const Header: React.FC = () => {
  return (
    <header className="container header">
      <Logo />
      <nav className="nav">
        <a href="#pakketten">Pakketten</a>
        <a href="#features">Features</a>
        <a href="#reviews">Reviews</a>
        <Button as="a" href="#contact" variant="ghost" size="sm">Contact</Button>
        <Button variant="icon" aria-label="Schakel thema" onClick={()=>{
          document.documentElement.classList.toggle('dark')
          localStorage.setItem('wm-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
        }}>🌓</Button>
        <Button as="a" href="#cta" size="sm">Gratis intake</Button>
      </nav>
      <button className="nav-toggle" aria-label="Menu" onClick={()=>{
        document.documentElement.classList.toggle('nav-open')
      }}>☰</button>
    </header>
  )
}