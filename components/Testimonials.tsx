"use client"

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ryan B.",
    role: "Customer",
    text: "From the moment I walked in, I felt at ease. The staff made me feel like family, and the care I received was world-class. They're the best!",
  },
  {
    name: "Michael S.",
    role: "Customer",
    text: "I've always been nervous about dental visits, but the staff made me feel completely comfortable. Their gentle care and attention to detail is outstanding.",
  },
  {
    name: "Maria L.",
    role: "Customer",
    text: "My family and I have been coming here for years. The level of care is exceptional, and the team always makes sure we leave with a smile on our faces.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title mb-4">Our Happy Customers</h2>
          <p className="section-description mx-auto mb-14">
            Join thousands of happy patients who trust us for gentle, expert care and beautiful,
            long-lasting dental results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background rounded-xl p-8 text-left border border-border"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;