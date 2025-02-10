"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Lenis from "lenis";
import { motion } from "framer-motion";

const Hero = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  gsap.registerPlugin( ScrollTrigger);
  const ImgR = useRef<HTMLImageElement>(null);
  const Imgone = useRef<HTMLDivElement>(null);
  const ImgR1 = useRef<HTMLImageElement>(null);
  const Imgone1 = useRef<HTMLImageElement>(null);
  const ImgsRef = useRef<(HTMLDivElement | null)[]>([]);
  const heroref = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const shapeRef1 = useRef<HTMLDivElement>(null);
  const shapeRef2 = useRef<HTMLDivElement>(null);

  // mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      ImgsRef.current.forEach((shape, index) => {
        // Calculate the center of the window
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate how far the mouse is from center
        const deltaX = (clientX - centerX) * 0.1;
        const deltaY = (clientY - centerY) * 0.1;

        // Add different speeds for each shape to create depth
        const speed = 0.4 + index * 0.2;

        gsap.to(shape, {
          x: deltaX * speed,
          y: deltaY * speed,
          duration: 1,
          ease: "power4.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    gsap.to(heroref.current, {
      scrollTrigger: {
        trigger: heroref.current,
        start: "bottom 60%",
        end: "800px top",
        scrub: 1,
      },
      scale: 0.8,
    });
    const sm = gsap.matchMedia();

    sm.add("(min-width: 800px)", () => {
    gsap.to(ImgR.current, {
      yoyo: true,
      repeat: -1,
      duration: 2,
      translateY: 100,
      ease: "power1.inOut",
    });

    gsap.to(Imgone.current, {
      duration: 5,
      repeat:-1,
      repeatDelay: 3,
      delay:3,
      rotate:360,
      yoyo:true,
      xPercent: 450,
      yPercent: -300,
      scale:-3,
      ease: "power1.inOut",
    });

    gsap.to(ImgR1.current, {
      yoyo: true,
      repeat: -1,
      duration: 2,
      translateY: 100,
      ease: "power1.inOut",
    });

    gsap.from(Imgone1.current, {
      duration: 5 ,
      repeat:-1,
      delay:3,
      repeatDelay: 3 ,
      rotate:360,
      yoyo:true,
      xPercent: -350,
      yPercent: -150,
      scale:-0.7,
      ease: "power1.inOut",
      stagger:0.1
    });

    gsap.to(shapeRef.current,{
      translateX: 950,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "back.inOut",
    });
    gsap.to(shapeRef1.current, {
      translateX: 1200,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "back.inOut",
    });
    gsap.to(shapeRef2.current, {
      translateX: -1000,
      scale: 1.2,
      delay: 0.5,
      yoyo: true,
      repeat: -1,
      duration: 6,
      ease: "expo.inOut",
    });
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
      <div className="relative h-screen bg-[#9b9b9b] overflow-hidden">
        <div
          className="absolute w-full h-full rounded-b-4xl overflow-hidden"
          ref={heroref}
        >
          {/* bg */}
          <div className="absolute w-full h-full -z-50 blur-3xl">
            <div
              ref={shapeRef}
              className="absolute -top-20 left-10 sm:-top-60 sm:left-50"
            >
              <Image
                src={"/backg/Vector-3.svg"}
                alt={"vbg"}
                width={900}
                height={900}
                priority
              ></Image>
            </div>
            <div
              ref={shapeRef1}
              className="absolute bottom-20 -left-10 sm:-bottom-110 sm:-left-50"
            >
              <Image
                src={"/backg/Vector-1.svg"}
                alt={"vbg"}
                width={900}
                height={900}
                priority
              ></Image>
            </div>
            <div ref={shapeRef2} className="absolute -bottom-80 -right-45">
              <Image
                src={"/backg/Vector-5.svg"}
                alt={"vbg"}
                width={1200}
                height={1200}
                priority
              ></Image>
            </div>
          </div>

          {/* hero text */}
          <motion.div
            initial={{ opacity: 0, scaleZ: -100 }}
            animate={{ opacity: 1, scaleZ: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-center justify-between h-full"
          >
            <div
              className="absolute sm:relative z-50 text-center pl-7 sm:pl-30"
            >
              <p className="text-lg sm:text-5xl text-[#000] py-7">
                Your Digital Journey Starts with Us
              </p>
              <p className="text-sm sm:text-2xl text-[#ecf39e] font-medium">
                Turning Your Ideas into Reality
              </p>
              <div className="mt-7">
                <button
                  onClick={() => handleScrollToSection("services")}
                  className="px-8 py-3 font-medium bg-[#1a535c] text-[#fff] rounded-lg w-fit transition-all shadow-[3px_10px_5px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
                >
                  Discover Our Services
                </button>
              </div>
            </div>

          <div>
              <div ref={Imgone} className="absolute right-0 sm:right-60 top-16">
                <div
                  ref={(el) => {
                    ImgsRef.current[0] = el;
                  }}
                >
                    <Image
                      src={"/abb644e89962a186d6a2937e374f7a8f.png"}
                      alt={"digle"}
                      width={600}
                      height={600}
                      priority
                      ref={ImgR}
                      className=" sm:opacity-100 opacity-40"
                    ></Image>
                </div>
              </div>

              <div ref={Imgone1} className="pr-24 sm:pr-60">
                <div
                  ref={(el) => {
                    ImgsRef.current[1] = el;
                  }} 
                >
                    <Image
                      src={"/86265002b616c02fe011c69af00eb66e.png"}
                      alt={"digle"}
                      width={700}
                      height={700}
                      priority
                      ref={ImgR1}
                      className=" sm:opacity-100 opacity-40"
                      ></Image>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
