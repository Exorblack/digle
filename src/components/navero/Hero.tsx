"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Lenis from "lenis";

const Hero = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const txt = useRef<HTMLDivElement>(null);
  const heroref = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<(HTMLDivElement | null)[]>([]);

  // mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      shapesRef.current.forEach((shape, index) => {
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
      <div className="relative h-screen bg-[#dddddd] overflow-hidden">
        <div
          className="absolute w-full h-full rounded-b-4xl overflow-hidden"
          ref={heroref}
        >
          {/* bg */}
          <div className="absolute w-full h-full ">
            <Image
              src={"/bg.svg"}
              alt={"vbg"}
              width={1950}
              height={1080}
              className="object-cover w-full h-full"
              priority
            ></Image>
          </div>

          {/* line */}
          <svg className="absolute w-full h-full" viewBox="0 0 1000 700">
            <path
              d="M200,300 C400,100 600,500 800,300"
              fill="#023047"
              className="stroke-[#023047] stroke-2 opacity-30 fill-none"
            />
          </svg>

          {/* wave */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#219EBC"
              fillOpacity="0.4"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          {/* shapes */}
          <div
            ref={(el) => {
              shapesRef.current[0] = el;
            }}
            className="absolute top-32 left-10 md:left-60 w-32 h-32 md:w-60 md:h-60 bg-[#219EBC] shadow-2xl transition-transform"
          ></div>
          <div
            ref={(el) => {
              shapesRef.current[1] = el;
            }}
            className="absolute bottom-40 right-4 md:right-40 w-32 h-32 md:w-60 md:h-60 bg-[#FB8500] rounded-t-full shadow-2xl transition-transform"
          ></div>
          <div
            ref={(el) => {
              shapesRef.current[2] = el;
            }}
            className="absolute top-20 right-8 md:top-32 md:right-72 w-32 h-32 md:w-60 md:h-60 bg-[#FFB703] rounded-t-3xl shadow-2xl transition-transform"
          ></div>
          <div
            ref={(el) => {
              shapesRef.current[3] = el;
            }}
            className="absolute bottom-20 left-4 md:left-20 w-36 h-36 md:w-72 md:h-72 bg-[#023047] rounded-full shadow-2xl transition-transform"
          ></div>
        </div>

        {/* hero text */}
        <div className="absolute flex items-center justify-center w-full h-full pt-16">
          <div ref={txt} className="text-center">
            <h1 className="text-8xl sm:text-9xl uppercase font-extrabold text-[#023047]">
              Digle
            </h1>
            <p className="text-lg sm:text-3xl text-[#219EBC] font-semibold py-3">
              Your Digital Journey Starts with Us, Turning Your Ideas into
              Reality
            </p>

            <div className="mt-4">
              <button
                onClick={() => handleScrollToSection("services")}
                className="px-8 py-3 font-medium bg-[#219EBC] text-[#fff] rounded-lg w-fit transition-all shadow-[3px_3px_0px_#023047] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
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
