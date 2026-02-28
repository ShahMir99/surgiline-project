"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Dentists", href: "#team" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm  ${isScrolled ? "bg-white border-b border-black/15" : "bg-hero-gradient"}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4 py-12">
        {/* Logo */}
        <a href="#" className="">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          <span className="font-bold text-dark-blue text-[25px]">
            Surgiline International
          </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-semibold text-black/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+92 300 8623614</span>
          </a>
          <a href="#contact" className="btn-primary text-sm">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm inline-block">
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Search,
//   ShoppingCart,
//   Phone,
//   Mail,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
// } from "lucide-react";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="w-full border-b border-border/40">
//       {/* ================= TOP BAR ================= */}
//       <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white text-sm">
//         <div className="container mx-auto flex justify-between items-center py-2 px-4">
//           {/* Contact */}
//           <div className="flex items-center gap-6 opacity-90">
//             <div className="flex items-center gap-2 hover:opacity-100 transition">
//               <Phone size={14} />
//               <span className="tracking-wide">+92 300 8623614</span>
//             </div>

//             <div className="flex items-center gap-2 hover:opacity-100 transition">
//               <Mail size={14} />
//               <span>info@surgilineinternation.com</span>
//             </div>
//           </div>

//           {/* Social + Account */}
//           <div className="flex items-center gap-6">
//             <div className="flex gap-3">
//               {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
//                 <Icon
//                   key={i}
//                   size={16}
//                   className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
//                 />
//               ))}
//             </div>

//             <div className="h-4 w-px bg-white/40" />

//             <span className="hover:underline cursor-pointer">Wishlist (0)</span>

//             <span className="hover:underline cursor-pointer">
//               Login / Sign up
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN HEADER ================= */}
//       <div className="bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
//         <div className="container mx-auto flex items-center justify-between py-5 px-4 gap-6">
//           {/* Logo */}
//           <div className="flex items-center gap-3 group cursor-pointer">
//             <Image
//               src="/images/logo.png"
//               alt="logo"
//               width={85}
//               height={85}
//               className="object-contain transition-transform duration-300 group-hover:scale-105"
//             />

//             {/* <div className="hidden lg:block">
//               <p className="text-xs text-muted-foreground tracking-wide">
//                 Precision Tools for Professionals
//               </p>
//             </div> */}
//           </div>

//           {/* Search */}
//           <div className="flex-1 max-w-xl">
//             <div className="relative group">
//               <Input
//                 placeholder="Search dental instruments..."
//                 className="h-12 rounded-full pl-6 pr-14 border border-border bg-muted/30 focus:bg-background transition-all shadow-sm"
//               />

//               <Button
//                 size="icon"
//                 className="absolute right-1 top-1 rounded-full h-10 w-10 bg-primary hover:bg-primary/90 shadow-md transition-all group-hover:scale-105"
//               >
//                 <Search size={18} />
//               </Button>
//             </div>
//           </div>

//           {/* Cart */}
//           <div className="flex items-center gap-6">
//             {/* Cart Icon */}
//             <div className="relative cursor-pointer group">
//               <div className="p-3 rounded-full bg-muted/40 group-hover:bg-primary/10 transition">
//                 <ShoppingCart className="w-6 h-6" />
//               </div>

//               <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow">
//                 0
//               </span>
//             </div>

//             {/* Price Box */}
//             <div className="hidden md:flex flex-col items-center bg-primary text-white px-5 py-2 rounded-xl shadow-md">
//               <span className="text-xs opacity-80">Your Cart</span>
//               <span className="font-semibold">£0.00 (0)</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= NAVIGATION ================= */}
//       <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border shadow-sm">
//         <div className="container mx-auto flex items-center px-4">
//           {/* Category Button */}
//           <Button
//             className="
//       group rounded-lg px-7 py-6
//       bg-gradient-to-r from-primary to-primary/80
//       hover:from-primary/90 hover:to-primary
//       text-white font-semibold tracking-wide
//       flex text-xs items-center gap-2
//       shadow-md hover:shadow-lg
//       transition-all duration-300
//     "
//           >
//             <span className="text-sm transition-transform group-hover:rotate-90">
//               ☰
//             </span>
//             OUR DENTAL PRODUCTS
//           </Button>

//           {/* Navigation Links */}
//           <div className="flex items-center gap-2 ml-10">
//             {[
//               "HOME",
//               "DENTAL KITS & SETS",
//               "E-CATALOGUE",
//               "ABOUT US",
//               "CONTACT US",
//               "BLOG",
//             ].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="
//             relative px-4 py-6
//             text-xs font-semibold tracking-wide
//             text-foreground/80
//             hover:text-primary
//             transition-all duration-300
//             group
//           "
//               >
//                 {item}

//                 {/* Glow Hover Background */}
//                 <span
//                   className="
//             absolute inset-0 rounded-lg
//             bg-primary/5 opacity-0
//             group-hover:opacity-100
//             transition duration-300
//           "
//                 />

//                 {/* Animated Underline */}
//                 <span
//                   className="
//             absolute left-1/2 -translate-x-1/2 bottom-3
//             h-[2px] w-0 bg-primary
//             transition-all duration-300
//             group-hover:w-3/4
//           "
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
