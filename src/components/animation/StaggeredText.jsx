"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function StaggeredText({ text }) {
  const element = useRef(null);
  const textArray = Array.isArray(text) ? text : [text];
  const useView = useInView(element, { amount: 0.5 });
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.span
      ref={element}
      initial="hidden"
      animate={useView ? "visible" : "hidden"}
      transition={{
        staggerChildren: 0.1,
      }}
      aria-hidden
    >
      {textArray.map((line, index) => (
        <span className="block" key={index}>
          {line.split(" ").map((word, wordIndex) => (
            <span className="inline-block" key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={defaultAnimations}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

export default StaggeredText;
