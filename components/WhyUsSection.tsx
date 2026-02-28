"use client";

import React from "react";
import { Shield, Award, Truck, Users, Clock, Star } from "lucide-react";

const WhyUsSection = () => {
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
    <section className="relative py-24" aria-labelledby="why-choose-heading">
      {/* Split background (image + 70% color overlay on the left, 30% transparent on right) */}
      <div className="absolute inset-0 -z-10 split-bg" aria-hidden="true" />

      <div className="container mx-auto px-4">
        {/* header row */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-primary font-medium text-sm">
              Trusted by clinics worldwide
            </span>
          </div>

          <h2
            id="why-choose-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">
              Surgiline International?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver precision dental instruments and exceptional service —
            engineered for clinicians who demand reliability and performance.
          </p>

          {/* quick credibility row */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">+12k</span>
              <span className="text-sm text-muted-foreground">
                Instruments sold
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">98%</span>
              <span className="text-sm text-muted-foreground">
                Satisfaction
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">50+</span>
              <span className="text-sm text-muted-foreground">
                Countries served
              </span>
            </div>
          </div>
        </div>

        {/* cards grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="relative group bg-white/6 backdrop-blur-md border border-border p-6 rounded-2xl shadow-lg transform transition will-change-transform hover:-translate-y-2 hover:scale-[1.02] focus-within:-translate-y-2"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${reason.color} bg-opacity-90 shadow-md animate-float`}
                    aria-hidden="true"
                  >
                    {Icon ? (
                      <Icon className="w-7 h-7 text-primary" />
                    ) : (
                      <svg
                        className="w-7 h-7 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2L20 7v6c0 5-4 9-8 9s-8-4-8-9V7l8-5z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* subtle bottom CTA inside card */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus:outline-none"
                  >
                    Learn more
                    <span className="inline-block transform transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* final CTA */}
        <div className="mt-12 text-center">
          <a
            href="#catalog"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary text-white font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            Browse our catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
