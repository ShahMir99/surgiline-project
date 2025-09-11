import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold mb-2">
                <span className="text-background">Surgiline</span>
                <span className="text-neutral-400">International</span>
              </div>
              <p className="text-background/80 text-sm">
                Precision Tools for Professionals
              </p>
            </div>
            <p className="text-background/70 leading-relaxed">
              Leading provider of high-quality dental instruments and equipment, trusted by professionals worldwide for precision, reliability, and excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-primary hover:text-primary-light cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-primary hover:text-primary-light cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-primary hover:text-primary-light cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-primary hover:text-primary-light cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Products", "E-Catalogue", "Contact Us", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-background">Product Categories</h3>
            <ul className="space-y-3">
              {["Dental Kits", "Surgical Instruments", "Examination Tools", "Orthodontic Supplies", "Endodontic Equipment", "Periodontal Instruments"].map((product) => (
                <li key={product}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-background">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/70">
                  <p>123 Medical District</p>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70">+92-(306)-6124344</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70">info@surgilineinternational.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 SurgilineInternational. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer