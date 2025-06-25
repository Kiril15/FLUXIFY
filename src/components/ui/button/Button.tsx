"use client"
import { motion } from "motion/react"

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    customClass?: string
}

const Button = ({ 
    customClass = '', 
    children, 
    type = 'button',
    ...props 
}: IButton) => {
    const baseStyles = 'rounded-3xl bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] py-[0.8vw] px-[2vw]'

    const item = {
        hidden: { y: -20, opacity: 0 },
        show: { y: 0, opacity: 1 },
      };
    
    return (
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-max"
        >
          <button 
            type={type}
            className={`${baseStyles} ${customClass}`}
            {...props}>
              {children}
            </button>
        </motion.div>
    )
}

export default Button