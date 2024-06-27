import {AccordionOP} from "@/components/compos/Home/Accordion";
import { Contact } from "@/components/compos/Home/Contact";
import Footer from "@/components/compos/Home/Footer";
import Herosec from "@/components/compos/Home/Herosec";
import Ourteam from "@/components/compos/Home/Ourteam";
//import Testimonials from "@/components/compos/Home/Testimonials";
import Words from "@/components/compos/Home/Words";
import Nav from "@/components/compos/Home/Nav";
import PricingSection from "@/components/compos/Home/pricing"; // Updated import path
import BentoServieces from "@/components/compos/Home/services";
import Whoweare from "@/components/compos/Home/whoweare";
import Sidebar from "@/components/compos/sidebar";
import Portfolio from "@/components/compos/Home/Portofilio";

export default function Home() {
  return (
    <>
        {/* layout */}
        <div className="flex">
          <div className="fixed z-50"><Sidebar /></div>
        </div>
        {/* layout */}
          <main className={`flex-auto ml-[3.5rem] md:ml-[11rem]`}>
              <Nav id="home-nav"/>
              <Herosec/>
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <div>
                <Words id="words-section"/>
              </div>
              <BentoServieces />
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-16"></div>
              <Whoweare id="who-we-are-section"/>
              {/* <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <Testimonials id="testimonials-section"/> */}
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <Portfolio id="portfolio-section"/>
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <PricingSection id="pricing-section"/>
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <Ourteam id="our-team-section"/>
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <AccordionOP id="faq"/>
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <Contact/>
              <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
              <Footer/>
          </main>
    </>
  );
}
