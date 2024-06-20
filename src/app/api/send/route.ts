import Cont from '@/components/compos/contact/cont';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contSchema = z.object({
  fname: z.string(),
  lname: z.string(),
  email: z.string().email('Please enter a valid email'),
  phone: z.string(),
  message: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();  
    const { fname, lname, email, phone, message } = contSchema.parse(body); 

    const { data, error } = await resend.emails.send({
      from: 'customer@digle.org',
      to: ['contact@digle.org'],
      subject: `Message from ${fname} ${lname}`,
      text: `Phone: ${phone}\n\n email: ${email}\n\n Message: ${message}`,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
