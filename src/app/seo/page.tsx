"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BulletPoint from "../../components/BulletPoint";
import SeoCard from "../../components/SeoCard";
import { Accordion, AccordionItem } from "@heroui/accordion";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
   const defaultContent =
     "مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای خدمات طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور ویژه به طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما اشاره کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات بهتر و نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم اعتماد و رضایت مشتریان خود را جلب کنیم";
  const containerRef = useRef<HTMLDivElement>(null);
//   const [activeImage, setActiveImage] = useState<
//     null | "left" | "middle" | "right"
//   >(null);
//   const activeImageRef = useRef<HTMLImageElement | null>(null);
// const [showDetails, setShowDetails] = useState(false);
// const timeoutRef = useRef<NodeJS.Timeout | null>(null);
// useEffect(() => {
//   if (activeImage) {
//     timeoutRef.current = setTimeout(() => {
//       setShowDetails(true);
//     }, 500); // Delay for showing detail panel
//   } else {
//     setShowDetails(false);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }
//
//   return () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };
// }, [activeImage]);


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
    <div className="relative h-[300vh] ">
      <div className="w-full  fixed top-[95px] pb-[40px] pt-[10px] pr-[16%] backdrop-blur-xs  z-10 fss flex-col">
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
        <h2 className="!font-bold">سئو</h2>
        <h3>با اوستاوب , به اوج دیده شدن در گوگل برسید</h3>
      </div>
      {/* Wrapper needs h-[300vh] to allow scrolling */}
      <div
        ref={containerRef}
        className="scroll-container     flex w-[300vw] h-screen flex-row-reverse"
      >
        {/* flex-row-reverse to start from the right side */}
        <div className="section pt-[200px] w-screen h-screen fc gap-[150px] items-center relative justify-center bg-[url('/images/Vector-ill.png')] bg-no-repeat bg-bottom-left">
          <Image
            src="./app/ui-ux/images/Rectangle.svg"
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
              src="./app/ui-ux/images/Rectangle.svg"
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
