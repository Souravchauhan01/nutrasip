import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    id: "skin",
    title: "Skin",
    tagline: "Glow from within",
    description:
      "Our skin blend is packed with Vitamin C, hyaluronic acid, and antioxidant-rich botanicals that fight oxidative stress, even skin tone, and restore your natural radiance — one sip at a time.",
    highlights: ["Vitamin C & E", "Hyaluronic Acid", "Turmeric Extract", "Collagen Support"],
    image: "/skin.png",
    color: "from-rose-50 to-orange-50",
    accent: "bg-rose-100 text-rose-700",
    badge: "✨ Radiance",
  },
  {
    id: "hair",
    title: "Hair",
    tagline: "Strong roots, silky strands",
    description:
      "Formulated with biotin, bamboo silica, and zinc to reduce hair fall, boost thickness, and add natural shine from root to tip. Nourish your scalp and see the difference in weeks.",
    highlights: ["Biotin Complex", "Bamboo Silica", "Zinc & Iron", "Keratin Boosters"],
    image: "/hair.png",
    color: "from-amber-50 to-yellow-50",
    accent: "bg-amber-100 text-amber-700",
    badge: "💛 Strength",
  },
  {
    id: "metabolism",
    title: "Metabolism",
    tagline: "Fuel your fire",
    description:
      "Green tea extract, ginger, and MCT oil work together to support fat oxidation, boost natural energy, and keep your metabolism running at its best — without the jitters or crash.",
    highlights: ["Green Tea Extract", "MCT Oil", "Ginger Root", "B-Vitamin Complex"],
    image: "/meta.png",
    color: "from-emerald-50 to-green-50",
    accent: "bg-emerald-100 text-emerald-700",
    badge: "🔥 Energy",
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three blends. One <span className="text-primary">daily ritual.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each formula targets a specific need — choose the one that fits your goal, or stack all three for full-body nourishment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-3xl bg-gradient-to-b ${cat.color} border border-border/40 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col`}
            >
              {/* Image */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.title} product`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${cat.accent}`}>
                  {cat.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">{cat.tagline}</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">{cat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{cat.description}</p>

                {/* Highlights */}
                <ul className="flex flex-wrap gap-2 mb-6">
                  {cat.highlights.map((h) => (
                    <li key={h} className={`text-xs font-medium px-3 py-1 rounded-full ${cat.accent}`}>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button asChild className="w-full rounded-full" variant="outline">
                    <Link href="#pricing">Shop {cat.title} Blend</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
