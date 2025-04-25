// "use client"
// import { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from 'next/image'
import Logo from "@/app/offerings/ui-ux/images/Rectangle 955467.svg"
import Demo from "@/app/offerings/ui-ux/card";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    // const heroRef = useRef<HTMLDivElement>(null);
    // const snapRef = useRef<HTMLDivElement>(null);
    //
    // useEffect(() => {
    //     if (!heroRef.current || !snapRef.current) return;
    //     const snapEl = snapRef.current;
    //     const heroEl = heroRef.current;
    //
    //     ScrollTrigger.create({
    //         trigger: snapEl,
    //         start: "top top",
    //         end: () => `bottom top`,       // تا وقتی ته snapEl به بالای viewport رسید
    //         pin: heroEl,                   // hero رو پین کن
    //         pinSpacing: false,             // فضای اضافه نسازه
    //         scrub: false,                  // بدون scrub چون CSS snap خودش انیمیشن جهشی رو می‌ده
    //
    //     });
    //
    //     return () => ScrollTrigger.getAll().forEach(st => st.kill());
    // }, []);

    return (
        <div className="relative">
            {/* تصویر ثابتِ پشتِ صحنه؛ اینو GSAP پین/آن‌پین می‌کنه */}
            <div
                // ref={heroRef}
                className="fixed inset-0 flex justify-center items-center pointer-events-none z-10"
            >
                <Image
                    src={Logo}
                    alt="Hero"
                    width={1.5}
                    height={85}
                    className="object-cover"
                />
            </div>

            {/* snap‑container: اسنپ عمودی جهشی */}
            <div>
                <div
                    // ref={snapRef}
                    className="snap-y snap-mandatory overflow-y-scroll h-screen w-full mx-auto"
                >
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>مقدمه1</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>مقدمه2</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>3مقدمه</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                    <div className="snap-center h-screen flex justify-between items-center text-4xl">
                        <div>مقدمه4</div>
                        <div className={'w-[40%]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                            sunt.
                        </div>
                    </div>
                </div>
            </div>

            <section className="min-h-screen bg-black p-10 z-20 relative">
                <div className={"flex  flex-wrap gap-5 justify-evenly"}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Demo key={index} />

                    ))}

                </div>
            </section>
        </div>
    );
}
