import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground font-sans">
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
                Demander un Devis Gratuit
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
                  Type de projet
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
                  Description du projet
                </label>
                <Textarea
                  placeholder="Décrivez votre projet, dimensions approximatives, contraintes particulières..."
                  className="bg-input border-border min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 font-sans">
                Envoyer ma Demande
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground font-sans">
                      Téléphone
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      Appelez-nous directement
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold font-sans">
                  +212 5 22 48 85 85
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground font-sans">
                      Email
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      Écrivez-nous
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold  font-sans">
                  contact@maghrebgrillage.ma
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground font-sans">
                      Adresse
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      Visitez notre showroom
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold  font-sans">
                  Zone Industrielle Sidi Bernoussi
                  <br />
                  Casablanca, Maroc
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground font-sans">
                      Horaires
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      Nos heures d'ouverture
                    </p>
                  </div>
                </div>
                <div className=" font-semibold">
                  <p>Lun-Ven: 8h00 - 18h00</p>
                  <p>Samedi: 8h00 - 16h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
