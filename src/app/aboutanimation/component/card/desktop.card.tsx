import Image from "next/image";
type DsktapCardProps = {
  imgSrc: string;
  title: string;
  desc: string;
  imgWidth?: number;
};
const DsktapCard = ({
  imgSrc,
  title,
  desc,
  imgWidth = 32,
}: DsktapCardProps) => {
  return (
    <>
      <div
        className={
          "relative p-2 w-[287px] h-[287px] border border-white/30 flex justify-center text-center items-center flex-col rounded-2xl bg-white/10 pt-5"
        }
      >
        <div
          className={
            "absolute rounded-full flex items-center justify-center top-[-40] left-0 right-0 mx-auto w-[66px] h-[66px] bg-[#6F5D32]"
          }
        >
          <Image src={imgSrc} alt={"header"} width={imgWidth} height={32} />
        </div>
        <div className={"font-semibold text-2xl text-[#6F5D32] h-1/3 fc"}>
          {title}
        </div>
        <div className={"text-white  font-extralight text-sm px-2 h-1/3 fc"}>
          {desc}
        </div>
        <div className={"flex justify-center h-1/3 fc"}>
          <button
            type="button"
            className="text-white h-[45px] w-[160px] bg-transparent border border-[#6F5D32] transition-all duration-300 hover:bg-[#6F5D32]  rounded-lg"
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </>
  );
};
export default DsktapCard;
