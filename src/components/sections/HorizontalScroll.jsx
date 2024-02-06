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

  return (
    <div
      ref={element}
      id="scroll"
      className="w-full relative h-[250vh] flex justify-center brightness-80 p-4"
    >
      <div className="w-11/12 h-screen top-32 flex sticky p-4 rounded-xl overflow-hidden">
        <motion.div
          style={{ x, y: 0 }}
          transition={{ duration: 2 }}
          className="flex gap-4"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[400px] w-[300px] md:w-[350px] overflow-hidden bg-white"
            >
              <motion.img
                whileHover={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={card.src}
                alt="Img"
                fill="true"
                className="h-full object-cover object-top p-2"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
