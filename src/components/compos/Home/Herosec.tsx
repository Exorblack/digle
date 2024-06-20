"use client"
import React from 'react';
import Image from "next/image";

const Herosec = () => {

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[32rem] flex items-center justify-center">
      <Image 
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
      </div>
    </div>
  );
}

export default Herosec;
