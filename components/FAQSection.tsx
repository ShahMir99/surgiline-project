"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every six months for regular check-ups and professional cleanings to maintain optimal oral health.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Contact our office immediately. We offer emergency appointments to address urgent dental issues like severe pain, broken teeth, or knocked-out teeth.",
  },
  {
    question: "Do you offer services for kids?",
    answer: "Yes! Our pediatric dentistry services are specially designed to make dental visits comfortable and fun for children of all ages.",
  },
  {
    question: "What are my options for replacing missing teeth?",
    answer: "We offer several options including dental implants, bridges, and dentures. Our team will help you choose the best solution for your needs.",
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Professional teeth whitening is safe and effective. We use proven methods that protect your enamel while delivering beautiful, lasting results.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-subtitle">Everything You Need to Know</p>
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-section-light rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
