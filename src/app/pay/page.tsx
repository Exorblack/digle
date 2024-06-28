"use client"
import Footer from '@/components/compos/Home/Footer';
import Navcont from '@/components/compos/contact/navcont';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const paySchema = z.object({
    name: z.string().min(3,{message:"Name is required"}),
    email: z.string().email("Please enter a valid email"),
    pkg: z.string().min(1,{message:"Package is required"}),
    message: z.string().min(7,{message:"Message is required"}),
})

const Pay = () => {

  const router = useRouter();

  const handlePayNow = (pkg:string) => {
    if (pkg === 'gold') {
      router.push('https://www.paypal.com/ncp/payment/HJQPGR68WTVZA');
    } else if (pkg === 'diamond') {
      router.push('https://www.paypal.com/ncp/payment/4UTZDSBSD65KA');
    }
  };

  type tty = z.infer<typeof paySchema>;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<tty>({
    resolver: zodResolver(paySchema)
  });

  const onSubmit = async (data: tty) => {
    const opt = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        pkg: data.pkg,
        message: data.message,
      })
    };

    const res = await fetch("/api/pay", opt);
    if (res.ok) {
      toast('Your message has been sent successfully. Redirecting to the payment gateway...', {
        action:{
          label:<div className='flex justify-center p-4 font-bold'>Redirect Now</div>,
          onClick () {
            handlePayNow(data.pkg);
          },
        }
      });
      setTimeout(() => {
        handlePayNow(data.pkg);
      }, 5000)
    } else {
      toast.error('Something went wrong', {
        duration: 2000
      });
    }
  };

  const [selectedPackage, setSelectedPackage] = useState('');
  const handlePackageChange = (value:string) => {
    setSelectedPackage(value);
    setValue('pkg', value); 
  };

  return (
    <div>
      <div><Navcont /></div>
      <div>
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold text-green-700 dark:text-green-500">Make a Payment</h1>
                <p className="text-balance text-muted-foreground">
                  Thank you for choosing Digle! We appreciate your business and look forward to providing you with top-notch service.<br/>
                  <span className='flex justify-center pt-3'>Facing any issues? Contact us</span>
                  <span className='flex justify-center font-bold text-green-700'>contact@digle.org</span> 
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Label className="block text-neutral-700 dark:text-neutral-300 mb-2" htmlFor="name">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out transform hover:scale-105" 
                    placeholder="john doe" 
                    {...register('name')}
                  />
                  {errors.name && (<span className="text-red-500 text-xs">{errors.name?.message}</span>)}
                </div>
                <div>
                  <Label className="block text-neutral-700 dark:text-neutral-300 mb-2" htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out transform hover:scale-105" 
                    placeholder="example@digle.org" 
                    {...register('email')}
                  />
                  {errors.email && (<span className="text-red-500 text-xs">{errors.email?.message}</span>)}
                </div>
                <div>
                  <Label className="block text-neutral-700 dark:text-neutral-300 mb-2">Select a Package</Label>
                  <Select onValueChange={handlePackageChange}>
                    <SelectTrigger className="w-full dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="diamond">Diamond</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.pkg && (<span className="text-red-500 text-xs">{errors.pkg?.message}</span>)}
                </div>
                <div>
                  <Label className="block text-neutral-700 dark:text-neutral-300 mb-2" htmlFor="message">Say Something😊</Label>
                  <Textarea 
                    id="message" 
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out transform hover:scale-105" 
                    placeholder="Your Message"
                    {...register('message')}
                  ></Textarea>
                  {errors.message && (<span className="text-red-500 text-xs">{errors.message?.message}</span>)}
                </div>
                <div>
                  <Button 
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Pay Now (first 60%)🔒
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/credit-card-machine-4577769_1280.jpg"
              alt="Digle contact"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-75"
            />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
      <div><Footer /></div>
    </div>
  );
};

export default Pay;
