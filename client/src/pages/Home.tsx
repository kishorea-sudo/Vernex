import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageAnimation } from "@/lib/animations";

const Home: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
