import type { ElementType } from "react"

export type BillingCycle = "monthly" | "yearly"

export type Feature = {
  icon: ElementType
  label: string
}

export type PricePlan = {
  name: string
  monthly: number
  yearly: number
  blurb: string
  features: Feature[]
  cta: string
  highlight?: boolean
}