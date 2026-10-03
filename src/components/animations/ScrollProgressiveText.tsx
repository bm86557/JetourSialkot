import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  totalChars: number;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  char,
  progress,
  index,
  totalChars,
}) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, Math.max(start + 0.02, charProgress + 0.05));

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

interface ScrollProgressiveTextProps {
  text: string;
  className?: string;
}

export const ScrollProgressiveText: React.FC<ScrollProgressiveTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = Array.from(text);
  const totalChars = characters.length;

  return (
    <p
      ref={containerRef}
      className={`text-[#DEDBC8] ${className}`}
    >
      {characters.map((char, index) => (
        <AnimatedLetter
          key={index}
          char={char}
          progress={scrollYProgress}
          index={index}
          totalChars={totalChars}
        />
      ))}
    </p>
  );
};
