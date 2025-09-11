import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92-(301)-23456789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@surgilineinternational.pk</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Facebook className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
            </div>
            <span className="border-l border-primary-light pl-4">
              Wishlist (0) | Login / Sign up
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-card shadow-soft py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-foreground">Surgi</span>
              <span className="gradient-text">line</span>
            </div>
            <div className="ml-2 mt-1 text-sm text-muted-foreground">
              <div>Precision Tools for Professionals</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products"
                className="w-full pl-4 pr-12 py-3 rounded-lg border-2 border-border focus:border-primary transition-colors"
              />
              <Button className="absolute right-1 top-1 btn-primary h-7 w-7">
                <Search className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-5">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded">
              £0.00 (0)
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-t border-border">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Button className="bg-primary text-primary-foreground px-6 py-4 rounded-none hover:bg-primary-dark transition-colors">
              ☰ OUR DENTAL PRODUCTS
            </Button>
            <div className="flex space-x-8 ml-8">
              {["HOME", "DENTAL KITS & SETS", "E-CATALOGUE", "ABOUT US", "CONTACT US", "BLOG"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-4 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header