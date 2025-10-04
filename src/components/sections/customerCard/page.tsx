import Image from "next/image";
import Star from "../../../../public/images/Layer_1-2.svg";
import CurvedCarousel from "@/components/CurvedCarousel";

const CustomerCard = () => {
  return (
    <>
      <div className={"de:h-screen mo:h-auto mt-20"}>
        <Image
          src="/images/CmPat.svg"
          alt={"star"}
          width={65}
          height={23}
          className="w-full absolute"
        />

        <div className={"mb-24 de:px-16 mo:px-5 flex flex-col gap-5"}>
          <div>
            <Image src={Star.src} alt={"star"} width={65} height={23} />
          </div>
          <div className="text-4xl de:text-5xl font-semibold my-6">
            نظرات مشتریان
          </div>
          <div className={"text-2xl de:text-3xl mb-3 "}>
            اعتماد شما،آغاز یک همکاری بی پایان خواهد بود
          </div>
          <div className={"de:w-1/2 mo:h-full de:text-xl mo:text-lg font-thin"}>
            مشتریان عزیز ما با ارسال پیام‌های رضایتمندی، از کیفیت بالای خدمات
            طراحی وبسایت اوستاوب ابراز خشنودی کرده‌اند. آنها به طور ویژه به
            طراحی زیبا، کاربری آسان و همچنین پشتیبانی حرفه‌ای تیم ما اشاره
            کرده‌اند. این نظرات ارزشمند، انگیزه ما را برای ارائه خدمات بهتر و
            نوآورانه‌تر دوچندان می‌کند. ما مفتخریم که توانسته‌ایم اعتماد و رضایت
            مشتریان خود را جلب کنیم
          </div>
        </div>
        <CurvedCarousel />
      </div>
    </>
  );
};
export default CustomerCard;
