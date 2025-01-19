"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import {Contacts} from "./popup/pop";


interface about {
  id:string
}
const AboutHoriz:React.FC<about> = ({id}) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, Draggable);

  useGSAP(() => {
    const cards = cardsRef.current;
    const container = containerRef.current;

    if (cards && container) {
      const cardsRect = cards.getBoundingClientRect();;
      const viewRect = container.getBoundingClientRect();
      const totalScrollWidth = cardsRect.width - viewRect.width;

      let sm = gsap.matchMedia();

sm.add("(min-width: 800px)", () => {
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
});
      Draggable.create(cards, {
        type: "x",
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
        bounds: {
          minX: -totalScrollWidth,
          maxX: 0,
        }
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
                  We&apos;re not just developers - we&apos;re your digital
                  transformation partners. we combine proven expertise with
                  cutting-edge technology to guide you toward digital
                  excellence.
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
                  In today&apos;s digital world, businesses can&apos;t afford to
                  have outdated websites that drive potential customers away,
                  Don&apos;t let your online presence hold your business back.
                </p>
                <div className="mt-8">
                  <Contacts />
                </div>
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
                  Imagine having a website that not only looks stunning but
                  actually works for your business - attracting qualified leads,
                  engaging visitors with smooth animations, and converting them
                  into loyal customers while you focus on what you do best.
                </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutHoriz;
