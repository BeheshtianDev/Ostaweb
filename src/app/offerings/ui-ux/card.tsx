import Image from 'next/image'
import ProjectImage from "@/app/offerings/ui-ux/images/beheshtian.jpg"
import Logo from "@/app/offerings/ui-ux/images/Layer_1-2.svg"
import laptopLogo from "@/app/offerings/ui-ux/images/laptopLogo.svg"
import MobileLogo from "@/app/offerings/ui-ux/images/MobileLogo.svg"

const Demo = () => {
    return (
        <>
            <div className="relative rounded-lg group w-fit mb-8">
                <Image
                    src={ProjectImage}
                    alt="logo"
                    width={526}
                    height={413}
                    className="object-fill rounded-lg"
                />

                <button className="w-[301px] h-[69px] bg-amber-700 rounded-lg absolute top-[90%] right-[21%] z-10">
                    سایت فروشگاهی
                </button>

                <div className="absolute inset-0 bg-zinc-900/95 rounded-lg opacity-0  group-hover:opacity-100
                transition-opacity duration-300  text-white p-4 border-white border-1 flex flex-col gap-6">
                   <div>
                       <Image src={Logo} alt={"logo"} width={48} height={18}/>
                   </div>
                   <div>مشاهده طراحی در قالب :</div>
                   <div className={"flex justify-evenly items-center gap-3"}>
                       <div><Image src={MobileLogo} alt={"mobile"} width={120} height={120}/></div>
                       <div className={"w-0.5 h-44 bg-[#DADCE0]"}></div>
                       <div><Image src={laptopLogo} alt={"mobile"} width={120} height={120}/></div>
                   </div>
                </div>
            </div>

        </>
    )
}
export default Demo