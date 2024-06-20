import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import React from "react"
  
  interface faq{
    id:string
  }

  export const AccordionOP:React.FC<faq> = ({id})=> {
    return (
    <>
     <div className="py-16 bg-neutral-50 dark:bg-neutral-950" id={id}>
     <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I get started with Digle?</AccordionTrigger>
          <AccordionContent>
          Getting started with Digle is easy! Simply contact us through our website.
           We will discuss your needs, provide a detailed proposal,
           and start the journey to creating a powerful digital presence for your business.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What makes Digle different from other web design agencies?</AccordionTrigger>
          <AccordionContent>
          At Digle, we blend creativity with advanced technology to deliver customized web solutions that meet our clients unique needs.
           Our client-centric approach ensures we work closely with you to bring your vision to life. Additionally, our comprehensive packages,
           unlimited revisions, and dedicated support set us apart from the competition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
          <AccordionContent>
          The timeline for building a website depends on the complexity and specific requirements of the project. 
          A standard business website typically takes 1-2 weeks, while more complex sites or SaaS projects can take 4-8 weeks or longer.
           We will provide a detailed timeline during our initial consultation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do you provide hosting services?</AccordionTrigger>
          <AccordionContent>
          While we do not directly provide hosting services,
           we assist with setting up your website on reliable third-party hosting providers such as Hostinger.
           We ensure your site is configured for optimal performance and reliability.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>I have another question!</AccordionTrigger>
          <AccordionContent>
          No problem! Send us an email at contact@digle.org and we will get back to you with an answer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     </div>
     </div>
    </>
    )
  }
  