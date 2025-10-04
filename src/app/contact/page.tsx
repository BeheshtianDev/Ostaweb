"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BulletPoint from "@/components/BulletPoint";
import { useIsMobile } from "@/hooks/useIsMobile";
import CustomAccordion from "@/components/CustomAccordion";
import Comments from "@/components/Comments";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const isMobile = useIsMobile();
  const cardCount = isMobile ? 2 : 9;
   const containerRef = useRef<HTMLDivElement>(null);
  // const [activeImage, setActiveImage] = useState<
  //   null | "left" | "middle" | "right"
  // >(null);
  // const activeImageRef = useRef<HTMLImageElement | null>(null);
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

  return (
    <div className="relative de:w-[700vh] mo:h-auto ">
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
        className="scroll-container     flex de:w-[700vw] mo:w-full de:h-screen mo:h-auto  de:flex-row-reverse mo:flex-col-reverse"
      >
        {/* flex-row-reverse to start from the right side */}
        <div className="section  w-screen de:pt-[200px] mo:pt-[100px] de:h-screen mo:h-auto de:flex-row mo:flex-col fc de:gap-[150px] mo:gap-[50px] items-center relative justify-center bg-[url('/images/Vector-ill.png')] bg-no-repeat bg-bottom-left">
          <Image
            src="./devider.svg"
            alt="Hero"
            width={2}
            height={100}
            className="absolute de:top-[20vw] de:block mo:hidden mo:top-[20px] de:right-[32vw]  mo:rotate-90 de:rotate-0"
          />
          <h2 className="!font-semibold">سوالات متدوال</h2>
          <p className="w-4/5 h-[1px] bg-white/20 de:hidden mo:block"></p>
          <CustomAccordion />
        </div>
        <div className="section de:pt-[300px] mo:pt-[100px] pb-[100px] w-screen de:h-screen mo:h-auto overflow-y-scroll flex-wrap gap-x-12 gap-y-7   fc gap-[150px] items-center relative justify-center  bg-no-repeat bg-bottom-left">
          {Array.from({ length: 5 }).map((_, index) => (
            <Comments key={index} />
          ))}
        </div>
        <div className="section de:pt-[300px] mo:pt-[100px] pb-[100px] w-screen de:h-screen mo:h-auto overflow-y-scroll flex-wrap gap-x-12 gap-y-7  px-[20vw] fc gap-[150px] items-center relative justify-center  bg-no-repeat bg-bottom-left">
          {Array.from({ length: cardCount }).map((_, index) => (
            <Comments key={index} />
          ))}
        </div>
        <div className="section w-screen h-screen flex items-center relative justify-center  bg-no-repeat bg-top-right">
          <div className="de:snap-y mo:snap-none snap-mandatory de:px-[20%]   mo:pr-0 mo:pt-[120px] de:pt-0 scroll-smooth de:overflow-y-scroll mo:overflow-hidden de:h-screen mo:h-auto w-full mx-auto">
            <Image
              src="./devider.svg"
              alt="Hero"
              width={2}
              height={100}
              className="absolute de:top-[400px] mo:top-[300px] de:right-[32vw] mo:right-[7vw]"
            />
            <div className="snap-center h-screen  mo:pt-[100px] de:pt-[240px] flex de:flex-row mo:flex-col gap-[40px] de:justify-between mo:justify-start items-center text-4xl">
              <div className="de:w-1/4 mo:w-3/4   text-nowrap mo:text-[27px] de:text-[36px] !font-semibold">
                دنیای وبلاگ
              </div>
              <div className="w-3/4 flex flex-col gap-10 de:text-2xl mo:text-lg">
                <span className="w-full font-extralight">
                  به دنیای وبلاگ اوستاوب خوش آمدید! در اینجا، جدیدترین اخبار و
                  مقالات در حوزه طراحی وب، توسعه وب و بازاریابی دیجیتال را دنبال
                  کنید. از آموزش‌های گام به گام تا تحلیل‌های تخصصی، ما تلاش
                  می‌کنیم تا شما را در مسیر موفقیت در دنیای آنلاین همراهی کنیم
                </span>
                <div className="w-full fb de:flex-row mo:flex-col-reverse mo:gap-[20px] de:gap-0 ">
                  <div className="de:w-[260px] mo:w-full de:h-[96px] mo:h-[70px] rounded-lg border border-white/10 bg-white/10  fa ">
                    <div className="w-[149px] h-[56px] bg-black/20 rounded-xl fc   space-x-[-10px]">
                      <div className="h-[40px] w-[40px] rounded-full border border-white/10 bg-[#262626]"></div>
                      <div className="h-[40px] w-[40px] rounded-full border border-white/10 bg-[#262626]"></div>
                      <div className="h-[40px] w-[40px] rounded-full border border-white/10 bg-[#262626]"></div>
                      <div className="h-[40px] w-[40px] rounded-full border border-white/10 bg-[#262626]"></div>
                    </div>
                    <span className="text-[20px] font-light"> +1000 کاربر</span>
                  </div>
                  <div className="fa  mo:w-full de:w-[500px] text-nowrap">
                    <div className="flex flex-col">
                      <span className="!font-normal de:text-[36px] mo:text-[24px]">
                        +300
                      </span>
                      <span className="!font-extralight de:text-xl mo:text-sm">
                        وبلاگ نوشته شده
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="!font-normal de:text-[36px] mo:text-[24px]">
                        +12k
                      </span>
                      <span className="!font-extralight de:text-xl mo:text-sm">
                        خواننده فعال
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="!font-normal de:text-[36px] mo:text-[24px]">
                        +1000
                      </span>
                      <span className="!font-extralight de:text-xl mo:text-sm">
                        نظر کاربران
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full fb">
                  <div className="de:w-1/2 mo:w-full fs  gap-2">
                    <div className="flex justify-start items-start  h-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M23.1429 27.5334H16.8984V40.0001H23.1429V27.5334Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M23.1429 0H16.8984V12.4667H23.1429V0Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M27.5273 16.8757V23.1201H39.994V16.8757H27.5273Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M0 16.8813L0 23.1257H12.4667V16.8813H0Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M27.5405 23.1014L23.125 27.5168L31.9402 36.332L36.3556 31.9166L27.5405 23.1014Z"
                          fill="#404040"
                        />
                        <path
                          d="M8.07169 3.63656L3.65625 8.052L12.4714 16.8672L16.8869 12.4517L8.07169 3.63656Z"
                          fill="#404040"
                        />
                        <path
                          d="M23.108 12.4708L27.5234 16.8862L36.3386 8.07105L31.9232 3.65559L23.108 12.4708Z"
                          fill="#404040"
                        />
                        <path
                          d="M3.6451 31.9359L8.06055 36.3513L16.8757 27.5361L12.4603 23.1207L3.6451 31.9359Z"
                          fill="#404040"
                        />
                      </svg>
                    </div>
                    <div className="fss flex-col mo:w-full de:w-auto gap-2.5 pt-2.5">
                      <span className="!font-bold de:text-[24px] mo:text-[16px] ">
                        آخرین اخبار
                      </span>
                      <span className="de:text-[24px] mo:text-[16px] font-light">
                        اوستاوب دانش بنیان می شود
                      </span>
                      <h5 className="opacity-40">به تازگی منتشر شده</h5>
                      <div className="flex justify-end w-full  items-center gap-2">
                        <h5>مطالعه بیشتر</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M7.5675 0.747511C7.5675 0.937511 7.4975 1.12751 7.3475 1.27751L1.8075 6.81751L7.3475 12.3575C7.6375 12.6475 7.6375 13.1275 7.3475 13.4175C7.0575 13.7075 6.5775 13.7075 6.2875 13.4175L0.2175 7.34751C-0.0725 7.05751 -0.0725 6.57751 0.2175 6.28751L6.2875 0.217511C6.5775 -0.0724891 7.0575 -0.0724891 7.3475 0.217511C7.4975 0.357511 7.5675 0.557512 7.5675 0.747511Z"
                            fill="#6F5D32"
                          />
                          <path
                            d="M18.498 6.81763C18.498 7.22763 18.158 7.56763 17.748 7.56763H0.917969C0.507969 7.56763 0.167969 7.22763 0.167969 6.81763C0.167969 6.40763 0.507969 6.06763 0.917969 6.06763H17.748C18.158 6.06763 18.498 6.40763 18.498 6.81763Z"
                            fill="#6F5D32"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 de:flex mo:hidden justify-end items-center  gap-2">
                    <div className="fss h-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M23.1429 27.5334H16.8984V40.0001H23.1429V27.5334Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M23.1429 0H16.8984V12.4667H23.1429V0Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M27.5273 16.8757V23.1201H39.994V16.8757H27.5273Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M0 16.8813L0 23.1257H12.4667V16.8813H0Z"
                          fill="#FFD11A"
                        />
                        <path
                          d="M27.5405 23.1014L23.125 27.5168L31.9402 36.332L36.3556 31.9166L27.5405 23.1014Z"
                          fill="#404040"
                        />
                        <path
                          d="M8.07169 3.63656L3.65625 8.052L12.4714 16.8672L16.8869 12.4517L8.07169 3.63656Z"
                          fill="#404040"
                        />
                        <path
                          d="M23.108 12.4708L27.5234 16.8862L36.3386 8.07105L31.9232 3.65559L23.108 12.4708Z"
                          fill="#404040"
                        />
                        <path
                          d="M3.6451 31.9359L8.06055 36.3513L16.8757 27.5361L12.4603 23.1207L3.6451 31.9359Z"
                          fill="#404040"
                        />
                      </svg>
                    </div>
                    <div className="fss flex-col gap-2.5 pt-2.5">
                      <h3 className="!font-bold">آخرین اخبار</h3>
                      <h3>اوستاوب دانش بنیان می شود</h3>
                      <h5 className="opacity-40">به تازگی منتشر شده</h5>
                      <div className="flex justify-end w-full items-center gap-2">
                        <h5>مطالعه بیشتر</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M7.5675 0.747511C7.5675 0.937511 7.4975 1.12751 7.3475 1.27751L1.8075 6.81751L7.3475 12.3575C7.6375 12.6475 7.6375 13.1275 7.3475 13.4175C7.0575 13.7075 6.5775 13.7075 6.2875 13.4175L0.2175 7.34751C-0.0725 7.05751 -0.0725 6.57751 0.2175 6.28751L6.2875 0.217511C6.5775 -0.0724891 7.0575 -0.0724891 7.3475 0.217511C7.4975 0.357511 7.5675 0.557512 7.5675 0.747511Z"
                            fill="#6F5D32"
                          />
                          <path
                            d="M18.498 6.81763C18.498 7.22763 18.158 7.56763 17.748 7.56763H0.917969C0.507969 7.56763 0.167969 7.22763 0.167969 6.81763C0.167969 6.40763 0.507969 6.06763 0.917969 6.06763H17.748C18.158 6.06763 18.498 6.40763 18.498 6.81763Z"
                            fill="#6F5D32"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section w-screen h-screen flex items-center relative justify-center  bg-no-repeat bg-bottom-left">
          <div className="de:snap-y mo:snap-none snap-mandatory de:px-[20%]   mo:pr-0 mo:pt-[120px] de:pt-0 scroll-smooth de:overflow-y-scroll mo:overflow-hidden de:h-screen mo:h-auto w-full mx-auto">
            <div className="snap-center  de:h-screen mo:gap-[40px] de:gap-[70px] mo:h-auto relative de:pt-[200px] mo:pt-[100px] de:flex-row mo:flex-col flex justify-between items-center text-4xl">
              <Image
                src="./devider.svg"
                alt="Hero"
                width={2}
                height={100}
                className=" absolute mo:top-[180px] de:top-[400px]   de:right-[16vw] mo:right-[7vw]"
              />
              <div className="w-1/4 text-nowrap mo:text-[27px] de:text-[36px] mo:ml-[250px] de:ml-0 !font-semibold">
                راه های ارتباطی
              </div>

              <div className="flex-col w-full h-[400px] de:mt-[35px] mo:mt-0 fbs pr-[60px] gap-[20px]">
                <div className="de:w-[366px] mo:w-[300px] de:h-[70px] mo:h-[60px] de:rounded-2xl mo:rounded-xl border border-white/25 bg-white/10  fa ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="de:w-[48px] mo:w-[35px] "
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 16.8C22.0904 16.8 20.2591 17.5586 18.9088 18.9088C17.5586 20.2591 16.8 22.0904 16.8 24C16.8 25.9096 17.5586 27.7409 18.9088 29.0912C20.2591 30.4414 22.0904 31.2 24 31.2C25.9096 31.2 27.7409 30.4414 29.0912 29.0912C30.4414 27.7409 31.2 25.9096 31.2 24C31.2 22.0904 30.4414 20.2591 29.0912 18.9088C27.7409 17.5586 25.9096 16.8 24 16.8ZM24 12C27.1826 12 30.2348 13.2643 32.4853 15.5147C34.7357 17.7652 36 20.8174 36 24C36 27.1826 34.7357 30.2348 32.4853 32.4853C30.2348 34.7357 27.1826 36 24 36C20.8174 36 17.7652 34.7357 15.5147 32.4853C13.2643 30.2348 12 27.1826 12 24C12 20.8174 13.2643 17.7652 15.5147 15.5147C17.7652 13.2643 20.8174 12 24 12ZM39.6 11.4C39.6 12.1957 39.2839 12.9587 38.7213 13.5213C38.1587 14.0839 37.3957 14.4 36.6 14.4C35.8044 14.4 35.0413 14.0839 34.4787 13.5213C33.9161 12.9587 33.6 12.1957 33.6 11.4C33.6 10.6044 33.9161 9.84129 34.4787 9.27868C35.0413 8.71607 35.8044 8.4 36.6 8.4C37.3957 8.4 38.1587 8.71607 38.7213 9.27868C39.2839 9.84129 39.6 10.6044 39.6 11.4ZM24 4.8C18.0624 4.8 17.0928 4.8168 14.3304 4.9392C12.4488 5.028 11.1864 5.28 10.0152 5.736C9.03508 6.09585 8.14899 6.67263 7.4232 7.4232C6.67202 8.14896 6.09445 9.035 5.7336 10.0152C5.2776 11.1912 5.0256 12.4512 4.9392 14.3304C4.8144 16.98 4.8 17.9064 4.8 24C4.8 29.9376 4.8168 30.9072 4.9392 33.6696C5.028 35.5488 5.28 36.8136 5.7336 37.9824C6.1416 39.0264 6.6216 39.7776 7.4184 40.5744C8.2272 41.3808 8.9784 41.8632 10.0104 42.2616C11.196 42.72 12.4584 42.9744 14.3304 43.0608C16.98 43.1856 17.9064 43.2 24 43.2C29.9376 43.2 30.9072 43.1832 33.6696 43.0608C35.5464 42.972 36.8112 42.72 37.9824 42.2664C38.961 41.9048 39.8466 41.3291 40.5744 40.5816C41.3832 39.7728 41.8656 39.0216 42.264 37.9896C42.72 36.8064 42.9744 35.5416 43.0608 33.6696C43.1856 31.02 43.2 30.0936 43.2 24C43.2 18.0624 43.1832 17.0928 43.0608 14.3304C42.972 12.4536 42.72 11.1864 42.264 10.0152C41.9023 9.036 41.3258 8.1503 40.5768 7.4232C39.8514 6.67163 38.9652 6.094 37.9848 5.7336C36.8088 5.2776 35.5464 5.0256 33.6696 4.9392C31.02 4.8144 30.0936 4.8 24 4.8ZM24 0C30.5208 0 31.3344 0.0239999 33.8928 0.144C36.4488 0.264 38.1888 0.6648 39.72 1.26C41.304 1.8696 42.6384 2.6952 43.9728 4.0272C45.1932 5.22695 46.1375 6.67821 46.74 8.28C47.3328 9.8088 47.736 11.5512 47.856 14.1072C47.9688 16.6656 48 17.4792 48 24C48 30.5208 47.976 31.3344 47.856 33.8928C47.736 36.4488 47.3328 38.1888 46.74 39.72C46.1392 41.3227 45.1947 42.7743 43.9728 43.9728C42.7727 45.1928 41.3215 46.137 39.72 46.74C38.1912 47.3328 36.4488 47.736 33.8928 47.856C31.3344 47.9688 30.5208 48 24 48C17.4792 48 16.6656 47.976 14.1072 47.856C11.5512 47.736 9.8112 47.3328 8.28 46.74C6.67758 46.1387 5.22607 45.1943 4.0272 43.9728C2.80658 42.7732 1.86224 41.3219 1.26 39.72C0.6648 38.1912 0.264 36.4488 0.144 33.8928C0.0311999 31.3344 0 30.5208 0 24C0 17.4792 0.0239999 16.6656 0.144 14.1072C0.264 11.5488 0.6648 9.8112 1.26 8.28C1.86057 6.67723 2.80513 5.22557 4.0272 4.0272C5.22641 2.80616 6.67783 1.86175 8.28 1.26C9.8112 0.6648 11.5488 0.264 14.1072 0.144C16.6656 0.0311999 17.4792 0 24 0Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <span className="de:text-[36px] mo:text-[30px] ">
                    @OSTAEWEBCO
                  </span>
                </div>
                <div className="de:w-[366px] mo:w-[300px] de:h-[70px] mo:h-[60px] de:rounded-2xl mo:rounded-xl border border-white/25 bg-white/10  fa ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="de:w-[48px] mo:w-[35px] "
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 16.8C22.0904 16.8 20.2591 17.5586 18.9088 18.9088C17.5586 20.2591 16.8 22.0904 16.8 24C16.8 25.9096 17.5586 27.7409 18.9088 29.0912C20.2591 30.4414 22.0904 31.2 24 31.2C25.9096 31.2 27.7409 30.4414 29.0912 29.0912C30.4414 27.7409 31.2 25.9096 31.2 24C31.2 22.0904 30.4414 20.2591 29.0912 18.9088C27.7409 17.5586 25.9096 16.8 24 16.8ZM24 12C27.1826 12 30.2348 13.2643 32.4853 15.5147C34.7357 17.7652 36 20.8174 36 24C36 27.1826 34.7357 30.2348 32.4853 32.4853C30.2348 34.7357 27.1826 36 24 36C20.8174 36 17.7652 34.7357 15.5147 32.4853C13.2643 30.2348 12 27.1826 12 24C12 20.8174 13.2643 17.7652 15.5147 15.5147C17.7652 13.2643 20.8174 12 24 12ZM39.6 11.4C39.6 12.1957 39.2839 12.9587 38.7213 13.5213C38.1587 14.0839 37.3957 14.4 36.6 14.4C35.8044 14.4 35.0413 14.0839 34.4787 13.5213C33.9161 12.9587 33.6 12.1957 33.6 11.4C33.6 10.6044 33.9161 9.84129 34.4787 9.27868C35.0413 8.71607 35.8044 8.4 36.6 8.4C37.3957 8.4 38.1587 8.71607 38.7213 9.27868C39.2839 9.84129 39.6 10.6044 39.6 11.4ZM24 4.8C18.0624 4.8 17.0928 4.8168 14.3304 4.9392C12.4488 5.028 11.1864 5.28 10.0152 5.736C9.03508 6.09585 8.14899 6.67263 7.4232 7.4232C6.67202 8.14896 6.09445 9.035 5.7336 10.0152C5.2776 11.1912 5.0256 12.4512 4.9392 14.3304C4.8144 16.98 4.8 17.9064 4.8 24C4.8 29.9376 4.8168 30.9072 4.9392 33.6696C5.028 35.5488 5.28 36.8136 5.7336 37.9824C6.1416 39.0264 6.6216 39.7776 7.4184 40.5744C8.2272 41.3808 8.9784 41.8632 10.0104 42.2616C11.196 42.72 12.4584 42.9744 14.3304 43.0608C16.98 43.1856 17.9064 43.2 24 43.2C29.9376 43.2 30.9072 43.1832 33.6696 43.0608C35.5464 42.972 36.8112 42.72 37.9824 42.2664C38.961 41.9048 39.8466 41.3291 40.5744 40.5816C41.3832 39.7728 41.8656 39.0216 42.264 37.9896C42.72 36.8064 42.9744 35.5416 43.0608 33.6696C43.1856 31.02 43.2 30.0936 43.2 24C43.2 18.0624 43.1832 17.0928 43.0608 14.3304C42.972 12.4536 42.72 11.1864 42.264 10.0152C41.9023 9.036 41.3258 8.1503 40.5768 7.4232C39.8514 6.67163 38.9652 6.094 37.9848 5.7336C36.8088 5.2776 35.5464 5.0256 33.6696 4.9392C31.02 4.8144 30.0936 4.8 24 4.8ZM24 0C30.5208 0 31.3344 0.0239999 33.8928 0.144C36.4488 0.264 38.1888 0.6648 39.72 1.26C41.304 1.8696 42.6384 2.6952 43.9728 4.0272C45.1932 5.22695 46.1375 6.67821 46.74 8.28C47.3328 9.8088 47.736 11.5512 47.856 14.1072C47.9688 16.6656 48 17.4792 48 24C48 30.5208 47.976 31.3344 47.856 33.8928C47.736 36.4488 47.3328 38.1888 46.74 39.72C46.1392 41.3227 45.1947 42.7743 43.9728 43.9728C42.7727 45.1928 41.3215 46.137 39.72 46.74C38.1912 47.3328 36.4488 47.736 33.8928 47.856C31.3344 47.9688 30.5208 48 24 48C17.4792 48 16.6656 47.976 14.1072 47.856C11.5512 47.736 9.8112 47.3328 8.28 46.74C6.67758 46.1387 5.22607 45.1943 4.0272 43.9728C2.80658 42.7732 1.86224 41.3219 1.26 39.72C0.6648 38.1912 0.264 36.4488 0.144 33.8928C0.0311999 31.3344 0 30.5208 0 24C0 17.4792 0.0239999 16.6656 0.144 14.1072C0.264 11.5488 0.6648 9.8112 1.26 8.28C1.86057 6.67723 2.80513 5.22557 4.0272 4.0272C5.22641 2.80616 6.67783 1.86175 8.28 1.26C9.8112 0.6648 11.5488 0.264 14.1072 0.144C16.6656 0.0311999 17.4792 0 24 0Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <span className="de:text-[36px] mo:text-[30px] ">
                    @OSTAEWEBCO
                  </span>
                </div>
                <div className="de:w-[366px] mo:w-[300px] de:h-[70px] mo:h-[60px] de:rounded-2xl mo:rounded-xl border border-white/25 bg-white/10  fa ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="de:w-[48px] mo:w-[35px] "
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 16.8C22.0904 16.8 20.2591 17.5586 18.9088 18.9088C17.5586 20.2591 16.8 22.0904 16.8 24C16.8 25.9096 17.5586 27.7409 18.9088 29.0912C20.2591 30.4414 22.0904 31.2 24 31.2C25.9096 31.2 27.7409 30.4414 29.0912 29.0912C30.4414 27.7409 31.2 25.9096 31.2 24C31.2 22.0904 30.4414 20.2591 29.0912 18.9088C27.7409 17.5586 25.9096 16.8 24 16.8ZM24 12C27.1826 12 30.2348 13.2643 32.4853 15.5147C34.7357 17.7652 36 20.8174 36 24C36 27.1826 34.7357 30.2348 32.4853 32.4853C30.2348 34.7357 27.1826 36 24 36C20.8174 36 17.7652 34.7357 15.5147 32.4853C13.2643 30.2348 12 27.1826 12 24C12 20.8174 13.2643 17.7652 15.5147 15.5147C17.7652 13.2643 20.8174 12 24 12ZM39.6 11.4C39.6 12.1957 39.2839 12.9587 38.7213 13.5213C38.1587 14.0839 37.3957 14.4 36.6 14.4C35.8044 14.4 35.0413 14.0839 34.4787 13.5213C33.9161 12.9587 33.6 12.1957 33.6 11.4C33.6 10.6044 33.9161 9.84129 34.4787 9.27868C35.0413 8.71607 35.8044 8.4 36.6 8.4C37.3957 8.4 38.1587 8.71607 38.7213 9.27868C39.2839 9.84129 39.6 10.6044 39.6 11.4ZM24 4.8C18.0624 4.8 17.0928 4.8168 14.3304 4.9392C12.4488 5.028 11.1864 5.28 10.0152 5.736C9.03508 6.09585 8.14899 6.67263 7.4232 7.4232C6.67202 8.14896 6.09445 9.035 5.7336 10.0152C5.2776 11.1912 5.0256 12.4512 4.9392 14.3304C4.8144 16.98 4.8 17.9064 4.8 24C4.8 29.9376 4.8168 30.9072 4.9392 33.6696C5.028 35.5488 5.28 36.8136 5.7336 37.9824C6.1416 39.0264 6.6216 39.7776 7.4184 40.5744C8.2272 41.3808 8.9784 41.8632 10.0104 42.2616C11.196 42.72 12.4584 42.9744 14.3304 43.0608C16.98 43.1856 17.9064 43.2 24 43.2C29.9376 43.2 30.9072 43.1832 33.6696 43.0608C35.5464 42.972 36.8112 42.72 37.9824 42.2664C38.961 41.9048 39.8466 41.3291 40.5744 40.5816C41.3832 39.7728 41.8656 39.0216 42.264 37.9896C42.72 36.8064 42.9744 35.5416 43.0608 33.6696C43.1856 31.02 43.2 30.0936 43.2 24C43.2 18.0624 43.1832 17.0928 43.0608 14.3304C42.972 12.4536 42.72 11.1864 42.264 10.0152C41.9023 9.036 41.3258 8.1503 40.5768 7.4232C39.8514 6.67163 38.9652 6.094 37.9848 5.7336C36.8088 5.2776 35.5464 5.0256 33.6696 4.9392C31.02 4.8144 30.0936 4.8 24 4.8ZM24 0C30.5208 0 31.3344 0.0239999 33.8928 0.144C36.4488 0.264 38.1888 0.6648 39.72 1.26C41.304 1.8696 42.6384 2.6952 43.9728 4.0272C45.1932 5.22695 46.1375 6.67821 46.74 8.28C47.3328 9.8088 47.736 11.5512 47.856 14.1072C47.9688 16.6656 48 17.4792 48 24C48 30.5208 47.976 31.3344 47.856 33.8928C47.736 36.4488 47.3328 38.1888 46.74 39.72C46.1392 41.3227 45.1947 42.7743 43.9728 43.9728C42.7727 45.1928 41.3215 46.137 39.72 46.74C38.1912 47.3328 36.4488 47.736 33.8928 47.856C31.3344 47.9688 30.5208 48 24 48C17.4792 48 16.6656 47.976 14.1072 47.856C11.5512 47.736 9.8112 47.3328 8.28 46.74C6.67758 46.1387 5.22607 45.1943 4.0272 43.9728C2.80658 42.7732 1.86224 41.3219 1.26 39.72C0.6648 38.1912 0.264 36.4488 0.144 33.8928C0.0311999 31.3344 0 30.5208 0 24C0 17.4792 0.0239999 16.6656 0.144 14.1072C0.264 11.5488 0.6648 9.8112 1.26 8.28C1.86057 6.67723 2.80513 5.22557 4.0272 4.0272C5.22641 2.80616 6.67783 1.86175 8.28 1.26C9.8112 0.6648 11.5488 0.264 14.1072 0.144C16.6656 0.0311999 17.4792 0 24 0Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <span className="de:text-[36px] mo:text-[30px] ">
                    @OSTAEWEBCO
                  </span>
                </div>
                <div className="de:w-[366px] mo:w-[300px] de:h-[70px] mo:h-[60px] de:rounded-2xl mo:rounded-xl border border-white/25 bg-white/10  fa ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="de:w-[48px] mo:w-[35px] "
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 16.8C22.0904 16.8 20.2591 17.5586 18.9088 18.9088C17.5586 20.2591 16.8 22.0904 16.8 24C16.8 25.9096 17.5586 27.7409 18.9088 29.0912C20.2591 30.4414 22.0904 31.2 24 31.2C25.9096 31.2 27.7409 30.4414 29.0912 29.0912C30.4414 27.7409 31.2 25.9096 31.2 24C31.2 22.0904 30.4414 20.2591 29.0912 18.9088C27.7409 17.5586 25.9096 16.8 24 16.8ZM24 12C27.1826 12 30.2348 13.2643 32.4853 15.5147C34.7357 17.7652 36 20.8174 36 24C36 27.1826 34.7357 30.2348 32.4853 32.4853C30.2348 34.7357 27.1826 36 24 36C20.8174 36 17.7652 34.7357 15.5147 32.4853C13.2643 30.2348 12 27.1826 12 24C12 20.8174 13.2643 17.7652 15.5147 15.5147C17.7652 13.2643 20.8174 12 24 12ZM39.6 11.4C39.6 12.1957 39.2839 12.9587 38.7213 13.5213C38.1587 14.0839 37.3957 14.4 36.6 14.4C35.8044 14.4 35.0413 14.0839 34.4787 13.5213C33.9161 12.9587 33.6 12.1957 33.6 11.4C33.6 10.6044 33.9161 9.84129 34.4787 9.27868C35.0413 8.71607 35.8044 8.4 36.6 8.4C37.3957 8.4 38.1587 8.71607 38.7213 9.27868C39.2839 9.84129 39.6 10.6044 39.6 11.4ZM24 4.8C18.0624 4.8 17.0928 4.8168 14.3304 4.9392C12.4488 5.028 11.1864 5.28 10.0152 5.736C9.03508 6.09585 8.14899 6.67263 7.4232 7.4232C6.67202 8.14896 6.09445 9.035 5.7336 10.0152C5.2776 11.1912 5.0256 12.4512 4.9392 14.3304C4.8144 16.98 4.8 17.9064 4.8 24C4.8 29.9376 4.8168 30.9072 4.9392 33.6696C5.028 35.5488 5.28 36.8136 5.7336 37.9824C6.1416 39.0264 6.6216 39.7776 7.4184 40.5744C8.2272 41.3808 8.9784 41.8632 10.0104 42.2616C11.196 42.72 12.4584 42.9744 14.3304 43.0608C16.98 43.1856 17.9064 43.2 24 43.2C29.9376 43.2 30.9072 43.1832 33.6696 43.0608C35.5464 42.972 36.8112 42.72 37.9824 42.2664C38.961 41.9048 39.8466 41.3291 40.5744 40.5816C41.3832 39.7728 41.8656 39.0216 42.264 37.9896C42.72 36.8064 42.9744 35.5416 43.0608 33.6696C43.1856 31.02 43.2 30.0936 43.2 24C43.2 18.0624 43.1832 17.0928 43.0608 14.3304C42.972 12.4536 42.72 11.1864 42.264 10.0152C41.9023 9.036 41.3258 8.1503 40.5768 7.4232C39.8514 6.67163 38.9652 6.094 37.9848 5.7336C36.8088 5.2776 35.5464 5.0256 33.6696 4.9392C31.02 4.8144 30.0936 4.8 24 4.8ZM24 0C30.5208 0 31.3344 0.0239999 33.8928 0.144C36.4488 0.264 38.1888 0.6648 39.72 1.26C41.304 1.8696 42.6384 2.6952 43.9728 4.0272C45.1932 5.22695 46.1375 6.67821 46.74 8.28C47.3328 9.8088 47.736 11.5512 47.856 14.1072C47.9688 16.6656 48 17.4792 48 24C48 30.5208 47.976 31.3344 47.856 33.8928C47.736 36.4488 47.3328 38.1888 46.74 39.72C46.1392 41.3227 45.1947 42.7743 43.9728 43.9728C42.7727 45.1928 41.3215 46.137 39.72 46.74C38.1912 47.3328 36.4488 47.736 33.8928 47.856C31.3344 47.9688 30.5208 48 24 48C17.4792 48 16.6656 47.976 14.1072 47.856C11.5512 47.736 9.8112 47.3328 8.28 46.74C6.67758 46.1387 5.22607 45.1943 4.0272 43.9728C2.80658 42.7732 1.86224 41.3219 1.26 39.72C0.6648 38.1912 0.264 36.4488 0.144 33.8928C0.0311999 31.3344 0 30.5208 0 24C0 17.4792 0.0239999 16.6656 0.144 14.1072C0.264 11.5488 0.6648 9.8112 1.26 8.28C1.86057 6.67723 2.80513 5.22557 4.0272 4.0272C5.22641 2.80616 6.67783 1.86175 8.28 1.26C9.8112 0.6648 11.5488 0.264 14.1072 0.144C16.6656 0.0311999 17.4792 0 24 0Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <span className="de:text-[36px] mo:text-[30px] ">
                    @OSTAEWEBCO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="spotlight-target"
          className="section w-screen h-screen flex items-center relative justify-center   bg-[url('/images/Streets.png')] bg-cover  bg-no-repeat bg-center"
        >
          <div className="snap-y snap-mandatory px-[18%] relative scroll-smooth overflow-y-scroll h-screen w-full mx-auto">
            <Image
              src="./devider.svg"
              alt="Hero"
              width={2}
              height={100}
              className="absolute de:top-[380px] de:block mo:hidden right-[38vw]"
            />
            <div className="snap-center h-screen  de:w-3/4 mo:w-full de:gap-0 mo:gap-[40px]  de:flex-row mo:flex-col  pt-[200px] flex de:justify-between mo:justify-center items-center text-4xl">
              <div className="de:w-1/4 mo:w-full mo:text-[27px] de:text-[36px] text-nowrap !font-semibold text-right ">
                نشانی ما
              </div>
              <div className="w-[374px] h-[455px] bg-[#27292E] rounded-2xl ">
                <div className="h-1/2 fc flex-col border-b-[2px] w-full  border-white/10">
                  <div className="h-[15%] w-full fc ">
                    <div className="w-[55px] h-[5px] rounded-full bg gold"></div>
                  </div>
                  <div className="h-[60%] w-full  fc">
                    <div className="h-full w-[80%] flex justify-around items-end flex-col">
                      <div className="w-[266px] h-[35px] border border-white/20 rounded-full !text-xs flex justify-end items-center px-5">
                        اوستاوب
                      </div>
                      <div className="w-[266px] h-[35px] border border-white/20 rounded-full !text-xs flex justify-end items-center px-5">
                        برند شما
                      </div>
                    </div>
                    <div className="h-full w-[20%] gap-[3px] fc flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <circle
                          opacity="0.3"
                          cx="14"
                          cy="14"
                          r="14"
                          fill="white"
                        />
                        <circle cx="14" cy="14" r="5" fill="#D9D9D9" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="15"
                        viewBox="0 0 2 15"
                        fill="none"
                      >
                        <path
                          d="M1 1L1 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeMiterlimit="3.99933"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="2 4"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="15"
                        viewBox="0 0 2 15"
                        fill="none"
                      >
                        <path
                          d="M1 1L1 14"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="3.99933"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-dasharray="2 4"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <circle
                          opacity="0.3"
                          cx="14"
                          cy="14"
                          r="14"
                          fill="white"
                        />
                        <path
                          d="M15.156 20.5587C16.899 19.023 20 15.8856 20 13.0065C20 11.4135 19.3679 9.8857 18.2426 8.75926C17.1174 7.63282 15.5913 7 14 7C12.4087 7 10.8826 7.63282 9.75736 8.75926C8.63214 9.8857 8 11.4135 8 13.0065C8 15.8856 11.1 19.023 12.844 20.5587C13.1621 20.8429 13.5736 21 14 21C14.4264 21 14.8379 20.8429 15.156 20.5587ZM12 13.0065C12 12.4755 12.2107 11.9662 12.5858 11.5907C12.9609 11.2153 13.4696 11.0043 14 11.0043C14.5304 11.0043 15.0391 11.2153 15.4142 11.5907C15.7893 11.9662 16 12.4755 16 13.0065C16 13.5375 15.7893 14.0468 15.4142 14.4222C15.0391 14.7977 14.5304 15.0087 14 15.0087C13.4696 15.0087 12.9609 14.7977 12.5858 14.4222C12.2107 14.0468 12 13.5375 12 13.0065Z"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[30%] w-full fb  px-[30px]">
                    <div className="w-[98px] h-[38px] rounded-full hover:bg-[#B5964D] t  bg-white/10">
                      <a
                        href="mailto:hello@example.com"
                        className="h-full w-full cursor-pointer fc"
                      >
                        <h5>ایمیل</h5>
                      </a>
                    </div>
                    <div className="w-[98px] h-[38px] rounded-full hover:bg-[#B5964D] t  bg-white/10">
                      <a
                        href="tel:+1234567890"
                        className="h-full w-full cursor-pointer fc"
                      >
                        <h5>تماس</h5>
                      </a>
                    </div>
                    <div className="w-[98px] h-[38px] rounded-full hover:bg-[#B5964D] t  bg-white/10">
                      <a
                        href="sms:+1234567890"
                        className="h-full w-full cursor-pointer fc"
                      >
                        <h5>پیامک</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-1/2 fc flex-col  w-full ">
                  <div className="h-1/3 w-full flex-col flex px-[20px] justify-center items-end">
                    <h3>(به همین نزدیکی) Sec 1</h3>
                    <span className="text-xs text-white/20">
                      اوستاوب در قلب کسب و کار شما قرار دارد
                    </span>
                  </div>
                  <div className="h-2/3 w-full fc flex-col">
                    <Image
                      src="/images/route.png"
                      alt="Left phone"
                      width={326}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section w-screen h-screen  flex items-center relative  justify-center  de:bg-[url('/images/Vector2.png')] mo:bg-[url('/images/mobile-back.png')] bg-no-repeat bg-top-right">
          <div className="de:snap-y mo:snap-none snap-mandatory de:px-[20%]   mo:pr-0 mo:pt-[120px] de:pt-0 scroll-smooth de:overflow-y-scroll mo:overflow-hidden de:h-screen mo:h-auto w-full mx-auto">
            <div className="snap-center  de:h-screen mo:gap-[40px] de:gap-0 mo:h-auto relative de:pt-[200px] mo:pt-[100px] de:flex-row mo:flex-col flex justify-between items-center text-4xl">
              <Image
                src="./devider.svg"
                alt="Hero"
                width={2}
                height={100}
                className=" absolute mo:top-[180px] de:top-[400px]   de:right-[12vw] mo:right-[7vw]"
              />
              <div className="w-1/4 text-nowrap mo:text-[27px] de:text-[36px] mo:ml-[250px] de:ml-0 !font-semibold">
                ارتباط با ما
              </div>

              <div className="flex-col w-full h-[300px] fbs pr-[60px] gap-[20px]">
                <div className="fc gap-[30px]">
                  <BulletPoint />
                  <h3 className=" !font-extralight">
                    در قلب کسب و کار های شما هستیم
                  </h3>
                </div>
                <div className="fc gap-[30px]">
                  <BulletPoint />
                  <h3 className=" !font-extralight">Ostaweb@info.com</h3>
                </div>
                <div className="fc gap-[30px]">
                  <BulletPoint />
                  <h3 className=" !font-extralight">09124915083</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
