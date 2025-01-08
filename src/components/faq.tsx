"use client"
import React, { useRef, useState } from "react";
import { ChevronsRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

interface faq{
  id:string
}

const FAQ:React.FC<faq> = ({id}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const contsRef = useRef(null)
  const txtsRef = useRef(null)
  
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contsRef.current,
        start: "top center",
        end: "80% center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });
    tl.from(txtsRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5,
      ease: "back.out",
      rotation: 5,
      scale: 0.9,
    });
  },[])


  return (
    <>
      <section
        id={id}
        ref={contsRef}
        className="bg-blue-950 min-h-screen relative overflow-hidden "
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        </div>

        <div ref={txtsRef} className="sticky top-0 z-20 pb-10">
          <div className="flex justify-center items-center">
            <Image
              src="/kisspng-royalty-free-technical-support-5af1c7e001e935.7019606915257947840078.png"
              alt="digle-faq"
              className="w-64 h-64"
              width={900}
              height={900}
            />
          </div>
          <p className="flex justify-center items-center text-blue-200 text-2xl font-semibold pt-10 px-4 text-center">
            We have compiled an FAQ list to help answer some of the most common
            questions you might have.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className=" backdrop-blur-sm  border-t-4 border-blue-200 rounded-3xl p-10 shadow-2xl">
            {/* FAQ Item 1 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    How do I get started with Digle?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 0 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 0 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  Getting started with Digle is easy! Simply contact us through
                  our website. We will discuss your needs, provide a detailed
                  proposal, and start the journey to creating a powerful digital
                  presence for your business.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    How Does the Payment Process Work?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 1 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 1 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  The project starts with a 50% deposit. The remaining 50% is
                  due once we are ready to launch your website. This ensures
                  that both parties are committed to the project from start to
                  finish.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    How does the whole process work?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 2 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 2 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <ul className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  <li>
                    1. Discuss the Project: We will have an in-depth discussion
                    to understand your vision and requirements.
                  </li>
                  <li>
                    2. Provide Business Information: Share your business
                    concept, logo, social media links, and any other materials
                    that help us learn more about your business.
                  </li>
                  <li>
                    3. Submit Content: Provide all the content you want to
                    include on your website.
                  </li>
                  <li>
                    4. Down Payment: Make an initial payment of at least 50% to
                    kickstart the project.
                  </li>
                </ul>
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    I Already Have a Website! Can I Redesign or Update It?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 3 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 3 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  Absolutely! If you already have a website, we can help
                  redesign or update it to better meet your needs. Whether
                  you&apos;re looking for a fresh new look, enhanced
                  functionality, or improved performance, our team can work with
                  you to develop a solution that aligns with your goals.
                </p>
              </div>
            </div>
            {/* FAQ Item 5 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    What is Web Hosting?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 4 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 4 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  Web hosting is the service that allows your website to be
                  accessible on the internet. It involves storing your
                  website&apos;s files on a server. Web hosting services
                  typically require a monthly or annual fee.
                </p>
              </div>
            </div>
            {/* FAQ Item 6 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    What makes Digle different from other web design agencies?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 5 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 5 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  At Digle, we blend creativity with advanced technology to
                  deliver customized web solutions that meet our clients unique
                  needs. Our client-centric approach ensures we work closely
                  with you to bring your vision to life. Additionally, our
                  comprehensive packages, unlimited revisions, and dedicated
                  support set us apart from the competition.
                </p>
              </div>
            </div>
            {/* FAQ Item 7 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(6)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    How long does it take to build a website?
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 6 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 6 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  The timeline for building a website depends on the complexity
                  and specific requirements of the project.
                  <br />A standard business website typically takes 1-2 weeks,
                  while more complex sites or SaaS projects can take 4-8 weeks
                  or longer. We will provide a detailed timeline during our
                  initial consultation.
                </p>
              </div>
            </div>
            {/* FAQ Item 8 */}
            <div className="mb-4">
              <button
                onClick={() => toggleFAQ(7)}
                className="w-full text-left p-4 rounded-xl bg-blue-800/50 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-blue-200 text-lg font-semibold">
                    I have another question!
                  </h3>
                  <span
                    className={`text-blue-200 text-2xl transform transition-transform duration-300 ${
                      openIndex === 7 ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronsRight />
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 7 ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-blue-100 p-4 bg-blue-800/30 rounded-xl">
                  No problem! Send us an email at{" "}
                  <span className="text-blue-500 font-bold">
                    contact@digle.org
                  </span>{" "}
                  or send message on any social media platform and we will get
                  back to you with an answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
