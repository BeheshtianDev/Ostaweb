"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Slide from "./Slide";

const slides = [
  {
    id: 1,
    name: "آقای دکتر مجید روحی",
    role: "مدیر عامل محترم کوشافن پارس",
    text: "این پروژه برای مدیریت ارتباط با مشتریان طراحی شد. تیم توسعه با جدیدترین فناوری‌ها پلتفرمی مقیاس‌پذیر و کاربرپسند ایجاد کرد که سرعت پاسخگویی را افزایش داده و تجربه‌ای ساده برای کاربران فراهم می‌کند. نتیجه کار افزایش رضایت مشتریان و بهره‌وری سازمان بود.",
    avatar: "/images/Avatar.png",
  },
  {
    id: 2,
    name: "خانم مهندس سارا رضایی",
    role: "مدیر پروژه",
    text: "تمرکز این پروژه بر طراحی رابط کاربری مدرن و مینیمال بود. تیم با تحقیقات کاربران محصولی جذاب و بهینه ارائه داد که توجه بازار را جلب کرد و نمونه‌ای موفق از ترکیب طراحی و تکنولوژی شد.",
    avatar: "/images/Avatar.png",
  },
  {
    id: 3,
    name: "خانم مهندس سارا رضایی",
    role: "مدیر پروژه",
    text: "این پروژه برای بهبود فرآیندهای داخلی و همکاری تیم‌ها اجرا شد. توسعه‌دهندگان با متدولوژی چابک محصولی ایجاد کردند که سرعت، شفافیت و هماهنگی فعالیت‌ها را افزایش داد. در نهایت، بهره‌وری سازمان ارتقا یافت.",
    avatar: "/images/Avatar.png",
  },
];

const wrap = (i: number, len: number) => (i + len) % len;

export default function CurvedCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const paginate = (dir: number) => {
    setCurrent((p) => wrap(p + dir, slides.length));
    setDirection(dir);
  };

  // autoplay (pauses while hovered)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => paginate(1), 2500);
    return () => clearInterval(t);
  }, [paused]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const { x } = info.offset;
    const v = info.velocity.x;
    if (x < -50 || v < -500) paginate(1);
    else if (x > 50 || v > 500) paginate(-1);
  };

  // left / center / right along a curved track, with rotateY for a smooth swivel
  const arcSlots = [
    { x: -260, y: 35, rotateZ: -8, rotateY: 18, s: 0.95, o: 0.65, z: 0 },
    { x: 0, y: -50, rotateZ: 0, rotateY: 0, s: 1.06, o: 1, z: 10 },
    { x: 260, y: 35, rotateZ: 8, rotateY: -18, s: 0.95, o: 0.65, z: 0 },
  ];

  return (
    <div dir="ltr" className="w-full py-14 overflow-hidden">
      <div></div>
      <div
        className="relative w-full h-[320px] md:h-[360px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* decorative background (optional) */}
        <svg
          className="absolute inset-0 -z-20 opacity-40 text-white/10"
          viewBox="0 0 1200 360"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 9 }).map((_, i) => {
            const dy = 14 * i;
            return (
              <path
                key={i}
                d={`M-80,${300 + dy} Q 600,${160 - i * 8} 1280,${300 + dy}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
              />
            );
          })}
        </svg>

        {/* 3D stage */}
        <div className="relative h-full w-full [perspective:1200px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              className="absolute inset-0 flex items-center justify-center"
              custom={direction}
              variants={{
                // add rotateY during enter/exit for a smooth swivel
                enter: (dir: number) => ({
                  x: dir > 0 ? 260 : -260,
                  opacity: 0,
                  rotateY: dir > 0 ? -20 : 20,
                }),
                center: { x: 0, opacity: 1, rotateY: 0 },
                exit: (dir: number) => ({
                  x: dir < 0 ? 260 : -260,
                  opacity: 0,
                  rotateY: dir < 0 ? -20 : 20,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 24 },
                opacity: { duration: 0.2 },
                rotateY: { type: "tween", duration: 0.35, ease: "easeOut" },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {[
                slides[wrap(current - 1, slides.length)],
                slides[current],
                slides[wrap(current + 1, slides.length)],
              ].map((slide, i) => {
                const slot = arcSlots[i];
                return (
                  <motion.div
                    key={slide.id}
                    style={{ zIndex: slot.z }}
                    className="mx-2 md:mx-4"
                    animate={{
                      x: slot.x,
                      y: slot.y,
                      rotateZ: slot.rotateZ,
                      rotateY: slot.rotateY,
                      scale: slot.s,
                      opacity: slot.o,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  >
                    <motion.div
                      className={[
                        "de:w-[623px] de:h-[313px] mo:w-[80vw] mo:h-[250px]",
                        "rounded-2xl bg-white/10 border border-white/30   ",
                        "backdrop-blur-md shadow-2xl relative overflow-hidden",
                      ].join(" ")}
                    >
                      <div className="h-full w-full p-5 font-bold">
                        <Slide
                          name={slide.name}
                          role={slide.role}
                          text={slide.text}
                          avatar={slide.avatar}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
