"use client";
import Footer from '@/components/compos/Home/Footer';
import Navcont from '@/components/compos/contact/navcont';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from 'sonner';


const questSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email("Please enter a valid email"),
  pkg: z.string().min(1, { message: "Package is required" }),
  additionalQuestions: z.array(z.string().optional()),
});

const Questionnaire = () => {
  type tty = z.infer<typeof questSchema>;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<tty>({
    resolver: zodResolver(questSchema)
  });



  const onSubmit = async (data: tty) => {
    const opt = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("/api/quest", opt);
    if (res.ok) {
      toast.success('Your message has been sent successfully. Redirecting to the payment gateway...');
    } else {
      toast.error('Something went wrong', {
        duration: 2000
      });
    }
  };


  const [selectedPackage, setSelectedPackage] = useState('');
  const handlePackageChange = (value: string) => {
    setSelectedPackage(value);
    setValue('pkg', value);
  };

  const renderAdditionalQuestions = () => {
    switch (selectedPackage) {
      case 'gold-Diamond':
        return (
          <>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">1.Please provide a sort description of your Business.</Label>
              <Textarea
                id="goldQ1" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.0')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">2.why does your Business exist? whats the story behind your Business and the core values that drive you.</Label>
              <Textarea
                id="goldQ2" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.1')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">3.why do clients/customers choose you? what sets you apart?</Label>
              <Textarea
                id="goldQ3" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.2')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">4.Who are your main competitors? provide their name and website and/or social media.</Label>
              <Textarea
                id="goldQ4" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.3')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">5.Do you have an existing logo and brand guidelines? If yes, please provide them.</Label>
              <Textarea
                id="goldQ5" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.4')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">6.What are your brand colors and fonts?</Label>
              <Textarea
                id="goldQ6" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.5')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">7.Describe the look and feel you want for your website (e.g., modern, professional, playful, luxury, friendly).</Label>
              <Textarea
                id="goldQ7" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.6')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">8.please provide the content (text, images, videos) for the website?</Label>
              <Textarea
                id="goldQ8" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.7')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">9.Do you need any specific sections or pages (e.g., About Us, Services, Blog, Contact)?</Label>
              <Textarea
                id="goldQ9" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.8')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">10.What specific features do you need on your website? (e.g., e-commerce, booking system, contact forms, chat support)</Label>
              <Textarea
                id="goldQ10" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.9')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">11.Is there a specific deadline for the project?</Label>
              <Textarea
                id="goldQ11" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.10')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">12.Are there any financial constraints or payment preferences we should be aware of?</Label>
              <Textarea
                id="goldQ12" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.11')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">13.What is your budget range for this project?</Label>
              <Textarea
                id="goldQ13" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.12')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">14.Is there any other information you think would be helpful for us to know?</Label>
              <Textarea
                id="goldQ14" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.13')}
              />
            </div>
          </>
        );

      case 'platinum':
        return (
          <>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Please provide a sort description of your Business.</Label>
              <Textarea
                id="platinumQ1" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.1')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">why does your Business exist? whats the story behind your Business and the core values that drive you.</Label>
              <Textarea
                id="platinumQ2" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.2')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">What specific business objectives do you want to achieve with your new website? (e.g., increase sales, generate leads, build brand awareness)</Label>
              <Textarea
                id="platinumQ3" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.3')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">What problems do your target customers face that your business solves?</Label>
              <Textarea
                id="platinumQ4" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.4')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">why do clients/customers choose you? what sets you apart?</Label>
              <Textarea
                id="platinumQ5" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.5')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">how are your clients/customers finding you?(social media,referrals,ads?)</Label>
              <Textarea
                id="platinumQ6" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.6')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">do you have mission statement or tagline?</Label>
              <Textarea
                id="platinumQ7" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.7')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">what are your goals for your business?(1year,3year,5year)</Label>
              <Textarea
                id="platinumQ8" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.8')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Who are your main competitors?</Label>
              <Textarea
                id="platinumQ9" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.9')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Please list 3 competitors to watch in your industry! provide their name and website and/or social media.</Label>
              <Textarea
                id="platinumQ10" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.10')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">what do you like or dislike about them and explain why?</Label>
              <Textarea
                id="platinumQ11" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.11')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">what is going to make your ideal client choose you over them?</Label>
              <Textarea
                id="platinumQ12" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.12')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Do you have an existing logo and brand guidelines? If yes, please provide them.</Label>
              <Textarea
                id="platinumQ13" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.13')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">What are your brand colors and fonts?</Label>
              <Textarea
                id="platinumQ14" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.14')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Describe the look and feel you want for your website (e.g., modern, professional, playful, luxury, friendly).</Label>
              <Textarea
                id="platinumQ15" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.15')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Are there any specific websites/typography/logos you admire? Please provide examples and what you like about them.</Label>
              <Textarea
                id="platinumQ16" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.16')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">please provide the content (text, images, videos) for the website?</Label>
              <Textarea
                id="platinumQ17" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.17')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Do you need any specific sections or pages (e.g., About Us, Services, Blog, Contact)?</Label>
              <Textarea
                id="platinumQ18" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.18')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">What specific features do you need on your website? (e.g., e-commerce, booking system, contact forms, chat support)</Label>
              <Textarea
                id="platinumQ19" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.19')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Do you need any integrations with third-party services (e.g., CRM, payment gateways, etc..)?</Label>
              <Textarea
                id="platinumQ20" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.20')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Do you have any preference for the platform or CMS (e.g., WordPress, Shopify, or custom solution)?</Label>
              <Textarea
                id="platinumQ21" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.21')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Are there any specific technical requirements or constraints we should be aware of?</Label>
              <Textarea
                id="platinumQ22" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.22')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Is there a specific deadline for the project?</Label>
              <Textarea
                id="platinumQ23" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.23')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Are there any key milestones or events we should consider?</Label>
              <Textarea
                id="platinumQ24" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.24')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">What is your budget range for this project?</Label>
              <Textarea
                id="platinumQ25" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.25')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Are there any financial constraints or payment preferences we should be aware of?</Label>
              <Textarea
                id="platinumQ26" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.26')}
              />
            </div>
            <div>
              <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="platinumQ1">Is there any other information you think would be helpful for us to know?</Label>
              <Textarea
                id="platinumQ27" 
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200" 
                {...register('additionalQuestions.27')}
              />
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      <div><Navcont /></div>
      <div>
        <div className=" bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold text-green-700 dark:text-green-500">Make a Questionnaire</h1>
                <p className="text-balance text-muted-foreground">
                  Thank you for choosing Digle! We truly appreciate your business and are excited to provide you with top-notch service.<br/>
                  <span className='flex justify-center pt-3'>To help us better understand your needs, please fill out the form below.</span>
                  Your responses will enable us to tailor our solutions specifically to your requirements.<br />
                  <span className='flex justify-center pt-3'>Facing any issues? Contact us</span>
                  <span className='flex justify-center font-bold text-green-700'>contact@digle.org</span>
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="name">Name</Label>
                  <Input type="text" id="name" className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out transform hover:scale-105" placeholder="john doe" {...register('name')} />
                  {errors.name && (<span className="text-red-500 text-xs">{errors.name?.message}</span>)}
                </div>
                <div>
                  <Label className="block text-neutral-700 dark:text-green-500 mb-2" htmlFor="email">Email</Label>
                  <Input type="email" id="email" className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out transform hover:scale-105" placeholder="example@digle.org" {...register('email')} />
                  {errors.email && (<span className="text-red-500 text-xs">{errors.email?.message}</span>)}
                </div>
                <div>
                  <Label className="block text-neutral-700 dark:text-green-500 mb-2">Select a Package</Label>
                  <Select onValueChange={handlePackageChange}>
                    <SelectTrigger className="w-full dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="gold-Diamond">Gold/Diamond</SelectItem>
                        <SelectItem value="platinum">Platinum</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.pkg && (<span className="text-red-500 text-xs">{errors.pkg?.message}</span>)}
                </div>
                {renderAdditionalQuestions()}
                <div>
                  <Button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105">
                    Submit 🤩
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-neutral-300 dark:border-neutral-700"></div>
      <div><Footer /></div>
    </div>
  );
};

export default Questionnaire;
