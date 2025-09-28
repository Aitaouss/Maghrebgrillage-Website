"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Wrench, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function GabionPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabi1.jpg"
              alt="Gabion Construction"
              fill
              className="object-cover"
              priority
            />
            <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6">
                Solutions Gabion
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Structures de soutènement durables et esthétiques pour vos
                projets d'aménagement
              </p>
              <Button
                onClick={() => (
                  console.log("Devis button clicked"),
                  (window.location.href = "/")
                )}
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
                <h2 className=" text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
                  Nos Produits Gabion
                </h2>
                <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Découvrez notre gamme complète de solutions gabion pour tous
                  vos besoins de soutènement et d'aménagement paysager
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/Capture-d%E2%80%99e%CC%81cran-2016-11-22-a%CC%80-11.18.jpg"
                    alt="Gabion en Cage"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <Badge className="bg-[#02742c] text-white mb-4">
                    Gabion en Cage
                  </Badge>
                  <h3 className="font-sans text-2xl font-bold text-[#444d55] mb-4">
                    Gabion Standard - JF 17
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>Diamètre du fil standard : JF 17</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>Maille : 100x120 mm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>
                        Dimensions : 1x1x1 - 2x1x1 - 3x1x1 - 4x1x1 - 5x1x1 -
                        6x1x1
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>Finition : Galvanisation à chaud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gabion Stonebox */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <Badge className="bg-[#02742c] text-white mb-4">
                    Gabion STONEBOX
                  </Badge>
                  <h3 className="font-sans text-2xl font-bold text-[#444d55] mb-4">
                    Solution Renforcée
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>Diamètre du fil standard : 3,4-6 mm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>
                        Dimensions de Maille : 50x50 mm, 50x100mm, 100x100 mm
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#02742c]" />
                      <span>Finition : Galvanisation à chaud</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-sans font-semibold text-[#444d55] mb-3">
                      Avantages :
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • Manipulation facile et rapidité de mise en œuvre
                      </li>
                      <li>• Structure rigide facilitant le remplissage</li>
                      <li>
                        • Réalisation des profils variés, sur mesure, selon les
                        besoins
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabi1.jpg"
                    alt="Gabion Stonebox"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className=" text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
                  Applications
                </h2>
                <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                    <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                      Murs de Soutènement
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Protection contre l'érosion et stabilisation des terrains
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Wrench className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                    <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                      Aménagement Paysager
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Création d'espaces verts structurés et esthétiques
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                    <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                      Protection Berges
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Stabilisation des berges et protection contre l'érosion
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-[#02742c] mx-auto mb-4" />
                    <h3 className="font-sans font-semibold text-[#444d55] mb-2">
                      Solutions Temporaires
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Structures provisoires pour chantiers et événements
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className=" text-3xl md:text-4xl font-bold text-[#444d55] mb-4">
                  Nos Réalisations
                </h2>
                <div className="w-16 h-1 bg-[#02742c] mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/photo-direction-2-1-495x400.jpg"
                    alt="Projet Gabion 1"
                    width={400}
                    height={300}
                    className="object-cover transition-all duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/photo-direction-2-1-495x400.jpg"
                    alt="Projet Gabion 2"
                    width={400}
                    height={300}
                    className="object-cover transition-all duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src="https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg"
                    alt="Projet Gabion 3"
                    width={400}
                    height={300}
                    className="object-cover transition-all duration-200 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-[#444d55] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className=" text-3xl md:text-4xl font-bold mb-6">
                Besoin d'une Solution Gabion ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contactez nos experts pour une étude personnalisée de votre
                projet
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
      )}
    </>
  );
}

// https://maghrebgrillage.ma/wp-content/uploads/2016/05/gabion-del-muro-de-contencin-47097953-1030x650-1-495x400.jpg
// https://maghrebgrillage.ma/wp-content/uploads/2016/05/photo-direction-2-1-495x400.jpg

// https://maghrebgrillage.ma/wp-content/uploads/2016/05/Capture-d%E2%80%99e%CC%81cran-2016-11-22-a%CC%80-11.18.jpg
