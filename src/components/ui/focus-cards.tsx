import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FocusCardProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export const FocusCard = ({
  children,
  className,
  index,
  hoveredIndex,
  setHoveredIndex,
}: FocusCardProps) => {
  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn(
        "rounded-xl transition-all duration-300 ease-out relative",
        hoveredIndex !== null && hoveredIndex !== index && "blur-[2px] scale-[0.98] opacity-60",
        hoveredIndex === index && "scale-[1.02] shadow-2xl z-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const useFocusCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return { hoveredIndex, setHoveredIndex };
};
