"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-5">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
            NUTRA<span className="font-normal text-primary/60">SIP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#howitworks" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Plans
            </Link>
            <Link href="#faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Button asChild className="rounded-full">
              <Link href="#pricing">Buy Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Benefits
            </Link>
            <Link href="#howitworks" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              How it works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Plans
            </Link>
            <Link href="#faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Button asChild className="rounded-full w-fit">
              <Link href="#pricing" onClick={() => setIsOpen(false)}>Buy Now</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
