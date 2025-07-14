'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseLight = () => {
    const lightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (lightRef.current) {
                gsap.to(lightRef.current, {
                    x: e.clientX - 50,
                    y: e.clientY - 50,
                    ease: 'power2.out',
                    duration: 0.3,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={lightRef}
            className="pointer-events-none fixed top-0 left-0 z-50 w-[100px] h-[100px] rounded-full bg-[#B5964D] opacity-20 shadow-[0_0_40px_20px_#B5964D]"
        />
    );
};

const Brands = () => {
    return (
        <>
            {/*<MouseLight />*/}
            <div className="h-[100vh] relative overflow-hidden bg-black text-white flex items-center justify-center">
                <div className="text-[clamp(3rem,2.5vw,6rem)] font-bold">
                    جات اینجاست
                </div>
            </div>
        </>
    );
};

export default Brands;
