import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface StyleSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: StyleSegment[];
  className?: string;
  delayOffset?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
  delayOffset = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Flatten segments into words with their associated styles
  let globalWordIndex = 0;
  const wordsList: { word: string; className?: string; index: number }[] = [];

  segments.forEach((segment) => {
    const rawWords = segment.text.trim().split(/\s+/);
    rawWords.forEach((w) => {
      if (w.length > 0) {
        wordsList.push({
          word: w,
          className: segment.className,
          index: globalWordIndex++,
        });
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center items-baseline text-center ${className}`}
    >
      {wordsList.map(({ word, className: wordClass, index }) => (
        <span
          key={index}
          className="inline-block overflow-hidden mx-[0.14em]"
        >
          <motion.span
            className={`inline-block ${wordClass || ''}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delayOffset + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
