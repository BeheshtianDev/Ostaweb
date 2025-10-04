"use client";

import React, { useState } from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BulletPoint from "@/components/BulletPoint";
import CustomAccordion from "@/components/CustomAccordion";
import EndPart from "@/components/EndPart";

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<
    null | "left" | "middle" | "right"
  >(null);
  const activeImageRef = useRef<HTMLImageElement | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (activeImage) {
      timeoutRef.current = setTimeout(() => {
        setShowDetails(true);
      }, 500); // Delay for showing detail panel
    } else {
      setShowDetails(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeImage]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx: gsap.Context | null = null;

    const setupScroll = () => {
      const isDesktop = window.innerWidth >= 1000;

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(container);

      if (isDesktop) {
        const totalWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;

        ctx = gsap.context(() => {
          gsap.to(container, {
            x: () => `${totalWidth - viewportWidth}px`, // RTL scroll
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              end: () => `+=${totalWidth}`,
            },
          });
        }, container);
      } else {
        gsap.set(container, { clearProps: "all" }); // Reset on mobile
      }
    };

    setupScroll();

    window.addEventListener("resize", setupScroll);

    return () => {
      window.removeEventListener("resize", setupScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (ctx) ctx.revert();
    };
  }, []);
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="relative de:w-[400vh] mo:h-auto ">
      <div className="mo:pl-[50px] mo:absolute de:fixed de:top-[95px] mo:top-[80px] pb-[40px] mo:pt-[50px] de:pt-[10px]  de:pr-[16%] mo:pr-[50px]   z-10 fss flex-col">
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
        <h2 className="!font-bold">تولید محتوا</h2>
        <h3>با اوستاوب، محتوای مورد نیاز جامعه هدف خود را بسازید</h3>
      </div>
      {/* Wrapper needs h-[300vh] to allow scrolling */}
      <div
        ref={containerRef}
        className="scroll-container     flex de:w-[400vw] mo:w-full de:h-screen mo:h-auto de:flex-row-reverse mo:flex-col-reverse"
      >
       <EndPart/>
        {/* flex-row-reverse to start from the right side */}
        <div className="section  w-screen de:pt-[200px] mo:pt-[100px] de:h-screen mo:h-auto de:flex-row mo:flex-col fc de:gap-[150px] mo:gap-[50px] items-center relative justify-center bg-no-repeat bg-bottom-left">
          <Image
            src="./devider.svg"
            alt="Hero"
            width={2}
            height={100}
            className="absolute de:top-[38vh] de:block mo:hidden mo:top-[20px] de:right-[32vw]  mo:rotate-90 de:rotate-0"
          />
          <h2 className="!font-semibold">سوالات متدوال</h2>
          <p className="w-4/5 h-[1px] bg-white/20 de:hidden mo:block"></p>
          <CustomAccordion />
        </div>
        <div className="section w-screen h-screen de:flex mo:hidden items-center justify-center ">
          <div className="  h-full  perspective-[1000px]  fc  pt-[200px]  ">
            <div className="relative fc">
              <Image
                src="/images/phone-right.png"
                alt="Right phone"
                width={450}
                height={450}
                onClick={() =>
                  setActiveImage((prev) => (prev === "right" ? null : "right"))
                }
                ref={activeImage === "right" ? activeImageRef : null}
                className={`transition-all duration-500 cursor-pointer z-10
              ${
                activeImage === "right"
                  ? "translate-x-[10vw] scale-110 "
                  : "hover:-skew-x-6"
              }
              ${
                activeImage && activeImage !== "right"
                  ? "opacity-0 pointer-events-none"
                  : ""
              }`}
              />
              {activeImage === "right" && showDetails && (
                <div className="h-[400px]  fb w-[1000px] absolute  left-[-800px]">
                  <h1>درباره پروژه</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="400"
                    viewBox="0 0 2 567"
                    fill="none"
                  >
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="#D9D9D9"
                    />
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="url(#paint0_linear_1029_15194)"
                    />
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="url(#paint1_linear_1029_15194)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1029_15194"
                        x1="0"
                        y1="568"
                        x2="567"
                        y2="568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5433FF" />
                        <stop offset="0.5" stop-color="#20BDFF" />
                        <stop offset="1" stop-color="#A5FECB" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1029_15194"
                        x1="0"
                        y1="568"
                        x2="567"
                        y2="568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E65C00" />
                        <stop offset="1" stop-color="#F9D423" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="w-2/3">
                    در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین
                    کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای
                    موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری
                    است. تیم حرفه‌ای تولید محتوای اوستاوب با درک عمیق از
                    الگوریتم‌های شبکه‌های اجتماعی و شناخت دقیق مخاطبان شما،
                    محتواهایی را تولید می‌کند که نه تنها توجه مخاطبان را جلب
                    کند، بلکه به افزایش تعامل و در نهایت به رشد کسب‌وکار شما
                    منجر شود. ما در اوستاوب طیف گسترده‌ای از خدمات تولید محتوا
                    برای شبکه‌های اجتماعی را ارائه می‌دهیم. از تولید انواع
                  </h3>
                </div>
              )}
            </div>

            {/* Middle phone */}
            <div className="relative fc  perspective-[1000px] ">
              <Image
                src="/images/phone-middle.png"
                alt="Middle phone"
                width={250}
                height={500}
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === "middle" ? null : "middle"
                  )
                }
                ref={activeImage === "middle" ? activeImageRef : null}
                className={`transition-all duration-600 cursor-pointer z-20
              ${
                activeImage === "middle"
                  ? "translate-x-[30vw] !rotate-x-0 scale-105"
                  : "hover:rotate-x-[20deg]"
              }
              ${
                activeImage && activeImage !== "middle"
                  ? "opacity-0 pointer-events-none"
                  : ""
              }`}
              />
              {activeImage === "middle" && showDetails && (
                <div className="h-[400px]  fb w-[1000px] absolute  left-[-600px]">
                  <h1>درباره پروژه</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="400"
                    viewBox="0 0 2 567"
                    fill="none"
                  >
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="#D9D9D9"
                    />
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="url(#paint0_linear_1029_15194)"
                    />
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="url(#paint1_linear_1029_15194)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1029_15194"
                        x1="0"
                        y1="568"
                        x2="567"
                        y2="568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5433FF" />
                        <stop offset="0.5" stop-color="#20BDFF" />
                        <stop offset="1" stop-color="#A5FECB" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1029_15194"
                        x1="0"
                        y1="568"
                        x2="567"
                        y2="568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E65C00" />
                        <stop offset="1" stop-color="#F9D423" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="w-2/3 ">
                    در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین
                    کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای
                    موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری
                    است. تیم حرفه‌ای تولید محتوای اوستاوب با درک عمیق از
                    الگوریتم‌های شبکه‌های اجتماعی و شناخت دقیق مخاطبان شما،
                    محتواهایی را تولید می‌کند که نه تنها توجه مخاطبان را جلب
                    کند، بلکه به افزایش تعامل و در نهایت به رشد کسب‌وکار شما
                    منجر شود. ما در اوستاوب طیف گسترده‌ای از خدمات تولید محتوا
                    برای شبکه‌های اجتماعی را ارائه می‌دهیم. از تولید انواع
                    پست‌های متنی، تصویری و ویدیویی گرفته تا طراحی کمپین‌های
                  </h3>
                </div>
              )}
            </div>

            {/* Left phone */}
            <div className="relative fc">
              <Image
                src="/images/phone-left.png"
                alt="Left phone"
                width={450}
                height={450}
                onClick={() =>
                  setActiveImage((prev) => (prev === "left" ? null : "left"))
                }
                ref={activeImage === "left" ? activeImageRef : null}
                className={`transition-all duration-500 cursor-pointer z-10
              ${
                activeImage === "left"
                  ? "-translate-x-[10vw] scale-110"
                  : "hover:skew-x-6"
              }
              ${
                activeImage && activeImage !== "left"
                  ? "opacity-0 pointer-events-none "
                  : ""
              }`}
              />
              {activeImage === "left" && showDetails && (
                <div className="h-[400px]  fb w-[1000px] absolute  right-[-800px]">
                  <h1>درباره پروژه</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="400"
                    viewBox="0 0 2 567"
                    fill="none"
                  >
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="#D9D9D9"
                    />
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="url(#paint0_linear_1029_15194)"
                    />
                    <rect
                      y="567"
                      width="567"
                      height="2"
                      transform="rotate(-90 0 567)"
                      fill="url(#paint1_linear_1029_15194)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1029_15194"
                        x1="0"
                        y1="568"
                        x2="567"
                        y2="568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5433FF" />
                        <stop offset="0.5" stop-color="#20BDFF" />
                        <stop offset="1" stop-color="#A5FECB" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1029_15194"
                        x1="0"
                        y1="568"
                        x2="567"
                        y2="568"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E65C00" />
                        <stop offset="1" stop-color="#F9D423" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="w-2/3">
                    در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین
                    کانال‌های ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای
                    موفقیت در این فضا، تولید محتوای جذاب و هدفمند امری ضروری
                    است. تیم حرفه‌ای تولید محتوای اوستاوب با درک عمیق از
                    الگوریتم‌های شبکه‌های اجتماعی و شناخت دقیق مخاطبان شما،
                    محتواهایی را تولید می‌کند که نه تنها توجه مخاطبان را جلب
                    کند، بلکه به افزایش تعامل و در نهایت به رشد کسب‌وکار شما
                    منجر شود. ما در اوستاوب طیف گسترده‌ای از خدمات تولید محتوا
                    برای شبکه‌های اجتماعی را ارائه می‌دهیم. از تولید انواع
                    پست‌های متنی، تصویری و ویدیویی گرفته تا طراحی کمپین‌های
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="section w-screen de:h-screen mo:h-auto flex items-center relative  justify-center  de:bg-[url('/images/Vector2.png')] mo:bg-[url('/images/mobile-back.png')] bg-no-repeat bg-top-right">
          <div className="de:snap-y mo:snap-none snap-mandatory de:px-[20%]   mo:pr-0 mo:pt-[320px] de:pt-0 scroll-smooth de:overflow-y-scroll mo:overflow-hidden de:h-screen mo:h-auto w-full mx-auto">
            <div className="snap-center de:h-screen mo:h-auto mo:gap-[40px] de:gap-0 de:pt-[200px] mo:pt-0 flex de:flex-row mo:flex-col justify-between items-center text-4xl">
              <Image
                src="./devider.svg"
                alt="Hero"
                width={2}
                height={100}
                className="absolute de:top-[38vh] mo:top-[400px] de:right-[32vw] mo:right-[7vw]"
              />
              <div className="w-1/4 text-nowrap mo:text-[27px] de:text-[36px] mo:ml-[250px] de:ml-0 !font-semibold">
                مقدمه
              </div>

              <div
                className={`w-full pr-[60px] pl-[30px] relative de:h-auto transition-all duration-500 overflow-hidden ${
                  expanded ? "mo:h-[80vh] " : "mo:h-[40vh] "
                }`}
              >
                <h3 className="text-justify !font-extralight">
                  در دنیای امروز، شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های
                  ارتباطی کسب‌وکارها با مخاطبان تبدیل شده‌اند... در دنیای امروز،
                  شبکه‌های اجتماعی به یکی از مهم‌ترین کانال‌های ارتباطی
                  کسب‌وکارها با مخاطبان تبدیل شده‌اند. برای موفقیت در این فضا،
                  تولید محتوای جذاب و هدفمند امری ضروری است. تیم حرفه‌ای تولید
                  محتوای اوستاوب با درک عمیق از الگوریتم‌های شبکه‌های اجتماعی و
                  شناخت دقیق مخاطبان شما، محتواهایی را تولید می‌کند که نه تنها
                  توجه مخاطبان را جلب کند، بلکه به افزایش تعامل و در نهایت به
                  رشد کسب‌وکار شما منجر شود. <br /> ما در اوستاوب طیف گسترده‌ای
                  از خدمات تولید محتوا برای شبکه‌های اجتماعی را ارائه می‌دهیم.
                  از تولید انواع پست‌های متنی، تصویری و ویدیویی گرفته تا طراحی
                  کمپین‌های محتوا محور و نه تنها به تولید محتوا، بلکه به نتایج
                  آن نیز اهمیت می‌دهیم. با استفاده از ابزارهای تحلیل و
                  اندازه‌گیری، عملکرد محتواهای تولید شده را به طور دقیق بررسی
                  کرده و بر اساس آن، استراتژی‌های خود را بهبود می‌بخشیم. هدف ما
                  این است که با تولید محتوای با کیفیت و هدفمند، به شما کمک کنیم
                  تا به اهداف بازاریابی خود در شبکه‌های اجتماعی دست پیدا کنید
                </h3>
                {!expanded && (
                  <div className="h-1/2 w-full bottom-0 bg-gradient-to-t de:hidden transition-all opacity-100 absolute duration-700 from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent" />
                )}
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="w-[100px] h-[40px] border de:hidden mo:block text-[15px] font-extralight opacity-50 rounded-xl"
              >
                {expanded ? "کمتر" : "بیشتر"}
              </button>
            </div>

            <div className="snap-center h-screen de:h-screen mo:gap-[40px] de:gap-0 mo:h-auto relative de:pt-[200px] mo:pt-[100px] de:flex-row mo:flex-col flex justify-between items-center text-4xl">
              <Image
                src="./devider.svg"
                alt="Hero"
                width={2}
                height={100}
                className=" absolute top-[180px] de:hidden mo:block de:right-[32vw] mo:right-[7vw]"
              />
              <div className="w-1/4 text-nowrap mo:text-[27px] de:text-[36px] mo:ml-[250px] de:ml-0 !font-semibold">
                چرا سئو؟
              </div>
              <div className="fs de:gap-[50px] mo:gap-[20px]  w-full pr-[60px] pl-[30px] text-justify !font-extralight  flex-col ">
                <h3 className="text-wrap fs  !font-extralight">
                  تولید محتوای جذاب و هدفمند، کلید موفقیت در دنیای پررقابت امروز
                  است. 90 درصد از تصمیم‌گیری‌های خرید مشتریان تحت تأثیر محتوای
                  دیجیتال است. با تولید محتوای باکیفیت، نه تنها توجه مخاطبان را
                  جلب می‌کنید، بلکه اعتماد آن‌ها را جلب کرده و به مشتریان وفادار
                  تبدیلشان می‌کنید. این یعنی افزایش فروش، تقویت برند و برتری
                  نسبت به رقب
                </h3>
                <div className="flex-col w-full  fss gap-[20px]">
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D] !font-extralight">
                      تحلیل رقبا در فضای مجازی
                    </h3>
                  </div>
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D] !font-extralight">
                      ایده پردازی و خلاقیت{" "}
                    </h3>
                  </div>
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D] !font-extralight">
                      اجرای کمپین های تبلیغاتی
                    </h3>
                  </div>
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D] !font-extralight">
                      سناریو نویسی و پیاده سازی استراتژِی
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center relative h-screen de:h-screen mo:h-auto de:pt-[250px] mo:pt-[100px] mo:gap-[40px] de:gap-0 flex de:flex-row mo:flex-col justify-between items-center text-4xl">
              <Image
                src="./devider.svg"
                alt="Hero"
                width={2}
                height={100}
                className="absolute top-[180px] de:hidden mo:block de:right-[32vw] mo:right-[7vw]"
              />
              <div className="w-1/4 text-nowrap mo:text-[27px] de:text-[36px] mo:ml-[250px] de:ml-0 !font-semibold">
                بیشتر بدانید
              </div>

              <div
                className={`w-full pr-[60px] pl-[30px] text-justify de:h-auto relative overflow-hidden flex-col flex gap-[40px] transition-all duration-500 ${
                  showMore ? "mo:h-[80vh]" : "mo:h-[40vh]"
                }`}
              >
                <div className="fss">
                  <div className="h-full flex justify-center items-start pl-[30px]">
                    <BulletPoint />
                  </div>
                  <h3 className="!font-extralight">
                    <span className="!text-[#B5964D]">
                      لینک سازی داخلی و خارجی:
                    </span>
                    نوع سیستم مدیریت محتوا، زبان‌های برنامه‌نویسی و ...
                  </h3>
                </div>

                <div className="fss">
                  <div className="h-full flex justify-center items-start pl-[30px]">
                    <BulletPoint />
                  </div>
                  <h3 className="!font-extralight">
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>

                <div className="fss">
                  <div className="h-full flex justify-center items-start pl-[30px]">
                    <BulletPoint />
                  </div>
                  <h3 className="!font-extralight">
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>

                <div className="fss">
                  <div className="h-full flex justify-center items-start pl-[30px]">
                    <BulletPoint />
                  </div>
                  <h3 className="!font-extralight">
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>

                {!showMore && (
                  <div className="h-1/2 w-full bottom-0 bg-gradient-to-t de:hidden absolute opacity-100 duration-500 from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent" />
                )}
              </div>

              <button
                onClick={() => setShowMore(!showMore)}
                className="w-[100px] h-[40px] border de:hidden mo:block text-[15px] font-extralight opacity-50 rounded-xl"
              >
                {showMore ? "کمتر" : "بیشتر"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
