import Footer from '@/components/compos/Home/Footer'
import Cont from '@/components/compos/contact/cont'
import Navcont from '@/components/compos/contact/navcont'

import React from 'react'

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