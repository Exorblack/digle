"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from "next/image"
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'sonner';


const contSchema = z.object({
  fname:z.string(),
  lname:z.string(),
  email:z.string().email("Please enter valid email"),
  phone:z.string(),
  message:z.string(),
})

const Cont = () => {
  type tty = z.infer<typeof contSchema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tty>({
    resolver: zodResolver(contSchema)
  })

  const onSubmit = async (data:tty) => {
    const opt = {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        fname:data.fname,
        lname:data.lname,
        email:data.email,
        phone:data.phone,
        message:data.message,
      })

    }
    const res = await fetch("/api/send",opt)
    if (res.ok) {
      toast.success('thanks for sending message to us we will respone you as fast as possible',{
        duration:2000
      });      
    }else{
      toast.error('some thing went wronge',{
        duration: 2000
      })

    }
  }

  return (
    <div>
       <div>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-neutral-50 dark:bg-neutral-950">
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-500">Contact Us</h1>
          <p className="text-balance text-muted-foreground">
            We would love to hear from you! Please fill out the form below to get in touch.
           <span className='flex justify-center font-bold text-green-700'>contact@digle.org</span> 
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">

            <div className="grid gap-2">
              <Label htmlFor="first-name">First Name*</Label>
              <Input id="first-name" type="text" placeholder="First Name" required {...register('fname')}/>
              {errors.fname && (<span className="text-red-500 text-xs">{errors.fname?.message}</span>)}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last Name*</Label>
              <Input id="last-name" type="text" placeholder="Last Name" required {...register('lname')} />
              {errors.lname && (<span className="text-red-500 text-xs">{errors.lname?.message}</span>)}
            </div>

            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input id="email" type="email" placeholder="Digle@example.com" required {...register('email')} />
              {errors.email && (<span className="text-red-500 text-xs">{errors.email?.message}</span>)}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(123) 456-7890" {...register('phone')}/>
              {errors.phone && (<span className="text-red-500 text-xs">{errors.phone?.message}</span>)}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message*</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                required
                className="p-2 border rounded-md"
                {...register('message')}
              />
              {errors.message && (<span className="text-red-500 text-xs">{errors.message?.message}</span>)}
            </div>
            <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
    <div className="hidden bg-muted lg:block">
      <Image
        src="/student-849825_1920.jpg"
        alt="Digle contact"
        width="1920"
        height="1080"
        className="h-full w-full object-cover dark:brightness-75"
      />
    </div>
  </div>
      </div>
    </div>
  )
}

export default Cont