import React from "react";
import StaggeredText from "../animation/StaggeredText";
import { motion } from "framer-motion";
import TextReveal from "../animation/TextReveal";

function TextSection() {
  return (
    <div id="text" className="w-full h-screen flex justify-center items-center text-white">
      <div className="w-10/12 md:w-4/12 flex flex-col justify-center items-center text-justify gap-4">
        <div className="flex flex-col items-center text-3xl font-bold text-pink-400 gap-2">
          <motion.img
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="w-6 h-6 md:w-8 md:h-8"
            src="/svg/flower.svg"
            alt="flower"
          />
          <StaggeredText text="Aquatic Ecosystem" />
        </div>
        <TextReveal
          text="An aquatic ecosystem is an ecosystem found in and around a body of
          water, in contrast to land-based terrestrial ecosystems. Aquatic
          ecosystems contain communities of organisms-aquatic life that are
          dependent on each other and on their environment."
        />
      </div>
    </div>
  );
}

export default TextSection;
