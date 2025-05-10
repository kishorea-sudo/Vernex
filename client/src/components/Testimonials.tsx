import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { testimonials } from "@/lib/constants";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-primary">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 md:px-8 py-20"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-serif text-lg">Client Feedback</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-light/80 text-lg">
            Hear directly from those who have experienced the Vernex
            difference.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="testimonial-slider relative max-w-5xl mx-auto"
        >
          <div className="testimonial-slide">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-dark/70">{currentTestimonial.position}</p>
                </div>
                <div className="ml-auto text-accent">
                  <Quote className="h-8 w-8" />
                </div>
              </div>
              <p className="text-lg text-dark/80 italic mb-6">
                {currentTestimonial.text}
              </p>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-10">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white/10 text-light hover:bg-white/20 transition-colors mx-2 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white/10 text-light hover:bg-white/20 transition-colors mx-2 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
