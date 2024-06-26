import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
interface PortfolioProps {
  id: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950" id={id}>
        <div>
          <h1 className='flex justify-center pt-10 text-3xl'>Our Works</h1>
          <p className='flex justify-center pt-3 text-sm'>see some of our works 
          </p>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
          <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
              >
                design for animation sneakers
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/portf1.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://www.behance.net/337ba9b6"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  View now →
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
              >
                Greatest animation&apos;s website with best UI/UX design
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/portf2.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://www.behance.net/337ba9b6"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  View now →
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
              >
                 website for sushi delivery
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/portf3.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://www.behance.net/337ba9b6"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  View now →
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
              >
                toys company store
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/portf4.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://www.behance.net/337ba9b6"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  View now →
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
              >
                simple web design
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/portf5.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://www.behance.net/337ba9b6"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  View now →
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
              >
                cyberpunk website for games accounts
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/yea.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" 
                  alt={'digle-works'}               
                />
              </CardItem>
              <div className="flex justify-center items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://www.behance.net/337ba9b6"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                  View now →
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
        </div>
    </div>
    </section>
  );
}

export default Portfolio;

