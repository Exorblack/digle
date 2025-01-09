"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";


const Hero = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const txt = useRef<HTMLDivElement>(null);
  const heroref = useRef<HTMLVideoElement>(null);

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
      <div className="relative h-screen bg-blue-300 z-10 ">
        <div className="absolute inset-0 -z-50">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        </div>

        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-b-[700px]"
          loop
          autoPlay
          muted
          playsInline
          ref={heroref}
        >
          <source src="/7792630-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        </video>

        {/* hero text */}
        <div className="absolute flex items-center justify-center w-full h-full pt-16">
          <div ref={txt} className="text-center">
            <h1 className=" text-9xl uppercase font-extrabold text-blue-300/50">
              Digle
            </h1>
            <p className="text-3xl text-blue-100/80">
              Your Digital Journey Starts with Us, Turning Your Ideas into
              reality
            </p>

            <div className="mt-4">
              <button
                onClick={() => handleScrollToSection("services")}
                className="px-6 py-3 text-lg font-semibold text-blue-100/80 border border-x-2 hover:bg-gradient-to-b hover:from-blue-200/55 hover:to-blue-900/50 backdrop-blur-md hover:border-blue-500/55 border-b-[0.6rem] border-blue-300/50 bg-gradient-to-b from-blue-400/55 to-blue-950/50 rounded-full shadow-xl duration-75"
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
