export type BillingCycle = 'monthly' | 'yearly'

export type PricePlan = {
  name: string
  monthly: number   // prijs per maand (in EUR)
  yearly: number    // prijs per jaar (in EUR) - mag korting bevatten
  blurb: string
  features: string[]
  cta: string
  highlight?: boolean
}