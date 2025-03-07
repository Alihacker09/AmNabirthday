"use client";
import { motion } from "framer-motion";
import { childVariants, container } from "./Animate";


const SplitText = ({ children, className, delay = 0.9 }) => {
  const letters = children?.toString().split("");

  return (
    <motion.span
      layout="position"
      variants={container(delay)}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {letters?.map((letter, index) => (
        <motion.span key={index} variants={childVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
