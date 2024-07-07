"use client"
import React from 'react';
import Image from "next/image";
import { HeroHighlight,Highlight  } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Herosec = () => {

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    {/* <div className="relative h-[32rem] flex items-center justify-center"> */}
      {/* <Image 
        src={'/horab.jpg'} 
        alt={'Coding with digle'}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        />
      <div className={`absolute inset-0 z-10 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-50`}></div>
      <div className="relative z-20 text-center text-white dark:text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className='text-green-500 dark:text-green-500'>Digle</span></h1>
        <h1 className="text-xl md:text-4xl font-bold mb-4"><span className='text-neutral-100 dark:text-neutral-50'>Where Creativity Meets Code</span></h1>
        <p className="text-lg md:text-2xl mb-6">Innovative web design solutions tailored to your business needs.</p>
        <button onClick={() => handleScrollToSection('pricing-section')} className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </div> */}

<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-green-700 dark:text-green-500 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Digle <br /> 
        <span className='text-neutral-900 dark:text-neutral-400 text-xl'>Where Creativity Meets Code</span><br/>
        <span className='text-neutral-800 dark:text-neutral-400 text-4xl'>Innovative web design solutions</span><br/>
        <Highlight className="text-black dark:text-white">
         tailored to your business needs.
        </Highlight>
      </motion.h1>
      <div className='pt-6 flex justify-center'>
      <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
        onClick={() => handleScrollToSection('pricing-section')} 
        className="px-6 py-3 bg-neutral-800 dark:bg-neutral-900 text-white rounded-lg shadow-md transition "
      >
        Get Started
      </motion.button>
      </div>

    </HeroHighlight>

    
    </>
  );
}

export default Herosec;
