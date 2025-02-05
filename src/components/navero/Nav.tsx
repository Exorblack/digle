"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaBehance, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Scrolled, setIsScrolled] = useState(true);

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav className={`fixed inset-x-0 z-50`}>
        {/* Desktop & Tablet Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`hidden md:flex mt-2 p-4 sm:p-4 md:p-6 justify-between items-center text-[#fff] ${
            Scrolled
              ? ""
              : "bg-[#9b9b9b]/50 backdrop-blur-[100px] gap-12 border-2 border-[#000]/50 rounded-xl max-w-fit mx-auto flex justify-center items-center"
          } `}
        >
          <a
            href={"/"}
          >
            <Image
              src={"/logo.svg"}
              priority
              width={160}
              height={160}
              alt="Digle Logo"
              className="transform hover:scale-110 duration-300"
            />
          </a>
          <ul
            className={`flex items-center ${Scrolled ? "gap-17" : "gap-10"} `}
          >
            <li>
              <button
                onClick={() => handleScrollToSection("about")}
                className="hover:text-[#000] relative group duration-100 font-bold cursor-pointer"
              >
                About
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#1a535c] transition-all duration-700 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("services")}
                className="hover:text-[#000] relative group duration-100 font-bold cursor-pointer"
              >
                Services
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#1a535c] transition-all duration-700 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("works")}
                className="hover:text-[#000] relative group duration-100 font-bold cursor-pointer"
              >
                Portfolio
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#1a535c] transition-all duration-700 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("faq")}
                className="hover:text-[#000] relative group transition-all duration-100 font-bold cursor-pointer"
              >
                FAQ
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#1a535c] transition-all duration-700 group-hover:w-full"></span>
              </button>
            </li>
          </ul>

          <button
            onClick={() => handleScrollToSection("contact")}
            className="px-8 py-3 font-medium bg-[#1a535c]/90 text-[#fff] rounded-lg w-fit transition-all shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden ">
          <div
            className={`flex justify-between p-4 items-center ${
              Scrolled
                ? ""
                : "bg-[#9b9b9b]/50 backdrop-blur-[100px] border-b-2 border-[#000]/50 p-4"
            }`}
          >
            <a href={"/"}>
              <Image
                src={"/logo.svg"}
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 inset-0 bg-[#219EBC]/50 backdrop-blur-3xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-[#023047]"
        >
          <X size={32} />
        </button>

        {/* Navigation Links */}
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-8 text-center text-[#fff]/90">
            <ul className="flex flex-col gap-8 mb-4">
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
                  className="px-8 py-3 font-medium bg-[#1a535c]/90 text-[#fff] rounded-full w-fit transition-all shadow-[3px_3px_0px_#023047] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="space-y-2">
              <h2 className="text-sm font-bold text-[#fff]">Get in Touch</h2>
              <div className="flex flex-col gap-7">
                <a href="mailto:Contact@digle.org">
                  <span className="font-bold text-xl text-[#000]/80">
                    contact@digle.org
                  </span>
                </a>

                {/* Social Media */}
                <div className="grid grid-cols-4 gap-6 ">
                  <Link href="https://www.behance.net/337ba9b6" target="_blank">
                    <FaBehance className="w-12 h-12 text-[#000]/80 transition-colors duration-500 group-hover:text-[#023047]" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61562478531666"
                    target="_blank"
                  >
                    <FaFacebook className="w-12 h-12 text-[#000]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/digle_agency"
                    target="_blank"
                  >
                    <FaInstagram className="w-12 h-12 text-[#000]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@digle_agency"
                    target="_blank"
                  >
                    <FaTiktok className="w-12 h-12 text-[#000]/80 transition-colors duration-300 group-hover:text-[#023047]" />
                  </Link>
                </div>
              </div>
            </div>

            <small className=" border-t border-[#000]/40 pt-2 w-48 mx-auto">
              <p className="text-sm text-[#000]/90">©2025 DIGLE</p>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
