"use client"
import {ModeToggle} from "@/components/compos/dark";
import React from "react";
import { FaInstagram , FaDribbble } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


interface Navo{
  id:string
}
const nav:React.FC<Navo> = ({id}) => {
  return (
    <>
    <div className= "border-b-2 p-4" id={id}>
       <div className="flex justify-between items-center">
      <ul className=" flex justify-center gap-6 md:gap-8">
    <li>
          <a href="https://www.instagram.com/digle_agency" target="_blank" rel="noopener noreferrer" className="text-neutral-700 transition hover:text-neutral-700/75 dark:text-neutral-400 dark:hover:text-neutral-200">
            <FaInstagram className='text-2xl' />
            <span className="sr-only">Instagram</span>
          </a>
        </li>

        <li>
          <a href="https://www.tiktok.com/@digle_agency" target="_blank" rel="noopener noreferrer" className="text-neutral-700 transition hover:text-neutral-700/75 dark:text-neutral-400 dark:hover:text-neutral-200">
            <AiFillTikTok className='text-2xl' />
            <span className="sr-only">tiktok</span>
          </a>
        </li>

        <li>
          <a href="https://dribbble.com/digle-agency" target="_blank" rel="noopener noreferrer" className="text-neutral-700 transition hover:text-neutral-700/75 dark:text-neutral-400 dark:hover:text-neutral-200">
            <FaDribbble className='text-2xl' />
            <span className="sr-only">Dribble</span>
          </a>
        </li>
    </ul>
    {/* <div className="font-bold text-green-600">contact@digle.org</div> */}
          <ModeToggle/>
       </div>
    </div>
    </>
  );
};

export default nav;
