"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Accordion, AccordionItem } from "@heroui/accordion";
import SeoCard from "@/components/SeoCard";
import BulletPoint from "@/components/BulletPoint";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const defaultContent =
    "مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم اعتماد و رضایت مشتریان خود را جلب کنیم";
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

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(container, {
      x: () => `${totalWidth - viewportWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        end: () => `+=${totalWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative h-[400vh] ">
      <div className="w-full  fixed top-[95px] pb-[40px] pt-[10px] pr-[16%]  z-10 fss flex-col">
        <Image src="/star.svg" alt={"star"} width={65} height={23} />

        <h2 className="!font-bold">طراحی UI / UX</h2>
        <h3> با اوستاوب، برندتان را به زیبایی به نمایش بگذارید</h3>
      </div>
      {/* Wrapper needs h-[300vh] to allow scrolling */}
      <div
        ref={containerRef}
        className="scroll-container     flex w-[400vw] h-screen flex-row-reverse"
      >
        {/* flex-row-reverse to start from the right side */}
        <div className="section pt-[200px] w-screen h-screen fc gap-[150px] items-center relative justify-center bg-[url('/images/Vector-ill.png')] bg-no-repeat bg-bottom-left">
          <Image
            src="./images/Rectangle.svg"
            alt="Hero"
            width={2}
            height={100}
            className="absolute top-[20vw] right-[32vw]"
          />
          <h2>سوالات متدوال</h2>
          <div className="w-1/2">
            <Accordion
              defaultExpandedKeys={["1"]}
              variant="light"
              className="[&>hr]:hidden flex flex-col !gap-[50px]"
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <span className="text-[#B5964D]">
                    فرایند تولید محتوا چگونه است؟
                  </span>
                }
                className="cursor-pointer"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                  <span className="text-[#B5964D]">
                    چگونه از کیفیت محتوای تولید شده اطمینان حاصل کنم؟{" "}
                  </span>
                }
                className="cursor-pointer"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                  <span className="text-[#B5964D]">
                    چه عواملی بر روی هزینه تولید محتوا تاثیرگذار است؟{" "}
                  </span>
                }
                className="cursor-pointer"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title={
                  <span className="text-[#B5964D]">
                    آیا می‌توانید محتوای متناسب با هر پلتفرمی تولید کنید؟{" "}
                  </span>
                }
                className="cursor-pointer"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="section w-screen h-screen flex items-center justify-center ">
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
                  ? "translate-x-[10vw] scale-150 "
                  : "hover:-skew-x-6"
              }
              ${
                activeImage && activeImage !== "right"
                  ? "opacity-0 pointer-events-none"
                  : ""
              }`}
              />
              {activeImage === "right" && showDetails && (
                <div className="h-[600px]  fb w-[1000px] absolute  left-[-800px]">
                  <h1>دباره پروژه</h1>
                  <Image
                    src="./images/Rectangle.svg"
                    alt="Hero"
                    width={2}
                    height={65}
                    className="absolute top-[20vw] right-[32vw]"
                  />

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
                    محتوا محور و نه تنها به تولید محتوا، بلکه به نتایج آن نیز
                    اهمیت می‌دهیم. با استفاده از ابزارهای تحلیل و اندازه‌گیری،
                    عملکرد محتواهای تولید شده را به طور دقیق بررسی کرده و بر
                    اساس آن، استراتژی‌های خود را بهبود می‌بخشیم. هدف ما این است
                    که با تولید محتوای با کیفیت و هدفمند، به شما کمک کنیم تا به
                    اهداف بازاریابی خود در شبکه‌های اجتماعی دست پیدا کنید
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
                  ? "translate-x-[28vw] !rotate-x-0 scale-125"
                  : "hover:rotate-x-[20deg]"
              }
              ${
                activeImage && activeImage !== "middle"
                  ? "opacity-0 pointer-events-none"
                  : ""
              }`}
              />
              {activeImage === "middle" && showDetails && (
                <div className="h-[600px]  fb w-[1000px] absolute  left-[-500px]">
                  <h1>دباره پروژه</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="567"
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
                    محتوا محور و نه تنها به تولید محتوا، بلکه به نتایج آن نیز
                    اهمیت می‌دهیم. با استفاده از ابزارهای تحلیل و اندازه‌گیری،
                    عملکرد محتواهای تولید شده را به طور دقیق بررسی کرده و بر
                    اساس آن، استراتژی‌های خود را بهبود می‌بخشیم. هدف ما این است
                    که با تولید محتوای با کیفیت و هدفمند، به شما کمک کنیم تا به
                    اهداف بازاریابی خود در شبکه‌های اجتماعی دست پیدا کنید
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
                  ? "-translate-x-[10vw] scale-150"
                  : "hover:skew-x-6"
              }
              ${
                activeImage && activeImage !== "left"
                  ? "opacity-0 pointer-events-none "
                  : ""
              }`}
              />
              {activeImage === "left" && showDetails && (
                <div className="h-[600px]  fb w-[1000px] absolute  right-[-800px]">
                  <h1>دباره پروژه</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="567"
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
                    محتوا محور و نه تنها به تولید محتوا، بلکه به نتایج آن نیز
                    اهمیت می‌دهیم. با استفاده از ابزارهای تحلیل و اندازه‌گیری،
                    عملکرد محتواهای تولید شده را به طور دقیق بررسی کرده و بر
                    اساس آن، استراتژی‌های خود را بهبود می‌بخشیم. هدف ما این است
                    که با تولید محتوای با کیفیت و هدفمند، به شما کمک کنیم تا به
                    اهداف بازاریابی خود در شبکه‌های اجتماعی دست پیدا کنید
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="section w-screen gap-x-[30px] gap-y-[70px] pt-[280px] overflow-y-scroll h-screen flex-wrap flex items-center justify-center">
          <SeoCard />
          <SeoCard />
          <SeoCard />
          <SeoCard />
          <SeoCard />
          <SeoCard />
        </div>
        <div className="section w-screen h-screen flex items-center relative justify-center bg-[url('/images/Vector2.png')] bg-no-repeat bg-top-right">
          <div className="snap-y snap-mandatory px-[20%]  scroll-smooth overflow-y-scroll h-screen w-full mx-auto">
            <Image
              src="./images/Rectangle.svg"
              alt="Hero"
              width={2}
              height={100}
              className="absolute top-[20vw] right-[32vw]"
            />
            <div className="snap-center h-screen  pt-[200px] flex justify-between items-center text-4xl">
              <div className="w-1/4 text-nowrap">مقدمه</div>
              <h3 className="w-3/4">
                سئو باعث می‌شود وب‌سایت شما در نتایج جستجو در رتبه‌های برتر قرار
                گیرد و در نتیجه، کاربران بیشتری به وب‌سایت شما مراجعه کنند.با
                استفاده از کلمات کلیدی مناسب، می‌توانید کاربران هدفمندی را به
                وب‌سایت خود جذب کنید. قرار گرفتن در رتبه‌های بالای نتایج جستجو،
                به اعتبار برند شما کمک کرده و اعتماد کاربران را جلب می‌کند.تیم
                متخصص اوستاوب، وب‌سایت شما را به طور کامل تحلیل کرده و نقاط قوت
                و ضعف آن را شناسایی می‌کند.بر اساس اهداف و نیازهای کسب‌وکار شما،
                یک استراتژی سئو جامع و سفارشی برای شما طراحی می‌شود. ما وب‌سایت
                شما را از نظر فنی بهینه می‌کنیم تا موتورهای جستجو به راحتی
                بتوانند آن را ایندکس کنند.محتوای ارزشمند و مرتبط با کسب‌وکارتان
                تولید می‌کنیم و آن را برای موتورهای جستجو بهینه می‌کنیم.ما به
                طور منظم به شما گزارش می‌دهیم که چه پیشرفتی در زمینه سئو
                داشته‌اید و چه اقداماتی برای بهبود بیشتر انجام شده است تیم ما از
                متخصصان سئو با تجربه تشکیل شده است که به روزترین روش‌ها و
                تکنیک‌های سئو را به کار می‌گیرند.
              </h3>
            </div>
            <div className="snap-center h-screen  pt-[200px] flex justify-between items-center text-4xl">
              <div className="w-1/4 text-nowrap">چرا سئو؟</div>
              <div className="fs gap-[50px]  w-3/4  flex-col">
                <h3 className="text-wrap fs  ">
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
                    <h3 className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی
                    </h3>
                  </div>
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D]">ایده پردازی و خلاقیت </h3>
                  </div>
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D]">
                      اجرای کمپین های تبلیغاتی
                    </h3>
                  </div>
                  <div className="fc gap-[30px]">
                    <BulletPoint />
                    <h3 className="!text-[#B5964D]">
                      سناریو نویسی و پیاده سازی استراتژِی
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center h-screen  pt-[250px] flex justify-between items-center text-4xl">
              <div className="w-1/4 text-nowrap">بیشتر بدانید </div>
              <h3 className="w-3/4 flex-col flex gap-[40px]">
                <div className="fss">
                  <div className=" h-full flex justify-center items-start pl-[30px] ">
                    <BulletPoint />
                  </div>
                  <h3>
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>
                <div className="fss">
                  <div className=" h-full flex justify-center items-start pl-[30px] ">
                    <BulletPoint />
                  </div>
                  <h3>
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>
                <div className="fss">
                  <div className=" h-full flex justify-center items-start pl-[30px] ">
                    <BulletPoint />
                  </div>
                  <h3>
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>
                <div className="fss">
                  <div className=" h-full flex justify-center items-start pl-[30px] ">
                    <BulletPoint />
                  </div>
                  <h3>
                    <span className="!text-[#B5964D]">
                      تحلیل رقبا در فضای مجازی :
                    </span>
                    با بررسی محتوای تولید شده، استراتژی‌های بازاریابی و تعامل
                    مخاطبان با رقبا، می‌توان نقاط قوت و ضعف آن‌ها را شناسایی کرد
                    و از این اطلاعات برای بهبود استراتژی خود استفاده کرد.
                  </h3>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
