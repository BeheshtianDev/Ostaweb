"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const heroSpotlightRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const blinkTimeline = useRef<gsap.core.Tween | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // threshold for mobile, adjust as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  useEffect(() => {
    const cursorEls = [
      outerRef.current,
      innerRef.current,
      spotlightRef.current,
    ];
    cursorEls.forEach((el) => {
      if (el) document.body.appendChild(el);
    });
  }, []);
  useEffect(() => {
    if (isMobile) {
      // On mobile: do nothing, no event listeners or animation
      return;
    }
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // === Spotlight Effect ===
      const spotlightTarget = document.getElementById("spotlight-target");
      let insideSpotlight = false;
      if (spotlightTarget) {
        const rect = spotlightTarget.getBoundingClientRect();
        insideSpotlight =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
      }

      gsap.to(spotlightRef.current, {
        opacity: insideSpotlight ? 0.04 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
      // === Hero Spotlight Effect ===
      const heroTarget = document.getElementById("hero");
      let insideHero = false;
      if (heroTarget) {
        const rect = heroTarget.getBoundingClientRect();
        insideHero =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
      }

      gsap.to(heroSpotlightRef.current, {
        opacity: insideHero ? 0.5 : 0, // stronger yellow glow
        duration: 0.3,
        ease: "power2.out",
      });

      const target = e.target as HTMLElement;
      const isCursorPointer =
        target.closest("a, button, [role='button'], .cursor-pointer") !== null;
      const isTextInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("input") !== null ||
        target.closest("textarea") !== null;

      isHovering.current = isCursorPointer || isTextInput;

      gsap.to(outerRef.current, {
        width: 40,
        height: 40,
        opacity: 0.6,
        duration: 0.6,
        ease: "power3.out",
      });

      if (isTextInput) {
        // === Vertical Line ===
        gsap.to(innerRef.current, {
          width: 2,
          height: 19,
          borderRadius: 1,
          duration: 0.2,
          ease: "power2.out",
        });

        if (!blinkTimeline.current) {
          blinkTimeline.current = gsap.to(innerRef.current, {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        }
      } else if (isCursorPointer) {
        // === Hover Dot ===
        gsap.to(innerRef.current, {
          width: 10,
          height: 10,
          borderRadius: 9999,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });

        if (blinkTimeline.current) {
          blinkTimeline.current.kill();
          blinkTimeline.current = null;
          gsap.set(innerRef.current, { opacity: 1 });
        }
      } else {
        // === Default State ===
        gsap.to(outerRef.current, {
          width: 70,
          height: 70,
          opacity: 0.2,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(innerRef.current, {
          width: 20,
          height: 20,
          borderRadius: 9999,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });

        if (blinkTimeline.current) {
          blinkTimeline.current.kill();
          blinkTimeline.current = null;
          gsap.set(innerRef.current, { opacity: 1 });
        }
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      lastScrollY.current = currentScroll;

      gsap.to(outerRef.current, {
        width: 40,
        height: 80,
        borderRadius: 20,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(innerRef.current, {
        width: 15,
        height: 40,
        borderRadius: 10,
        duration: 0.3,
        ease: "power2.out",
      });

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        gsap.to(outerRef.current, {
          width: isHovering.current ? 40 : 70,
          height: isHovering.current ? 40 : 70,
          borderRadius: 9999,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(innerRef.current, {
          width: 20,
          height: 20,
          borderRadius: 9999,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 300);
    };

    const handleClick = () => {
      gsap.to(innerRef.current, {
        scale: 1.5,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(outerRef.current, {
        scale: 0.7,
        duration: 0.2,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(innerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(outerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          });
        },
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick);

    const render = () => {
      gsap.to(outerRef.current, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.2,
        ease: "power3.out",
      });

      gsap.to(innerRef.current, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(spotlightRef.current, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(heroSpotlightRef.current, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 1,
        ease: "power3.out",
      });
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);

      if (blinkTimeline.current) {
        blinkTimeline.current.kill();
        blinkTimeline.current = null;
      }
    };
  }, [isMobile]);
  if (isMobile) {
    return null; // don't render anything on mobile
  }
  return (
    <>
      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-white opacity-0 blur-[30px]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Hero Spotlight */}
      <div
        ref={heroSpotlightRef}
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B5964D] opacity-0 blur-[100px] "
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Outer cursor */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed top-0 left-0 w-[70px] h-[70px] border-2 border-white rounded-full z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Inner cursor */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
