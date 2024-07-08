import Servnav from '@/components/compos/services/servnav';
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Footer from '@/components/compos/Home/Footer';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Contact from '@/components/compos/Home/Contact';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Services | Digle - Where Creativity Meets Code",
  description: "Digle Innovative web design solutions tailored to your business needs.",
}

const Services = () => {
  return (
    <>
      <div className='container mx-auto px-4 '>
        <div><Servnav/></div>
        <div className='text-center mt-10'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>Business Websites</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
            If your business does not yet have a website, then it is time to have an online presence that communicates the brand of your company, as well as displays information about services or products.
          </p>
        </div>
        <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/arrow.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/darrow.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Interactive Features</CardTitle>
              <CardDescription>Engage your visitors with interactive elements that enhance user interaction and experience.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/speed.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dspeed.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>High-Speed Performance</CardTitle>
              <CardDescription>Ensure fast loading times to keep your visitors happy</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 3 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/user.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/duser.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>User-Friendly Design</CardTitle>
              <CardDescription>Create easy-to-navigate interfaces that keep your visitors engaged and coming back.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 4 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/ux.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dux.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>UX & UI Implementation</CardTitle>
              <CardDescription>Thoughtful design to ensure an intuitive user experience.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 5 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/seo.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dseo.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>SEO Optimized</CardTitle>
              <CardDescription>Optimize your site for search engines to improve visibility and attract more traffic.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 6 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/mob.svg'}
                  alt='Mobile Optimization'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dmob.svg'}
                  alt='Mobile Optimization'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Mobile Optimization</CardTitle>
              <CardDescription> seamless performance across all devices, ensuring a smooth user experience on smartphones and tablets.</CardDescription>
            </CardHeader>
          </Card>
        </div>



        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>


          {/* ecommerce */}
          
      <div className='text-center mt-10' id='ecommerce-section'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>E-Commerce Website</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          Maximize your sales potential with a cutting-edge eCommerce website designed by Digle. Our eCommerce solutions include          </p>
        </div>
        <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/payment.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dpayment.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Payment Integrations</CardTitle>
              <CardDescription>Support for multiple payment gateways to make transactions easy and secure.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/sec.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/sec.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Highly Secure Checkout</CardTitle>
              <CardDescription>Implement advanced security measures to protect customer information during transactions.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 3 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/user.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/duser.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>User-Friendly Design</CardTitle>
              <CardDescription>Develop intuitive navigation that makes shopping a breeze for your customers.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 4 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/arrow.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/darrow.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Interactive Features</CardTitle>
              <CardDescription>Add dynamic elements that engage and retain customers, enhancing their shopping experience.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 5 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/seo.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dseo.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>SEO Optimized</CardTitle>
              <CardDescription>Optimize your eCommerce site for search engines to attract more customers and boost sales.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 6 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/mob.svg'}
                  alt='Mobile Optimization'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dmob.svg'}
                  alt='Mobile Optimization'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Mobile Optimization</CardTitle>
              <CardDescription>Ensure a flawless shopping experience on any device, from desktops to smartphones.</CardDescription>
            </CardHeader>
          </Card>
        </div>


      {/* seo */}

        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>

      
        <div className='text-center mt-10' id='seo-section'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>seo</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          Great SEO leverages powerful analytics and keyword analysis to draw eligible local traffic to your company website, improve your sales potential, and make it a money-making machine! Our SEO services include
          </p>
        </div>
        <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/web.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dweb.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Website Audit</CardTitle>
              <CardDescription>Conduct a comprehensive analysis to identify areas for improvement and optimize your sites performance.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/analy.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/analy.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Competitor Analysis</CardTitle>
              <CardDescription>Gain insights into your competitors strategies to stay ahead in the market.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 3 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/key.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/key.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Keyword Research</CardTitle>
              <CardDescription>Identify the best keywords to attract targeted traffic and improve your sites search engine ranking.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 4 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/link.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/link.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Link-Building Services</CardTitle>
              <CardDescription>Build high-quality backlinks to improve your site&apos;s authority and search engine performance.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 5 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/buss.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/buss.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Business Profile Listings</CardTitle>
              <CardDescription>Enhance your online presence with accurate and optimized business profiles across various platforms.</CardDescription>
            </CardHeader>
          </Card>
        </div>


      {/* Branding and Digital Marketing */}

        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>

      
        <div className='text-center mt-10' id='seo-section'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>Branding and Digital Marketing</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          At Digle, we specialize in developing a strong brand identity and implementing effective digital marketing strategies that drive results. Our team works closely with you to understand your unique needs and create customized solutions that resonate with your audience and amplify your online presence.
          </p>
        </div>
        <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/brand.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dbrand.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Custom Branding</CardTitle>
              <CardDescription>From logos to color palettes, we create a memorable brand identity that reflects your business.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/eml.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/deml.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>PPC Advertising</CardTitle>
              <CardDescription>Drive targeted traffic and increase conversions with pay-per-click campaigns.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/seo.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dseo.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>SEO</CardTitle>
              <CardDescription>Enhance your search engine visibility with comprehensive on-page and technical SEO</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 3 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/adss.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dadss.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Email Marketing</CardTitle>
              <CardDescription>Engage your audience and nurture leads with personalized email campaigns.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 4 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/cont.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dcont.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Content Marketing</CardTitle>
              <CardDescription>Build authority and attract customers with high quality, relevant content</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 5 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/buss.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/buss.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Analytics and Reporting</CardTitle>
              <CardDescription>Track your progress and optimize your strategies with detailed performance reports.</CardDescription>
            </CardHeader>
          </Card>
        </div>

      {/* CONTENT CREATION AND SOCIAL MEDIA MANAGEMENT */}

        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>

      
        <div className='text-center mt-10' id='seo-section'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>Content Creation and Social Media Management</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          Digle helps you stay ahead in the digital landscape with top-notch content creation and social media management services. We create compelling content and manage your social media accounts to ensure consistent engagement with your audience.
          </p>
        </div>
        <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/cont.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dcont.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Content Creation</CardTitle>
              <CardDescription>High quality blog posts, articles, and multimedia content tailored to your brand.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/media.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dmedia.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Social Media Management</CardTitle>
              <CardDescription>Daily monitoring, 5 posts/week, Monthly Report, Audit & Analysis, and engagement on platforms like Facebook, Instagram, Twitter, LinkedIn, and etc..</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 3 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/key.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/key.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Ad Campaigns</CardTitle>
              <CardDescription>Design and manage effective social media ad campaigns to boost your reach and conversions.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 4 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/aud.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/daud.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Audience Engagement</CardTitle>
              <CardDescription>Respond to comments and messages, fostering a community around your brand.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 5 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/link.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/link.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Branding Consistency</CardTitle>
              <CardDescription>Ensure your social media profiles reflect your brand identity with custom covers, profiles, and templates</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 6 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/buss.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/buss.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Regular reports and analysis to measure the effectiveness of your social media strategies.</CardDescription>
            </CardHeader>
          </Card>
        </div>

      {/* Website Maintenance and Support */}

        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>

      
        <div className='text-center mt-10' id='seo-section'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>Website Maintenance and Support</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          Maintaining your website boosts your business reputation, keeps it secure, and helps you gain more leads and sales. Let Digle Agency handle your website maintenance to ensure everything runs smoothly.
          </p>
        </div>
        <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/fst.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dfst.svg'}
                  alt='Interactive Features'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Fast Support</CardTitle>
              <CardDescription>1-3 business days turnaround time for addressing issues.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 2 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/upds.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dupds.svg'}
                  alt='High Speed Performance'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Monthly Updates</CardTitle>
              <CardDescription>Up to 3 hours of design or development time each month.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 3 */}
          <Card className="w-full transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/serc.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dserc.svg'}
                  alt='User-Friendly Design'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Daily Security Scans</CardTitle>
              <CardDescription>Regular checks to keep your site safe from threats.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 4 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/ops.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dops.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Quarterly WordPress Updates</CardTitle>
              <CardDescription>Regular updates and security patches for WordPress sites.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 5 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/cops.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dcops.svg'}
                  alt='UX & UI Implementation'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>Content Updates</CardTitle>
              <CardDescription>Keep your site content fresh and relevant.</CardDescription>
            </CardHeader>
          </Card>
          {/* Card 6 */}
          <Card className="w-full mt-10 md:mt-0 transition duration-300 ease-in transform hover:scale-105">
            <CardHeader>
              <div className='mb-2'>
                <Image 
                  src={'/serv/cms.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='block dark:hidden'
                />
                <Image 
                  src={'/serv/dark/dcms.svg'}
                  alt='100% SEO Optimized'
                  width={100}
                  height={100}
                  className='hidden dark:block'
                />
              </div>
              <CardTitle>CMS Support</CardTitle>
              <CardDescription>Ensuring your content management system is up to date.</CardDescription>
            </CardHeader>
          </Card>
        </div>


        {/* proccess */}

<div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20" id='process-section'></div>

        <div>
        <div className='text-center mt-10' >
          <h1 className='text-green-600 uppercase font-bold text-3xl'>Our Process</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          Learn about our process when we start a Website
          </p>
        </div>
        </div>

        <div className='mt-10 flex justify-center'>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Data Collection
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We begin by gathering comprehensive information about your products and niche industry.
          Our team collaborates closely with you to understand your vision,
          ensuring that we capture all the details necessary to create an effective online presence for your business.
          </p>
        </div>
        <Image
          src="/serv/collex.png"
          width={800}
          height={800}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">     
        Strategic Planning
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Using the collected data, we develop tailored strategies for your website.
        We draft multiple plans and evaluate them to identify the best approach for your needs.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Implementation
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          This is the longest step in our work.
          We Careful implement the chosen plan,
          continuously testing and refining each element.
          Our goal is to perfect the final product,
          ensuring it meets all your requirements and exceeds your expectations.
          </p>
        </div>
        <Image
          src="/serv/implem.png"
          width={800}
          height={800}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[10%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
        </div>


        {/* actions */}

        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20" id='features-section'></div>

        <div>
        <div className='text-center mt-10'>
          <h1 className='text-green-600 uppercase font-bold text-3xl'>uniqe Features</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
            Essential Features for Your Website with Digle
          </p>
        </div>
        </div>


  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-10 '>

    {/* sec1 */}
    <div>

        <article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
          <Image
            alt="contact"
            src="/serv/act/contsec1.jpg"
            layout='fill'
            className="absolute inset-0 h-full w-full object-cover"
          />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">Contact Information</h3>
                </a>

                <p className="mt-2 text-sm/relaxed text-neutral-200">
                Including vital contact information on your website is crucial.
                 This includes your location (with a map), phone number, email address,
                  and a contact form. This information should be prominently placed &quot;above the fold&quot; on your home page the area visible without scrolling.
                   We also add details specific to your business, such as business hours, social media links, 
                   and other locations.
                </p>
              </div>
            </div>
        </article>

        </div>

    {/* sec2 */}

        <div>

        <article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
          <Image
            alt="actions"
            layout='fill'
            src="/serv/act/actionsec2.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">Calls to Action</h3>
                </a>

                <p className="mt-2 text-sm/relaxed text-neutral-200">
                Effective calls to action (CTAs) are essential for guiding visitors to achieve your business goals. Whether you want visitors to sign up for your mailing list, purchase a product, contact you, or request a callback, the CTAs must be clear and simple. We design your website to ensure your CTAs align with both your goals and the visitors expectations, making it easy for them to take action.
                </p>
              </div>
            </div>
        </article>

        </div>

        {/* sec3 */}


        <div>

<article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
  <Image
    alt="Reviews"
    layout='fill'
    src="/serv/act/sec3.jpg"
    className="absolute inset-0 h-full w-full object-cover"
  />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">Testimonials and Reviews</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-neutral-200">
        Once visitors arrive at your website, they evaluate your business. Displaying reviews and testimonials from satisfied customers can convince new visitors of your credibility and the quality of your products or services. We integrate testimonials and reviews to highlight positive experiences and build trust with potential customers.
        </p>
      </div>
    </div>
</article>

</div>


{/* sec4 */}


        <div>

<article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
  <Image
    alt="security"
    layout='fill'
    src="/serv/act/sec4.jpg"
    className="absolute inset-0 h-full w-full object-cover"
  />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">Security Features</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-neutral-200">
        Security is paramount, especially for e-commerce websites. We ensure that all sensitive data, such as credit card information, is processed through secure payment gateways and that passwords are hashed and not stored in a readable format. All pages will be SSL-protected, and our servers are secured with the latest technologies to protect your website from threats.
        </p>
      </div>
    </div>
</article>

</div>


{/* sec5 */}

        <div>

<article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
  <Image
    alt="shopping cart"
    layout='fill'
    src="/serv/act/sec5.jpg"
    className="absolute inset-0 h-full w-full object-cover"
  />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">Shopping Cart</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-neutral-200">
        A flexible shopping cart is essential for any e-commerce store. We integrate a shopping cart that allows both guests and registered users to make purchases. Guest checkout speeds up the process by eliminating the need for registration, while registered users can benefit from saved information for future purchases.

        </p>
      </div>
    </div>
</article>

</div>

{/* sec6 */}

        <div>

<article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
  <Image
    alt="items"
    layout='fill'
    src="/serv/act/sec9.jpg"
    className="absolute inset-0 h-full w-full object-cover"
  />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">Related Items</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-neutral-200">        
        The &quot;Related Items&quot; feature enhances user engagement by suggesting additional products that may interest your customers. This feature not only increases sales but also signals to buyers that your store understands their preferences, creating a personalized shopping experience.
        </p>
      </div>
    </div>
</article>

</div>



{/* sec7 */}


        <div>

<article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
  <Image
    alt="blog"
    layout='fill'
    src="/serv/act/sec6.jpg"
    className="absolute inset-0 h-full w-full object-cover"
  />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">Blog Page</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-neutral-200">
        A blog page is a valuable asset for any business website. It drives traffic to your site, converts visitors into leads, establishes your authority in the industry, and delivers long-term results. We set up a blog page that helps you share valuable content with your audience and improve your search engine rankings.

        </p>
      </div>
    </div>
</article>

</div>

{/* sec8 */}

        <div>

<article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
  <Image
    alt="email"
    layout='fill'
    src="/serv/act/sec7.jpg"
    className="absolute inset-0 h-full w-full object-cover"
  />

    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-white">Email Subscription Box</h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-neutral-200">
        An email subscription opt-in box is an essential feature for generating leads. By allowing visitors to subscribe to your email newsletter, you can build relationships and drive sales through regular communication. We design attractive and effective opt-in boxes to increase your subscription rates.
        </p>
      </div>
    </div>
</article>

</div>

{/* sec9 */}

  <div>

    <article className="relative overflow-hidden rounded-xl shadow transition hover:shadow-2xl dark:shadow-lg dark:hover:shadow-neutral-800 duration-300 ease-in transform hover:scale-105">
      <Image
        alt="team"
        layout='fill'
        src="/serv/act/sec8.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Photo of You and Your Team</h3>
            </a>

            <p className="mt-2 text-sm/relaxed text-neutral-200">
              Adding photos of yourself and your team personalizes your website and builds trust with visitors. A friendly, approachable image helps potential customers feel more confident in doing business with you. We ensure your team’s photos are professionally displayed to add a personal touch to your website.
            </p>
          </div>
        </div>
    </article>

</div>

  </div>

        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>


        {/* faq */}


        <div>
        <div className='text-center mt-10'>
          <h1 className='text-green-600 font-bold text-3xl'>Frequently Asked Questions (FAQ) - Digle</h1>
          <p className='text-sm pt-5 max-w-3xl mx-auto'>
          We have compiled an FAQ list to help answer some of the most common questions you might have.
          </p>
        </div>
        </div>




        <div className="py-16 bg-neutral-50 dark:bg-neutral-950">
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
          <AccordionTrigger>How Does the Payment Process Work?</AccordionTrigger>
          <AccordionContent>
          The project starts with a 60% deposit. The remaining 40% is due once we are ready to launch your website. This ensures that both parties are committed to the project from start to finish.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How does the whole process work?</AccordionTrigger>
          <AccordionContent className=''>
          <div>1. Discuss the Project: We will have an in-depth discussion to understand your vision and requirements.</div><br/>
          <div>2. Provide Business Information: Share your business concept, logo, social media links, and any other materials that help us learn more about your business.</div><br/>
          <div>3. Submit Content: Provide all the content you want to include on your website.</div><br/>
          <div>4. Down Payment: Make an initial payment of at least 60% to kickstart the project.</div><br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>I Already Have a Website! Can I Redesign or Update It?</AccordionTrigger>
          <AccordionContent>
          Absolutely! If you already have a website, we can help redesign or update it to better meet your needs.
          Whether you&apos;re looking for a fresh new look, enhanced functionality,
          or improved performance, our team can work with you to develop a solution that aligns with your goals. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What is Web Hosting?</AccordionTrigger>
          <AccordionContent>
          Web hosting is the service that allows your website to be accessible on the internet. It involves storing your website&apos;s files on a server. Web hosting services typically require a monthly or annual fee.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>I have another question!</AccordionTrigger>
          <AccordionContent>
          No problem! Send us an email at <span className="text-green-700 font-bold dark:text-green-500">contact@digle.org</span> or send message on any social media platform and we will get back to you with an answer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     </div>
     </div>


     <Contact/>


        </div>



        <div className="border-b-2 border-neutral-300 dark:border-neutral-700 pt-20"></div>
        <div><Footer/></div>
    </>
  );
};

export default Services;
