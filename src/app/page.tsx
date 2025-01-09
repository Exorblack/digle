"use client"
import React, { useEffect, useState } from "react";
import Hero from "@/components/navero/Hero";
import Words from "@/components/Words";
import AboutHoriz from "@/components/AboutHoriz";
import { DragCards } from "@/components/Works";
import Contact from "@/components/contact";
import ServicesRev from "@/components/ServicesRev";
import Nav from "@/components/navero/Nav";
import Faq from "@/components/faq";
import Loading from "@/components/loading/loading";


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    {isLoading?(
      <Loading/>
    ):(
      <main>
        <Nav />
        <Hero />
        <Words />
        <AboutHoriz id="about" />
        <ServicesRev id="services" />
        <DragCards id="works" />
        <Faq id="faq" />
        <Contact id="contact" />
      </main>
    )}
    </>
  );
}
