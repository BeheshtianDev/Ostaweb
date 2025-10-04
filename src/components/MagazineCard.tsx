import Link from "next/link";
const MagazineCard = () => {
  return (
    <Link href="/contact/blog" className="w-[300px] h-[400px] rounded-2xl flex justify-center items-end  bg-[url('/images/Base.png')] bg-cover relative bg-no-repeat cursor-pointer ">
      <div className="h-full w-full rounded-2xl bg-gradient-to-b from-transparent to-[#152532] absolute"></div>
      <div className="w-full h-1/2 fbs flex-col p-2.5 z-10">
        <span className="text-[28px] font-bold">طراحی ریسپانسیو</span>
        <h4 className="!font-light pl-[30px]">
          طراحی ریسپانسیو یکی از مهم ترین بخش های طراحی....
        </h4>
        <div className="fb w-full ">
          <div className="w-[35px] h-[35px] rounded-full bg-red-50"></div>
          <h5>علی محمد مدرس زاده</h5>
          <span className="text-[10px]">3 شهریور 1403</span>
        </div>
      </div>
    </Link>
  );
};

export default MagazineCard;
