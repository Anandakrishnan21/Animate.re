import { cards } from "@/utils/data";
import { motion, useTransform, useScroll, easeInOut } from "framer-motion";
import { useRef } from "react";

function HorizontalScroll() {
  const element = useRef();
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"], {
    ease: easeInOut,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div
      ref={element}
      className="w-full relative h-[200vh] flex justify-center brightness-80 p-4"
    >
      <div className="w-11/12 h-screen top-32 flex items-center sticky p-4 rounded-xl overflow-hidden">
        <motion.div
          style={{ x, y: 0 }}
          transition={{ duration: 2 }}
          className="flex gap-4"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[350px] w-[300px] md:w-[300px] overflow-hidden rounded-[1vw]"
            >
              <motion.img
                style={{ scale: scale }}
                transition={{
                  duration: 0.5,
                }}
                src={card.src}
                alt="Img"
                fill="true"
                className="h-full object-cover object-top"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
