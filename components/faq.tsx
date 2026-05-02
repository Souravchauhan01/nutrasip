"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes NUTRASIP different?",
    answer: "Unlike synthetic supplements, NUTRASIP uses 8 organic superfoods (amla, moringa, biotin, bamboo extract, green tea, etc.) — no fillers, vegan & delicious. Our triple-action targets skin, hair & metabolism in one sip."
  },
  {
    question: "How long until I see results?",
    answer: "Most customers experience brighter skin and better energy within 2 weeks. For hair & metabolism, consistent use for 4–8 weeks yields best outcomes. We offer a 60-day guarantee."
  },
  {
    question: "Is there a subscription or one-time purchase?",
    answer: "Both! Choose one-time purchase or save 20% with monthly subscription. You can pause or cancel anytime from your account."
  },
  {
    question: "What if I don't like the taste or results?",
    answer: "We have a full 60-day money-back guarantee — even if you finish the bottle. Just contact support@nutrasip.com for a fast refund."
  },
  {
    question: "Is NUTRASIP safe for everyone?",
    answer: "NUTRASIP is made with all-natural, organic ingredients and is generally safe for adults. However, if you're pregnant, nursing, or have specific health conditions, we recommend consulting your healthcare provider before use."
  },
  {
    question: "How should I store NUTRASIP?",
    answer: "Store in a cool, dry place away from direct sunlight. Once opened, we recommend using within 60 days for optimal freshness. No refrigeration required."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
          Got questions? We&apos;ve got answers.
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
