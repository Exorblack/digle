"use client";
import React, { useState } from "react";
import { ChevronsRight } from "lucide-react";

interface faq {
  id: string;
}

const FAQ: React.FC<faq> = ({ id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I get started with Digle?",
      answer:
        "Getting started is simple! Contact us through our website or email, and we'll set up a conversation to discuss your project. We'll learn about your business needs, provide a clear proposal, and guide you through the entire process of creating your website.",
    },
    {
      question: "How Does the Payment Process Work?",
      answer:
        "We keep our payment process straightforward: 50% deposit to begin your project, and the remaining 50% when your website is ready to launch. This ensures that both parties are committed to the project from start to finish.",
    },
    {
      question: "How does the whole process work?",
      answer: [
        "1. Initial Discussion: We will have an in-depth discussion to understand your vision and requirements.",
        "2. Branding (if applicable): Share your business concept, logo, social media links, and any other materials that help us learn more about your business.",
        "3. Content Collection: Provide all the content you want to include on your website.",
        "4. Development: We build your site with regular updates",
        "5. Launch: Final review and website goes live",
      ],
    },
    {
      question: "Can you update my existing website?",
      answer:
        "Yes! We can help modernize your existing website. Whether you need a complete redesign or specific updates to improve functionality and appearance, we'll work with you to enhance your current website while maintaining your brand identity.",
    },
    {
      question: "What is web hosting and do I need it?",
      answer:
        "Web hosting is essential - it's the service that makes your website accessible on the internet. Your website's files need to be stored on a secure server to be visible online. We can help set up and maintain your hosting, which typically involves a regular monthly or annual fee.",
    },
    {
      question: "What makes Digle different?",
      answer:
        "We focus on creating websites that work for your business. Our approach combines modern design with practical functionality. We offer personalized service, regular communication throughout your project, and ongoing support after launch. Plus, we ensure your website looks great on all devices.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Most standard business websites take 1-2 weeks to complete. More complex projects might take 4-8 weeks, depending on your specific needs. We'll provide you with a clear timeline during our discussion so you know exactly what to expect.",
    },
    {
      question: "I have another question!",
      answer: (
        <>
          We&apos;re here to help! Email us at{" "}
          <span className="text-[#219EBC] font-bold">contact@digle.org</span> or
          reach out through social media. We&apos;ll respond quickly to answer
          any questions you have about your website project.
        </>
      ),
    },
  ];

  return (
    <>
      <section
        id={id}
        className="bg-[#023047] min-h-screen relative overflow-hidden "
      >
        <svg
          className="absolute bottom-0 left-0 w-full h-[12dvh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFB703"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div className="sticky top-0 pb-10">
          <div className="flex justify-center items-center text-[#8ECAE6] text-7xl font-extrabold pt-10 px-4 text-center">
            FAQ
          </div>
          <p className="flex justify-center items-center text-[#219EBC] text-2xl font-semibold pt-10 px-4 text-center">
            We have compiled an FAQ list to help answer some of the most common
            questions you might have.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="border-t-4 border-[#8ECAE6] rounded-3xl p-10 shadow-2xl">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 rounded-xl bg-[#023047] hover:bg-[#219EBC]/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[#8ECAE6] text-lg font-semibold">
                      {item.question}
                    </h3>
                    <span
                      className={`text-[#8ECAE6] text-2xl transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    >
                      <ChevronsRight />
                    </span>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[10rem]" : "max-h-0"
                  }`}
                >
                  {Array.isArray(item.answer) ? (
                    <ul className="text-[#FFB703] p-4 bg-[#023047]/30 rounded-xl">
                      {item.answer.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#FFB703] p-4 bg-[#023047]/30 rounded-xl">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
