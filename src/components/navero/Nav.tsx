"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";
import { FaBehance, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });

        if (isOpen) {
          toggleMenu();
        }
      }
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className={`fixed inset-x-0 z-50`}>
        <div className="max-w-fit mx-auto ">
          {/* Desktop & Tablet Navigation */}
          <div className="mt-8 p-4 sm:p-4 md:p-6 bg-[#219EBC]/50 backdrop-blur-2xl border-2 border-[#023047]/50 rounded-full">
            <div className="hidden md:flex justify-center items-center">
              <div className="flex items-center gap-10 text-[#023047]">
                <a href={"/"}>
                  <Image
                    src={"/digle-logo.png"}
                    priority
                    width={160}
                    height={160}
                    alt="Digle Logo"
                    className="transform hover:scale-110 duration-300"
                  />
                </a>
                <li className="list-none">
                  <button
                    onClick={() => handleScrollToSection("about")}
                    className="hover:text-[#FFB703] duration-100 font-bold cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li className="list-none">
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="hover:text-[#FFB703] duration-100 font-bold cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li className="list-none">
                  <button
                    onClick={() => handleScrollToSection("works")}
                    className="hover:text-[#FFB703] duration-100 font-bold cursor-pointer"
                  >
                    Portfolio
                  </button>
                </li>
                <li className="list-none">
                  <button
                    onClick={() => handleScrollToSection("faq")}
                    className="hover:text-[#FFB703] transition-all duration-100 font-bold cursor-pointer"
                  >
                    FAQ
                  </button>
                </li>
                <li className="list-none">
                  <button
                    onClick={() => handleScrollToSection("contact")}
                    className="px-8 py-3 font-medium bg-[#FFB703]/90 text-[#219EBC] rounded-full w-fit transition-all shadow-[3px_3px_0px_#023047] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden ">
              <div className="flex justify-between items-center gap-20 ">
                <a href={"/"}>
                  <Image
                    src={"/digle-logo.png"}
                    width={70}
                    height={70}
                    alt="Logo"
                    priority
                    className="transform hover:scale-110 duration-300"
                  />
                </a>
                <button
                  onClick={toggleMenu}
                  className="text-white/80 pr-4 transition-all z-50"
                >
                  <Menu size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 inset-0 bg-[#219EBC]/50 backdrop-blur-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-[#FB8500] p-2 z-50"
        >
          <X size={32} />
        </button>

        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-8 text-center text-[#023047]/90">
            {/* Navigation Links */}
            <ul className="flex flex-col gap-8 mb-12">
              <li className=" font-bold text-2xl">
                <button onClick={() => handleScrollToSection("about")}>
                  About
                </button>
              </li>
              <li className=" font-bold text-2xl">
                <button onClick={() => handleScrollToSection("services")}>
                  Services
                </button>
              </li>
              <li className=" font-bold text-2xl">
                <button onClick={() => handleScrollToSection("works")}>
                  Portfolio
                </button>
              </li>
              <li className=" font-bold text-2xl">
                <button onClick={() => handleScrollToSection("faq")}>
                  FAQ
                </button>
              </li>
              <li className="list-none">
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="px-8 py-3 font-medium bg-[#FFB703]/90 text-[#219EBC] rounded-full w-fit transition-all shadow-[3px_3px_0px_#023047] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#023047]">Get in Touch</h2>
              <div className="flex flex-col gap-10">
                <a href="mailto:Contact@digle.org">
                  <span className="font-bold text-2xl text-[#023047]">
                    contact@digle.org
                  </span>
                </a>

                {/* Social Media */}
                <div className="grid grid-cols-4 gap-6 ">
                  {/* Behance */}
                  <Link
                    href="https://www.behance.net/337ba9b6"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <FaBehance className="w-12 h-12 text-[#023047]/80 transition-colors duration-500 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-[#FB8500]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -top-4 -right-0 w-6 h-6 text-blue-200/0 group-hover:text-[#FB8500]/40 transition-all duration-300" />
                  </Link>

                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/profile.php?id=61562478531666"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <FaFacebook className="w-12 h-12 text-[#023047]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-[#FB8500]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-200/0 group-hover:text-[#FB8500]/40 transition-all duration-300" />
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/digle_agency"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <FaInstagram className="w-12 h-12 text-[#023047]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-[#FB8500]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-blue-200/0 group-hover:text-[#FB8500]/40 transition-all duration-300" />
                  </Link>

                  {/* TikTok */}
                  <Link
                    href="https://www.tiktok.com/@digle_agency"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <FaTiktok className="w-12 h-12 text-[#023047]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-[#219EBC]/20 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-[#FB8500]/50 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -bottom-4 right-3 w-6 h-6 text-blue-200/0 group-hover:text-[#FB8500]/40 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-1 border-t border-[#023047]/40 pt-4 w-48 mx-auto">
              <p className="text-sm text-[#023047]/90">©2025 DIGLE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
