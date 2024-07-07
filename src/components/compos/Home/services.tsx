"use client"
import React from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


export function BentoServices() {
  return (
    <section className="container lg:py-10 px-8">
      <div className="mx-auto mb-5 text-center">
        <h1 className=" text-2xl mb-5 font-bold uppercase text-neutral-700 dark:text-neutral-200">
          OUR SERVICES
        </h1>
        <p className="mx-auto mb-1 max-w-lg text-neutral-500 dark:text-neutral-400">
        Our team designs websites that reflect your brands unique identity, ensuring a visually engaging and user-friendly experience.
        </p>
        <div className="pt-1">
        <Link href={"/our-services"}>
        <Button variant={"link"} className="text-2xl text-green-600 hover:text-green-700">All Services</Button>
        </Link>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url(https://images.pexels.com/photos/276223/pexels-photo-276223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VjODhpZm9jem85eWF3eWczeWU5MmxvdTdtMHFxaXVtbTZnYzNiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VjODhpZm9jem85eWF3eWczeWU5MmxvdTdtMHFxaXVtbTZnYzNiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.webp)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-50 relative">
              Responsive Web Design
              </h1>
              <p className="font-normal text-base text-neutral-50 relative my-4">
              Ensure your website looks great on all devices,
              from desktops to smartphones providing a consistent and enjoyable user experience.
              </p>
            </div>
          </div>
      </div>


      <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url(https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdvYXN3emJoM3hkdGY4M2Z5eHdraGZheXl5MW40NWlubHRqbW9pOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fox4oWLsNMKD3QubO3/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdvYXN3emJoM3hkdGY4M2Z5eHdraGZheXl5MW40NWlubHRqbW9pOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fox4oWLsNMKD3QubO3/giphy.webp)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-50 relative">
                SEO Optimization
              </h1>
              <p className="font-normal text-base text-neutral-50 relative my-4">
                We implement advanced SEO strategies to enhance your online visibility,
                and boost your search engine rankings and drive organic traffic.
              </p>
            </div>
          </div>
      </div>

      <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url(https://images.pexels.com/photos/7019602/pexels-photo-7019602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover ",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW8zcjgwN2RlYmR1YzNuMG4wYzNqaXEyYjlpbGRoOW8wazl0MzMwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q27Id6xoVzjfyzWgJf/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW8zcjgwN2RlYmR1YzNuMG4wYzNqaXEyYjlpbGRoOW8wazl0MzMwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q27Id6xoVzjfyzWgJf/giphy.webp)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-50 relative">
                Website Maintenance and Support
              </h1>
              <p className="text-green-500">&quot;Here for You, Always&quot;</p>
              <p className="font-normal text-base text-neutral-50 relative my-4">
                We implement advanced SEO strategies to enhance your online visibility,
                and boost your search engine rankings and drive organic traffic.
              </p>
            </div>
          </div>
      </div>

      <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url(https://images.pexels.com/photos/7194210/pexels-photo-7194210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWExbDUwemlja25hZ3g0Y3IxNnJiaDJ3MDZybDI2eHRvdnpsa2dneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wcGoj8bOeivU54PaP5/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWExbDUwemlja25hZ3g0Y3IxNnJiaDJ3MDZybDI2eHRvdnpsa2dneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wcGoj8bOeivU54PaP5/giphy.webp)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-50 relative">
                Custom Design
              </h1>
              <p className="font-normal text-base text-neutral-50 relative my-4">
                All designs crafted by Digle are custom and unique.
                Stand apart from your competition with a custom bespoke website designed to tell your unique story.
              </p>
            </div>
          </div>
      </div>


      <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url(https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHduem85Z25ha2dyNm9wMWxwZ2IyeGQwNHVzcWpuMWlvZGcwdDA1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EKjkF4FIkmLwYBLdal/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHduem85Z25ha2dyNm9wMWxwZ2IyeGQwNHVzcWpuMWlvZGcwdDA1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EKjkF4FIkmLwYBLdal/giphy.webp)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-50 relative">
                Digital Marketing
              </h1>
              <p className="font-normal text-base text-neutral-50 relative my-4">
              we offer a comprehensive range of services to help your business thrive in the digital landscape, boost your online presence and drive growth
              </p>
            </div>
          </div>
      </div>


      <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url(https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXlkOTNtM2VhbDFwajJ4N2E5eXk0cXFwaGhleG1qaDZiemJ1a282ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1BgSnmPYz8OYv93q/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXlkOTNtM2VhbDFwajJ4N2E5eXk0cXFwaGhleG1qaDZiemJ1a282ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1BgSnmPYz8OYv93q/giphy.webp)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-50 relative">
                Branding
              </h1>
              <p className="font-normal text-base text-neutral-50 relative my-4">
              Customers are more likely to buy, spend, and advocate for products they believe in.
              We take an integrated approach to create successful brands
              </p>
            </div>
          </div>
      </div>




      </div>


    </section>
  );
}

export default BentoServices;