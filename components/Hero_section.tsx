"use client";

import { Star, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroDentist from "@/images/hero-dentist.png";

const HeroSection = () => {
  return (
    <section
      className="relative pt-14 overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subtitle">
              Precision Tools For Professionals
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-dark-blue leading-[1.15] mb-6">
              Advanced Dental Instruments
            </h1>
            <p className="section-description mb-8">
              High-precision surgical and dental instruments engineered for
              reliability, durability, and professional performance worldwide.
            </p>
            <a href="#contact" className="btn-primary mb-8 inline-flex">
              Contact Us
            </a>

            {/* Google Rating */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-semibold text-foreground">
                Google Rating
              </span>
              <span className="font-bold text-foreground">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Based on 150+ Reviews
              </span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroDentist.src}
                alt="Professional dentist smiling"
                className="w-full h-[430px] object-cover rounded-2xl"
              />
              {/* Opening Hours Badge */}
              {/* <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold text-sm">Opening Hours</span>
                </div>
                <p className="text-xs opacity-90">Mon to Sat 09:00 - 21:00</p>
              </div> */}
            </div>

            {/* Phone Badge */}
            <div className="absolute -bottom-4 left-20 bg-background rounded-xl p-4 shadow-lg border border-border flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Need Services?</p>
                <p className="font-semibold text-sm text-foreground">
                  Call: +92 300 8623614
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
