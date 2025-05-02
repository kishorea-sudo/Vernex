import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, bounce, float, textReveal } from "@/lib/animations";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-primary to-dark overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            variants={bounce}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-light leading-tight hero-text mb-6"
          >
            Elevate Your <motion.span 
              className="text-accent inline-block"
              variants={textReveal}
              initial="hidden"
              animate="show"
              style={{ display: "inline-block", overflow: "hidden" }}
            >Digital Presence</motion.span> With Premium Solutions
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-light/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-serif"
          >
            We craft exceptional digital experiences through strategic marketing, bespoke web design, creative branding, and professional video content.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a 
              href="#services" 
              className="bg-accent text-primary px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
              variants={float}
              animate="show"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="border-2 border-light text-light px-8 py-3 rounded-md font-semibold hover:bg-light/10 transition-all hover:shadow-lg"
              variants={float}
              animate="show"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-light to-transparent"></div>
    </section>
  );
};

export default Hero;
