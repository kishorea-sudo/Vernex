import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { portfolioItems, portfolioCategories } from "@/lib/constants";

interface FilterButtonProps {
  category: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  category,
  label,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-md transition-all ${
        active
          ? "bg-primary text-light"
          : "bg-light text-primary border border-primary hover:bg-primary/5"
      }`}
    >
      {label}
    </button>
  );
};

const PortfolioItem: React.FC<typeof portfolioItems[0]> = ({
  title,
  description,
  image,
  category,
}) => {
  return (
    <motion.div
      variants={fadeIn}
      data-category={category}
      className="portfolio-item group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center p-6">
          <h3 className="text-light font-display text-xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-light/90 text-center mb-4">{description}</p>
          <a
            href="#contact"
            className="text-accent hover:text-light transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-light">
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
          <span className="text-secondary font-serif text-lg">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Portfolio
          </h2>
          <p className="text-dark/80 text-lg">
            Explore our collection of work that showcases our expertise and
            creative capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <FilterButton
            category="all"
            label="All"
            active={activeFilter === "all"}
            onClick={() => handleFilterClick("all")}
          />
          {portfolioCategories.map((category) => (
            <FilterButton
              key={category.value}
              category={category.value}
              label={category.label}
              active={activeFilter === category.value}
              onClick={() => handleFilterClick(category.value)}
            />
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
