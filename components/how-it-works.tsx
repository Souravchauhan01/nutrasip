import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    emoji: "🌿",
    title: "Shake & Mix",
    description: "Mix one scoop of NUTRASIP powder into water, smoothie, or oat milk."
  },
  {
    number: 2,
    emoji: "🥤",
    title: "Sip & Enjoy",
    description: "Delicious natural berry-citrus taste — drink every morning."
  },
  {
    number: 3,
    emoji: "✨",
    title: "Shine & Repeat",
    description: "Consistent use reveals visible results: glowing skin, strong hair, better metabolism within 4 weeks."
  }
]

export function HowItWorks() {
  return (
    <section id="howitworks" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
          Your daily ritual in 3 simple steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="text-center border-border/50">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.emoji} {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Placeholder */}
        <div className="max-w-xl mx-auto">
          <div className="bg-secondary rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
            </div>
            <p className="font-medium text-foreground mb-3">
              Watch 45-sec demo: How NUTRASIP transforms your routine
            </p>
            <div className="bg-card rounded-2xl py-3 px-6 text-primary font-medium inline-block cursor-pointer hover:bg-card/80 transition-colors">
              Click to see real results
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
