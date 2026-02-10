import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface EncryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  characters?: string;
}

const EncryptedText = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
}: EncryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text.replace(/[^\s]/g, "-"));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < iteration) return text[idx];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        iteration += 1 / 3;
        if (iteration >= text.length) {
          setDisplayText(text);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay, characters]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};

export default EncryptedText;
