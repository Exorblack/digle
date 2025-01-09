"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface works{
  id:string
}
export const DragCards:React.FC<works> = ({id}) => {
  return (
    <section id={id} className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-blue-950 border-t-2 border-blue-500 ">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
      </div>
        <h2 className="relative text-[20vw] font-black text-blue-200 md:text-[200px]">
          WORKS<span className="text-blue-500">.</span>
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
