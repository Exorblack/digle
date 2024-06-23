import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa6';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
interface Ourteam{
  id:string
}

const OurTeam:React.FC<Ourteam> = ({id}) => {
  return (
    <div className="py-16 bg-neutral-50 dark:bg-neutral-950"id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">The Team</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4">
            meet our team 
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <Image
                src="/users/image.png"
                width={400}
                height={400}
                alt="Jordan Michael"
                className="rounded-lg object-cover mb-4"
              />
              <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Mohamed Hassan</h4>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Web developer</p>
              <div className="flex space-x-4 pt-3">
                <a href="https://www.linkedin.com/in/mohamed-hassan-2955472a2/" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                  <FaLinkedin size={25}/>
                </a>
                <a href="https://x.com/exorbla" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                <BsTwitterX size={25} />
                </a>
                <a href="https://www.instagram.com/mohassan.99/" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                  <FaInstagram size={25}/>
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 mb-4">
                Founder and full stack web developer 
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          {/* <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <Image
                src="/users/ziad.webp"
                width={500}
                height={500}
                alt="Jordan Michael"
                className="rounded-lg object-cover mb-4"
              />
              <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Ziad Emad</h4>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">UI/UX Designer</p>
              <div className="flex space-x-4 pt-3">
                <a href="https://x.com/blaxhill" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                  <BsTwitterX size={25} />
                </a>
                <a href="https://www.instagram.com/boredblax/" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                  <FaInstagram size={25} />
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 mb-4">
                graphic designer and digital marketing expert
              </p>
            </div>
          </div> */}
        {/* Team Member 3 */}
        {/* <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
            <Image
                src="/users/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                width={300}
                height={300}
                alt="Jordan Michael"
                className="rounded-lg object-cover mb-4"
              />
              <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">emma stone</h4>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">System Administrator</p>
              <div className="flex space-x-4 pt-3">
                <a href="#" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                  <FaLinkedin size={25}/>
                </a>
                <a href="#" target='_blank' className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400">
                  <BsTwitterX size={25} />
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 mb-4">
                our cybersecurity guy
              </p>
            </div>
          </div> */}

          {/* Add more team members in the same way */}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
