import Image from "next/image";
import React from "react";
import CustomAccordion from "./CustomAccordion";

const Faq = () => {
  return (
    <div className={"de:h-screen mo:h-auto mt-20"}>
      <div className={"mb-24 de:px-16 mo:px-5 flex flex-col gap-5"}>
        <div>
          <Image src="/Star.svg" alt={"star"} width={65} height={23} />
        </div>
        <div className="text-4xl de:text-5xl font-semibold my-6">
          سوالات متداول
        </div>
        <div className={"text-2xl de:text-3xl mb-3 "}>
          اوستاوب پاسخگوی تمام سوالات شما خواهد بود
        </div>
        <div className="w-full flex justify-center items-center mt-20">
          <CustomAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
