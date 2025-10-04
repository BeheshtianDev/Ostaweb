import Image from "next/image";
import Logo from '@/../public/images/magicpen.svg'
import Arow from '@/../public/images/Icon.svg'
const MobileCard=()=>{

    return (
      <>
        <div className={"rounded-2xl w-full p-2 bg-[#191919] z-10"}>
          <div className=" border border-white/10 bg-[#141414] rounded-2xl">
            <div className="p-5 h-[150px] border-b border-b-white/10">
              <div className="flex items-center mb-2">
                <div className="flex gap-3 w-full">
                  <Image src={Logo} alt={"header"} width={32} height={32} />
                  <strong className={"text-[#6f5d32]"}>
                    طراحی منحصر به فرد
                  </strong>
                </div>
                <Image src={Arow} alt={"logo"} width={20} height={20} />
              </div>

              <div className="font-extralight">
                با طراحی‌های خلاقانه و منحصر به فرد، برند خود را از رقبا متمایز
                کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید{" "}
              </div>
            </div>

            <div className="p-5 h-[150px] border-b border-b-white/10">
              <div className="flex items-center mb-2">
                <div className="flex gap-3 w-full">
                  <Image src={Logo} alt={"header"} width={32} height={32} />
                  <strong className="text-[#6f5d32]">طراحی منحصر به فرد</strong>
                </div>
                <Image src={Arow} alt={"logo"} width={20} height={20} />
              </div>

              <div className="font-extralight">
                با طراحی‌های خلاقانه و منحصر به فرد، برند خود را از رقبا متمایز
                کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید{" "}
              </div>
            </div>

            <div className="p-5 h-[150px] ">
              <div className="flex items-center mb-2">
                <div className="flex gap-3 w-full">
                  <Image src={Logo} alt={"header"} width={32} height={32} />
                  <strong className={"text-[#6f5d32]"}>
                    طراحی منحصر به فرد
                  </strong>
                </div>
                <Image src={Arow} alt={"logo"} width={20} height={20} />
              </div>

              <div className="font-extralight">
                با طراحی‌های خلاقانه و منحصر به فرد، برند خود را از رقبا متمایز
                کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default MobileCard;