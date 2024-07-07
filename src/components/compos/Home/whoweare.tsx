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
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">we bring your digital dreams to life</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        We combine creativity and the latest technology to help businesses connect with their audiences in meaningful ways. No matter the size of your company, we create personalized digital experiences that make your brand stand out.
        </p>
        <Link href={'/contact'}><button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">Contact Us</button></Link>
      </div>
      <div className="md:w-1/2 p-6">
        <Image 
        src="/whoweare.jpg"
        alt="About Us" 
        className="rounded-3xl shadow-xl transition hover:-translate-x-5"
        width={650}
        height={650}
        ></Image>
      </div>
    </div>
    {/* ------------------------ */}
    <div className=" bg-neutral-50 dark:bg-neutral-950 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2 p-6">
        <Image 
        src="/whatwedo.jpg" 
        alt="About Us" 
        className="rounded-3xl shadow-xl transition hover:translate-x-5"
        width={650}
        height={650}
        ></Image>
      </div>
      <div className="md:w-1/2 p-6">
        <h3 className="text-sm font-medium text-green-600 dark:text-green-400 uppercase mb-2">What We Do</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">We build websites that work for you</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        Our expert web design and development services help businesses succeed by enhancing how they connect and communicate with their customers. We also offer comprehensive branding, digital marketing services to ensure your company has a unique and engaging online presence.
        </p>
      </div>
    </div>
      {/* --------------------- */}
    <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-6">
        <h3 className="text-md font-medium text-green-600 dark:text-green-400 uppercase mb-2">Our Mission</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Your success is our priority 😊</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        We provide custom web solutions that drive growth and build lasting relationships.<br/>
        At Digle, we blend creativity with technology to deliver innovative designs and reliable solutions that ensure your satisfaction and keep you ahead of the competition.
        </p>
      </div>
      <div className="md:w-1/2 p-6">
        <Image 
        src="/suuc.jpg" 
        alt="About Us" 
        className="rounded-3xl shadow-xl transition hover:-translate-x-5"
        width={650}
        height={650}
        ></Image>
      </div>
    </div>
    </>
  );
};

export default AboutUsSection;
