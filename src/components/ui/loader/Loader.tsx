"use client"
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <motion.div
        animate={{ rotate: 360 }}
        transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear"
        }}
        className="h-5 w-5 rounded-full border-2 border-transparent border-t-purple-500 border-r-blue-400"
        style={{
            background: "conic-gradient(transparent 0%, transparent 20%, #8b5cf6 80%)"
        }}
        />
    );
}

export default Loader;