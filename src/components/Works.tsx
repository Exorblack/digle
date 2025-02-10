"use client"
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Works {
  id: string
}

const Works: React.FC<Works> = ({ id }) => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(img1Ref.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
      y: 500,
    });

    gsap.to(img2Ref.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: -200,
    });

    gsap.to(img3Ref.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      y: 150,
    });

    gsap.to(img4Ref.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
      y: 500,
    });
  }, []);

  return (
    <>
    <section ref={sectionRef} id={id} className='relative sm:h-[240dvh] h-[170dvh] border-b-1 border-[#fff] flex flex-col items-center justify-center bg-[#1a428f] overflow-hidden'>
      {/* Texts */}
      <div className='text-center z-40 '>
        <h1 className='text-[#219EBC] text-2xl sm:text-7xl font-extrabold'>Works</h1>
        <p className='text-white text-md sm:text-2xl max-w-3xl mx-auto mt-2'>
          Explore our collection of creative projects, Each piece reflects our dedication to crafting exceptional digital experiences.
        </p>
      </div>
      {/* works imgs */}
      <div>
        <div ref={img1Ref} className='absolute group bottom-150 left-40'>
          <Link href={'/'} >
            <Image loading='lazy' unoptimized width={700} height={0} src="/porto/treno.gif" alt="digle-works" className='rounded-3xl hover:shadow-2xl blur-none sm:blur-[1px] hover:blur-none hover:scale-110 duration-500 '/>
              <ArrowUpRight 
                      className="text-[#fff] bg-black rounded-2xl opacity-0 group-hover:opacity-80 duration-300 absolute top-0"
                      size={64}
              />
          </Link>
        </div>
        <div ref={img2Ref} className='absolute group bottom-100 right-40'>
          <Link href={'/'} >
            <Image loading='lazy' width={700} height={0} src="/porto/portf2.jpeg" alt="digle-works" className='rounded-3xl hover:shadow-2xl blur-none sm:blur-[1px] hover:blur-none hover:scale-110 duration-500 '/>
              <ArrowUpRight 
                      className="text-[#fff] bg-black rounded-2xl opacity-0 group-hover:opacity-80 duration-300 absolute top-0"
                      size={64}
              />
          </Link>
        </div>
        <div ref={img3Ref} className='absolute group top-100 right-40'>
          <Link href={'/'} >
            <Image loading='lazy' width={700} height={0} src="/porto/portf4.jpeg" alt="digle-works" className='rounded-3xl hover:shadow-2xl blur-none sm:blur-[1px] hover:blur-none hover:scale-110 duration-500 '/>
              <ArrowUpRight 
                      className="text-[#fff] bg-black rounded-2xl opacity-0 group-hover:opacity-80 duration-300 absolute top-0"
                      size={64}
              />
          </Link>
        </div>
        <div ref={img4Ref} className='absolute group top-40 left-40'>
          <Link href={'/'} >
            <Image loading='lazy' width={700} height={0} src="/porto/portf5.jpeg" alt="digle-works" className='rounded-3xl hover:shadow-2xl blur-none sm:blur-[1px] hover:blur-none hover:scale-110 duration-500 '/>
              <ArrowUpRight 
                      className="text-[#fff] bg-black rounded-2xl opacity-0 group-hover:opacity-80 duration-300 absolute top-0"
                      size={64}
              />
          </Link>
        </div>
      </div>

    </section>
  </>
  );
};

export default Works;