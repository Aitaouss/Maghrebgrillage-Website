import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Building, Shield, Phone, Mail } from "lucide-react";

export default function BarreaudagePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-sans">
              Élégance & Sécurité
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Barreaudage Métallique
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto font-sans">
              Solutions de barreaudage alliant esthétique et sécurité. Protégez
              vos propriétés avec style grâce à nos barreaux métalliques sur
              mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-sans"
              >
                <Phone className="mr-2 h-5 w-5" />
                Demander un Devis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 font-sans bg-transparent"
              >
                Voir nos Modèles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nos Solutions de Barreaudage
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Gamme complète de barreaux métalliques pour fenêtres, balcons et
              terrasses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Barreaux de fenêtre"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Barreaux de Fenêtre
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Protection élégante pour vos fenêtres avec designs
                  personnalisables.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Acier galvanisé
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Designs variés
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sur mesure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Garde-corps balcon"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Garde-Corps Balcon
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Sécurité et esthétique pour vos balcons et terrasses.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Hauteur réglementaire
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Finitions variées
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Installation rapide
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Barreaudage décoratif"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Barreaudage Décoratif
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Éléments décoratifs alliant sécurité et design architectural.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Motifs artistiques
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Fer forgé
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Personnalisable
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 ">
              Applications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Résidentiel
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Maisons, villas et appartements
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Commercial
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Bureaux et locaux commerciaux
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Sécurité
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Protection anti-effraction
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Décoratif
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Éléments architecturaux
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Projet de Barreaudage ?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-sans">
            Nos experts vous accompagnent dans la conception de vos barreaux sur
            mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100 font-sans"
            >
              <Phone className="mr-2 h-5 w-5" />
              +212 5XX XX XX XX
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-sans bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Demander un Devis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
