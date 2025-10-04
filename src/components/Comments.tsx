
const Comments = () => {
  return (
    <div className="w-4/5 de:h-[215px] mo:h-[350px] flex de:flex-row mo:flex-col border-b border-white/10">
      <div className="flex de:w-[55%] mo:w-full de:h-auto mo:h-3/5">
        <div className="w-1/5 h-full flex-col fs">
          <div className="de:h-[80px] mo:w-[60px] de:w-[80px] mo:h-[60px] rounded-full bg-stone-800"></div>
        </div>
        <div className="w-4/5 h-full flex-col fss gap-[40px]">
          <div className="flex-col fss">
            <span className="de:text-[20px] mo:text-lg">
              علی محمد مدرس زاده
            </span>
            <span className=" de:text-[18px] mo:text-base text-white/50 font-light">
              Mr.alimodaresizade@gmail.com
            </span>
          </div>
          <div className="flex-col fss">
            <span className="de:text-[20px] mo:text-lg">طراحی ریسپانسیو</span>
            <span className="text-white/50 de:text-[20px] mo:text-lg">
              طراحی ریسپانسیو یکی از مهم ترین بخش های طراحی می باشد
            </span>
          </div>
        </div>
      </div>
      <div className="de:w-[45%] mo:w-full h-2/5 flex-col flex justify-between items-end">
        <span className="de:text-[20px] de:opacity-100 mo:opacity-40 mo:text-sm">
          تاریخ نوشته : 1403/11/2
        </span>
        <div className="pb-4 fc gap-[10px]">
          <div className="w-[76px] h-[43px] de:flex mo:hidden rounded-lg border border-white/10 bg-[#141414] justify-around items-center">
            <span className=" text-[18px] text-white/50 font-light">31</span>
          </div>
          <div className="w-[76px] h-[43px] de:flex mo:hidden rounded-lg border border-white/10 bg-[#141414] justify-around items-center">
            <span className=" text-[18px] text-white/50 font-light">20k</span>
          </div>
          <button className="de:w-[161px] mo:w-[143px] de:h-[63px] mo:h-[55px] rounded-lg border border-white/10 bg-[#141414] fa cursor-pointer text-lg text-white/50 font-light">
            بیشتر بخوان
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
