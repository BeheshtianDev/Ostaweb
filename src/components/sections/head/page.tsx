import Logo from '../../../../public/images/13.svg'
import Login from '../../../../public/images/Login.svg'
import Menu from '../../../../public/images/menu.svg'
import Star from "../../../../public/images/Layer_1-2.svg"
import Ring from "../../../../public/images/Ellipse3.svg"
import Image from "next/image";

const Land = () => {
    return (
        <div className={"bg-[url('/images/Ellipse4.svg')] bg-cover bg-center h-screen"}>

            <div className={"bg-[url('/images/Layer5.svg')] bg-cover bg-center h-screen"}>
                <div className={"bg-cover bg-center"}></div>
                <nav className={'flex items-center justify-between px-8 lg:px-28 pt-4 mb-8 lg:mb-0'}>
                    <div><Image src={Menu.src} alt={'Logo'} width={32} height={32}/></div>
                    <div><Image src={Logo.src} alt={'Logo'} width={50} height={66}/></div>
                    <div><Image src={Login.src} alt={'Logo'} width={32} height={32}/></div>
                </nav>
                <div className={'mx-auto lg:mr-auto w-[87%]'}>
                    <h1 className={'mb-0 text-6xl font-bold'} >اوستاوب</h1>
                    <h2 style={{ }} className={"text-[#b5964d] font-bold text-5xl my-[20px]"}>بسپر دست <strong>اوستا</strong>
                    </h2>
                    <div className={"my-8"}><Image src={Star.src} alt={"star"} width={65} height={32}/></div>

                    <div className={"font-black text-5xl mb-2 text-[clamp(32px,5vw,48px)]"} style={{fontWeight:"900",
                    fontSize:"clamp(32px,5vw,48px)"}}><strong >اوستاوب</strong></div>

                    {/**/}

                    <div className={'flex justify-between pl-4 flex-wrap items-center mb-24'}>
                        <div className={'my-[70px] lg:mb-24 md:mb-0 text-[23px]'}>تیمی جوان و پویا با تجربه ای استادانه در طراحی و توسعه
                            وبسایت برند شما
                        </div>
                        <div className={'flex gap-3'}>
                            <Image src={Ring.src} alt={"ring"} width={24} height={24}/>
                            <div className={'w-[280px]'}>
                                با اوستاوب شعبه بعدی کسب و کار خود را در فضای آنلاین افتتاح کنید
                            </div>

                        </div>
                    </div>


                    <div className={'flex gap-3 mb-20 w-full justify-end pl-1'}>
                        <div><Image src={Ring.src} alt={"ring"} width={24} height={24}/></div>
                        <div className={'w-[75%]'}>اعتماد شما،آغاز یک همکاری بی پایان خواهد بود</div>
                    </div>

                    <div className={'flex gap-3'}>
                        <div><Image src={Ring.src} alt={"ring"} width={24} height={24}/></div>
                        <div>استادانه خواسته هایتان را برآورده خواهیم کرد</div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Land

