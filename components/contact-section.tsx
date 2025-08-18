import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const agencies = [
  {
    city: "Casablanca",
    address: "Km12, route 111 ZENATA Casablanca (à 1 km de TOYOTA)",
    phone: [
      "05 22 66 65 84",
      "05 22 66 65 85",
      "05 22 66 65 15",
      "05 22 66 65 16",
      "05 22 66 65 18",
    ],
    fax: "05 22 66 65 86",
    email: ["contact@maghrebgrillage.ma", "info@maghrebgrillage.ma"],
    horaires: [
      "Lundi-Vendredi : 8h30 – 12h30 | 14h30 – 18h30",
      "Samedi : 8h30 – 12h30",
    ],
  },
  {
    city: "Fès",
    address: "KM 7, Route IMOUZZER OULAD TAIB",
    phone: ["05 35 60 60 32"],
    gsm: "06 66 14 51 88",
    fax: "05 35 60 60 32",
    email: ["fes@maghrebgrillage.ma"],
    horaires: [
      "Lundi-Vendredi : 8h30 – 12h30 | 14h30 – 18h30",
      "Samedi : 8h30 – 12h30",
    ],
  },
  {
    city: "Agadir",
    address: "Bloc 1, N°207 Hay Touhamou Lkblani Ait Melloul Agadir",
    phone: ["0660 94 16 61"],
    email: ["agadir@maghrebgrillage.ma"],
    horaires: [
      "Lundi-Vendredi : 8h30 – 12h30 | 14h30 – 18h30",
      "Samedi : 8h30 – 12h30",
    ],
  },
  {
    city: "El Jadida",
    address: "KM 5, N°01, route de Marrakech-Quartier industriel El JADIDA",
    phone: ["05 23 37 75 85"],
    gsm: "06 61 28 05 38",
    email: ["eljadida@maghrebgrillage.ma"],
    horaires: [
      "Lundi-Vendredi : 8h30 – 12h30 | 14h30 – 18h30",
      "Samedi : 8h30 – 12h30",
    ],
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Prêt à démarrer votre projet ? Notre équipe d'experts est à votre
            disposition pour vous conseiller et établir un devis personnalisé
            gratuit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground font-sans">
                Contactez-nous
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block font-sans">
                    Nom complet *
                  </label>
                  <Input
                    placeholder="Votre nom"
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block font-sans">
                    Téléphone *
                  </label>
                  <Input
                    placeholder="+212 6XX XXX XXX"
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block font-sans">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block font-sans">
                  Type de projet *
                </label>
                <select className="w-full p-3 rounded-md border border-border bg-input text-foreground font-sans">
                  <option>Clôture résidentielle</option>
                  <option>Clôture commerciale</option>
                  <option>Clôture industrielle</option>
                  <option>Clôture agricole</option>
                  <option>Sécurité périmétrique</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block font-sans">
                  Budget *
                </label>
                <select className="w-full p-3 rounded-md border border-border bg-input text-foreground font-sans">
                  <option>0Dhs - 10.000Dhs</option>
                  <option>10.000Dhs - 50.000Dhs</option>
                  <option>50.000Dhs - 100.000Dhs</option>
                  <option>+100.000Dhs</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block font-sans">
                  Message *
                </label>
                <Textarea
                  placeholder="Décrivez votre projet, dimensions approximatives, contraintes particulières..."
                  className="bg-input border-border min-h-[120px]"
                />
              </div>

              <Button className="cursor-pointer w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 font-sans">
                Envoyer ma Demande
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info per city */}
          <div className="space-y-8">
            {agencies.map((agency) => (
              <Card key={agency.city} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    {agency.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <p>{agency.address}</p>
                  </div>
                  {agency.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        {agency.phone.map((num, i) => (
                          <p key={i}>{num}</p>
                        ))}
                        {agency.gsm && <p>GSM : {agency.gsm}</p>}
                        {agency.fax && <p>Fax : {agency.fax}</p>}
                      </div>
                    </div>
                  )}
                  {agency.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        {agency.email.map((mail, i) => (
                          <p key={i}>{mail}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      {agency.horaires.map((h, i) => (
                        <p key={i}>{h}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
