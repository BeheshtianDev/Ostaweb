"use client";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Logo from "../../../public/images/abol.svg";
import Star from '../../../public/images/Layer_1-2.svg';
import SubmitButton from "@/app/aboutanimation/component/SubmitButton";
import AdminCard from "@/app/aboutanimation/component/AdminCard";
import Card from "@/app/offerings/ui-ux/card";
import MobileCard from "./component/card/mobile.card";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Aboutanimation = () => {
    const imgWrapperRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        if (!imgWrapperRef.current || !rightRef.current) return;

        // ایجاد یک timeline جدید برای کنترل بهتر
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: rightRef.current,
                start: "top -90%", // شروع وقتی بخش به پایین viewport می‌رسد
                end: "bottom 20%", // پایان وقتی بخش به بالای viewport می‌رسد
                scrub: 5,
                // markers: true
            }
        });

        // تنظیم نقطه شروع انیمیشن
        gsap.set(imgWrapperRef.current, {
            scale: 1,
            x: 0,
            y: 0,
            transformOrigin: "-10% 110%"
        });

        // اضافه کردن انیمیشن به timeline
        tl.to(imgWrapperRef.current, {
            scale: 9.5,
            x: "-550px",
            y: "1400px",
            ease: "none",
            duration: 1 // مدت زمان نمادین - توسط scrub کنترل می‌شود
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div dir="ltr" className="flex h-[250vh] overflow-hidden">
            <div className="sticky top-0 h-screen flex flex-col justify-center px-8 pb-8">
                <div
                    ref={imgWrapperRef}
                    className="transform origin-[10%_100%] h-auto"
                >
                    <Image
                        src={Logo}
                        alt="نمونه لوگو"
                        width={300}
                        height={200}
                        className="block z-0"
                    />
                </div>
            </div>

            <div ref={rightRef} className="w-full z-10 absolute">
                <div dir={"rtl"} className="w-full items-start justify-center p-8 mb-3">
                    <div>
                        <div>
                            <Image src={Star.src} alt={'star'} width={65} height={23}/>
                        </div>
                        <div className={'text-4xl lg:text-5xl font-bold my-6'}>درباره ما</div>
                        <div className={'text-2xl lg:text-3xl mb-3 font-black'}>اوستاوب،تیمی جوان و پویا با تجربه ای استادانه</div>
                        <div className={''}>اوستاوب، تیمی خلاق و پرانرژی از متخصصان طراحی وب است که با هدف خلق وبسایت‌هایی زیبا،کاربردی و متناسب با نیازهای کسب‌وکار شما گرد هم آمده‌اند.
                            ما معتقدیم که یک وبسایت خوب تنها یک ویترین نیست،بلکه ابزاری قدرتمند برای ارتباط با مشتریان و رشد کسب‌وکار است. با سال‌ها تجربه و دانش فنی بالا، ما به شما کمک می‌کنیم تا هویت برند خود را به بهترین شکل در دنیای آنلاین به نمایش بگذارید.</div>
                    </div>
                    <div className={'mt-12 flex gap-8 mb-20'}>
                        <SubmitButton width={'120px'}>
                            درباره ما
                        </SubmitButton>
                        <SubmitButton width={'200px'}>
                            تماس با ما
                        </SubmitButton>
                    </div>
                    <div className={'hidden lg:flex justify-center gap-20 '}>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                    <div>
                    <MobileCard/>
                    </div>
                </div>

                <div dir={'rtl'} className="h-screen w-full z-10">
                    <div className={'mb-6'}>
                        <Image src={Star.src} alt={'star'} width={65} height={23}/>
                    </div>
                    <div className={'text-5xl font-bold mb-16'}>تیم متخصص اوستا وب</div>

                    <div className={'flex items-center flex-wrap justify-center gap-16 w-[60%] mx-auto'}>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                        <AdminCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Aboutanimation;