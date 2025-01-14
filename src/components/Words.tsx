"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Words = () => {


  const mtxt = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const text = mtxt.current;
  if (text) {
    const words = text.innerText.split(" ");
    text.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrap" style="display:inline-block;"><span style="opacity:0; display:inline-block;" class="word">${word}</span></span>`
      )
      .join(" ");
    const spans = text.querySelectorAll(".word");
    gsap.to(spans, {
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: -50,
      ease: "elastic.inOut",
      stagger: 0.01,
    });
  }
    }, []);



  return (
    <section className="bg-[#dddddd] relative">
      
      <div className="bg-transparent px-2 sm:px-3 md:px-4 max-w-[1550px] mx-auto">
        <div
          ref={mtxt}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] 
                     text-[#023047]/80
                     pt-4 sm:pt-6 md:pt-8 lg:pt-[35px]
                     w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
                     mx-auto text-center
                     leading-normal sm:leading-normal md:leading-relaxed
                     tracking-normal sm:tracking-wide md:tracking-wider"
        >
          we designs websites that reflect your brands unique identity ensuring
          a visually engaging and user-friendly experience.
        </div>
      </div>
    </section>
  );
};

export default Words;
