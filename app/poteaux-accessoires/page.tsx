import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Wrench,
  Settings,
  Package,
  Phone,
  Mail,
} from "lucide-react";

export default function PoteauxAccessoiresPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-sans">
              Composants Essentiels
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-sans">
              Poteaux & Accessoires
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto font-sans">
              Gamme complète de poteaux et accessoires pour vos installations de
              clôture. Qualité professionnelle et durabilité garantie.
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
                Catalogue Produits
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
              Nos Poteaux & Accessoires
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Tous les composants nécessaires pour une installation de clôture
              professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Poteaux métalliques"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Poteaux Métalliques
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Poteaux en acier galvanisé pour tous types de clôtures.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sections: 40x40 à 120x120mm
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Hauteurs: 1.5m à 4m
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Galvanisation à chaud
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Fixations et colliers"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Fixations & Colliers
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Système de fixation robuste pour panneaux et grillages.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Colliers de serrage
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Brides de fixation
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Vis et boulons inox
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Chapeaux et embouts"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Chapeaux & Embouts
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Finitions et protection pour vos poteaux.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Chapeaux plastique
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Embouts métalliques
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Protection anti-corrosion
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Tendeurs et fils"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Tendeurs & Fils
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Accessoires de tension pour grillages souples.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Tendeurs mécaniques
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Fils de tension
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Crochets et agrafes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portillons et serrures"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portillons & Serrures
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Accès sécurisés et systèmes de fermeture.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Portillons sur mesure
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Serrures sécurisées
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Charnières renforcées
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Outils d'installation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Outils d'Installation
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Outillage professionnel pour pose de clôtures.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Pinces à grillage
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Tarières manuelles
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Niveaux et cordeau
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
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Installation
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Pose professionnelle de clôtures
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Maintenance
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Réparation et entretien
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Kits Complets
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Solutions clé en main
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Sur Mesure
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Adaptés à vos besoins
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
            Besoin d'Accessoires ?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-sans">
            Consultez nos experts pour choisir les bons composants pour votre
            projet
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
