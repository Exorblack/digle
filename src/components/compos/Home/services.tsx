import React from "react";
import Image from 'next/image';

export function BentoServices() {
  return (
    <section className="lg:py-10 px-8">
      <div className="mx-auto mb-10 text-center lg:mb-20">
        <h3 className="mb-2 font-bold uppercase text-neutral-700 dark:text-neutral-200">
          Features
        </h3>
        <h2 className="mb-4 text-2xl font-bold lg:text-4xl text-neutral-800 dark:text-neutral-100">
          explore our Services
        </h2>
        <p className="mx-auto max-w-lg text-neutral-500 dark:text-neutral-400">
        Our team designs websites that reflect your brands unique identity, ensuring a visually engaging and user-friendly experience.
        </p>
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
          <div className="text-center p-8">
            <h4 className="mb-2 font-medium text-neutral-700 dark:text-neutral-200">
            Responsive Web Design
            </h4>
            <p className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Ensure your website looks great on all devices, from desktops to smartphones providing a consistent and enjoyable user experience.
            </p>
            <div className="flex justify-center">
            <Image
              src="/psphone.svg"
              alt="iphone"
              width={400}
              height={400}
              className="transition-transform duration-300 transform hover:scale-105"
            />
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
          <div className="text-center p-8">
            <h4 className="mb-2 font-medium text-neutral-700 dark:text-neutral-200">
              SEO Optimization
            </h4>
            <p className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            We implement advanced SEO strategies to enhance your online visibility, and boost your search engine rankings and drive organic traffic.
            </p>
            <div className="flex justify-center">
              <Image
                src="/bars-graph-svgrepo-com.svg"
                width={400}
                height={400}
                alt="laptop"
                className="transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
          <div className="text-center p-8">
            <h4 className="mb-2 font-medium text-neutral-700 dark:text-neutral-200">
              Comprehensive Support
            </h4>
            <span className="text-green-700">&quot;Here for You, Always&quot;</span>
            <p className="text-center max-w-sm mx-auto text-base font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Our dedicated support team is available to assist you with any issues, ensuring your website remains at its optimal performance 
            These services are designed to keep client websites up-to-date, secure, and running smoothly, while freeing clients from the hassle of managing their website themselves.
            </p>
            <div className="flex justify-center mt-16">
              <Image
                src="/maintance.svg"
                alt="laptop"
                width={350}
                height={350}
                className="transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
          <div className="text-center p-8">
            <h4 className="mb-2 font-medium text-neutral-700 dark:text-neutral-200">
            Website Maintenance and Security
            </h4>
            <h6 className="mb-3 text-sm text-neutral-700 dark:text-neutral-200">
            </h6>
            <p className="text-center max-w-xs mx-auto text-base font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Keep your website secure and running smoothly with our comprehensive maintenance services, keeping your website updated, secure, pretty.
            </p>
            <div className="flex items-center -space-x-4 justify-center ">
              <Image 
                src="/support.svg"
                alt={""}
                height={250}
                width={250}
                className="my-10 transition-transform duration-300 transform hover:scale-105" 
              />
            </div>
            <div className="flex justify-between items-end mt-40">
              <div className="flex gap-2">
                <Image
                  src="/logo-no-background.svg"
                  width={35}
                  height={35}
                  alt="logo"
                  className=""
                />
                <a
                  href="https://www.digle.org"
                  className="mr-4 text-xs font-bold cursor-pointer text-neutral-700 dark:text-neutral-200"
                >
                  Digle <br /> agency
                </a>
              </div>
              <a
                href="https://www.digle.org"
                className="text-sm font-bold cursor-pointer text-neutral-700 dark:text-neutral-200"
              >
                  Digle.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoServices;
