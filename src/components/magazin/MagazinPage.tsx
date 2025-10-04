import SubmitButton from '@/app/aboutanimation/component/SubmitButton';
import Image from 'next/image';
import React from 'react'
import MagazineCard from '../MagazineCard';

const MagazinPage = () => {
  return (
    <div
      dir={"rtl"}
      className="w-full h-auto items-start justify-center de:px-16 mo:px-5 relative z-10 de:pb-40 de:py-0 mo:py-40 overflow-hidden"
    >
      
      <div className="flex flex-col gap-5">
        <div>
          <Image src="/star.svg" alt={"star"} width={65} height={23} />
        </div>
        <div className={"text-4xl de:text-5xl font-semibold my-6"}>
          مجله اوستا وب
        </div>
        <div className={"text-2xl de:text-3xl mb-3 "}>
          اوستا وب؛جایی که سنت و نوآوری به هم می‌رسند
        </div>
        <div className={"de:w-1/2 mo:w-full de:text-xl mo:text-lg font-thin"}>
          مجله اوستاوب، منبعی معتبر برای کسب اطلاعات جامع در حوزه دیجیتال است.
          در این مجله، آخرین اخبار و ترندهای طراحی وب‌سایت، سئو، بازاریابی
          دیجیتال و فناوری‌های نوین به صورت تخصصی و دقیق ارائه می‌گردد. از
          مقالات آموزشی کاربردی تا مصاحبه با متخصصین برجسته، مطالب متنوعی در این
          مجله گردآوری شده است. با مطالعه مجله اوستاوب، همواره در جریان تحولات
          دنیای دیجیتال قرار بگیرید
        </div>
      </div>
      <div className={"mt-12 flex gap-8 mb-20 w-2/3 justify-end"}>
        <SubmitButton width={"300px"}>مشاهده بیشتر</SubmitButton>
      </div>
      <div
        className={
          "flex de:flex-row mo:flex-col items-center justify-center  overflow-x-auto first-of-type:hidden gap-20 "
        }
      >
        <MagazineCard />
        <MagazineCard />
        <MagazineCard />
      </div>
    </div>
  );
}

export default MagazinPage
