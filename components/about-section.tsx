import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users } from "lucide-react";

const features = [
  "Matériaux de qualité supérieure certifiés",
  "Installation par des professionnels qualifiés",
  "Garantie étendue sur tous nos produits",
  "Service après-vente réactif et efficace",
  "Devis gratuit et personnalisé",
  "Respect des délais convenus",
];

export function AboutSection() {
  return (
    <section id="a-propos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              Pourquoi Choisir{" "}
              <span className="text-primary">Maghreb Grillage</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
              Depuis plus de 15 ans, nous sommes le partenaire de confiance des
              particuliers et entreprises au Maroc pour leurs projets de clôture
              et sécurisation. Notre expertise reconnue et notre engagement
              qualité font de nous le leader du secteur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-sans">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Découvrir Nos Réalisations
              </Button>
              <Button
                // href="https://maghrebgrillage.ma/wp-content/uploads/2019/09/MAGHREB-GRILLAGE-BROCH-2019-FINAL.pdf"
                onClick={() => {
                  window.open(
                    "https://maghrebgrillage.ma/wp-content/uploads/2019/09/MAGHREB-GRILLAGE-BROCH-2019-FINAL.pdf",
                    "_blank" // open in new tab
                  );
                }}
                size="lg"
                variant="outline"
                className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Télécharger Notre Catalogue
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://maghrebgrillage.ma/wp-content/uploads/2015/10/486195147-pare-ballon-2-1000x430.jpg"
              alt="Équipe professionnelle Maghreb Grillage"
              className="w-full rounded-lg shadow-2xl"
            />

            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 md:-bottom-8 md:-left-8 bg-card border border-border rounded-lg p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Années</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Projets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
