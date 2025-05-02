import { Variants } from "framer-motion";

// Bounce animation for attention-grabbing elements
export const bounce: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: [0.8, 1.2, 0.9, 1.1, 1],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
      duration: 0.8,
    },
  },
};

// Rotate and fade in animation for icons and logos
export const rotateIn: Variants = {
  hidden: { rotate: -120, scale: 0.3, opacity: 0 },
  show: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 1,
    },
  },
};

// Floating animation for call to action buttons
export const float: Variants = {
  hidden: { y: 0 },
  show: {
    y: ["-3px", "3px", "-3px"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

// Text reveal animation character by character
export const textReveal: Variants = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      type: "tween",
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// Shimmer effect for highlighted elements
export const shimmer: Variants = {
  hidden: {
    backgroundPosition: "-468px 0",
  },
  show: {
    backgroundPosition: "468px 0",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "linear",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const slideIn = (direction: "left" | "right" | "up" | "down", type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const pageAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
