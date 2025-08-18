import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Award, Phone, Mail } from "lucide-react";

export default function CloturesFilDeFerBarbelePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-sans">
              Sécurité Maximale
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-sans">
              Clôtures en Fil de Fer Barbelé
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto font-sans">
              Protection haute sécurité avec nos clôtures en fil de fer barbelé.
              Solutions robustes pour sécuriser vos périmètres industriels,
              militaires et commerciaux.
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
                Voir nos Réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-sans">
              Nos Solutions de Fil Barbelé
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Gamme complète de fils barbelés et accessoires pour tous vos
              besoins de sécurisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Fil barbelé galvanisé"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Fil Barbelé Galvanisé
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Protection standard avec galvanisation à chaud pour une
                  résistance optimale à la corrosion.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Diamètre: 2.5mm - 4mm
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Espacement: 10-15cm
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Longueur: 100-500m
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Concertina razor"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Concertina Razor
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Sécurité renforcée avec lames tranchantes pour dissuasion
                  maximale.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Diamètre: 450-980mm
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Lames: Acier inoxydable
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Installation: Spirale
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Fil barbelé plastifié"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Fil Barbelé Plastifié
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Protection avec revêtement PVC pour environnements corrosifs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Revêtement: PVC coloré
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Résistance UV
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Durée de vie: 15+ ans
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-sans">
              Applications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Sécurité Industrielle
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Protection des sites industriels et zones sensibles
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Installations Militaires
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Sécurisation de périmètres militaires
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Prisons & Centres
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Sécurité maximale pour établissements pénitentiaires
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Frontières
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Contrôle et sécurisation des frontières
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
            Besoin d'une Solution de Sécurité ?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-sans">
            Contactez nos experts pour une étude personnalisée de vos besoins en
            sécurisation
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
