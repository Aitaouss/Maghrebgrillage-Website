"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import ReferenceSection from "@/components/refference-section";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // set 2 sec delai then set the loading to false
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
          <ReferenceSection />
          <Footer />
        </>
      )}
    </div>
  );
}
