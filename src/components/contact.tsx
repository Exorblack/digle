"use client";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Sparkles,
} from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaBehance, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import {Conversation} from "./popup/pop";
interface contact{
  id:string
}
const Zoomd:React.FC<contact> = ({id}) => {
  //zooming
  const zoomdRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: zoomdRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 2], [3, 8.32]);

  // animations
  const textRef = useRef(null);
  const textsubRef = useRef(null);
  const contactsRef = useRef(null);
  const introTextRef = useRef(null);
  const floatingStarsRef = useRef(null);
  const starRef = useRef(null);
  const socialRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {

    gsap.from(introTextRef.current, {
      scrollTrigger: {
        trigger: introTextRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
      },
      y: 100,
      opacity: 0,
    });

    gsap.from(floatingStarsRef.current, {
      scrollTrigger: {
        trigger: floatingStarsRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      y: 200,
      opacity: 0,
      stagger: 0.2,
      rotate: 45,
    });

    gsap.from(socialRef.current, {
      scrollTrigger: {
        trigger: contactsRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },

    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: zoomdRef.current,
        start: "40% center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    
    tl.from(starRef.current, {
      z: 100,
      opacity: 0,
      duration: 0.5,
    })
    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    })
      .from(textsubRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
      })
      .from(contactsRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
        ease: "back.out",
      })
      tl.from(socialRef.current,{
        scale: 0.2,
        opacity: 0,
        rotation: -15,
        stagger: 0.2,
        ease: "back.out",
      });
  });
  return (
    <>
      <section
        ref={zoomdRef}
        id={id}
        className="relative h-[300vh] bg-[#FFB703]"
      >
        <div
          ref={introTextRef}
          className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#023047]/90 mb-4">
              are you Ready?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#219EBC] max-w-2xl mx-auto">
              Scroll Down To Get started
            </p>
          </div>

          {/* Floating stars */}
          <div
            ref={floatingStarsRef}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 ">
              <Sparkles className="w-12 h-12 text-[#219EBC]/50" />
            </div>
            <div className="absolute top-2/3 right-1/4">
              <Sparkles className="w-12 h-12 text-[#219EBC]/50" />
            </div>
            <div className="absolute top-1/3 right-1/3">
              <Sparkles className="w-12 h-12 text-[#219EBC]/50" />
            </div>
            <div className="absolute top-1/3 left-1/3">
              <Sparkles className="w-24 h-24 text-[#219EBC]/50" />
            </div>
            <div className="absolute top-2/3 left-1/4">
              <Sparkles className="w-24 h-24 text-[#219EBC]/50" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="overflow-hidden sticky top-0 h-screen">
          <div className="absolute">
            <motion.div
              style={{ scale }}
              className="relative w-[10vh] sm:w-[12vh] lg:w-[15vh] h-[10vh] sm:h-[12vh] lg:h-[15vh]"
            >
              <Image
                src="/921e85a350a3de65e9f9187f43500dfa.png"
                alt="digle"
                width={900}
                height={900}
                className="object-cover mt-72 sm:mt-60 lg:mt-80 ml-4 sm:ml-10 lg:ml-20 opacity-20 lg:opacity-50 xl:opacity-90 md:opacity-20 sm:opacity-20"
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 lg:pr-32">
            <div className="relative max-w-2xl">
              <div
                ref={starRef}
                className="absolute -left-2 sm:-left-12 lg:-left-20 -top-8 sm:-top-12"
              >
                <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-[#219EBC]/50 animate-spin-slow" />
              </div>

              <div className="mb-8 sm:mb-12 flex justify-center items-center overflow-hidden">
                <h1 className="text-6xl sm:text-6xl lg:text-8xl font-black tracking-tight space-y-2 sm:space-y-4">
                  <div
                    ref={textRef}
                    className="bg-gradient-to-r from-[#023047] via-[#023047]/90 to-[#023047]/70 bg-clip-text text-transparent"
                  >
                    Let&apos;s Build
                  </div>
                  <div ref={textsubRef} className="text-[#219EBC]/95">
                    The Future
                  </div>
                </h1>
              </div>

              {/* contact */}
              <div className="space-y-6 mb-12">
                {/* Email */}
                <div
                  ref={contactsRef}
                  className="group flex items-center cursor-cell justify-center text-2xl sm:text-4xl text-[#023047]/90 hover:text-[#023047]/95 transition-colors duration-300"
                >
                  <div className="relative flex gap-2 font-semibold ">
                    Contact@digle.org
                    <Mail className="w-8 h-8 sm:w-12 sm:h-12 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#023047]/50 group-hover:w-full transition-all duration-300"></span>
                  </div>
                </div>

                {/* Social Media */}
                <div ref={socialRef} className="grid grid-cols-4 gap-6 ">
                  {/* Behance */}
                  <Link
                    href="https://www.behance.net/337ba9b6"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <FaBehance className="w-12 h-12 text-[#023047]/80 transition-colors duration-500 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-[#219EBC]/0 rounded-lg group-hover:border-[#219EBC]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -top-4 -right-0 w-6 h-6 text-[#219EBC]/0 group-hover:text-[#219EBC]/40 transition-all duration-300" />
                  </Link>

                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/profile.php?id=61562478531666"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <FaFacebook className="w-12 h-12 text-[#023047]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-[#219EBC]/0 rounded-lg group-hover:border-[#219EBC]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-[#219EBC]/0 group-hover:text-[#219EBC]/40 transition-all duration-300" />
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/digle_agency"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <FaInstagram className="w-12 h-12 text-[#023047]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-[#219EBC]/0 rounded-lg group-hover:border-[#219EBC]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-[#219EBC]/0 group-hover:text-[#219EBC]/40 transition-all duration-300" />
                  </Link>

                  {/* TikTok */}
                  <Link
                    href="https://www.tiktok.com/@digle_agency"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <FaTiktok className="w-12 h-12 text-[#023047]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-[#219EBC]/0 rounded-lg group-hover:border-[#219EBC]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -bottom-4 right-3 w-6 h-6 text-[#219EBC]/0 group-hover:text-[#219EBC]/40 transition-all duration-300" />
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <Conversation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Zoomd;
