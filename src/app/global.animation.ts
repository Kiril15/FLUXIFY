import { easeInOut, Variants } from "framer-motion";

export const navItem: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 8px rgba(192, 183, 232, 0.8)",
    transition: { type: "spring", stiffness: 500 }
  }
};


export const underlineAnimation = {
    initial: { width: 0 },
    hover: { 
      width: "100%",
      transition: { duration: 0.4, ease: easeInOut }
    }
  };