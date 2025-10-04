import Image from "next/image";
import React from "react";

const EndPart = () => {
  return (
    <div className="section  w-screen de:pt-[100px] mo:pt-[100px] mo:pr-[18vw] de:pr-[5vw] mo:h-[200vh] de:h-screen  de:flex-row mo:flex-col flex mo:justify-start de:justify-center de:gap-40 mo:gap-[50px] items-center relative justify-center bg-[url('/images/Vector-ill.png')] bg-no-repeat bg-bottom-left">
      <Image
        src="./devider.svg"
        alt="Hero"
        width={2}
        height={100}
        className="absolute de:top-[32vh] de:block mo:hidden mo:top-[20px] de:right-[25vw]  "
      />
      <Image
        src="./devider.svg"
        alt="Hero"
        width={2}
        height={100}
        className="absolute de:top-[32vh] de:block mo:hidden mo:top-[20px] de:right-[66vw]  "
      />
      <Image
        src="./devider.svg"
        alt="Hero"
        width={2}
        height={100}
        className="absolute top-[180px] de:hidden mo:block de:right-[32vw] mo:right-[7vw]"
      />
      <Image
        src="./devider.svg"
        alt="Hero"
        width={2}
        height={100}
        className="absolute top-[795px] de:hidden mo:block de:right-[32vw] mo:right-[7vw]"
      />
      <Image
        src="/top-line.svg"
        alt="Hero"
        width={1190}
        height={1130}
        className="absolute de:top-0  mo:top-[20px] de:right-[-500px] mo:-right-28  mo:rotate-90 de:rotate-0"
      />
      <div className="de:w-1/2 de:gap-0 mo:gap-[50px] mo:w-full flex justify-between de:flex-row mo:flex-col de:items-center mo:items-start">
        <div className="w-1/4 text-nowrap mo:text-[27px] de:text-[36px]  de:ml-0 font-semibold">
          هر آنچه می خواهید
        </div>
        <div className="flex-col  mo:w-full de:w-auto de:text-3xl mo:text-2xl pl-[5vw] h-[350px] fbs">
          <span className=" !font-extralight">مجله اوستا وب</span>

          <span className=" !font-extralight">نظریات مشتریان</span>

          <span className=" !font-extralight">فرم ارتباط با ما</span>

          <span className=" !font-extralight">نحوه همکاری با ما</span>
        </div>
      </div>
      <div className="de:w-1/2 de:gap-0 mo:gap-[50px] mo:w-full flex justify-between de:flex-row mo:flex-col de:items-center mo:items-start">
        {" "}
        <div className="w-1/4 text-nowrap mo:mt-[130px] de:mt-0 mo:text-[27px] de:text-[36px] -mr-[50px] de:ml-0 !font-semibold">
          ارتباط با ما
        </div>
        <div className="flex-col mo:w-full de:w-auto de:text-2xl pl-[7vw] mo:text-2xl h-[350px] fbs  mo:pr-0 ">
          <div className="fc gap-[20px]">
            <Image src="/images/pin.svg" alt="Hero" width={30} height={30} />
            <span className=" !font-extralight">
              در قلب کسب و کار های شما هستیم
            </span>
          </div>
          <div className="fc gap-[20px]">
            <Image src="/envelope.svg" alt="Hero" width={30} height={30} />

            <span className=" !font-extralight">Ostaweb@info.com</span>
          </div>
          <div className="fc gap-[20px]">
            <Image src="/phone.svg" alt="Hero" width={30} height={30} />

            <span className=" !font-extralight">09124915083</span>
          </div>
        </div>
      </div>

      <div className="absolute  bottom-10 ml-[10vw] flex-col fc  de:w-[400px] gap-[20px] mo:w-[80%]  ">
        <span className=" de:hidden mo:inline font-extralight">
          اوستاوب را در شبکه های اجتماعی دنبال کنید
        </span>
        <div className="w-full fb de:backdrop-brightness-100 de:backdrop-blur-none mo:backdrop-brightness-200 mo:backdrop-blur-sm py-3 px-10 rounded-full ">
          <Image
            src="/instagram.svg"
            alt="Hero"
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/telegram.svg"
            alt="Hero"
            width={35}
            height={35}
            className=""
          />
          <Image
            src="/whatsapp.svg"
            alt="Hero"
            width={35}
            height={35}
            className=""
          />
          <Image
            src="/linkdin.svg"
            alt="Hero"
            width={35}
            height={35}
            className=""
          />
        </div>
      </div>
      <span className="absolute bottom-5 pl-[10vw] de:text-base mo:text-xs font-extralight text-stone-400">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به اوستاوب می باشد
      </span>
    </div>
  );
};

export default EndPart;
