"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, content: " 1" },
  { id: 2, content: " 2" },
  { id: 3, content: " 3" },
  { id: 4, content: " 4" },
  { id: 5, content: " 5" },
];

const getWrappedIndex = (index: number, length: number) => {
  return (index + length) % length;
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setCurrent((prev) => getWrappedIndex(prev + newDirection, slides.length));
    setDirection(newDirection);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -50 || velocity < -500) {
      paginate(1);
    } else if (offset > 50 || velocity > 500) {
      paginate(-1);
    }
  };

  return (
    <div className="w-full  mx-auto py-10 overflow-hidden">
      <div className="relative w-full h-64">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className="absolute top-0 left-0 w-full gap-5 h-full flex items-center justify-center"
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? 300 : -300,
                opacity: 0,
                scale: 0.9,
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
                scale: 1,
              },
              exit: (dir: number) => ({
                zIndex: 0,
                x: dir < 0 ? 300 : -300,
                opacity: 0,
                scale: 0.9,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {[
              slides[getWrappedIndex(current - 1, slides.length)],
              slides[current],
              slides[getWrappedIndex(current + 1, slides.length)],
            ].map((slide, index) => {
              const isCenter = index === 1;
              return (
                <motion.div
                  key={slide.id}
                  className={`flex-shrink-0 w-[635px] h-[315px] rounded-2xl backdrop-brightness-200 border border-white/20 flex items-center justify-center text-2xl font-bold transition-all duration-300
                    ${
                      isCenter
                        ? "scale-105 opacity-100 brightness-100 shadow-lg"
                        : "scale-95 opacity-60 brightness-75"
                    }
                  `}
                >
                  {slide.content}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
