import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ZoomSection() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      src: "img/image3.jpg",
      scale: scale1,
    },
    {
      src: "img/image4.jpg",
      scale: scale2,
    },
    {
      src: "img/image5.jpg",
      scale: scale1,
    },
    {
      src: "img/image6.jpg",
      scale: scale3,
    },
    {
      src: "img/image7.jpg",
      scale: scale4,
    },
  ];

  return (
    <div id="zoom" className="w-full flex justify-center items-center">
      <div className="w-11/12 flex flex-col justify-start p-4">
        <div ref={element} className="container">
          <div className="sticky">
            {images.map(({ src, scale }, index) => {
              return (
                <motion.div key={index} style={{ scale }} className="element">
                  <div className="imageContainer">
                    <img src={src} alt={`image${index}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZoomSection;
