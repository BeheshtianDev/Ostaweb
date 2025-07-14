"use client"
import React, {useRef, useEffect, useCallback} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Logo from "../../public/images/sold.png"
import Image from "next/image";
import Aboutanimation from "@/app/aboutanimation/page";
import Land from "@/components/sections/head/page";
// ... بقیۀ ایمپورت‌ها

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function OstaWebSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ostaRef    = useRef<HTMLDivElement>(null);
    const webRef     = useRef<HTMLDivElement>(null);
    const imageRefs  = useRef<HTMLImageElement[]>([]);

    const addToRefs = useCallback((el: HTMLImageElement | null) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    }, []);

    useEffect(() => {
        if (!sectionRef.current) return;

        // 1. matchMedia برای موبایل و دسکتاپ
        const mm = gsap.matchMedia();

        mm.add({
            // موبایل: تا 1023px
            isMobile: "(max-width: 1023px)",
            // دسکتاپ: از 1024px
            isDesktop: "(min-width: 1024px)"
        }, (context) => {
            // با هر بار تغییر سایز، این فانکشن فراخوانی میشه
            const { isMobile, revert } = context;

            // Timeline کلی
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current!,
                    start: "top top",
                    end: "bottom top -50%",
                    pin: true,
                    scrub: 1.5,
                    // markers: true
                }
            });

            // --- انیمیشن اول ---
            if (isMobile) {
                // موبایل: y حرکت بده
                tl.to(ostaRef.current, {
                    x: '-200vw',
                    ease: 'power2.out',
                    duration: 4
                }, 0)
                    .to(webRef.current, {
                        x: '200vw',
                        ease: 'power2.out',
                        duration: 4
                    }, 0);
            } else {
                // دسکتاپ: طبق قبل با x
                tl.to(ostaRef.current, {
                    x: '-40vw',
                    ease: 'power2.out',
                    duration: 4
                }, 0)
                    .to(webRef.current, {
                        x: '40vw',
                        ease: 'power2.out',
                        duration: 4
                    }, 0);
            }

            // --- انیمیشن تصاویر (بدون تغییر) ---
            const images = imageRefs.current;
            gsap.set(images, {
                x: '100vw',
                opacity: 0,
                top: '50%',
            });
            images.forEach((image, index) => {
                const delay = index * 8;
                tl.to(image, {
                    x: '-10vw',
                    opacity: 1,
                    duration: 6,
                    ease: "power2.out"
                }, delay);
                tl.to(image, {
                    x: '-100vw',
                    opacity: 0,
                    duration: 6,
                    ease: "power2.in"
                }, delay + 3);
            });

            // Cleanup برای این context
            return () => {
                tl.kill();
                if (tl.scrollTrigger) tl.scrollTrigger.kill();
                revert(); // revert تمام تغییرات GSAP
            };
        });

        // خروجی useEffect: revert همه media-specific animations
        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>
            <Land/>
            <div ref={sectionRef} className="relative h-screen overflow-hidden z-10">
                {/* کلاس‌های Tailwind برای چرخش */}
                <div
                    dir="ltr"
                    className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-20 rotate-90 lg:rotate-0"
                >
                    <div ref={ostaRef} className="text-[10vw] font-black text-white">osta</div>
                    <div ref={webRef}  className="text-[10vw] font-black text-white">web</div>
                </div>

                <div className="absolute inset-0 w-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            ref={addToRefs}
                            src={Logo}
                            alt={`Project ${index + 1}`}
                            width={400}
                            height={300}
                            className="absolute w-[30vw] max-w-[500px] h-auto opacity-80"
                            style={{
                                top: '50%',
                                transform: 'translateY(-50%)',
                                marginLeft: `${index * 60}px`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-30">
                <Aboutanimation/>
            </div>
        </>
    );
}
