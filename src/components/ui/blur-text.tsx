import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateByWord?: boolean;
}

const BlurText = ({ text, className = "", delay = 0, animateByWord = true }: BlurTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const parts = animateByWord ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {part}
          {animateByWord && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
