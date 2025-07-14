import Image from "next/image";
import Logo from '@/../public/images/sold.png'

const AdminCard=()=>{
    return(
        <>
            <div className="relative w-[300px] h-[312px] border border-white p-7 z-0">
                <div className="absolute left-0 right-0 m-auto top-[-1px] z-40 w-[113px] h-[2px] bg-[#0F172A]"></div>

                {/* خود طراح سات */}
                <div className="absolute left-0 right-0 m-auto top-[-15px] z-50 bg-transparent text-white border border-white w-[113px] h-[32px] flex items-center justify-center">
                    طراح سایت
                </div>
                <div className="relative flex justify-center">
                    <Image src={Logo} alt={'img'} width={239} height={232} className=""/>
                    <button type="button" className="absolute left-0 right-0 m-auto bottom-[-30px] w-48 h-14
                     text-black font-medium rounded-lg text-sm focus:outline-none bg-white">Default</button>

                </div>


            </div>
        </>
    )
}
export default AdminCard