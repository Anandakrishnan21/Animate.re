import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

function TextReveal({ text }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div className="w-full flex justify-center items-center">
      <p className="flex flex-wrap text-justify" ref={element}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Letter key={i} scroll={scrollYProgress} range={[start, end]}>
              {word}
            </Letter>
          );
        })}
      </p>
    </div>
  );
}

export default TextReveal;

const Letter = ({ children, scroll, range }) => {
  const opacity = useTransform(scroll, range, [0, 1]);
  return (
    <span className="relative mr-1 mt-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span> 
  );
};
