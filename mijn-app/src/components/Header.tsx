// src/components/Header.tsx
import React, { useEffect, useState } from "react"
import { Button } from "./Button"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

const Logo: React.FC = () => (
  <a className="brand" href="#home" aria-label="WebsiteMaatje home">
    <span className="logo">WebsiteMaatje</span>
  </a>
)

export const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(true)

  // initial theme from DOM/localStorage
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("wm-theme", next ? "dark" : "light")
  }

  const toggleNav = () => {
    document.documentElement.classList.toggle("nav-open")
  }

  return (
    <header className="site-header">
      <div className="container header">
        <Logo />
  
  
        {/* Acties rechts: theme toggle + burger */}
        <div className="nav-actions">

        {/* Hoofdnav (links + CTA) */}
        <nav className="nav">
          <a href="#pakketten">Pakketten</a>
          <a href="#features">Wat je krijgt</a>
          <a href="#reviews">Reviews</a>
  
          <Button as="a" href="#contact" variant="ghost">Contact</Button>
          <button
            className="btn btn--icon"
            aria-label="Schakel thema"
            onClick={toggleTheme}
          >
            {dark ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
          </button>
          
        </nav>

        
          <Button as="a" href="#intake" size="lg" className="btn--cta">
            Gratis intake
          </Button>
  
          <button className="nav-toggle" aria-label="Menu" onClick={toggleNav}>
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}