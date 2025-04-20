"use client";

import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
   const sectionRef = useRef<HTMLDivElement | null>(null);
   const containerRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
     const section = sectionRef.current;
     const container = containerRef.current;

     if (!section || !container) return;

     const panels = gsap.utils.toArray<HTMLElement>(".panel");
     const totalPanels = panels.length;
     const totalScroll = window.innerWidth * (totalPanels - 1);

     gsap.to(container, {
       x: () => `${totalScroll}px`, // 👈 reversed direction for RTL
       ease: "none",
       scrollTrigger: {
         trigger: section,
         start: "top top",
         end: () => `+=${totalScroll}`,
         scrub: true,
         pin: true,
         anticipatePin: 1,
       },
     });
   }, []);
  return (
    <div  dir="rtl">
      {/* Vertical section */}
      <section className="h-screen bg-black flex items-center justify-center text-4xl">
        Scroll Vertically...
      </section>

      {/* RTL Horizontal Scroll Section */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full flex-row-reverse"
          style={{ width: `${100 * 3}vw` }}
        >
          <div className="panel w-screen h-full bg-black text-white flex items-center justify-center text-4xl">
            Slide 1 (Right)
          </div>
          <div className="panel w-screen h-full bg-black text-white flex items-center justify-center text-4xl">
            Slide 2 (Middle)
          </div>
          <div className="panel w-screen h-full bg-black text-white flex items-center justify-center text-4xl">
            Slide 3 (Left)
          </div>
        </div>
      </section>

      {/* Vertical section after */}
      <section className="h-screen bg-black flex items-center justify-center text-4xl">
        Back to Vertical Scroll
      </section>
    </div>
  );
};

export default page;
