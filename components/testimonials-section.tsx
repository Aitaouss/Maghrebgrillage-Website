import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Benali",
    role: "Propriétaire, Villa Anfa",
    content:
      "Service exceptionnel ! L'équipe de Maghreb Grillage a installé notre clôture résidentielle avec un professionnalisme remarquable. Qualité irréprochable et respect des délais.",
    rating: 5,
    image: "/placeholder-l9va4.png",
  },
  {
    name: "Fatima Alaoui",
    role: "Directrice, Centre Commercial Atlas",
    content:
      "Nous avons fait appel à Maghreb Grillage pour sécuriser notre centre commercial. Leur expertise en sécurité périmétrique nous a convaincus. Résultat parfait !",
    rating: 5,
    image: "/moroccan-businesswoman-portrait.png",
  },
  {
    name: "Youssef Tazi",
    role: "Gérant, Usine Textile",
    content:
      "Installation industrielle complexe réalisée dans les temps. L'équipe technique est très compétente et le suivi client excellent. Je recommande vivement !",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Ce Que Disent Nos <span className="text-primary">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            La satisfaction de nos clients est notre priorité. Découvrez leurs
            témoignages sur la qualité de nos services et installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent fill-current"
                    />
                  ))}
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed italic font-sans">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground font-sans">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-sans">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
