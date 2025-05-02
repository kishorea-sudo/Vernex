import React from "react";
import { motion } from "framer-motion";
import { rotateIn } from "@/lib/animations";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <motion.img 
        src="/vernex-logo.svg" 
        alt="Vernex" 
        className="h-16" 
        initial="hidden"
        animate="show"
        variants={rotateIn}
      />
    </div>
  );
};

export default Logo;
