import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+212 5 22 48 85 85</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contact@maghrebgrillage.ma</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
          <div className="text-primary font-medium">Lun-Ven: 8h00-18h00 | Sam: 8h00-16h00</div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/maghreb-grillage-logo.jpg"
                alt="Maghreb Grillage Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-sans">Maghreb Grillage</h1>
              <p className="text-sm text-muted-foreground font-sans">Solutions Professionnelles</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Nos Services
            </a>
            <a href="#produits" className="text-foreground hover:text-primary transition-colors">
              Produits
            </a>
            <a href="#a-propos" className="text-foreground hover:text-primary transition-colors">
              À Propos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Demander un Devis</Button>
        </div>
      </div>
    </header>
  )
}
