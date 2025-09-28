"use client";

import { Button } from "@/components/ui/button";
import { IoList } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [sizeLg, setSizeLg] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    { name: "Barreaudage", href: "/barreaudage" },
    { name: "Clôture Chantier", href: "/cloture-chantier" },
    { name: "Clôture Professionnelle", href: "/cloture-professionnelle" },
    { name: "Clôtures Sportives", href: "/cloture-sportives" },
    { name: "Clôtures Agricoles", href: "/clotures-agricoles" },
    { name: "Clôtures en Fil de Fer Barbelé", href: "/clotures-en-fil-de-fer-barbele" },
    { name: "Gabion", href: "/gabion" },
    { name: "Portails Métalliques", href: "/portails-metalliques" },
    { name: "Poteaux & Accessoires", href: "/poteaux-accessoires" },
  ];

  const handleResize = () => {
    setSizeLg(window.innerWidth);
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
    setMobileMenuOpen(false); // close mobile menu after click
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden lg:flex items-center justify-between  py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+212 5 22 48 85 85</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contact@maghrebgrillage.ma</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
          <div className=" font-medium">
            Lun-Ven: 8h00-18h00 | Sam: 8h00-16h00
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 py-4">
            <div
              className="relative cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="http://maghrebgrillage.ma/wp-content/uploads/2015/10/MA6033547-3085-B1.jpg"
                alt="Maghreb Grillage Logo"
                // fill
                className="object-contain rounded-lg cursor-pointer"
                width={200}
                height={200}
              />
            </div>
          </div>
          {sizeLg > 1024 ? (
            <nav className="hidden lg:flex items-center gap-8">
              <a
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-foreground hover:text-[#02742c] transition-all duration-200 cursor-pointer hover:border-b-2 hover:border-[#02742c] hover:pb-1"
              >
                Accueil
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-[#02742c] transition-all duration-200 data-[state=open]:bg-transparent data-[active]:bg-transparent focus:bg-transparent">
                      Nos Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.href} asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <a
                href="#produits"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("produits")?.offsetTop || 0,
                    behavior: "smooth",
                  })
                }
                className="text-foreground hover:text-[#02742c] transition-all duration-200 cursor-pointer hover:border-b-2 hover:border-[#02742c] hover:pb-1"
              >
                Produits
              </a>
              <a
                href="#a-propos"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("a-propos")?.offsetTop || 0,
                    behavior: "smooth",
                  })
                }
                className="text-foreground hover:text-[#02742c] transition-all duration-200 cursor-pointer hover:border-b-2 hover:border-[#02742c] hover:pb-1"
              >
                À Propos
              </a>
              <a
                href="#contact"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("contact")?.offsetTop || 0,
                    behavior: "smooth",
                  })
                }
                className="text-foreground hover:text-[#02742c] transition-all duration-200 cursor-pointer hover:border-b-2 hover:border-[#02742c] hover:pb-1"
              >
                Contact
              </a>
            </nav>
          ) : (
            <div
              className="relative flex items-center justify-center cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <IoList size={30} color="#444d55" />
            </div>
          )}

          {/* <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground">
            Demander un Devis
          </Button> */}
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border mt-2 p-4 flex flex-col gap-4 text-foreground">
            <a
              onClick={() => handleScrollTo("accueil")}
              className="cursor-pointer hover:text-[#02742c]"
            >
              Accueil
            </a>
            <div>
              <div
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="cursor-pointer hover:text-[#02742c] flex items-center justify-between"
              >
                Nos Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="cursor-pointer hover:text-[#02742c] text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              onClick={() => handleScrollTo("produits")}
              className="cursor-pointer hover:text-[#02742c]"
            >
              Produits
            </a>
            <a
              onClick={() => handleScrollTo("a-propos")}
              className="cursor-pointer hover:text-[#02742c]"
            >
              À Propos
            </a>
            <a
              onClick={() => handleScrollTo("contact")}
              className="cursor-pointer hover:text-[#02742c]"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
