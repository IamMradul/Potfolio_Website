import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
  delay?: number;
}

const AnimatedSkillBar = ({ name, level, color, delay = 0 }: AnimatedSkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color || "bg-primary"}`}
        />
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
