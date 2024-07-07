import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface PortfolioProps {
  id: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-10" id={id}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white">Our Works</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">See some of our works</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] h-full w-full rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                Design for animation sneakers
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
              <div className="flex justify-center items-center mt-8">
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
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] h-full w-full rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                Greatest animation's website with best UI/UX design
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
              <div className="flex justify-center items-center mt-8">
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
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] h-full w-full rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                Website for sushi delivery pretty and smooth
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
              <div className="flex justify-center items-center mt-8">
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
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] h-full w-full rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                Toys company store
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
              <div className="flex justify-center items-center mt-8">
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
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] h-full w-full rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                Simple web design
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
              <div className="flex justify-center items-center mt-8">
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
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] h-full w-full rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                Cyberpunk website for games accounts
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/porto/yea.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="digle-works"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-8">
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
