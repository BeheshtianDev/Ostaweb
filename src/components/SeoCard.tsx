import Link from "next/link";
import Image from "next/image";

const SeoCard = () => {
  return (
    <div className="w-[526px] h-[364px] rounded-2xl relative group fc bg-[url('/images/seo-card.png')]  bg-center bg-cover bg-no-repeat">
      <div className="w-[300px] h-[70px] absolute bottom-[-35px] group-hover:bottom-[-50px] transition-all duration-500 z-10 shadow-xl shadow-black gold rounded-xl fc">
        <h3>وبسایت فروشگاهی کویر موتور</h3>
      </div>
      <div className="h-full w-full border border-white/50 relative pr-[20px] pt-[20px] pl-[60px] rounded-2xl backdrop-blur-md group backdrop-brightness-[25%] opacity-0  group-hover:opacity-100 t">
        <Image src="./star.svg" alt={'star'} width={65} height={23}/>

        <h2 className="py-[20px] !font-extralight border-b group-hover:opacity-100 t   opacity-0 border-white/70">
          مشاهده کلمات کلیدی :
        </h2>
        <Link href="/offerings/seo/search">
          <h4 className="!font-extralight py-[20px] border-b cursor-pointer hover:!text-[21px] hover:py-[22px]   border-white/20 group-hover:opacity-100 t  opacity-0">
            کلمه کلیدی اول
          </h4>
        </Link>
        <h4 className="!font-extralight py-[20px] border-b cursor-pointer hover:!text-[21px] hover:py-[22px]  border-white/20 group-hover:opacity-100 t  opacity-0">
          کلمه کلیدی دوم
        </h4>
        <h4 className="!font-extralight py-[20px] border-b cursor-pointer hover:!text-[21px] hover:py-[22px]  border-white/20 group-hover:opacity-100 t  opacity-0">
          کلمه کلیدی سوم
        </h4>
      </div>
    </div>
  );
};

export default SeoCard;
