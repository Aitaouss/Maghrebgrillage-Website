"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wheat, Shield, Home } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClôturesAgricolesPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
          alt="Clôture Agricole"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6">
            Clôtures Agricoles
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Solutions de clôturage durables pour exploitations agricoles et
            élevage
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
              Nos Solutions Agricoles
            </h2>
            <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                alt="Grillage Simple Torsion"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#02742c] text-white mb-4">
                Grillage Simple Torsion
              </Badge>
              <h3 className="font-sans text-2xl font-bold text-[#444d55] mb-4">
                Solution Économique pour l'Agriculture
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Diamètres : Ø 2" - Ø 2.5" - Ø 3" - Ø 3.5" - Ø 4"</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Maille losange : 50-60-65-70 mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Hauteur Standard : 1.5 m</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Longueur rouleau : 25 ml</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Finition : Galvanisation à chaud</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-[#02742c] text-white mb-4">
                Grillage Noué
              </Badge>
              <h3 className="font-sans text-2xl font-bold text-[#444d55] mb-4">
                Résistance Renforcée pour Élevage
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Diamètres du fil Standard : Ø 1.5-1.6</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>
                    Maille : Rectangulaire dégressif 50x50 à 100x150 mm
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Hauteur Standard : 1m - 1.2m - 1.5m - 2m - 2.5m</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Longueur rouleau : 50 ml</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#02742c]" />
                  <span>Finition : Galvanisation à chaud</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                alt="Grillage Noué"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
              Applications Agricoles
            </h2>
            <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Wheat className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                  Délimitation de Parcelles
                </h3>
                <p className="text-gray-600 text-sm">
                  Séparation claire des zones agricoles et des cultures
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                  Enclos pour Animaux
                </h3>
                <p className="text-gray-600 text-sm">
                  Sécurisation des zones d'élevage et de pâturage
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                  Protection des Cultures
                </h3>
                <p className="text-gray-600 text-sm">
                  Protection contre les intrusions et les animaux sauvages
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
            Projet de Clôturage Agricole ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts vous conseillent pour sécuriser vos exploitations
            agricoles
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
