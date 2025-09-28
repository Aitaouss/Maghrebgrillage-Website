import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  Factory,
  TreePine,
  Shield,
  Wrench,
  Square,
  Construction,
  DoorOpen,
  Grid3X3,
  Zap,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Square,
    title: "Barreaudage",
    description:
      "Solutions de barreaudage alliant esthétique et sécurité. Barreaux métalliques sur mesure pour protéger vos propriétés avec style.",
    image: "/placeholder.svg",
    href: "/barreaudage",
  },
  {
    icon: Construction,
    title: "Clôture Chantier",
    description:
      "Clôtures temporaires sécurisées pour chantiers. Solutions robustes et facilement démontables pour vos projets de construction.",
    image: "/placeholder.svg",
    href: "/cloture-chantier",
  },
  {
    icon: Building2,
    title: "Clôture Professionnelle",
    description:
      "Clôtures haute sécurité pour sites professionnels. Solutions renforcées pour entreprises et zones industrielles.",
    image: "/modern-office-security.png",
    href: "/cloture-professionnelle",
  },
  {
    icon: Factory,
    title: "Clôtures Sportives",
    description:
      "Clôtures spécialisées pour installations sportives. Terrains de sport, gymnases et complexes sportifs sécurisés.",
    image: "/placeholder.svg",
    href: "/cloture-sportives",
  },
  {
    icon: TreePine,
    title: "Clôtures Agricoles",
    description:
      "Protection efficace pour exploitations agricoles et élevages. Solutions durables adaptées aux environnements ruraux.",
    image: "/moroccan-farm-fence.png",
    href: "/clotures-agricoles",
  },
  {
    icon: Zap,
    title: "Clôtures en Fil de Fer Barbelé",
    description:
      "Protection haute sécurité avec fil de fer barbelé. Solutions robustes pour périmètres industriels et commerciaux.",
    image: "/placeholder.svg",
    href: "/clotures-en-fil-de-fer-barbele",
  },
  {
    icon: Grid3X3,
    title: "Gabion",
    description:
      "Murs de soutènement en gabion pour aménagement paysager. Solutions esthétiques et fonctionnelles pour vos terrains.",
    image: "/placeholder.svg",
    href: "/gabion",
  },
  {
    icon: DoorOpen,
    title: "Portails Métalliques",
    description:
      "Portails métalliques sur mesure manuels et automatisés. Solutions d'accès sécurisées alliant design et fonctionnalité.",
    image: "/placeholder.svg",
    href: "/portails-metalliques",
  },
  {
    icon: Wrench,
    title: "Poteaux & Accessoires",
    description:
      "Poteaux de qualité et accessoires de fixation. Gamme complète pour l'installation et la maintenance de vos clôtures.",
    image: "/placeholder.svg",
    href: "/poteaux-accessoires",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <h2 className="section-header font-sans">Nos Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Des solutions complètes de clôture et grillage adaptées à tous vos
            besoins. Expertise technique, matériaux de qualité et service client
            exceptionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card rounded-lg hover:brightness-105"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 "
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground font-sans">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed font-sans">
                  {service.description}
                </CardDescription>
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent rounded-lg font-sans"
                  >
                    En Savoir Plus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
