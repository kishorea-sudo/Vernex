import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { Gem, Users, Lightbulb, TrendingUp } from "lucide-react";

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => {
  return (
    <motion.div variants={fadeIn} className="flex space-x-4">
      <div className="text-3xl text-accent">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-light/70">{desc}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-primary text-light">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-accent font-serif text-lg">
              Why Choose Vernex
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
              Elevating Brands Through Tailored Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-light/80 text-lg mb-8">
              We combine creativity, strategy, and technical expertise to deliver
              solutions that not only meet your needs but exceed your expectations.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature
                icon={<Gem className="h-8 w-8" />}
                title="Premium Quality"
                desc="Excellence in every pixel, word, and interaction."
              />
              <Feature
                icon={<Users className="h-8 w-8" />}
                title="Expert Team"
                desc="Industry specialists with proven track records."
              />
              <Feature
                icon={<Lightbulb className="h-8 w-8" />}
                title="Creative Approach"
                desc="Innovative solutions that stand out from the crowd."
              />
              <Feature
                icon={<TrendingUp className="h-8 w-8" />}
                title="Results Driven"
                desc="Focused on metrics that matter to your business."
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="relative">
            <div className="aspect-w-4 aspect-h-3 bg-secondary/20 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our team collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-serif text-xl italic mb-4">
                "We don't just deliver services, we cultivate partnerships."
              </p>
              <p className="font-bold">— Vernex Team</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
