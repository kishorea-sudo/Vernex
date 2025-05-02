import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer, shimmer, bounce } from "@/lib/animations";
import { services } from "@/lib/constants";
import { Check } from "lucide-react";

const ServiceCard: React.FC<typeof services[0]> = ({
  title,
  description,
  image,
  features,
}) => {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-60 overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ 
            backgroundSize: "200% 100%",
            zIndex: 1 
          }}
          variants={shimmer}
          initial="hidden"
          animate="show"
        />
        <img
          src={image}
          alt={`${title} Services`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 relative"
        />
      </div>
      <div className="p-6 md:p-8">
        <motion.h3 
          className="font-display text-2xl font-bold text-primary mb-3"
          variants={bounce}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <p className="text-dark/80 mb-5">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-secondary mr-2"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.4 }}
              >
                <Check className="h-4 w-4" />
              </motion.span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className="inline-block text-secondary font-medium hover:text-primary transition-colors"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <motion.span className="ml-1 inline-block" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-light">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 md:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-serif text-lg">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Premium Services
          </h2>
          <p className="text-dark/80 text-lg">
            We provide comprehensive solutions tailored to elevate your brand and
            captivate your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
