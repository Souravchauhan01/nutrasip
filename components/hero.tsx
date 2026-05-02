import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Truck, Shield, Ban } from "lucide-react"

function NutrasipLogo() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "rgba(255,255,255,0.87)",
      backdropFilter: "blur(2px)",
      padding: "6px 18px 6px 12px",
      borderRadius: "80px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
    }}>
      {/* Glass + straw icon */}
      <div style={{ position: "relative", width: 48, height: 54 }}>
        {/* Glass body */}
        <div style={{
          position: "absolute", bottom: 0, left: 8,
          width: 32, height: 38,
          background: "rgba(168,224,152,0.35)",
          border: "2px solid #4a7843",
          borderTop: "1px solid #6f9e66",
          borderRadius: "0 0 16px 16px",
        }} />
        {/* Straw */}
        <div style={{
          position: "absolute", top: -6, left: 24,
          width: 4, height: 26,
          background: "#d4b87a",
          borderRadius: 4,
          transform: "rotate(10deg)",
          zIndex: 2,
        }} />
        {/* Left leaf */}
        <div style={{
          position: "absolute", top: -6, left: -12,
          width: 20, height: 20,
          background: "#3e9e3e",
          borderRadius: "80% 0 80% 0",
          transform: "rotate(-35deg)",
        }} />
        {/* Right leaf */}
        <div style={{
          position: "absolute", top: -4, right: -12,
          width: 20, height: 20,
          background: "#6fbf4c",
          borderRadius: "80% 0 80% 0",
          transform: "rotate(55deg)",
        }} />
      </div>
      {/* Brand name */}
      <div style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.5px", color: "#2c5e2b" }}>
        NUTRA<span style={{ fontWeight: 500, color: "#557c4a" }}>SIP</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6">
              <Leaf className="w-4 h-4" />
              100% organic · clean nutrition
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6 text-balance">
              NUTRASIP: <br />
              <span className="text-primary">Sip. Shine. Repeat.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 border-l-4 border-primary pl-5">
              Glow from within — daily organic blend for radiant skin, stronger hair & faster metabolism
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="rounded-full text-base px-8">
                <Link href="#pricing">Buy Now — 30-Day Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#howitworks">How it works</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-foreground/80">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                Free shipping
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                60-day money-back
              </span>
              <span className="flex items-center gap-2">
                <Ban className="w-4 h-4 text-primary" />
                No added sugar
              </span>
            </div>
          </div>

          {/* Logo as hero visual */}
          <div className="flex-1 flex justify-center items-center">
            <div style={{ transform: "scale(3)", transformOrigin: "center" }}>
              <NutrasipLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
