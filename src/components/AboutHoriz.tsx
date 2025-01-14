"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface about {
  id:string
}
const AboutHoriz:React.FC<about> = ({id}) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = cardsRef.current;
    const container = containerRef.current;

    if (cards) {
      const cardsWidth = cards.scrollWidth;
      const viewportWidth = window.innerWidth;
      const totalScrollWidth = cardsWidth - viewportWidth;

      gsap.to(cards, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScrollWidth}`,
          scrub: 1,
          pin: true,
        },
        x: -totalScrollWidth,
        opacity: 1,
        ease: "power1.inOut",
      });
      
    }


  });
  return (
    <>
      <section
        ref={containerRef}
        id={id}
        className="relative overflow-hidden bg-[#dddddd] "
      >
        <div
          ref={cardsRef}
          className="flex flex-nowrap w-fit h-screen px-2 md:px-4 pt-20 md:pt-36 gap-4 md:gap-10"
        >
          {/* Slide 1 */}
          <div className=" relative bg-[#219EBC]/95 h-[70dvh] w-[85vw] md:w-[70vw] lg:w-[50vw] rounded-[100px] overflow-hidden">
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#023047]">
                WHO WE ARE
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-5 text-[#FFB703]">
                &quot;we bring your digital dreams to life&quot;
              </p>
              <p className="description text-xl sm:text-2xl w-[95%] md:w-[90%] text-[#023047] leading-relaxed">
                We combine creativity and the latest technology to help
                businesses connect with their audiences in meaningful ways. No
                matter the size of your company, we create personalized digital
                experiences that make your brand stand out.
              </p>
            </div>
          </div>
          {/* Slide 2 */}

          <div className="relative h-[70vh] w-[85vw] md:w-[70vw] lg:w-[50vw] bg-[#FB8500]/95 rounded-[100px] overflow-hidden">
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center p-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#023047]">
                WHAT WE DO
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-5 text-[#219EBC]/90">
                &quot;We build websites that work for you&quot;
              </p>
              <p className="description text-xl sm:text-2xl w-[95%] md:w-[90%] text-[#023047] leading-relaxed">
                Our expert web design and development services help businesses
                succeed by enhancing how they connect and communicate with their
                customers. We also offer emotional, animation website to ensure
                your company has a unique and engaging online presence.
              </p>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="relative h-[70vh] w-[85vw] md:w-[70vw] lg:w-[50vw] bg-[#023047]/95 rounded-[100px] overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#8ECAE6]">
                OUR MISSION
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-5 text-[#FB8500]">
                &quot;Your success is our priority 😊&quot;
              </p>
              <p className="description text-xl sm:text-2xl w-[95%] md:w-[90%] text-[#8ECAE6] leading-relaxed">
                We provide custom web solutions that drive growth and build
                lasting relationships. At Digle, we blend creativity with
                technology to deliver innovative designs and reliable solutions
                that ensure your satisfaction and keep you ahead of the
                competition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHoriz;
