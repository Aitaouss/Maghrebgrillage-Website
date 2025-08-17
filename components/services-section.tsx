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
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Clôtures Résidentielles",
    description:
      "Solutions élégantes et sécurisées pour votre domicile. Grillages décoratifs, portails automatiques et clôtures sur mesure.",
    image: "/moroccan-fence-gate.png",
  },
  {
    icon: Building2,
    title: "Clôtures Commerciales",
    description:
      "Protection professionnelle pour entreprises, bureaux et centres commerciaux. Sécurité renforcée et design moderne.",
    image: "/modern-office-security.png",
  },
  {
    icon: Factory,
    title: "Clôtures Industrielles",
    description:
      "Solutions robustes pour sites industriels, entrepôts et zones de stockage. Résistance maximale et conformité aux normes.",
    image: "/industrial-security-fence.png",
  },
  {
    icon: TreePine,
    title: "Clôtures Agricoles",
    description:
      "Protection efficace pour exploitations agricoles, élevages et terrains ruraux. Durabilité face aux intempéries.",
    image: "/moroccan-farm-fence.png",
  },
  {
    icon: Shield,
    title: "Sécurité Périmétrique",
    description:
      "Systèmes de sécurité avancés avec détection d'intrusion, caméras et contrôle d'accès intégrés.",
    image: "/high-security-fence.png",
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description:
      "Service complet d'installation professionnelle et maintenance préventive pour garantir la longévité.",
    image: "/fence-installation-morocco.png",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <h2 className="section-header">Nos Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent rounded-lg"
                >
                  En Savoir Plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
