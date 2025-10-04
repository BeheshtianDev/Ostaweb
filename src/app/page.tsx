"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Land from "@/components/sections/head/page";
import Aboutanimation from "@/app/aboutanimation/page";
import CustomerCard from "@/components/sections/customerCard/page";
import ColapStep from "@/components/sections/colabStep/page";
import Faq from "@/components/Faq";
import MagazinPage from "@/components/magazin/MagazinPage";
import EndPart from "@/components/EndPart";

gsap.registerPlugin(ScrollTrigger);

export default function OstaWebSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (!imagesRef.current) return;

    const imgs = imagesRef.current.querySelectorAll("img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(textRef1.current, { x: "-40vw", duration: 1.5 }, 0)
      .to(textRef2.current, { x: "40vw", duration: 1.5 }, 0)
      .to(imagesRef.current, { width: "65%", duration: 2 }, 0)
      .to(
        imgs, // ✅ always a NodeList, not undefined
        {
          width: "1000px",
          rotate: 0,
          duration: 1.5,
        },
        0
      );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 768) {
        setCount(5); // mobile → 5 images
      } else {
        setCount(6); // desktop → 6 images
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <>
      <Land />
      <div
        ref={containerRef}
        className="relative h-screen flex justify-center items-center overflow-hidden z-10"
      >
        {/* Text */}
        <div
          dir="ltr"
          className="de:text-[280px] mo:text-[40vw] w-full h-screen flex items-center  justify-center pointer-events-none z-20 rotate-90 de:rotate-0"
        >
          <div ref={textRef1} className="font-black text-white">
            OSTA
          </div>
          <div ref={textRef2} className="font-black text-white">
            WEB
          </div>
        </div>

        {/* Images */}
        <div
          ref={imagesRef}
          className="absolute w-0 h-full flex justify-center overflow-hidden items-center gap-20 "
        >
          {Array.from({ length: count }).map((_, i) => (
            <Image
              key={i}
              src="/images/ShowCase.png"
              alt=""
              width={400}
              height={300}
              className="w-0 rotate-180  h-auto"
            />
          ))}
        </div>
      </div>

      <div className="relative ">
        <Aboutanimation />
      </div>
      <div>
        <CustomerCard />
      </div>
      <ColapStep />
      <Faq />
      <MagazinPage />
      <EndPart />
    </>
  );
}
