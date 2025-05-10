import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { Lightbulb, Handshake, Gem, TrendingUp } from "lucide-react";

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => {
  return (
    <motion.div variants={fadeIn} className="bg-light p-6 rounded-lg text-center">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-dark/70">{desc}</p>
    </motion.div>
  );
};

const StatBlock: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-display font-bold text-primary mb-2">{value}</span>
      <span className="text-dark/70">{label}</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} className="order-2 lg:order-1">
            <motion.span variants={fadeInUp} className="text-secondary font-serif text-lg">
              About Vernex
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Crafting Digital Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-dark/80 text-lg mb-6">
              At Vernex, we're passionate about translating visions into
              impactful digital realities. Founded on principles of creativity,
              integrity, and results-driven strategy, we partner with clients to
              elevate their brands and achieve measurable success.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-dark/80 text-lg mb-8">
              Our team of seasoned professionals brings diverse expertise across
              digital marketing, design, development, and multimedia production.
              We believe in building lasting relationships with our clients
              through transparency, collaboration, and delivering exceptional
              value.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 items-center"
            >
              <StatBlock value="100+" label="Clients Served" />
              <StatBlock value="250+" label="Projects Completed" />
              <StatBlock value="5+" label="Years Experience" />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="The Vernex Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-accent/20 rounded-lg -z-10"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div variants={staggerContainer}>
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-serif text-lg">Our Core Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-dark/80 text-lg">
              These values form the foundation of our approach and commitment to
              excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Creativity"
              desc="We approach each project with fresh perspectives and innovative thinking to create unique solutions."
            />
            <ValueCard
              icon={<Handshake className="h-8 w-8" />}
              title="Integrity"
              desc="We maintain the highest standards of honesty, transparency and ethical practices in all our work."
            />
            <ValueCard
              icon={<Gem className="h-8 w-8" />}
              title="Excellence"
              desc="We're committed to delivering exceptional quality that exceeds expectations in every project."
            />
            <ValueCard
              icon={<TrendingUp className="h-8 w-8" />}
              title="Results"
              desc="We focus on delivering measurable outcomes that drive real business growth and success."
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
