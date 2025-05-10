// client/src/pages/Home.tsx

import { useEffect } from "react";
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
import Layout from "@/components/Layout";
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
      {/* Layout handles consistent horizontal padding and vertical spacing */}
      <Layout>
        <section><Hero /></section>
        <section><Services /></section>
        <section><WhyChooseUs /></section>
        <section><Portfolio /></section>
        <section><About /></section>
        <section><Testimonials /></section>
        <section><Contact /></section>
      </Layout>
      <Footer />
    </motion.div>
  );
};
export default Home;