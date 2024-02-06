"use client";
import useMousePosition from "@/utils/useMousePosition";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function TextMask() {
  const [isHover, setIsHover] = useState(false);
  const [containerOffset, setContainerOffset] = useState({ x: 0, y: 0 });
  const { x, y } = useMousePosition();
  const size = isHover ? 400 : 40;

  useEffect(() => {
    const updateContainerOffset = () => {
      setContainerOffset({
        x: window.innerWidth / 2 - 200,
        y: window.innerHeight / 2 - 200,
      });
    };

    if (typeof window !== "undefined") {
      updateContainerOffset();
      window.addEventListener("resize", updateContainerOffset);

      return () => {
        window.removeEventListener("resize", updateContainerOffset);
      };
    }
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - containerOffset.x - size / 2}px ${
            y - containerOffset.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="text-justify"
        >
          Water also contains dissolved oxygen and other gases from the air,
          dissolved minerals from the Earth and organic matter. Gases, minerals
          and organic matter supply essential elements and nutrients needed by
          aquatic organisms to live and grow under water
        </p>
      </motion.div>
      <div className="content">
        <p className=" text-justify">
          Water also contains dissolved oxygen and other gases from the air,
          dissolved minerals from the Earth and organic matter. Gases, minerals
          and organic matter supply essential elements and nutrients needed by
          aquatic organisms to live and grow under water
        </p>
      </div>
    </div>
  );
}

export default TextMask;
