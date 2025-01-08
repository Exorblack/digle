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
        floatingElements.forEach((el, index) => {
          gsap.to(el, {
            y: "+=100",
            x: index % 2 === 0 ? "+=50" : "-=50",
            rotate: index % 2 === 0 ? "+=15" : "-=15",
            repeat: -1,
            yoyo: true,
            duration: 2.5 + index * 0.5,
            ease: "power1.inOut",
          });
        });

        floatingElements2.forEach((el, index) => {
          gsap.to(el, {
            y: "+=100",
            x: index % 2 === 0 ? "+=50" : "-=50",
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
      <section className="min-h-[150vh] bg-gradient-to-b from-gray-950 via-blue-950 to-blue-900 flex flex-col justify-start pt-20 lg:pt-52 relative overflow-hidden px-4 md:px-6 lg:px-8">
        <div className="floating absolute top-96 right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-blue-500/30 blur-md rounded-full"></div>
        <div className="floating absolute top-20 left-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-blue-400/50 blur-md rounded-full"></div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        </div>

        <img
          src="/serv/f61f5e483f461ce97fdf6b0781f782f0.png"
          alt="iphone"
          className="floating2 absolute md:-top-32 lg:top-20 -top-20 -left-20 md:left-20 lg:left-60 z-0 w-auto h-[450px] "
        />

        <div className="text-center text-white z-10 max-w-4xl mx-auto mt-40">
          <div className="text-reveal flex justify-center mb-4 md:mb-6">
            <Palette size={32} className="text-blue-400 md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 mb-4 md:mb-6 lg:mb-8 text-reveal">
            Custom Design
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-200/90 leading-relaxed text-reveal">
            All designs crafted by Digle are custom and unique. We create
            one-of-a-kind designs that make your brand unforgettable. Stand out
            with a website that's tailored just for you.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-reveal">
            <div className="p-4 md:p-5 lg:p-6 rounded-xl bg-blue-400/10 backdrop-blur-lg border border-blue-400/20">
              <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                Performance
              </h3>
              <p className="mt-2 text-sm md:text-base text-blue-200/80">
                Lightning-fast load times
              </p>
            </div>
            <div className="p-4 md:p-5 lg:p-6 rounded-xl bg-blue-400/10 backdrop-blur-lg border border-blue-400/20">
              <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                UX & UI
              </h3>
              <p className="mt-2 text-sm md:text-base text-blue-200/80">
                Thoughtful design to ensure an intuitive user experience.
              </p>
            </div>
            <div className="p-4 md:p-5 lg:p-6 rounded-xl bg-blue-400/10 backdrop-blur-lg border border-blue-400/20">
              <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                Modern
              </h3>
              <p className="mt-2 text-sm md:text-base text-blue-200/80">
                Latest tech stack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* web dev Section */}
      <section className="h-[150vh] border-t-2 border-blue-500 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-950 flex pt-52 relative overflow-hidden">
        <div className="floating absolute -top-20 left-0 w-full h-20 md:h-32 lg:h-40 bg-blue-400/20 blur-lg transform rotate-6"></div>
        <div className="floating absolute top-1/4 -right-20 w-full h-20 md:h-32 lg:h-40 bg-blue-400/10 blur-lg transform -rotate-6"></div>
        <div className="floating absolute top-2/4 -left-20 w-full h-20 md:h-32 lg:h-40 bg-blue-400/15 blur-lg transform rotate-3"></div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.15)_2px,transparent_0)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:96px_96px]"></div>
        </div>

        <img
          src="/serv/az6cm1bc9.png"
          alt="iphone"
          className="floating2 absolute md:-top-32 lg:top-20 -top-20 -right-20 md:right-20 lg:right-60 z-0 w-auto h-[450px]"
        />
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4 mt-32">
          <div className="text-reveal flex justify-center mb-6">
            <Code size={48} className="text-blue-400 md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 mb-4 md:mb-6 lg:mb-8 text-reveal">
            Web Development
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl text-blue-200/90 leading-relaxed text-reveal">
            We build fast, reliable websites using Next.js and Node.js for top
            performance and SEO optimization. Experience sleek animations and a
            website that keeps visitors engaged.
          </p>
        </div>
      </section>
      {/* responsive Section */}
      <section className="h-[150vh] border-t-2 border-blue-500 bg-gradient-to-b from-blue-900 via-blue-950 to-gray-900 flex pt-52 relative overflow-hidden">
        <div className="floating absolute top-20 right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-blue-400/30 blur-md rounded-full"></div>
        <div className="floating absolute top-96 left-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-blue-500/40 blur-md rounded-full"></div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        </div>

        <img
          src="/serv/b57c904a14cc51ed125fcf13991678cd.png"
          alt="iphone"
          className="floating2 absolute md:-top-32 lg:top-20 -top-20 -left-20 md:left-20 lg:left-60 z-0 w-auto h-[500px]"
        />
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4 mt-40">
          <div className="text-reveal flex justify-center mb-4 md:mb-6">
            <Smartphone size={32} className="text-blue-400 md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 mb-4 md:mb-6 lg:mb-8 text-reveal">
            Responsive Web Design
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl text-blue-200/90 leading-relaxed text-reveal">
            Ensure your website looks great on all devices, from desktops to
            smartphones providing a consistent and enjoyable user experience.
          </p>
        </div>
      </section>

      {/* SEO Optimization Section */}
      <section className="h-[150vh] border-t-2 border-blue-500 bg-gradient-to-b from-blue-900 via-blue-950 to-blue-900 flex pt-52 relative overflow-hidden">
        <div className="floating absolute -top-20 left-0 w-full h-40 bg-blue-400/20 blur-lg transform rotate-6"></div>
        <div className="floating absolute top-1/4 -right-20 w-full h-40 bg-blue-400/10 blur-lg transform -rotate-6"></div>
        <div className="floating absolute top-2/4 -left-20 w-full h-40 bg-blue-400/15 blur-lg transform rotate-3"></div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.15)_2px,transparent_0)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:96px_96px]"></div>
        </div>

        <img
          src="/serv/03df4e2c8b1164ad46f593005078759e.png"
          alt="iphone"
          className="floating2 absolute md:-top-32 lg:top-20 -top-20 -right-20 md:right-20 lg:right-60 z-0 w-auto h-[500px]"
        />
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4 mt-10">
          <div className="text-reveal flex justify-center mb-4 md:mb-6">
            <Megaphone size={48} className="text-blue-400 md:w-12 lg:w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 mb-4 md:mb-6 lg:mb-8 text-reveal">
            SEO Optimization
          </h1>
          <p className="text-xl lg:text-2xl text-blue-200/90 leading-relaxed text-reveal">
            We implement advanced SEO strategies to enhance your online
            visibility, and boost your search engine rankings and drive organic
            traffic.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-reveal">
            <div className="p-4 md:p-5 lg:p-6 rounded-xl bg-blue-400/10 backdrop-blur-lg border border-blue-400/20">
              <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                Keyword Research
              </h3>
              <p className="mt-2 text-sm md:text-base text-blue-200/80">
                Identify the best keywords to attract targeted traffic
              </p>
            </div>
            <div className="p-4 md:p-5 lg:p-6 rounded-xl bg-blue-400/10 backdrop-blur-lg border border-blue-400/20">
              <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                Website Audit
              </h3>
              <p className="mt-2 text-sm md:text-base text-blue-200/80">
                Conduct a comprehensive analysis to identify areas
              </p>
            </div>
            <div className="p-4 md:p-5 lg:p-6 rounded-xl bg-blue-400/10 backdrop-blur-lg border border-blue-400/20">
              <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                Competitor Analysis
              </h3>
              <p className="mt-2 text-sm md:text-base text-blue-200/80">
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
