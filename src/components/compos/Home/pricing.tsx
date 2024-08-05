"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';  

interface Pricing{
  id:string
}

const PricingSection:React.FC<Pricing> = ({id}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

  return (
    <div className="py-16 bg-neutral-50 dark:bg-neutral-950" id={id}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-800 dark:text-neutral-200">Pricing</h2>
      <div className="flex flex-wrap justify-center">
        
        <div
          className={`m-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 rounded-lg shadow-lg transition-transform transform ${hoveredIndex === 0 ? 'scale-105' : ''} max-w-sm`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-center mb-4">
            <Image 
              height={30}
              width={30} 
              src="/star-gold-orange-svgrepo-com.svg" 
              alt="Gold icon" 
              className="w-12 h-12 mr-2" 
            /> 
            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400">Gold</h3>
          </div>
          <h4 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">$300</h4>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">Fast, ideal Solutions for Small Businesses and Startups</p>
          <a href='/contact'><button className="w-full px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300 mb-6">Get Started</button></a>
          <ul className="text-left text-neutral-700 dark:text-neutral-300 mb-6 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Professional, tailored design to fit your brand.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-sm" />
              WordPress Websites 
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-xl" />
              Basic Technical and on-page SEO to increase your leads
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              Responsive design ensuring your website looks great on all devices.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Basic security measures to protect your website
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Hosting and domain
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Unlimited changes until you are 100% satisfied.
            </li>
          </ul>
          
        </div>

        <div
          className="m-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 rounded-lg shadow-lg transform scale-105 max-w-sm"
        >
          <div className="flex items-center justify-center mb-4">
            <Image height={30} width={30} src="/diamond-svgrepo-com.svg" alt="Diamond icon" className="w-12 h-12 mr-2" />  
            <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400">Diamond</h3>
          </div>
          <h4 className="text-3xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">$700</h4>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">Perfect for growing businesses needing more robust features.</p>
          <a href="/contact"><button className="w-full px-6 py-2 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300 mb-6">Get Started</button></a>
          <ul className="text-left text-neutral-700 dark:text-neutral-300 mb-6 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Professional, tailored design to fit your brand.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
              Advanced Technical and on-page SEO to increase your leads and search engine rankings
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-xl" />
              Advanced security measures to protect your website.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              Integration with social media platforms for seamless updates.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              Responsive design ensuring your website looks great on all devices.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-lg" />
              Hosting and domain
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Unlimited changes until you are 100% satisfied.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-600" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Ongoing aftercare and support
            </li>
          </ul>
          
        </div>

        <div
          className={`m-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 rounded-lg shadow-lg transition-transform transform ${hoveredIndex === 2 ? 'scale-105' : ''} max-w-sm`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-center mb-4">
            <Image height={30} width={30} src="/platenum.png" alt="Platinum icon" className="w-12 h-12 mr-2" />  
            <h3 className="text-2xl font-semibold text-slate-600 dark:text-slate-400">Platinum</h3>
          </div>
          <h4 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">Custom</h4>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">The ultimate package for businesses seeking a comprehensive and fully customized digital solution.</p>
          <a href={'https://calendly.com/digle/30min'}><button className="w-full px-6 py-2 bg-[#5f6383] text-white rounded-lg shadow-md hover:bg-[#4b5074] transition duration-300 mb-6">Book a Meeting</button></a>
          
          <ul className="text-left text-neutral-700 dark:text-neutral-300 mb-6 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              High-end, complex designs and animations tailored to your brand.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-md" />
              Custom web design to tell your unique story.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
              Comprehensive SEO strategies for top search engine performance to increase your leads.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-md" />
              Custom SaaS development for specific needs.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              Integration with social media platforms for seamless updates.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              E-commerce Websites : Full integration of e-commerce functionalities.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
              Premium security and Maintenance measures with regular audits and updates.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              Responsive design ensuring your website looks great on all devices.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-md" />
              Branding and digital marketing.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-xl" />
              Content creation and social media management.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-md" />
              Hosting and domain included for 1 year.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Unlimited changes until you are 100% satisfied.
            </li>
            <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Ongoing aftercare and support
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default PricingSection;
