import React from "react";
import Logo from "./Logo";
import { navLinks, socialLinks, services } from "@/lib/constants";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-light">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo className="text-light" />
            </div>
            <p className="text-light/70 mb-6">
              Elevating brands through strategic digital solutions that drive 
              engagement, growth, and lasting impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  aria-label={link.label}
                  className="text-light/70 hover:text-accent transition-colors"
                >
                  {link.iconName === "Facebook" && <Facebook className="h-4 w-4" />}
                  {link.iconName === "Twitter" && <Twitter className="h-4 w-4" />}
                  {link.iconName === "Instagram" && <Instagram className="h-4 w-4" />}
                  {link.iconName === "Linkedin" && <Linkedin className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-light/70 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-light/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent mr-3">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-light/70">
                  123 Design Avenue, Creative District<br/>
                  City, Country 12345
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-light/70">info@vernex.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-light/70">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Vernex. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-light/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-light/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
