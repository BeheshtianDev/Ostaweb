"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ColapStep() {
  // One state per section, initialized to false
  const [expandedStates, setExpandedStates] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  const svgSources = [
    "/collab-step-svg-1.svg",
    "/collab-step-svg-2.svg",
    "/collab-step-svg-3.svg",
    "/collab-step-svg-4.svg",
  ];

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentSnapIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle function for each section
  const toggleExpanded = (index: number) => {
    setExpandedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  const steps = [
    {
      number: "01",
      title: "جلسه آشنایی و مشاوره",
      text: `هدف از جلسه آشنایی و مشاوره، تعیین دقیق مسیر موفقیت آنلاین شماست
      ما اینجا هستیم تا با شما یک نقشه راه دقیق و هدفمند برای حضور
      آنلاین برند شما ترسیم کنیم. این جلسه فرصتی است تا شما با ما از
      خواسته ها و اهدافتان بگویید و ما با بررسی دقیق بازار هدف، رقبای
      شما و آخرین روندهای طراحی وب‌سایت، بهترین استراتژی را برای شما
      پیشنهاد دهیم. در این مرحله، ما به شما کمک می‌کنیم تا با دیدی روشن
      و آگاهانه، گام‌های اولیه را برای ساخت یک وب‌سایت موفق بردارید`,
    },
    {
      number: "02",
      title: "ارائه پروپوزال و زمان بندی",
      text: `پس از جلسه مشاوره، ما یک پروپوزال جامع و شفاف به شما ارائه می‌دهیم
      که شامل تمام جزئیات پروژه، از جمله اهداف، استراتژی‌ها، طرح اولیه،
      ویژگی‌ها، و هزینه‌ها است. در این پروپوزال، ما همچنین یک زمان‌بندی
      دقیق و واقع‌بینانه برای پروژه ارائه می‌کنیم که شامل تمام مراحل
      ابتدایی و تا انتهای تحویل پروژه شما است.`,
    },
    {
      number: "03",
      title: "شروع پیاده سازی و اجرا",
      text: `پس از تایید پروپوزال و زمان‌بندی، تیم متخصص ما با دقت و تعهد، بر
      اساس خواسته‌های شما، وارد فاز اجرایی پروژه می‌شود. در این مرحله،
      با بهره‌گیری از آخرین فناوری‌ها و استانداردهای روز، پروژه
      را پیاده‌سازی می‌کنیم.`,
    },
    {
      number: "04",
      title: "تحویل پروژه و ادامه همکاری",
      text: `پس از اتمام مراحل پیاده‌سازی پروژه درخواست شده شما آماده تحویل
      است. ما در جلسه‌ای حضوری نهایی، پروژه را به شما تحویل می‌دهیم و
      تمام بخش‌ها و قابلیت‌های آن را به شما آموزش می‌دهیم.`,
    },
  ];

  return (
    <div className="w-screen de:h-screen mo:h-auto flex items-center mo:pt-96 de:pt-0 relative justify-center bg-no-repeat bg-top-right ">
      {/* Header */}
      <div className="mo:pl-[50px] gap-5 absolute de:top-[95px] mo:top-[100px] pb-[40px]  de:pt-[10px] right-0 de:px-16 mo:px-5 z-10 fss flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="23"
          viewBox="0 0 65 23"
          fill="none"
        >
          <path
            d="M6.47025 23C7.38408 16.6489 4.4866 11.4555 0 11.4013C4.4866 11.4555 8.86494 6.35102 9.77877 0C8.86494 6.35102 11.7624 11.5445 16.249 11.5987C11.7624 11.5445 7.38408 16.6489 6.47025 23Z"
            fill="#D9D9D9"
          />
          <path
            d="M22.7195 23C23.6333 16.6489 20.7359 11.4555 16.2493 11.4013C20.7359 11.4555 25.1142 6.35102 26.028 0C25.1142 6.35102 28.0117 11.5445 32.4983 11.5987C28.0117 11.5445 23.6333 16.6489 22.7195 23Z"
            fill="#D9D9D9"
          />
          <path
            d="M38.9688 23C39.8826 16.6489 36.9851 11.4555 32.4985 11.4013C36.987 11.4555 41.3653 6.35102 42.2791 0C41.3653 6.35102 44.2628 11.5445 48.7494 11.5987C44.2628 11.5445 39.8845 16.6489 38.9706 23H38.9688Z"
            fill="#D9D9D9"
          />
          <path
            d="M55.2193 23C56.1331 16.6489 53.2356 11.4555 48.749 11.4013C53.2375 11.4555 57.6158 6.35102 58.5296 0C57.6158 6.35102 60.5133 11.5445 64.9999 11.5987C60.5133 11.5445 56.1349 16.6489 55.2211 23H55.2193Z"
            fill="#D9D9D9"
          />
        </svg>
        <h2 className="font-semibold text-4xl de:text-5xl">
          مراحل همکاری با ما
        </h2>
        <h3 className="text-2xl de:text-3xl">
          استادانه خواسته هایتان را برآورده خواهیم کرد
        </h3>
      </div>

      {/* Steps */}
      <div className="de:snap-y mo:snap-none snap-mandatory scroll-smooth de:overflow-y-scroll space-y-40 mo:overflow-hidden de:h-2/5  mo:h-auto w-full mx-auto">
        <Image
          src={svgSources[currentSnapIndex]}
          alt="Step Indicator"
          width={350}
          height={100}
          className="absolute top-[130px] left-0 transition-opacity duration-500"
        />

        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-index={index}
            className="snap-center relative de:h-full mo:h-auto mo:gap-[40px] de:gap-0 de:pt-60  mo:pt-0 flex de:flex-row mo:flex-col justify-start items-center text-4xl"
          >
            <div className="w-1/5 text-nowrap mo:text-[27px] de:static mo:absolute right-0 text-[#F9D423] de:text-5xl mo:ml-[250px] de:ml-0 text-center !font-semibold">
              {step.number}
            </div>

            <div
              className={`de:w-3/5 mo:w-[90%] pl-[30px] de:text-2xl mo:text-xl de:h-auto relative transition-all duration-500 flex flex-col gap-[40px] pb-40  ${
                expandedStates[index] ? "mo:h-[80vh]" : "mo:h-[40vh]"
              }`}
            >
              <span className="de:text-3xl de:mr-0 mo:mr-[50px] mo:text-2xl font-bold">
                {step.title}
              </span>
              <Image src="/collab-line.svg" alt="" width={273} height={2} />
              <h3 className="text-justify !font-extralight">{step.text}</h3>
              {!expandedStates[index] && (
                <div className="h-full w-full bottom-0 bg-gradient-to-t de:hidden absolute from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent" />
              )}
            </div>

            <button
              onClick={() => toggleExpanded(index)}
              className="w-[100px] h-[40px] border de:hidden mo:block text-[15px] font-extralight opacity-50 rounded-xl"
            >
              {expandedStates[index] ? "کمتر" : "بیشتر"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
