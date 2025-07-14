import Link from "next/link";
import React from "react";
type CardsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Cards: React.FC<CardsProps> = ({ icon, title, description }) => {
  return (
    <div className="h-[280px] w-[280px] backdrop-brightness-200 fb flex-col pb-5 pt-14 px-3  rounded-2xl border border-white/30 relative ">
      <div className="w-[60px] h-[60px] gold rounded-full absolute top-[-30px] fc">
        {icon}
      </div>
      <h3 className="!font-bold golden">{title}</h3>
      <h5 className="text-center ">{description}</h5>
      <Link
        href="/team"
        className="w-[160px] h-[45px] border goldbor fc rounded-lg hover:bg-white/10 t"
      >
        <h4>اطلاعات بیشتر</h4>
      </Link>
    </div>
  );
};

export default Cards;
