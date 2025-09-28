import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Home,
  Car,
  Shield,
  Zap,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function PortailsMetalliquesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Return to Home Button */}
      <div className="container mx-auto px-4 pt-4">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-4 text-primary hover:text-white font-sans cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'Accueil
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-sans">
              Accès Sécurisé
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-sans">
              Portails Métalliques
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto font-sans">
              Portails métalliques sur mesure alliant sécurité, durabilité et
              esthétique. Solutions manuelles et automatisées pour tous vos
              accès.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-sans">
              Nos Portails Métalliques
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Gamme complète de portails pour résidences, entreprises et
              collectivités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portail battant"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portail Battant
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Portail traditionnel à deux vantaux pour accès résidentiels et
                  commerciaux.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Largeurs: 3m à 6m
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Hauteurs: 1.5m à 2.5m
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Motorisation possible
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portail coulissant"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portail Coulissant
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Solution idéale pour les espaces restreints et accès
                  fréquents.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Rail au sol ou suspendu
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Ouverture rapide
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Automatisation standard
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portail industriel"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portail Industriel
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Portails renforcés pour sites industriels et zones de haute
                  sécurité.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Structure renforcée
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sécurité maximale
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Contrôle d'accès
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portail décoratif"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portail Décoratif
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Designs artistiques en fer forgé pour propriétés de prestige.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Fer forgé artisanal
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Motifs personnalisés
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Finitions premium
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portail automatique"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portail Automatique
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Systèmes motorisés avec télécommande et contrôle d'accès.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Moteurs 24V/230V
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Télécommandes
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sécurités intégrées
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                  alt="Portillon piéton"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">
                  Portillon Piéton
                </h3>
                <p className="text-slate-600 mb-4 font-sans">
                  Accès piéton assorti à votre portail principal.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Largeur: 1m à 1.2m
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Serrure sécurisée
                  </li>
                  <li className="flex items-center text-sm text-slate-600 font-sans">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Design harmonisé
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
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Résidentiel
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Maisons et propriétés privées
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Commercial
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Entreprises et parkings
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Industriel
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Sites industriels sécurisés
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                  Automatisé
                </h3>
                <p className="text-slate-600 text-sm font-sans">
                  Accès contrôlés et motorisés
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
            Projet de Portail ?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-sans">
            Nos experts vous accompagnent dans le choix et l'installation de
            votre portail
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
