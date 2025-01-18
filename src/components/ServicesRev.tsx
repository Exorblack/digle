"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Smartphone, Palette, Megaphone } from "lucide-react";

interface Services{
  id:string
}
const ServicesRev:React.FC<Services> = ({id}) => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = sectionsRef.current?.querySelectorAll("section");

    if (sections) {
      gsap.utils.toArray(sections).forEach((section) => {
        const sectionElement = section as HTMLElement;
        const floatingElements = sectionElement.querySelectorAll(".floating");
        const floatingElements2 = sectionElement.querySelectorAll(".floating2");
        const textElements = sectionElement.querySelectorAll(".text-reveal");

        gsap.to(sectionElement, {
          scrollTrigger: {
            trigger: sectionElement,
            start: "top top",
            end: () => `+=${sectionElement.offsetHeight}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });

        // Animate floating elements
        floatingElements.forEach((el) => {
          gsap.to(el, {
            y: "+=100",
            x: "+=50",
            repeat: -1,
            yoyo: true,
            duration: 2.5,
            ease: "power1.inOut",
          });
        });

        floatingElements2.forEach((el) => {
          gsap.to(el, {
            y: "+=100",
            x: "+=50",
            repeat: -1,
            yoyo: true,
            duration: 2.5,
            ease: "power1.inOut",
          });
        });

        textElements.forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
              scrub: 1.5,
            },
            x: 80,
            opacity: 0,
            duration: 1,
            ease: "elastic.out",
          });
        });
      });
    }
  });

  return (
    <div ref={sectionsRef} id={id} className="overflow-hidden">
      {/* custom design Section */}
      <section className="min-h-[150vh] bg-[#023047] flex flex-col justify-start pt-20 lg:pt-52 relative overflow-hidden px-4 md:px-6 lg:px-8">
        <div className="floating absolute top-96 right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-[#219EBC]/30 blur-md rounded-full"></div>
        <div className="floating2 absolute top-20 left-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-[#219EBC]/50 blur-md rounded-full"></div>

        <div className="text-center z-10 max-w-4xl mx-auto sm:mt-40 mt-5">
          <div className="text-reveal flex justify-center mb-4 md:mb-6">
            <Palette size={32} className="text-[#219EBC]/80 md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-[#219EBC] mb-4 md:mb-6 lg:mb-8 text-reveal">
            Custom Design
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#8ECAE6]/90 leading-relaxed text-reveal">
            All designs crafted by Digle are made just for you. No templates, no
            cookie-cutter solutions - just unique designs that make your brand
            unforgettable. We create websites that not only look good but work
            great for your business.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-reveal">
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#219EBC]/10 backdrop-blur-lg border border-[#219EBC]/20">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                Unique Design
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/80">
                A website designed around your brand and goals
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#219EBC]/10 backdrop-blur-lg border border-[#219EBC]/20">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                UX & UI
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/80">
                Clean, modern UI/UX Design that catches the eye
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#219EBC]/10 backdrop-blur-lg border border-[#219EBC]/20">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                Interactive Design
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/80">
                Interactive elements that feel alive. Smooth, engaging
                animations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* web dev Section */}
      <section className="h-[150vh] border-t-2 border-[#8ECAE6] bg-[#219EBC] flex relative overflow-hidden">
        <div className="floating absolute -top-20 left-0 w-full h-20 md:h-32 lg:h-40 bg-[#8ECAE6]/20 blur-lg transform rotate-6"></div>
        <div className="floating2 absolute top-1/4 -right-20 w-full h-20 md:h-32 lg:h-40 bg-[#8ECAE6]/10 blur-lg transform -rotate-6"></div>
        <div className="floating absolute top-2/4 -left-20 w-full h-20 md:h-32 lg:h-40 bg-[#8ECAE6]/15 blur-lg transform rotate-3"></div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4 mt-20 sm:mt-72">
          <div className="text-reveal flex justify-center mb-6">
            <Code size={48} className="text-[#023047]/80 md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-[#023047] mb-4 md:mb-6 lg:mb-8 text-reveal">
            Web Development
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl text-[#023047] leading-relaxed text-reveal">
            We build fast, reliable websites using Next.js and the latest tech
            that puts you ahead of the game. Your site won&apos;t just look good
            - it&apos;ll perform like a champion.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-reveal">
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#023047]/95 backdrop-blur-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                Performance
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/80">
                Lightning-fast loading speeds
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#023047]/95 backdrop-blur-lg ">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                Responsive Design
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/80">
                Perfect display on all devices, from desktops to smartphones
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#023047]/95 backdrop-blur-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                SEO
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/80">
                Built-in SEO features
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Branding Section */}
      <section className="h-[150vh] border-t-2 border-[#FFB703] bg-[#FB8500] flex relative overflow-hidden">
        <div className="floating absolute top-20 right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-[#FFB703]/30 blur-md rounded-full"></div>
        <div className="floating2 absolute top-96 left-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-[#FFB703]/40 blur-md rounded-full"></div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4 mt-28 sm:mt-72">
          <div className="text-reveal flex justify-center mb-4 md:mb-6">
            <Megaphone size={32} className="text-[#023047] md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-[#023047] mb-4 md:mb-6 lg:mb-8 text-reveal">
            Branding
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl text-[#023047]/95 leading-relaxed text-reveal">
            Your brand is your story, and we help you tell it right. From logos
            to color schemes, we create a visual identity that makes people
            remember you.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-reveal">
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#219EBC]/90 backdrop-blur-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#023047]">
                Logo & Colors
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#FFB703]/95">
                Eye-catching logos and color schemes that capture your
                brand&apos;s personality
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#219EBC] backdrop-blur-lg ">
              <h3 className="text-lg md:text-xl font-semibold text-[#023047]">
                Typography
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#FFB703]/95">
                Typography that speaks your language, even letters should tell
                your story
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#219EBC] backdrop-blur-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#023047]">
                Brand guidelines
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#FFB703]/95">
                A complete style guide that keeps your brand looking sharp
                everywhere it shows up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization Section */}
      <section className="h-[150vh] border-t-2 border-[#219EBC] bg-[#8ECAE6] flex relative overflow-hidden">
        <div className="floating absolute -top-20 left-0 w-full h-40 bg-[#219EBC]/20 blur-lg transform rotate-6"></div>
        <div className="floating2 absolute top-1/4 -right-20 w-full h-40 bg-[#219EBC]/10 blur-lg transform -rotate-6"></div>
        <div className="floating absolute top-2/4 -left-20 w-full h-40 bg-[#219EBC]/15 blur-lg transform rotate-3"></div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4 mt-10 sm:mt-60">
          <div className="text-reveal flex justify-center mb-4 md:mb-6">
            <Smartphone
              size={48}
              className="text-[#023047]/80 md:w-12 lg:w-16"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-[#023047] mb-4 md:mb-6 lg:mb-8 text-reveal">
            SEO & Maintenance
          </h1>
          <p className="text-xl lg:text-2xl text-[#023047] leading-relaxed text-reveal">
            Getting found online shouldn&apos;t be Hard. We make sure your
            website ranks well and stays in top shape, month after month. We
            implement advanced SEO strategies to enhance your online visibility
          </p>
          <div className="mt-2 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-reveal">
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#023047]/95 backdrop-blur-lg border border-[#219EBC]/20">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                SEO Strategies
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/95">
                Smart SEO Strategies that brings the right people
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#023047]/95 backdrop-blur-lg border border-[#219EBC]/20">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                Security
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/95">
                Security that lets you sleep at night
              </p>
            </div>
            <div className="p-2 md:p-5 lg:p-6 rounded-xl bg-[#023047]/95 backdrop-blur-lg border border-[#219EBC]/20">
              <h3 className="text-lg md:text-xl font-semibold text-[#219EBC]">
                Competitor Analysis
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#8ECAE6]/95">
                Gain insights into your competitors strategies to stay ahead in
                the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesRev;
