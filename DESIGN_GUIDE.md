# 🎨 WebsiteMaatje – Design Document

## 1. Visuele identiteit

### 1.1 Vormen & componentstijl
- **Ronde vormen** (border-radius, pill-buttons, cirkels) zijn de basis.  
  - **Rationale**: Ronde vormen maken de interface vriendelijker en toegankelijker. Dit sluit aan bij de merknaam *WebsiteMaatje* en straalt behulpzaamheid en partnership uit.  
  - **Toepassing**: Buttons, kaarten, badges, iconcontainers en achtergrondelementen hebben afgeronde hoeken (radius 8–16px).

### 1.2 Kleurgebruik
- **Primair kleurpalet (gradient):**  
  - *Brand1*: Paars `#7c3aed`  
  - *Brand2*: Cyaan `#06b6d4`  
  - Samen toegepast als dynamische gradient voor CTA’s, accenten en decoratieve elementen.  
- **Achtergrondkleuren:**  
  - Donkere modus: Diep donkerblauw `#0b1020` / `#0d1228`  
  - Lichte modus: Wit `#ffffff` / Lichtgrijs `#f7f9fc`  
- **Tekstkleuren:**  
  - Primair: `#e8ecf3` (donker thema), `#0d1326` (licht thema)  
  - Muted secundair: `#a7b0c0` (donker), `#4a5568` (licht)  
- **Accenten:** Gradient wordt gebruikt voor buttons, headings met highlight en checkmarks.

### 1.3 Typografie
- **Font**: Inter (system-ui fallback)  
  - **Rationale**: Modern, goed leesbaar en breed ondersteund.  
- **Stijlregels**:  
  - Titels: Bold, compacte regelafstand, gradient-highlight waar relevant.  
  - Bodytekst: Regular, rustige line-height (1.65).  
  - Knoppen: Semi-bold, all caps vermijden → focus op gebruiksvriendelijkheid.

---

## 2. Design rationale

### 2.1 Ronde vormen
- **Doel**: Toegankelijk, menselijk en minder corporate.  
- **Gevoel**: Vriendelijkheid en partnerschap.  
- **Strategie**: Past bij de merknaam *WebsiteMaatje* en maakt het platform uitnodigend.

### 2.2 Blauw–paarse gradient
- **Blauw**: Vertrouwen, techniek, betrouwbaarheid → benadrukt de hosting & technische kwaliteit.  
- **Paars**: Creativiteit, innovatie, premium → benadrukt design & meerwaarde.  
- **Gradient**: Combineert beide waarden en voegt dynamiek toe. Maakt het merk eigentijds en onderscheidend in de markt.

### 2.3 Consistentie
- Eén visuele taal over alle componenten (buttons, badges, cards, iconen).  
- Gradients en ronde vormen zorgen voor merkherkenning.  
- Accentkleuren worden spaarzaam toegepast om focus te leggen op CTA’s.

---

## 3. Toepassingen

- **Buttons**: Gradient achtergrond (primair), ghost-variant voor secundaire acties. Altijd afgerond (radius 10px).  
- **Kaarten**: Subtiele schaduw + afgeronde hoeken; hover geeft lichte lift.  
- **Icons**: Heroicons outline-style, 1.25–2rem groot, in brandkleur.  
- **FAQ / Pricing / Features**: Gebruik van iconen voor scanbaarheid. Icons krijgen dezelfde brandkleur als visuele rode draad.  
- **Achtergrond**: Subtiele blurred gradient-radials om sfeer en diepte toe te voegen.  

---

## 4. Branding kernwaarden in design

- **Betrouwbaar** (blauw, strak grid, heldere typografie)  
- **Creatief** (paarse accenten, gradient, iconografie)  
- **Toegankelijk** (ronde vormen, vriendelijke micro-animaties, rustige copy)  