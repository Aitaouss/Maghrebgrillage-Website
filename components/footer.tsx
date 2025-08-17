import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#2C353D] text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <span className="text-accent-foreground font-bold text-xl">MG</span> */}
              <Image
                src="http://maghrebgrillage.ma/wp-content/uploads/2015/10/MA6033547-3085-B1.jpg"
                alt="Maghreb Grillage Logo"
                width={150}
                height={150}
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Votre partenaire de confiance pour tous vos projets de clôture et
              sécurisation. Expertise, qualité et service client d'excellence
              depuis plus de 15 ans.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10  rounded-full flex items-center justify-center  transition-colors"
              >
                <Facebook className="h-5 w-5 text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10  rounded-full flex items-center justify-center  transition-colors"
              >
                <Instagram className="h-5 w-5 text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10  rounded-full flex items-center justify-center  transition-colors"
              >
                <Linkedin className="h-5 w-5 text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Clôtures Résidentielles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Clôtures Commerciales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Clôtures Industrielles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Clôtures Agricoles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Sécurité Périmétrique
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Installation & Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Nos Réalisations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Catalogue Produits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Devis Gratuit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Garanties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-sm opacity-90">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white" />
                <span>+212 5 22 48 85 85</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white" />
                <span>contact@maghrebgrillage.ma</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white mt-1" />
                <span>
                  Zone Industrielle Sidi Bernoussi
                  <br />
                  Casablanca, Maroc
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>
            &copy; 2025 Maghreb Grillage. Tous droits réservés. | Conception web
            professionnelle
          </p>
        </div>
      </div>
    </footer>
  );
}
