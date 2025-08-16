import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/moroccan-fence-installation.png"
          alt="Installation professionnelle de clôtures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sans">
              Solutions de <span className="text-accent">Clôture</span> Professionnelles
            </h1>

            <p className="text-xl mb-8 leading-relaxed opacity-95 font-sans max-w-2xl">
              Spécialiste en grillages, clôtures et solutions de sécurité au Maroc. Plus de 15 ans d'expertise pour
              protéger vos espaces avec style et durabilité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 group">
                Obtenir un Devis Gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Appelez Maintenant
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-lg opacity-90 font-medium">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-lg opacity-90 font-medium">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-lg opacity-90 font-medium">Clients Satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
