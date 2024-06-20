import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
<footer className="bg-neutral-100 dark:bg-neutral-950">
  <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
    <Image 
          src="/logo-no-background.svg" 
          alt="Digle" 
          width={60}
          height={60}
    />
    </div>

    <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-neutral-500">
    Where Creativity Meets Code,
    Innovative web design solutions tailored to your business needs.
    </p>



    <ul className="mt-3 flex justify-center gap-6 md:gap-8">
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
            <FaGithub className='text-2xl' />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
    </ul>
    <ul className="mt-5 flex flex-wrap justify-center gap-5">
      <a className="transition hover:text-neutral-700/75 dark:hover:text-neutral-200" href="/terms">Terms</a>
      <a className="transition hover:text-neutral-700/75 dark:hover:text-neutral-200" href="/privacy">Privacy</a>
    </ul>
    <p className=" text-center text-sm text-neutral-500 dark:text-neutral-400 pt-5">
      © Copyright 2024 Digle - All rights reserved.
    </p>
    <p className=" text-center text-sm text-neutral-500 dark:text-neutral-400 pt-2">
      contact@digle.org
    </p>
  </div>
</footer>
  );
}

export default Footer
