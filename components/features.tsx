import { Sun, Feather, Flame, Sprout } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Sun,
    title: "Reveal natural glow",
    description: "Packed with antioxidants & Vitamin C to reduce oxidative stress, making skin radiant & even-toned."
  },
  {
    icon: Feather,
    title: "Strengthen hair",
    description: "Biotin + bamboo silica reduce hair fall, boost thickness, and add natural shine from root to tip."
  },
  {
    icon: Flame,
    title: "Ignite metabolism",
    description: "Green tea extract, ginger & MCT support fat oxidation and natural energy without jitters."
  },
  {
    icon: Sprout,
    title: "Clean + organic",
    description: "No artificial preservatives, gluten-free, vegan, and non-GMO — just 8 whole-food ingredients."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            The healthy sip that solves <span className="text-primary">real problems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No more dull skin, weak hair, or sluggish metabolism — our science-backed formula gives you daily nourishment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
