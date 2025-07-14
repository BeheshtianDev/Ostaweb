import Image from "next/image";
import Header from '@/../public/images/magicpen.svg'
const DsktapCard = () => {
    return (
        <>
            <div className={'relative p-2 w-[287px] h-[287px] border border-white rounded-lg bg-[#d9d9d92b] pt-5'}>
                    <div className={'absolute rounded-full flex items-center justify-center' +
                        ' top-[-40] left-0 right-0 mx-auto w-[66px] h-[66px] bg-[#6F5D32]'}>
                        <Image src={Header} alt={'header'} width={32} height={32}/>
                    </div>
                <div className={'font-bold text-3xl text-[#6F5D32] w-full'}>طراحی منحصر به فرد</div>
                <div className={'text-white text-center w-full text-lg my-8'}> با طراحی‌های خلاقانه و منحصر به فرد، برند
                    خود را از
                    رقبا متمایز کنید و تجربه کاربری بی‌نظیری را برای جامعه مخاطب خود رقم بزنید
                </div>
                <div className={'flex justify-center'}>

                    <button type="button"
                            className="text-white bg-transparent border border-[#6F5D32]
                                 focus:ring-4 focus:ring-[#6f5d3275] hover:bg-[#6F5D32] font-medium rounded-lg
                             text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Default
                    </button>
                </div>
            </div>
        </>
    )
}
export default DsktapCard;