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

  export const serviceCard = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  whileHover: {
    y: -10,
    boxShadow: "0 10px 25px -5px rgba(192, 183, 232, 0.3)",
  },
};

export const glowOverlay = {
  initial: { opacity: 0 },
  whileHover: { opacity: 1 },
};

export const lineAnimation = (index: number) => ({
  initial: { width: 0 },
  whileInView: { width: "100%" },
  transition: { duration: 0.8, delay: index * 0.2 },
});


export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      ease: easeInOut,
    },
  }),
};

export const waveVariants = {
  animate: {
    x: [0, 20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: easeInOut,
    },
  },
};