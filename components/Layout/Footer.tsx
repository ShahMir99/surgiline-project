import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-[25px]">
                  Surgiline International
                </span>
              </div>
            </a>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              High-precision surgical and dental instruments engineered for
                  reliability, durability, and professional performance
                  worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm opacity-70">
              {["Home", "Our Services", "Safety", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:opacity-100 transition-opacity"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm opacity-70">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Pediatric Dentistry",
                "Restorative Dentistry",
                "Preventive Dentistry",
                "Orthodontics",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Jammu Road, via Dālūwāli, 51300, Sialkot</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+92 300 8623614</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@surgilineinternation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>Copyright © 2026 Surgiline International. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms & Conditions
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
