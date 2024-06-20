"use client"
import { Home, Info, Briefcase, DollarSign, Users, Mail, Menu, X ,MessagesSquare , Quote , FileStack } from 'lucide-react';
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'; 
export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false); 
      }
    }
  };

  return (
    <>
      <div className="flex min-h-screen overflow-auto">
        <aside
          className={`fixed inset-y-0 left-0 w-[11rem] transition duration-200 ease-in-out transform bg-white dark:bg-[#0f0f0f] border-r shadow-xl z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0`}
        >
          <nav className="h-full flex flex-col relative">
            <div className="p-4 flex justify-center items-center">
              <a href="/">
                <Image
                  src={"/logo-no-background.svg"}
                  width={70}
                  height={70}
                  alt="digle"
                />
              </a>
            </div>
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => handleScrollToSection('home-nav')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <Home className="w-5 h-5" /> <span>Home</span>
              </button>
              <button onClick={() => handleScrollToSection('words-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <Briefcase className="w-5 h-5" /> <span>Services</span>
              </button>
              <button onClick={() => handleScrollToSection('who-we-are-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <Info className="w-5 h-5" /> <span>About</span>
              </button>
              {/* <button onClick={() => handleScrollToSection('testimonials-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <MessagesSquare className="w-5 h-5" /> <span>Testimonials</span>
              </button> */}
              {/* <button onClick={() => handleScrollToSection('portfolio-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <FileStack className="w-5 h-5" /> <span>Portfolio</span>
              </button> */}
                <button onClick={() => handleScrollToSection('pricing-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" /> <span>Pricing</span>
                </button>
              <button onClick={() => handleScrollToSection('our-team-section')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <Users className="w-5 h-5" /> <span>Our Team</span>
              </button>
              <button onClick={() => handleScrollToSection('faq')} className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <Quote className="w-5 h-5" /> <span>FAQ</span>
              </button>
              <Link href={'/contact'}>
              <button className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                <Mail className="w-5 h-5" /> <span>Contact</span>
              </button>
              </Link>
            </div>

            {isMobileMenuOpen && (
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </nav>
        </aside>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )}

        <div className="flex-1 md:hidden border-r h-full">
          {!isMobileMenuOpen && (
            <>
              <button
                onClick={toggleMobileMenu}
                className="p-4 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('home-nav')}><Home className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('words-section')}><Briefcase className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('who-we-are-section')}><Info className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                {/* <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('testimonials-section')}><MessagesSquare className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div> */}
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('portfolio-section')}><FileStack className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('pricing-section')}><DollarSign className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('our-team-section')}><Users className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                <div className="flex justify-center pt-5"><button onClick={() => handleScrollToSection('faq')}><Quote className="w-8 h-8 hover:text-neutral-700" /></button></div>
                <div className="border-b-2 pt-4"></div>
                <div className="flex justify-center pt-5"><Link href={'/contact'}><button><Mail className="w-8 h-8 hover:text-neutral-700" /></button></Link></div>
                <div className="border-b-2 pt-4"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
