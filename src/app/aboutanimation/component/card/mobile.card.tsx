import Image from "next/image";
import Logo from '@/../public/images/magicpen.svg'
import Arow from '@/../public/images/Icon.svg'
const MobileCard=()=>{

    return(
        <>
                <div className={'rounded-xl p-1 bg-[calc(var(--spacing) * 1)]'}>

                    <div className="rounded-xl p-5 border ">
                        
                        <div className="flex">
                                 <div className="flex gap-3 w-full">
                                     <Image src={Logo} alt={'header'} width={32} height={32}/>
                                     <strong>طراحی منحصر به فرد</strong>
                                 </div>
                        
                                 
                                      <Image src={Arow} alt={'logo'} width={20} height={20}/>
                                 

                        </div>

                        <div className=" border-b-[#6F5D32]"> 
                            با طراحی‌های خلاقانه و منحصر به فرد، برند خود را از رقبا متمایز کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید
                        </div>

                    </div>

                </div>
        </>
    )
}
export default MobileCard;