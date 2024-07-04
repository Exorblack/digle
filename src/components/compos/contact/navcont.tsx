import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, Home, ServerIcon } from 'lucide-react'
import { ModeToggle } from '@/components/compos/dark'

const Navcont = () => {
  return (
    <>
    <div>
        <div className= "border-b-2 p-4">
            <div className="flex justify-between items-end ">
                <a href="/">
                <Image
                    src={"/logo-no-background.svg"}
                    width={50}
                    height={50}
                    alt="digle"
                    />
                </a>
                <div className='flex gap-10'>
                <Link href={'/'}>
                <button className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                     <Home className="w-5 h-5" /> <span>Home</span>
                </button>
                </Link>
                <Link href={'/our-services'}>
                <button className="hover:bg-green-50 dark:hover:bg-neutral-700 p-2 rounded transition-all flex items-center space-x-2">
                     <Briefcase className="w-5 h-5" /> <span>Services</span>
                </button>
                </Link>
                </div>

                <ModeToggle/>

            </div>
        </div>
    </div>
</>
  )
}

export default Navcont