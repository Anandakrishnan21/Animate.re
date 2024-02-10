"use client";
import Lenis from "@studio-freight/lenis";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function ScrollSection() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });

  const { height } = size;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];

  return (
    <>
      <div id="scroll" className="provider w-10/12 mt-10">
        <div ref={element} className="gallery">
          <ImgColumn images={[images[0], images[1], images[2]]} y={y1} />
          <ImgColumn images={[images[3], images[4], images[5]]} y={y2} />
          <ImgColumn images={[images[6], images[7], images[8]]} y={y3} />
          <ImgColumn images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      <div className="provider"></div>
    </>
  );
}

export default ScrollSection;

const ImgColumn = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="column"
      transition={{
        duration: 1,
      }}
    >
      {images.map((src, i) => {
        return (
          <div key={i} className="imgContainer">
            <Image src={`/img/${src}`} alt={`img${i}`} fill="true" />
          </div>
        );
      })}
    </motion.div>
  );
};
