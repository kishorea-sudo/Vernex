import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "./Logo";
import { Link } from "wouter";
import { useMediaQuery } from "@/hooks/use-mobile";
import { navLinks } from "@/lib/constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={navVariants}
      className={`fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300 ${
        isScrolled ? "py-3 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-item font-medium text-primary hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary hover:text-secondary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="md:hidden overflow-hidden"
        >
          <nav className="pt-4 pb-2">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-2 text-primary hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
