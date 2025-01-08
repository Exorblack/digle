"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
    const floatingElements = container?.querySelectorAll(".floating");
    const floatingElements2 = container?.querySelectorAll(".floating2");

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
      
      floatingElements?.forEach((el) => {
        gsap.to(el, {
          repeat: -1,
          yoyo: true,
          duration: 3.5,
          scale: 1.5,
          ease: "back.inOut",
        });
      });
      
      floatingElements2?.forEach((el) => {
        gsap.to(el, {
          repeat: -1,
          yoyo: true,
          duration: 3,
          scale: 1.3,
          rotate:360,
          ease: "power4.inOut",
        });
      });
    }


  });
  return (
    <>
      <section
        ref={containerRef}
        id={id}
        className="relative overflow-hidden bg-gradient-to-b from-blue-300 via-blue-800 to-gray-950 "
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        </div>
        <div
          ref={cardsRef}
          className="flex flex-nowrap w-fit h-screen px-2 md:px-4 pt-20 md:pt-36 gap-4 md:gap-10"
        >
          {/* Slide 1 */}
          <div className=" relative bg-blue-900/95 h-[70vh] w-[85vw] md:w-[70vw] lg:w-[50vw] rounded-[100px] overflow-hidden">
            <Image
              src="/abt/rb_27786.png"
              alt=""
              width={900}
              height={900}
              className="floating absoute inset-0 w-[350px] h-[350px] my-20 sm:w-[500px] sm:h-[500px] object-fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-blue-300/80">
                WHO WE ARE
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-5 text-blue-300/90">
                &quot;we bring your digital dreams to life&quot;
              </p>
              <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center text-center p-4 md:px-6">
                <p className="description text-xl sm:text-2xl w-[95%] md:w-[90%] text-blue-200/75 leading-relaxed">
                  We combine creativity and the latest technology to help
                  businesses connect with their audiences in meaningful ways. No
                  matter the size of your company, we create personalized
                  digital experiences that make your brand stand out.
                </p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}

          <div className="relative h-[70vh] w-[85vw] md:w-[70vw] lg:w-[50vw] bg-blue-950/90 rounded-[100px] overflow-hidden">
            <Image
              src="/abt/rb_79859.png"
              alt=""
              width={900}
              height={900}
              className=" floating2 absoute inset-0 w-[300px] h-[300px] my-50 sm:w-[500px] sm:h-[500px] object-fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-blue-300/80">
                WHAT WE DO
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-5 text-blue-300/90">
                &quot;We build websites that work for you&quot;
              </p>
              <div className="absolute bottom-0 left-0 w-full h-72 sm:h-96 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center text-center p-4 md:px-6">
                <p className="description text-xl sm:text-2xl w-[95%] md:w-[90%] text-blue-200/75 leading-relaxed">
                  Our expert web design and development services help businesses
                  succeed by enhancing how they connect and communicate with
                  their customers. We also offer emotional, animation website to
                  ensure your company has a unique and engaging online presence.
                </p>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="relative h-[70vh] w-[85vw] md:w-[70vw] lg:w-[50vw] bg-blue-900/70 rounded-[100px] overflow-hidden">
            <Image
              src="/abt/rb_80357.png"
              alt=""
              width={900}
              height={900}
              className="floating absoute inset-0 w-[300px] h-[300px] my-20 sm:w-[500px] sm:h-[500px] object-fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-blue-300/80">
                OUR MISSION
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-5 text-blue-300/90">
                &quot;Your success is our priority 😊&quot;
              </p>
              <div className="absolute bottom-0 left-0 w-full h-80 sm:h-96 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center text-center p-4 md:px-6">
                <p className="description text-xl sm:text-2xl w-[95%] md:w-[90%] text-blue-200/75 leading-relaxed">
                  We provide custom web solutions that drive growth and build
                  lasting relationships. At Digle, we blend creativity with
                  technology to deliver innovative designs and reliable
                  solutions that ensure your satisfaction and keep you ahead of
                  the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHoriz;
