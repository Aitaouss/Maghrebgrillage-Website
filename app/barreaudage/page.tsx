import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Home,
  Building,
  Shield,
  Phone,
  Mail,
  TestTube2,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BarreaudagePage() {
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
      <section className="relative py-20 bg-gradient-to-r from-gray-100 to-gray-50 text-white">
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
              Panneau Soudé Rigide
            </h2>
            <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <Image
                src="https://maghrebgrillage.ma/wp-content/uploads/2016/07/barreaudage.jpg"
                alt="Panneau Soudé Rigide"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <Badge className="bg-[#02742c] text-white mb-4">
                Panneau Soudé Rigide
              </Badge>
              <h3 className="font-sans text-2xl font-bold text-[#444d55] mb-4">
                Clôture Résistante et Durable
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Revêtement : Galvanisé ou plastifié</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Diamètre du fil : 4 / 5 / 6 / 8 mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>
                    Maille : carré ou rectangulaire (200×50 – 50×50 – 100×50 –
                    150×100 mm)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>
                    Hauteurs disponibles : 1m – 1,2m – 1,5m – 2m – 2,5m – 3m
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Longueur panneau : 2,5 ml</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Finition : Galvanisation à chaud</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Couleur standard : Vert RAL 6005</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Fixation poteau : à sceller ou à visser</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>
                    Utilisation : Sites industriels, Ports, Aéroports, Stades,
                    Terrains multisports…
                  </span>
                </div>
              </div>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
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

// https://maghrebgrillage.ma/wp-content/uploads/2016/07/baraudage-1030x773-495x400.jpg
// https://maghrebgrillage.ma/wp-content/uploads/2016/07/image001-1.jpg
// https://maghrebgrillage.ma/wp-content/uploads/2016/07/barreaudage.jpg
// https://maghrebgrillage.ma/wp-content/uploads/2016/07/image007-1.jpg
