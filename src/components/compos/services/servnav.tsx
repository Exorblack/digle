"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Home, Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/compos/dark';
import { FaCartShopping } from 'react-icons/fa6';
import { IoRoseSharp } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import { MdFeaturedPlayList } from "react-icons/md";
import Link from 'next/link';

const Servnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (menuOpen) {
        setMenuOpen(false); 
      }
    }
  };

  return (
    <div>
      <div className="border-b-2 p-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src={"/logo-no-background.svg"}
              width={50}
              height={50}
              alt="digle"
            />
          </a>
          <div className="hidden md:flex gap-10">
            <a href={'/'}>
            <button className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <Home className="w-5 h-5" /> <span>Home</span>
            </button>
            </a>
            <button onClick={() => handleScrollToSection('ecommerce-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <FaCartShopping className="w-5 h-5" /> <span>eCommerce</span>
            </button>
            <button onClick={() => handleScrollToSection('seo-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <IoRoseSharp className="w-5 h-5" /> <span>Seo</span>
            </button>
            <button onClick={() => handleScrollToSection('process-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <GiProcessor className="w-5 h-5" /> <span>Our Process</span>
            </button>
            <button onClick={() => handleScrollToSection('features-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <MdFeaturedPlayList className="w-5 h-5" /> <span>Features</span>
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <ModeToggle />
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4">
            <a href={'/'}>
            <button className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <Home className="w-5 h-5" /> <span>Home</span>
            </button>
            </a>

            <button onClick={() => handleScrollToSection('ecommerce-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <FaCartShopping className="w-5 h-5" /> <span>eCommerce</span>
            </button>
            <button onClick={() => handleScrollToSection('seo-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <IoRoseSharp className="w-5 h-5" /> <span>Seo</span>
            </button>
            <button onClick={() => handleScrollToSection('process-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <GiProcessor className="w-5 h-5" /> <span>Our Process</span>
            </button>
            <button onClick={() => handleScrollToSection('features-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
              <MdFeaturedPlayList className="w-5 h-5" /> <span>Features</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Servnav;
