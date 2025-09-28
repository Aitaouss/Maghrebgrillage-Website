<img width="1906" height="958" alt="image" src="https://github.com/user-attachments/assets/42267449-245e-4f4b-98ae-da3069a82492" /># 🏗️ Maghreb Grillage - Landing Page

![Maghreb Grillage preview](https://i.ibb.co/kgb6wDhc/image.png)
![Maghreb Grillage preview 2](https://i.ibb.co/KcTHf159/maghrefb.png)

Une page d'accueil moderne et responsive pour Maghreb Grillage, spécialiste en clôtures, grillages et solutions de sécurité au Maroc.

![Maghreb Grillage](https://img.shields.io/badge/Maghreb-Grillage-green?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Aperçu

Site web professionnel présentant les services et produits de Maghreb Grillage, leader dans les solutions de clôturage et sécurité au Maroc. Le site offre une expérience utilisateur moderne avec une navigation intuitive et un design responsive.

### 🎯 Fonctionnalités Principales

- ✅ **Design Moderne** - Interface utilisateur élégante et professionnelle
- 📱 **Responsive** - Optimisé pour tous les appareils (mobile, tablette, desktop)
- 🚀 **Performance** - Chargement rapide avec Next.js 14
- 🎨 **Animations** - Transitions fluides et effets visuels
- 📧 **Contact** - Formulaires de contact intégrés
- 🛠️ **Services** - Pages dédiées pour chaque service
- 🌐 **Multilingue** - Support français (extensible)

## 🛠️ Technologies Utilisées

### Frontend

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/UI** - Composants UI modernes et accessibles
- **Lucide React** - Icônes vectorielles

### Outils de Développement

- **PNPM** - Gestionnaire de paquets rapide
- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **Git** - Contrôle de version

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+
- PNPM (recommandé) ou npm/yarn

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/maghrebgrillage-landingpage.git
cd maghrebgrillage-landingpage
```

### 2. Installer les dépendances

```bash
pnpm install
# ou
npm install
```

### 3. Lancer le serveur de développement

```bash
pnpm dev
# ou
npm run dev
```

### 4. Ouvrir dans le navigateur

Visitez [http://localhost:3000](http://localhost:3000) pour voir le site.

## 📁 Structure du Projet

```
maghrebgrillage-landingpage/
├── app/                          # Pages et routing (App Router)
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   ├── barreaudage/             # Page service barreaudage
│   ├── cloture-chantier/        # Page service clôture chantier
│   ├── cloture-professionnelle/ # Page service clôture pro
│   ├── cloture-sportives/       # Page service clôtures sportives
│   ├── clotures-agricoles/      # Page service clôtures agricoles
│   ├── clotures-en-fil-de-fer-barbele/ # Page fil barbelé
│   ├── gabion/                  # Page service gabion
│   ├── portails-metalliques/    # Page service portails
│   └── poteaux-accessoires/     # Page poteaux & accessoires
├── components/                   # Composants réutilisables
│   ├── ui/                      # Composants UI (Shadcn)
│   ├── header.tsx               # En-tête avec navigation
│   ├── footer.tsx               # Pied de page
│   ├── hero-section.tsx         # Section héros
│   ├── services-section.tsx     # Section services
│   ├── about-section.tsx        # Section à propos
│   ├── contact-section.tsx      # Section contact
│   └── testimonials-section.tsx # Section témoignages
├── public/                      # Assets statiques
└── styles/                      # Styles CSS
```

## 🎨 Services Proposés

Le site présente une gamme complète de services :

### 🔒 **Barreaudage**

Solutions de barreaudage métallique alliant esthétique et sécurité

### 🚧 **Clôture Chantier**

Clôtures temporaires sécurisées pour chantiers de construction

### 🏢 **Clôture Professionnelle**

Solutions haute sécurité pour entreprises et zones industrielles

### ⚽ **Clôtures Sportives**

Installations spécialisées pour terrains et complexes sportifs

### 🌾 **Clôtures Agricoles**

Protection adaptée aux exploitations agricoles et élevages

### ⚡ **Clôtures en Fil de Fer Barbelé**

Protection haute sécurité pour périmètres sensibles

### 🧱 **Gabion**

Murs de soutènement esthétiques et fonctionnels

### 🚪 **Portails Métalliques**

Portails sur mesure manuels et automatisés

### 🔧 **Poteaux & Accessoires**

Composants et outillage professionnel

## 🎯 Fonctionnalités Clés

### Navigation

- **Menu responsive** avec dropdown services
- **Navigation mobile** optimisée
- **Liens de retour** sur toutes les pages services

### Sections Principales

- **Hero Section** - Présentation impactante
- **Services** - Cartes cliquables vers pages dédiées
- **À Propos** - Histoire et expertise de l'entreprise
- **Témoignages** - Avis clients authentiques
- **Contact** - Informations et formulaires

### UX/UI

- **Animations fluides** au scroll et hover
- **Design cohérent** avec la charte graphique
- **Accessibilité** optimisée
- **Performance** élevée

## 🚀 Scripts Disponibles

```bash
# Développement
pnpm dev

# Build production
pnpm build

# Démarrer en production
pnpm start

# Linting
pnpm lint

# Type checking
pnpm type-check
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

- **Primaire** : `#02742c` (Vert Maghreb)
- **Secondaire** : `#444d55` (Gris foncé)

### Polices

- **Famille** : Sans-serif system fonts
- **Classes** : `font-sans` appliquée globalement

### Composants UI

Basés sur Shadcn/UI, personnalisables dans `/components/ui/`

## 📱 Responsive Design

- **Mobile First** - Conception mobile-first
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation** - Menu burger sur mobile, menu horizontal sur desktop
- **Images** - Optimisation automatique avec Next.js Image

## 🔧 Configuration

### Tailwind CSS

Configuration dans `tailwind.config.js` avec :

- Couleurs personnalisées
- Animations personnalisées
- Plugins additionnels

### Next.js

Configuration dans `next.config.mjs` avec :

- Optimisation des images
- Domaines externes autorisés

## 🤝 Contribution

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Créer** une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Maghreb Grillage**

- 📧 Email: contact@maghrebgrillage.ma
- 📱 Téléphone: +212 5 22 48 85 85
- 📍 Adresse: Casablanca, Maroc
- 🌐 Site web: [maghrebgrillage.ma](https://maghrebgrillage.ma)

## 🏆 Développé avec ❤️

Créé pour Maghreb Grillage - Votre partenaire de confiance pour tous vos projets de clôture et sécurisation.

---

⭐ **N'hésitez pas à mettre une étoile si ce projet vous a été utile !**
