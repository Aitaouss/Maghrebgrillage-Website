"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building, Shield, Lock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ClôtureProfessionnellePage() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
          alt="Clôture Professionnelle"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6">
            Clôtures Professionnelles
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Solutions de sécurité haut de gamme pour entreprises et industries
          </p>
          <Button
            size="lg"
            className="bg-[#02742c] hover:bg-[#02742c]/90 text-white font-sans cursor-pointer"
          >
            Demander un Devis
          </Button>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
              Solutions Professionnelles
            </h2>
            <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                alt="Panneau Soudé Rigide"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#02742c] text-white mb-4">
                Panneau Soudé Rigide
              </Badge>
              <h3 className="font-sans text-2xl font-bold text-[#444d55] mb-4">
                Sécurité Maximale pour Professionnels
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Diamètre du fil standard : 4 / 5 / 6 et 8 mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Maille : 200x50 - 55x200 - 100x50 - 150x50 mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Hauteur Standard : 1m - 1.2m - 1.5m - 2m - 2.5m</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Longueur Standard : 2.5 m</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Finition : Galvanisation à chaud + Plastification</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Utilisation :</strong> Résidentiel, Industriel,
                  Commercial, Sportif, Domaines agricoles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
              Applications Professionnelles
            </h2>
            <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                  Sites Industriels
                </h3>
                <p className="text-gray-600 text-sm">
                  Sécurisation périmétrique d'usines et zones industrielles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Lock className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                  Zones Sécurisées
                </h3>
                <p className="text-gray-600 text-sm">
                  Protection de sites sensibles et zones à accès restreint
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                  Entreprises Commerciales
                </h3>
                <p className="text-gray-600 text-sm">
                  Délimitation et sécurisation de locaux commerciaux
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#444d55] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">
            Sécurisez Votre Site Professionnel
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Solutions sur mesure pour répondre aux exigences de sécurité les
            plus strictes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#02742c] hover:bg-[#02742c]/90 font-sans cursor-pointer"
            >
              Demander un Devis Gratuit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#444d55] font-sans bg-transparent cursor-pointer"
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
