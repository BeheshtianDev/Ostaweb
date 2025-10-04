import React from 'react'

const page = () => {
  return (
    <form className="w-full mx-auto h-screen fc  flex-col gap-[40px] py-12 pt-[200px] text-right text-white de:px-[20%] mo:px-[10vw]">
      <div className="w-full de:flex-row mo:flex-col  flex gap-4 ">
        <div className="w-full">
          <label className="block mb-2">نام:</label>
          <input
            type="text"
            placeholder="علی محمد"
            className="w-full bg-[#1a1a1a] text-right px-4 py-3 rounded-md border border-neutral-800 focus:outline-none focus:border-gold"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2">نام خانوادگی:</label>
          <input
            type="text"
            placeholder="مدرسی زاده"
            className="w-full bg-[#1a1a1a] text-right px-4 py-3 rounded-md border border-neutral-800 focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="w-full">
        <label className="block mb-2">ایمیل:</label>
        <input
          type="email"
          placeholder="Mr.alimodaresizade@gmail.com"
          className="w-full bg-[#1a1a1a] text-left px-4 py-3 rounded-md border border-neutral-800 focus:outline-none focus:border-gold"
        />
      </div>

      <div className="w-full">
        <label className="block mb-2">پیام شما:</label>
        <textarea
          rows={5}
          placeholder="نظر خود را بنویس ..."
          className="w-full bg-[#1a1a1a] text-right px-4 py-3 rounded-md border border-neutral-800 focus:outline-none focus:border-gold"
        />
      </div>
      <div className="w-full flex justify-end items-center">
        <button
          type="submit"
          className="flex items-center fc cursor-pointer justify-between gap-2 bg-[#8d753a] text-white de:w-2/5 mo:w-full py-3 rounded-md hover:opacity-90 transition-all"
        >
          <span>ارسال نظر</span>
        </button>
      </div>
    </form>
  );
}

export default page
