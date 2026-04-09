import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type DraggableCardContainerProps = React.HTMLAttributes<HTMLDivElement>;

type DraggableCardBodyProps = React.HTMLAttributes<HTMLDivElement>;

const DraggableCardContainer = ({ className, children, ...props }: DraggableCardContainerProps) => {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
};

const DraggableCardBody = ({ className, children, ...props }: DraggableCardBodyProps) => {
  return (
    <motion.div
      drag
      dragElastic={0.18}
      dragMomentum={false}
      whileDrag={{ scale: 1.03, zIndex: 30 }}
      className={cn(
        "absolute w-64 md:w-72 select-none rounded-2xl border border-white/15 bg-background/90 p-3 shadow-2xl backdrop-blur-sm cursor-grab active:cursor-grabbing",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { DraggableCardBody, DraggableCardContainer };