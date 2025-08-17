export default function ReferenceSection() {
  const logos = [
    {
      src: "https://maghrebgrillage.ma/wp-content/uploads/2015/10/logo-cosumar-maroc-sucre.jpg",
      alt: "Cosumar",
    },
    {
      src: "https://maghrebgrillage.ma/wp-content/uploads/2015/10/OCP.jpg",
      alt: "OCP",
    },
    {
      src: "https://maghrebgrillage.ma/wp-content/uploads/2015/10/SGTM-LOGO.png",
      alt: "SGTM",
    },
    {
      src: "https://maghrebgrillage.ma/wp-content/uploads/2015/10/Marsa-Maroc.png",
      alt: "Marsa Maroc",
    },
  ];

  return (
    <section id="reference" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Nos Références
          </h2>
        </div>

        {/* Logo grid */}
        <ul
          aria-label="Logos de nos partenaires"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
        >
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="flex items-center justify-center rounded  border border-border/50 bg-card/30 p-6 md:p-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-12 md:max-h-16 w-auto object-contain  hover:scale-105 transition-all duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// https://maghrebgrillage.ma/wp-content/uploads/2015/10/logo-cosumar-maroc-sucre.jpg
// https://maghrebgrillage.ma/wp-content/uploads/2015/10/OCP.jpg
// https://maghrebgrillage.ma/wp-content/uploads/2015/10/SGTM-LOGO.png
// https://maghrebgrillage.ma/wp-content/uploads/2015/10/Marsa-Maroc.png
