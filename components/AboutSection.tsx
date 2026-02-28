"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import first from "@/images/about/first.jpeg";
import second from "@/images/about/second.jpeg";
import third from "@/images/about/third.jpeg";

const features = [
  "Personalized Treatment Plans",
  "State-of-the-Art Technology",
  "Gentle Care for Adults and Children",
  "Flexible Appointment Scheduling",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-5">
                <div className="ml-10">
                  <img
                    src={first.src}
                    alt="Dental examination in modern clinic"
                    className="rounded-2xl w-full h-[200px] object-cover shadow-lg"
                  />
                </div>
                <img
                  src={second.src}
                  alt="Dental examination in modern clinic"
                  className="rounded-2xl w-full h-[300px] object-cover shadow-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={third.src}
                  alt="Dental examination in modern clinic"
                  className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title text-dark-blue mb-5">
              Professionals and Personalized Dental Excellence
            </h2>
            <p className="section-description mb-8">
              We offer high-quality dental care tailored for the whole family.
              From routine check-ups to advanced treatments, our compassionate
              team ensures your smile stays healthy and confident.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Read More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
