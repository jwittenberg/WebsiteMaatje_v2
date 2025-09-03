import React from 'react'
import {
  SparklesIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline"

const features = [
  {
    icon: SparklesIcon,
    title: "Modern design",
    text: "Altijd een frisse look die aansluit bij jouw merk."
  },
  {
    icon: BoltIcon,
    title: "Supersnel",
    text: "Geoptimaliseerd voor snelheid en SEO."
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive",
    text: "Perfect op mobiel, tablet én desktop."
  },
  {
    icon: ShieldCheckIcon,
    title: "Beveiligd",
    text: "Gratis SSL en veilige hosting inbegrepen."
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Persoonlijk contact",
    text: "Altijd snel antwoord en een vast aanspreekpunt."
  },
  {
    icon: RocketLaunchIcon,
    title: "Groei mee",
    text: "Makkelijk uitbreiden wanneer je bedrijf groeit."
  }
]

export const Features: React.FC = () => (
  <section className="features container reveal">
  <h2>Wat je krijgt</h2>
  <div className="grid">
    {features.map((f, i) => (
      <div key={i} className="feature reveal delay-1">
        <f.icon className="icon-lg" aria-hidden="true" />
        <h3>{f.title}</h3>
        <p>{f.text}</p>
      </div>
    ))}
  </div>
</section>
)