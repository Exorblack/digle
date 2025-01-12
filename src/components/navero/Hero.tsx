"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";


const Hero = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const txt = useRef<HTMLDivElement>(null);
  const heroref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    gsap.to(heroref.current, {
      scrollTrigger: {
        trigger: heroref.current,
        start: "bottom 60%",
        end: "800px top",
        scrub: 1,
      },
      scale:0.8,
    });
    gsap.to(txt.current, {
      scrollTrigger: {
        trigger: txt.current,
        start: "top 40%",
        end: "bottom 10%",
        scrub: true,
      },
      opacity: 0,
      y: -150,
      ease: "power3.out",
    });
  });

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
    };
  return (
    <>
      {/* Background Video */}
      <div className="relative h-screen bg-[#dddddd] z-10 ">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-[#8ECAE6]/100 rounded-b-3xl"
          ref={heroref}
        >
        </div>

        {/* hero text */}
        <div className="absolute flex items-center justify-center w-full h-full pt-16">
          <div ref={txt} className="text-center">
            <h1 className=" text-8xl sm:text-9xl uppercase font-extrabold text-[#023047]/100">
              Digle
            </h1>
            <p className="text-lg sm:text-3xl text-[#219EBC]/100">
              Your Digital Journey Starts with Us, Turning Your Ideas into
              reality
            </p>

            <div className="mt-4">
              <button
                onClick={() => handleScrollToSection("services")}
                className="px-6 py-3 text-lg font-semibold text-[#219EBC] border-4 backdrop-blur-md border-[#219EBC] bg-gradient-to-b from-[#FFB703]/90 to-[#FB8500]/90 hover:bg-gradient-to-b hover:from-[#FB8500]/90 hover:to-[#FFB703]/90 rounded-full shadow-xl duration-75"
              >
                Discover Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
