import Image from "next/image";

type SlideProps = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

export default function Slide({ name, role, text, avatar }: SlideProps) {
  return (
    <div className="w-full h-full flex de:gap-0 mo:gap-[2vw]">
      {/* Left Content */}
      <div className="w-5/6 h-full flex flex-col">
        {/* Header */}
        <div className="w-full h-1/6 flex justify-center items-center">
          <div className="w-1/3 h-full flex justify-center items-center">
            <Image
              src="/images/Stars.svg"
              alt="stars"
              width={140}
              height={28}
            />
          </div>
          <div className="w-2/3 h-full flex justify-start items-end flex-col de:text-sm mo:text-xs font-light de:gap-2 mo:gap-1">
            <span className="de:text-2xl mo:text-sm font-medium">
              : {name}
            </span>
            {role}
          </div>
        </div>

        {/* Body */}
        <div className="w-full h-4/6 de:text-xl mo:text-xs font-extralight flex justify-center items-center text-right">
          {text}
        </div>

        {/* Button */}
        <div className="w-full h-1/6">
          <button className="de:w-48 mo:w-28 h-full border border-[#6f5d32] rounded-xl de:text-xl mo:text-sm font-light hover:bg-[#6f5d32] transition-all duration-300">
            مشاهده وبسایت
          </button>
        </div>
      </div>

      {/* Avatar */}
      <div className="h-full w-1/6 flex justify-end items-start">
        <Image
          src={avatar}
          alt="avatar"
          width={62}
          height={80}
          className="rounded-full bg-white/90"
        />
      </div>
    </div>
  );
}
