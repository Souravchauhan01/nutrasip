import Link from "next/link"
import { Check, Shield, Lock, CreditCard, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter pack",
    price: "₹1299",
    period: "one-time",
    features: [
      "15-day supply",
      "Organic formula",
      "Free ebook: Glow guide"
    ],
    cta: "Buy Now",
    popular: false,
    guarantee: "30-day money back"
  },
  {
    name: "Monthly Shine",
    price: "₹2299",
    period: "month",
    features: [
      "30-day supply (save 25%)",
      "Free shipping + metal scoop",
      "Access to wellness webinar"
    ],
    cta: "Subscribe",
    popular: true,
    guarantee: "Cancel anytime · 60-day guarantee"
  },
  {
    name: "3-Month Radiance",
    price: "₹5999",
    period: "one-time",
    features: [
      "90-day supply (best value)",
      "Priority support + gift bottle",
      "100% risk-free guarantee"
    ],
    cta: "Save 30%",
    popular: false,
    guarantee: "Secure checkout"
  }
]

const trustBadges = [
  { icon: Lock, text: "SSL Secure Payment" },
  { icon: CreditCard, text: "Visa · Mastercard · Amex" },
  { icon: RotateCcw, text: "60-Day Money Back Guarantee" },
  { icon: Shield, text: "GMP Certified Facility" }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
          Simple, transparent pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative text-center ${plan.popular ? 'border-2 border-primary shadow-lg' : 'border-border/50'}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  MOST POPULAR
                </Badge>
              )}
              <CardHeader className="pt-8">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 py-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full" size="lg">
                  <Link href="#">{plan.cta}</Link>
                </Button>
                <p className="mt-4 text-sm text-primary font-medium flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  {plan.guarantee}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-secondary/50 rounded-3xl p-8">
          <div className="flex flex-wrap justify-center gap-8">
            {trustBadges.map((badge, index) => (
              <span key={index} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <badge.icon className="w-5 h-5 text-primary" />
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
