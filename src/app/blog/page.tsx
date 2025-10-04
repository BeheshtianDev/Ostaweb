"use client";
import MagazineCard from "@/components/MagazineCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full min-h-screen max-h-full flex pb-20 t ${
        active ? "de:flex-col-reverse " : "de:flex-row"
      } justify-center items-start px-[5%]  mo:flex-col pt-[150px] gap-[10px] t`}
    >
      <div
        className={`w-full h-auto border-[1.5px] flex-col border-white/10  de:hidden transition-all duration-500 ${
          active ? "translate-x-[100vw] scale-y-0" : "mo:flex"
        } `}
      >
        <div className="h-[100px] px-5 fb t border-b-[1.5px] w-full border-white/10">
          <div className="w-[90px] h-[50px] rounded-lg border text-2xl text-white/60 font-light border-white/10 bg-[#141414] fa">
            <Image
              src="/download.svg"
              alt="Hero"
              width={20}
              height={20}
              className=" "
            />
            20 +
          </div>
          <div className="w-[90px] h-[50px] rounded-lg border border-white/10 bg-[#141414] fa text-2xl text-white/60 font-light">
            <Image
              src="/bookmark.svg"
              alt="Hero"
              width={20}
              height={20}
              className=" "
            />
            5 +
          </div>
          <div className="w-[90px] h-[50px] rounded-lg border border-white/10 bg-[#141414] fa text-2xl text-white/60 font-light">
            <Image
              src="/eye-icon.svg"
              alt="Hero"
              width={30}
              height={20}
              className=" "
            />
            k 10
          </div>
          <div className="w-[90px] h-[50px] rounded-lg border border-white/10 bg-[#141414] fa text-2xl text-white/60 font-light">
            <Image
              src="/heart-icon.svg"
              alt="Hero"
              width={30}
              height={20}
              className=" "
            />
            25 +
          </div>
        </div>
        <div className="  h-[100px] fb px-5 w-full ">
          <div className="fss flex-col text-sm">
            <span className=" opacity-50  text-nowrap">دسته بندی :</span>
            <span className=" font-thin text-nowrap">طراحی وبسایت</span>
          </div>
          <div className="fss flex-col text-sm">
            <span className=" opacity-50 text-nowrap">بروز شده در :</span>
            <span className=" font-thin text-nowrap">دی ماه 1403</span>
          </div>
          <div className="fss flex-col text-sm">
            <span className=" opacity-50 text-nowrap">نام نویسنده :</span>
            <span className=" font-thin text-nowrap">علی مدرسی</span>
          </div>
          <div className="fss flex-col text-sm">
            <span className=" opacity-50 text-nowrap">زمان مورد نیاز :</span>
            <span className=" font-thin text-nowrap">10 دقیقه</span>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "w-full translate-y-4 px-0" : "de:w-[60%] px-[2%]"
        } h-full  flex gap-[20px] justify-start items-center mo:w-full flex-col transition-all duration-1000  `}
      >
        <div
          className={`${
            active ? "h-[600px] " : "h-[400px]"
          } w-full  bg-[url('/images/Base.png')] bg-cover bg-no-repeat bg-center  transition-all duration-1000`}
        ></div>
        <div className="w-full gap-2.5 border-b-[1.5px] border-white/10 pb-[20px] fss flex-col">
          <Image
            src="/star.svg"
            alt="Hero"
            width={50}
            height={20}
            className=" "
          />
          <span className="font-semibold text-2xl de:text-3xl">
            طراحی ریسپانسیو
          </span>
          <h3 className="opacity-50 de:text-xl mo:text-lg font-thin ">
            طراحی ریسپانسیو یکی از مهم ترین بخش های طراحی می باشد
          </h3>
        </div>

        <div id="intro" className="flex-col fss py-[20px] gap-5 relative">
          <h3 className="!font-bold de:text-2xl mo:text-xl">قالب دسکتاپ</h3>

          <span
            className={`font-extralight de:text-xl mo:text-lg opacity-65 text-justify transition-all duration-1000 ease-in-out ${
              active
                ? "opacity-100 max-h-[none]"
                : "opacity-65 max-h-[100px] overflow-hidden"
            }`}
          >
            {active
              ? "امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم.امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده و تلاش کرده است تا با ارائه راهکارهای نوین و خدمات باکیفیت، به رشد و توسعه کسب‌وکار شما کمک کند. ما به عنوان یک تیم متخصص و متعهد، همواره در تلاشیم تا از آخرین فناوری‌ها و بهترین شیوه‌ها برای ارائه خدمات به روز و کارآمد بهره‌مند شویم."
              : "امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده...امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده...امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده...امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده...امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده...امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده...امروزه در دنیای پرشتاب دیجیتال، فناوری اطلاعات به قلب کسب‌وکارها تبدیل شده است. اوستاوب با افتخار در طول این سال‌ها همراه شما بوده..."}
          </span>

          {/* This div will be hidden when 'active' is true */}
          {!active && (
            <div className="h-full w-full bg-gradient-to-b from-transparent via-[#0C0C0C]/80 to-[#0C0C0C] absolute flex justify-center items-end ">
              <button
                onClick={() => setActive(true)}
                className="w-[177px] h-[55px] bg-[#332d1e] text-white/60 fc gap-[10px] rounded-xl cursor-pointer"
              >
                مطالعه بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5L12.75 17.6893L18.2197 12.2197C18.5126 11.9268 18.9874 11.9268 19.2803 12.2197C19.5732 12.5126 19.5732 12.9874 19.2803 13.2803L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L4.71967 13.2803C4.42678 12.9874 4.42678 12.5126 4.71967 12.2197C5.01256 11.9268 5.48744 11.9268 5.78033 12.2197L11.25 17.6893L11.25 4.5C11.25 4.08579 11.5858 3.75 12 3.75Z"
                    fill="#98989A"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          active
            ? "w-full h-[150px] flex-row"
            : "w-[40%] pb-[50px] h-auto flex-col"
        } border-[1.5px]  border-white/10 t de:flex justify-around items-center mo:hidden transition-all duration-1000`}
      >
        <div
          className={` h-[150px] px-[55px] fb transition-all duration-500 ${
            active
              ? "border-none w-1/2 gap-[20px] px-0"
              : "border-b-[1.5px] w-full border-white/10"
          }`}
        >
          <div className="w-[120px] h-[55px] rounded-lg border text-3xl text-white/60 font-light border-white/10 bg-[#141414] fa">
            <Image
              src="/download.svg"
              alt="Hero"
              width={30}
              height={20}
              className=" "
            />
            20 +
          </div>
          <div className="w-[120px] h-[55px] rounded-lg border border-white/10 bg-[#141414] fa text-3xl text-white/60 font-light">
            <Image
              src="/bookmark.svg"
              alt="Hero"
              width={30}
              height={20}
              className=" "
            />
            5 +
          </div>
          <div className="w-[120px] h-[55px] rounded-lg border border-white/10 bg-[#141414] fa text-3xl text-white/60 font-light">
            <Image
              src="/eye-icon.svg"
              alt="Hero"
              width={40}
              height={20}
              className=" "
            />
            k 10
          </div>
          <div className="w-[120px] h-[55px] rounded-lg border border-white/10 bg-[#141414] fa text-3xl text-white/60 font-light">
            <Image
              src="/heart-icon.svg"
              alt="Hero"
              width={40}
              height={20}
              className=" "
            />
            25 +
          </div>
        </div>

        <div
          className={`  h-[150px] fb px-[55px] transition-all duration-500 ${
            active ? "w-1/3" : "w-full "
          }`}
        >
          <div className="fss flex-col">
            <h4 className="opacity-50 text-nowrap">دسته بندی :</h4>
            <span className="text-[18px] font-light text-nowrap">
              طراحی وبسایت
            </span>
          </div>
          <div className="fss flex-col">
            <h4 className="opacity-50 text-nowrap">بروز شده در :</h4>
            <span className="text-[18px] font-light text-nowrap">
              دی ماه 1403
            </span>
          </div>
          <div className="fss flex-col">
            <h4 className="opacity-50 text-nowrap">نام نویسنده :</h4>
            <span className="text-[18px] font-light text-nowrap">
              علی مدرسی
            </span>
          </div>
          <div className="fss flex-col">
            <h4 className="opacity-50 text-nowrap">زمان مورد نیاز :</h4>
            <span className="text-[18px] font-light text-nowrap">10 دقیقه</span>
          </div>
        </div>
        <div
          className={`${
            active ? "hidden" : "de:flex"
          }  mt-[30px] flex-wrap mo:hidden  justify-center items-center gap-[20px] t`}
        >
          <MagazineCard />
          <MagazineCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
