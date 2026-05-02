import { Star, StarHalf, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    rating: 5,
    text: "After 1 month of NUTRASIP, my skin cleared up and my hair stopped breaking. I feel more energetic every morning. Obsessed!",
    name: "Meera K.",
    badge: "Verified Buyer"
  },
  {
    rating: 4.5,
    text: "Finally a tasty healthy drink that works! My metabolism feels faster, and digestion is better. Highly recommend!",
    name: "Rohan S.",
    badge: "4.8/5"
  },
  {
    rating: 5,
    text: "I love 'Sip Shine Repeat' — noticeable glow within 2 weeks. Plus customer support is top notch.",
    name: "Ananya P.",
    badge: "Beauty Influencer"
  }
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex gap-0.5 text-accent">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-current" />}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
          Loved by 10,000+ happy sippers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-foreground/90 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4">
                  <span className="font-bold text-foreground">— {testimonial.name}</span>
                  <span className="ml-2 text-muted-foreground text-sm">{testimonial.badge}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="font-medium text-foreground mb-6">
            Rated 4.9/5 from 2,300+ reviews on Trustpilot & Google
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/80">
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Wellness Magazine &ldquo;Best Organic Drink 2025&rdquo;
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Recommended by 50+ dermatologists
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
