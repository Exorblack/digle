import Footer from '@/components/compos/Home/Footer'
import Cont from '@/components/compos/contact/cont'
import Navcont from '@/components/compos/contact/navcont'
import { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us | Digle - Where Creativity Meets Code",
  description: "Digle Innovative web design solutions tailored to your business needs.",
}

const Contact =() => {
  return (
    <>
    <div>
      <div><Navcont/></div>
      <div><Cont/></div>
    </div>
    <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
      <div><Footer/></div>
      </>
  )
}

export default Contact