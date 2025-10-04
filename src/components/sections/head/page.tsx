import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DotText from "./DotText";

const Land = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mouse movement parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div id="hero" className="  de:h-screen pt-40 relative mo:h-auto pb-10 ">
      <Image
        src="/images/HomePage.svg"
        alt={"star"}
        id="hero"
        width={1400}
        height={32}
        className="absolute  top-0 w-full "
      />
      <div className="mx-auto de:mr-auto w-[87%] ">
        <div>
          <h1 className="mb-0 de:text-[4vw] mo:text-[10vw] font-semibold ">
            اوستاوب
          </h1>
          <h2 className="text-[#b5964d] font-bold de:text-[5vw] mo:text-[12vw] ">
            بسپر دست اوستا
          </h2>
        </div>
        <div className="mt-24">
          <Image src="/star.svg" alt={"star"} width={65} height={32} />
          <span className="text-5xl font-semibold">اوستاوب</span>
          <div className=" mt-5 text-[23px] font-extralight">
            تیمی جوان و پویا با تجربه ای استادانه در طراحی و توسعه وبسایت برند
            شما
          </div>
        </div>
        <div
          className="h-[300px] opacity-90"
          ref={containerRef}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <DotText
            text="با اوستاوب شعبه بعدی کسب و کار خود را در فضای آنلاین افتتاح کنید"
            left={{ de: "3vw", mo: "3vw" }}
            bottom={{ de: "25vw", mo: "45vw" }}
          />

          <DotText
            text="اعتماد شما،آغاز یک همکاری بی پایان خواهد بود"
            left={{ de: "20vw", mo: "25vw" }}
            bottom={{ de: "15vw", mo: "25vw" }}
          />

          <DotText
            text="استادانه خواسته هایتان را برآورده خواهیم کرد"
            right={{ de: "20vw", mo: "10vw" }}
            bottom={{ de: "5vw", mo: "10vw" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Land;
