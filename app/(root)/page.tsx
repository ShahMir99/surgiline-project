import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/images/hero-img.jpg";
import { Shield, Award, Truck, Users, Clock, Star } from "lucide-react";
import { ProductsSection } from "@/components/product-section";

const HomePage = () => {
  const features = [
    { label: "QUALITY", color: "bg-red-500" },
    { label: "CUSTOMER CARE", color: "bg-green-500" },
    { label: "COMPETITIVE PRICES", color: "bg-yellow-500" },
    { label: "CUSTOMER SATISFACTION", color: "bg-gray-800" },
    { label: "RELIABILITY OF INSTRUMENTS", color: "bg-pink-500" },
    { label: "DURABILITY & WARRANTY POLICY", color: "bg-purple-600" },
  ];

  const reasons = [
    {
      icon: Shield,
      title: "Premium Quality",
      description:
        "Medical-grade instruments crafted with precision and durability in mind.",
      color: "text-blue-600",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "All our products meet international standards with CE, FDA, and ISO certifications.",
      color: "text-green-600",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and secure shipping worldwide with tracking and insurance.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated customer service team with deep product knowledge.",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Warranty Policy",
      description:
        "Comprehensive warranty coverage and reliable after-sales service.",
      color: "text-accent",
    },
    {
      icon: Star,
      title: "Trusted by Professionals",
      description:
        "Used by dental professionals in over 50 countries worldwide.",
      color: "text-yellow-600",
    },
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-2xl text-primary italic font-medium">
                  Precision Tools For Professionals
                </h2>
                <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Dental <br />
                  <span className="gradient-text">Instruments</span>
                </h1>
              </div>

              {/* Feature Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.label}
                    className={` p-1 rounded-md bg-neutral-100 text-black border shadow-sm font-semibold text-sm`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {feature.label}
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button className="btn-primary text-lg px-8 py-4">
                  View Our Products
                </Button>
                <Button className="btn-secondary text-lg px-8 py-4">
                  Download Catalogue
                </Button>
              </div>

              {/* Certifications */}
              <div className="flex items-center space-x-6 pt-8">
                <div className="text-sm text-muted-foreground">Certified by:</div>
                <div className="flex space-x-4">
                  <div className="bg-card px-4 py-2 rounded shadow-soft border">
                    <span className="font-bold text-primary">CE</span>
                  </div>
                  <div className="bg-card px-4 py-2 rounded shadow-soft border">
                    <span className="font-bold text-primary">FDA</span>
                  </div>
                  <div className="bg-card px-4 py-2 rounded shadow-soft border">
                    <span className="font-bold text-primary">ISO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src={heroImage.src}
                alt="Professional dental instruments and equipment"
                className="w-full h-auto rounded-2xl shadow-elegant hover-lift"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
          </div>
        </div>
      </section>

      {/* ===== Product Section ===== */}
      <ProductsSection />

      {/* ===== Why Choose Us Section ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">MEDICURE</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality dental instruments
              and exceptional service to professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-card p-8 rounded-xl shadow-soft hover-lift animate-fade-in border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${reason.color} mb-6`}>
                    <IconComponent className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
