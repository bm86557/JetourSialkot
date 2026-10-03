import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayOffset?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
  showAsterisk = false,
  delayOffset = 0,
}) => {
  const containerRef = useRef<HTMLHeadingElement | HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const words = text.split(' ');

  return (
    <h1
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;

        return (
          <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: delayOffset + wordIndex * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {showAsterisk && isLastWord ? (
                <span className="relative inline-block">
                  {/* If word ends with 'a', split and put asterisk right on 'a' */}
                  {word.slice(0, -1)}
                  <span className="relative inline-block">
                    {word.slice(-1)}
                    <span
                      className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none select-none"
                      style={{ color: '#E1E0CC' }}
                    >
                      *
                    </span>
                  </span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
};
