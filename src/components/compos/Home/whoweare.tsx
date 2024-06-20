import React from 'react';
import Image from "next/image";
import Link from 'next/link';

interface whowe{
  id:string
}

const AboutUsSection:React.FC<whowe> = ({id}) => {
  return (
    <>
    <div className="py-10 bg-neutral-50 dark:bg-neutral-950 flex flex-col md:flex-row items-center" id={id}>
      <div className="md:w-1/2 p-6">
        <h3 className="text-md font-medium text-green-600 dark:text-green-400 uppercase mb-2">Who We Are</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">we specialize in a range of services designed to help businesses thrive in the digital landscape</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        At Digle, we are dedicated to empowering businesses through innovative web development and design. Our agency merges creativity with cutting-edge technology to enhance the way companies connect with their audiences. We believe in creating personalized digital experiences that resonate with customers and humanize brands, no matter their size.
        </p>
        <Link href={'/contact'}><button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">Contact Us</button></Link>
      </div>
      <div className="md:w-1/2 p-6">
        <Image 
        src="/aboutcoding.jpg" 
        alt="About Us" 
        className="rounded-3xl shadow-xl"
        width={650}
        height={650}
        ></Image>
      </div>
    </div>
    {/* ------------------------ */}
    <div className=" bg-neutral-50 dark:bg-neutral-950 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-6">
        <Image 
        src="/macbook-1093641_1920.jpg" 
        alt="About Us" 
        className="rounded-3xl shadow-xl"
        width={650}
        height={650}
        ></Image>
      </div>
      <div className="md:w-1/2 p-6">
        <h3 className="text-sm font-medium text-green-600 dark:text-green-400 uppercase mb-2">What We Do</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Helping businesses succeed through the power of web development , Design.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Digle Agency uses innovative web development strategies to enhance the way companies connect and communicate. We help organizations of all sizes humanize their digital presence and personalize their customer experiences.
        </p>
      </div>
    </div>
      {/* --------------------- */}
    <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-col md:flex-row items-center" id={id}>
      <div className="md:w-1/2 p-6">
        <h3 className="text-md font-medium text-green-600 dark:text-green-400 uppercase mb-2">Our Mission</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">we want see you success 😊</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        Our mission is to bridge the gap between creativity and technology by delivering custom web solutions that drive growth and foster strong, lasting relationships. We are committed to excellence, innovation, and ensuring our clients' satisfaction.
        </p>
      </div>
      <div className="md:w-1/2 p-6">
        <Image 
        src="/apple-1841553_1920.jpg" 
        alt="About Us" 
        className="rounded-3xl shadow-xl"
        width={650}
        height={650}
        ></Image>
      </div>
    </div>
    </>
  );
};

export default AboutUsSection;
