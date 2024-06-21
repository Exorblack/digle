"use client"
import {ModeToggle} from "@/components/compos/dark";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaInstagram , FaDribbble } from "react-icons/fa";


interface Navo{
  id:string
}
const nav:React.FC<Navo> = ({id}) => {
  return (
    <>
    <div className= "border-b-2 p-4" id={id}>
       <div className="flex justify-between items-end">
          {/* <div className="font-bold">Email : digle@digle.com</div> */}
      <ul className=" flex justify-center gap-6 md:gap-8">
    <li>
          <a href="https://www.instagram.com/mohassan.99" target="_blank" rel="noopener noreferrer" className="text-neutral-700 transition hover:text-neutral-700/75 dark:text-neutral-400 dark:hover:text-neutral-200">
            <FaInstagram className='text-2xl' />
            <span className="sr-only">Instagram</span>
          </a>
        </li>

        <li>
          <a href="https://www.x.com/exorbla" target="_blank" rel="noopener noreferrer" className="text-neutral-700 transition hover:text-neutral-700/75 dark:text-neutral-400 dark:hover:text-neutral-200">
            <BsTwitterX className='text-2xl' />
            <span className="sr-only">Twitter</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/Exorblack" target="_blank" rel="noopener noreferrer" className="text-neutral-700 transition hover:text-neutral-700/75 dark:text-neutral-400 dark:hover:text-neutral-200">
            <FaDribbble className='text-2xl' />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
    </ul>
          <ModeToggle/>
       </div>
    </div>
    </>
  );
};

export default nav;
