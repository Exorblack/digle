"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, Sparkles } from "lucide-react";
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
      <div className={`fixed inset-x-0 top-0 z-50`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mt-8 p-4 sm:p-4 md:p-2 border border-x-2 bg-gradient-to-b from-blue-100/25 to-blue-200/10 backdrop-blur-md border-blue-500/25 border-b-[0.6rem] rounded-[4rem]">
            {/* Desktop & Tablet Navigation */}
            <div className="hidden md:flex justify-center items-center gap-20">
              {/* Left Menu Items */}
              <div className="flex items-center gap-10 text-white/80">
                <li className="hover:text-blue-400 duration-100 font-bold list-none">
                  <button onClick={() => handleScrollToSection("about")}>
                    About
                  </button>
                </li>
                <li className="hover:text-blue-400 duration-100 font-bold list-none">
                  <button onClick={() => handleScrollToSection("works")}>
                    Portfolio
                  </button>
                </li>
              </div>

              {/* Centered Logo */}
              <a href={"/"}>
                <Image
                  src={"/Dee.png"}
                  width={100}
                  height={100}
                  alt="Digle Logo"
                  priority
                  className="transform hover:scale-110 duration-300"
                />
              </a>

              {/* Right Menu Items */}
              <div className="flex items-center gap-10 text-white/80">
                <li className="hover:text-blue-400 transition-all duration-100 font-bold list-none">
                  <button onClick={() => handleScrollToSection("faq")}>
                    FAQ
                  </button>
                </li>
                <li className="hover:text-blue-400 transition-all duration-100 font-bold list-none">
                  <button onClick={() => handleScrollToSection("contact")}>
                    Contact
                  </button>
                </li>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <div className="flex justify-between items-center">
                <a href={"/"}>
                  <Image
                    src={"/Dee.png"}
                    width={70}
                    height={70}
                    alt="Logo"
                    priority
                    className="transform hover:scale-110 duration-300"
                  />
                </a>
                <button className="flex items-center justify-center px-5 py-3 bg-blue-900/20 hover:bg-blue-950/30 text-white rounded-3xl border border-blue-400/30 transition-all duration-300">
                  <span className="font-bold">you alright !</span>
                </button>
                <button
                  onClick={toggleMenu}
                  className="text-white pr-4 hover:text-blue-400 transition-all z-50"
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
        className={`fixed z-50 inset-0 bg-gradient-to-b from-black/95 to-blue-900/95 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white p-2 hover:text-blue-500 z-50"
        >
          <X size={32} />
        </button>

        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-8 text-center text-white/90">
            {/* Navigation Links */}
            <ul className="flex flex-col gap-8 mb-12">
              <li className="hover:text-blue-400 font-bold text-2xl">
                <button onClick={() => handleScrollToSection("about")}>
                  About
                </button>
              </li>
              <li className="hover:text-blue-400 font-bold text-2xl">
                <button
                  onClick={() => handleScrollToSection("services")}
                >
                  Services
                </button>
              </li>
              <li className="hover:text-blue-400 font-bold text-2xl">
                <button onClick={() => handleScrollToSection("works")}>
                  Portfolio
                </button>
              </li>
              <li className="hover:text-blue-400 font-bold text-2xl">
                <button onClick={() => handleScrollToSection("faq")}>
                  FAQ
                </button>
              </li>
              <li className="hover:text-blue-400 font-bold text-2xl">
                <button
                  onClick={() => handleScrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-blue-400">Get in Touch</h2>
              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-center gap-3 px-8 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-white rounded-full border border-blue-400/30 hover:scale-105 transition-all duration-300 group">
                  <Mail
                    size={20}
                    className="group-hover:-rotate-180 transition-transform"
                  />
                  <span className="font-bold">contact@digle.org</span>
                </button>
                {/* Social Media */}
                <div className="grid grid-cols-4 gap-6 ">
                  {/* Behance */}
                  <Link
                    href="https://www.behance.net/337ba9b6"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <FaBehance className="w-12 h-12 text-blue-200/80 transition-colors duration-500 group-hover:text-blue-300" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-blue-200/20 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -top-4 -right-0 w-6 h-6 text-blue-200/0 group-hover:text-blue-200/30 transition-all duration-300" />
                  </Link>

                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/profile.php?id=61562478531666"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <FaFacebook className="w-12 h-12 text-blue-200/80 transition-colors duration-300 group-hover:text-blue-300" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-blue-200/20 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-200/0 group-hover:text-blue-200/30 transition-all duration-300" />
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/digle_agency"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <FaInstagram className="w-12 h-12 text-blue-200/80 transition-colors duration-300 group-hover:text-blue-300" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-blue-200/20 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-blue-200/0 group-hover:text-blue-200/30 transition-all duration-300" />
                  </Link>

                  {/* TikTok */}
                  <Link
                    href="https://www.tiktok.com/@digle_agency"
                    target="_blank"
                    className="group relative flex items-center justify-center"
                  >
                    <div className="relative duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <FaTiktok className="w-12 h-12 text-blue-200/80 transition-colors duration-300 group-hover:text-blue-300" />
                      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 blur-xl transition-all duration-300" />
                      <div className="absolute -inset-1 border border-blue-200/0 rounded-lg group-hover:border-blue-200/20 transition-all duration-300" />
                    </div>
                    <Sparkles className="absolute -bottom-4 right-3 w-6 h-6 text-blue-200/0 group-hover:text-blue-200/30 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-1 border-t border-blue-500/20 pt-8 w-48 mx-auto">
              <p className="text-sm text-blue-400/90">© 2025 DIGLE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
