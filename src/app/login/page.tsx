"use client";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen h-screen  bg-[url('/images/login-bg.png')] bg-cover pt-[40px] bg-no-repeat bg-center fc">
      <div className="w-1/2  rounded-2xl border p-7 border-white/30 de:h-[550px] mo:h-[450px] flex justify-between items-center bg-white/10">
        <div className="flex-col fb h-full w-1/2">
          <div className="h-[30%]  gap-2  fss flex-col">
            <Image src="/stars.svg" alt="star" width={65} height={23} />
            <span className="!font-bold de:text-3xl mo:text-2xl">
              ورود کاربر
            </span>
            <span className="de:text-2xl mo:text-lg">
              اوستاوب،تیمی جوان و پویا با تجربه ای استادانه
            </span>
          </div>
          <div className="h-[70%] w-full fss de:pt-[30px] mo:pt-0">
            <form className="space-y-6 w-full ">
              <div className="w-full">
                <label className="block text-sm text-white mb-1">
                  نام کاربری
                </label>
                <input
                  type="text"
                  placeholder="نام کاربری در شناسنامه سایت شما قرار داده شده است"
                  className="w-full px-4 py-4 rounded-xl bg-white text-sm text-gray-700 outline-none"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm text-white mb-1">
                  رمز عبور
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="رمز عبور در شناسنامه سایت شما قرار داده شده است"
                    className="w-full px-4 py-4  rounded-xl bg-white text-sm text-gray-700 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-600"
                    aria-label="Toggle Password"
                  >
                    <Image
                      src="/AiFillEye.svg"
                      alt="Hero"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#8c6b2f] mt-[30px] text-white font-medium text-center "
              >
                ورود
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 fc  pr-5 pt-20 ">
          <img src="/images/finger.png" alt="" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Page;
