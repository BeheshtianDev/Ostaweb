"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SubmitButton from "@/app/aboutanimation/component/SubmitButton";
import AdminCard from "@/app/aboutanimation/component/AdminCard";
import MobileCard from "./component/card/mobile.card";
import DsktapCard from "@/app/aboutanimation/component/card/desktop.card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Aboutanimation = () => {
  return (
    <div
      dir="ltr"
      className="flex de:h-[200vh] mo:h-[230vh]  flex-col  relative mo:pt-20 de:pt-0 "
    >
      <Image
        src="/images/AboutPat.svg"
        alt="نمونه لوگو"
        width={1600}
        height={1000}
        className="z-0 absolute de:-top-[40vw]  mo:top-96 left-0 transition-all duration-1000"
      />

      <div
        dir={"rtl"}
        className="w-full items-start h-screen  justify-center z-10 mb-3 de:px-16 mo:px-5"
      >
        <div className="flex flex-col gap-5">
          <div>
            <Image src="/star.svg" alt={"star"} width={65} height={23} />
          </div>
          <div className={"text-4xl de:text-5xl font-semibold "}>درباره ما</div>
          <div className={"text-2xl de:text-3xl  "}>
            اوستاوب،تیمی جوان و پویا با تجربه ای استادانه
          </div>
          <div
            className={"de:w-1/2 mo:w-full de:text-xl mo:text-lg font-thin "}
          >
            اوستاوب، تیمی خلاق و پرانرژی از متخصصان طراحی وب است که با هدف خلق
            وبسایت‌هایی زیبا،کاربردی و متناسب با نیازهای کسب‌وکار شما گرد هم
            آمده‌اند. ما معتقدیم که یک وبسایت خوب تنها یک ویترین نیست،بلکه
            ابزاری قدرتمند برای ارتباط با مشتریان و رشد کسب‌وکار است. با سال‌ها
            تجربه و دانش فنی بالا، ما به شما کمک می‌کنیم تا هویت برند خود را به
            بهترین شکل در دنیای آنلاین به نمایش بگذارید.
          </div>
        </div>
        <div className={"mt-12 flex gap-14 mb-20 "}>
          <SubmitButton width={"214px"}>درباره ما</SubmitButton>
          <SubmitButton width={"481px"}>تماس با ما</SubmitButton>
        </div>
        <div className={"hidden de:flex justify-center gap-20 "}>
          <DsktapCard
            imgSrc="/images/magicpen.svg"
            title="طراحی منحصر به فرد"
            desc="با طراحی‌های خلاقانه و منحصر به فرد، برند خود را از رقبا متمایز کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید"
            imgWidth={30}
          />
          <DsktapCard
            imgSrc="/images/24.svg"
            title="پشتیبانی دائم"
            desc="متخصصان ما با ارائه خدمات پشتیبانی 24 ساعته، به روزرسانی‌های امنیتی مداوم، بهینه‌سازی عملکرد و رفع مشکلات احتمالی، از وبسایت شما به عنوان یک دارایی ارزشمند محافظت می‌کند"
            imgWidth={60}
          />
          <DsktapCard
            imgSrc="/images/Target.svg"
            title="سئو هدفمند"
            desc=" با طراحی‌های خلاقانه و منحصر به فرد، برند خود را از رقبا متمایز کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید"
            imgWidth={30}
          />
        </div>
        <div className={"de:hidden "}>
          <MobileCard />
        </div>
      </div>

      <div dir={"rtl"} className=" w-full  relative   h-screen de:pt-0 mo:pt-60">
        <Image
          src="/images/Dots.svg"
          alt={"star"}
          width={65}
          height={23}
          className="object-cover w-full  absolute h-full right-0 blur-[0.5px] opacity-80 top-0"
        />
        <div className={"pt-10 de:px-16 mo:px-5"}>
          <Image src="/star.svg" alt={"star"} width={65} height={23} />
        </div>
        <div
          className={"text-4xl de:text-5xl font-semibold mt-5 de:px-16 mo:px-5"}
        >
          تیم متخصص اوستا وب
        </div>

        <div className={"fc w-full de:pt-20 "}>
          <AdminCard />
        </div>
      </div>
    </div>
  );
};
export default Aboutanimation;
