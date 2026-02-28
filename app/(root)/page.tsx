import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/images/hero-img.jpg";
import { ProductsSection } from "@/components/ProductSection";
import HeroSection from "@/components/Hero_section";
import TestimonialsSection from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import WhyUsSection from "@/components/WhyUsSection";

const HomePage = () => {
  const features = [
    { label: "QUALITY", color: "bg-red-500" },
    { label: "CUSTOMER CARE", color: "bg-green-500" },
    { label: "COMPETITIVE PRICES", color: "bg-yellow-500" },
    { label: "CUSTOMER SATISFACTION", color: "bg-gray-800" },
    { label: "RELIABILITY OF INSTRUMENTS", color: "bg-pink-500" },
    { label: "DURABILITY & WARRANTY POLICY", color: "bg-purple-600" },
  ];

  return (
    <div>
      {/* =====HERO Section ===== */}
      <HeroSection />

      {/* ===== About Section ===== */}
      <AboutSection />

      {/* ===== Product Section ===== */}
      <ProductsSection />

      {/* ===== Why Choose Us Section ===== */}
      <WhyUsSection />

      {/* ===== FAQ Section ===== */}
      <FAQSection />

      {/* ===== CTA Section ===== */}
      <CTASection />

      {/* ===== Product Section ===== */}
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;

{
  /* <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accent/20 blur-[120px] rounded-full" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            <div className="space-y-10">
              <div className="space-y-5">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm">
                  Precision Tools For Professionals
                </p>

                <h1 className="text-3xl font-bold leading-tight">
                  Advanced
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Dental Instruments
                  </span>
                </h1>

                <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                  High-precision surgical and dental instruments engineered for
                  reliability, durability, and professional performance
                  worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.label}
                    className="
                group relative overflow-hidden
                rounded-xl border border-border
                bg-background/70 backdrop-blur
                px-5 py-4
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-semibold text-sm">
                      {feature.label}
                    </span>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/5 transition" />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5 pt-6">
                <Button
                  className="
            text-lg px-10 py-6
            rounded-full
            bg-primary
            hover:bg-primary/90
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
          "
                >
                  View Our Products →
                </Button>

                <Button
                  variant="outline"
                  className="
            text-lg px-10 py-6
            rounded-full
            border-2
            hover:bg-primary/5
            transition-all
          "
                >
                  Download Catalogue
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-8 flex-wrap">
                <span className="text-sm text-muted-foreground font-medium">
                  Certified by:
                </span>

                {["CE", "FDA", "ISO"].map((cert) => (
                  <div
                    key={cert}
                    className="
                px-5 py-2 rounded-full
                bg-background border
                shadow-sm
                font-bold text-primary
                hover:shadow-md
                transition
              "
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-[40px]" />

              <div className="relative group">
                <img
                  src={heroImage.src}
                  alt="Professional dental instruments"
                  className="
              w-full h-auto
              rounded-[32px]
              shadow-2xl
              transition-all duration-500
              group-hover:scale-[1.03]
            "
                />

                <div
                  className="
            absolute -bottom-6 -left-6
            bg-background/90 backdrop-blur
            border rounded-2xl
            px-6 py-4
            shadow-xl
          "
                >
                  <p className="text-sm text-muted-foreground">
                    Trusted Worldwide
                  </p>
                  <p className="font-bold text-primary text-lg">
                    25+ Countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
