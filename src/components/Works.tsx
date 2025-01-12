"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface works{
  id:string
}
export const DragCards:React.FC<works> = ({id}) => {
  return (
    <section
      id={id}
      className="relative grid min-h-[100dvh] w-full place-content-center overflow-hidden bg-[#219EBC] border-t-2 border-[#023047] "
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-[12dvh]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#023047"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <h2 className="relative text-[20vw] font-black text-[#023047] md:text-[200px]">
        WORKS<span className="text-[#8ECAE6]">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/porto/portf1.jpeg"
        alt="Example image"
        rotate="-6deg"
        top="10%"
        left="5%"
        className="w-fit h-[18rem] cursor-grab"
      />
      <Card
        containerRef={containerRef}
        src="/porto/portf2.jpeg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="70%"
        className="w-fit h-[18rem] cursor-grab"
      />
      <Card
        containerRef={containerRef}
        src="/porto/portf4.jpeg"
        alt="Example image"
        rotate="6deg"
        top="10%"
        left="40%"
        className="w-fit h-[18rem] cursor-grab"
      />
      <Card
        containerRef={containerRef}
        src="/porto/portf5.jpeg"
        alt="Example image"
        rotate="2deg"
        top="60%"
        left="25%"
        className="w-fit h-[18rem] cursor-grab"
      />
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
}

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <>

      <motion.img
        onMouseDown={updateZIndex}
        style={{
          top,
          left,
          rotate,
          zIndex,
        }}
        className={twMerge(
          "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
          className
        )}
        src={src}
        alt={alt}
        drag
        dragConstraints={containerRef}
        dragElastic={0.65}
      />
    </>
  );
};
