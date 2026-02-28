"use client"

import ctaImg from "@/images/cta-dental.jpg";

const CTASection = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <img
        src={ctaImg.src}
        alt="Happy dental patient"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
          Ready for a Beautiful Smile?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl">
          Schedule your appointment today and experience the difference of personalized dental care.
        </p>
        <a
          href="#contact"
          className="bg-background text-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-background/90 transition-all shadow-lg inline-flex items-center gap-2"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
};

export default CTASection;
