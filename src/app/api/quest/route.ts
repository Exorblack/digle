import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const reqSchema = z.object({
  name: z.string(),
  email: z.string().email('Please enter a valid email'),
  pkg: z.string(),
  additionalQuestions: z.array(z.string().optional()),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();  
    const { name, email, pkg, additionalQuestions } = reqSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'customer@digle.org',
      to: ['contact@digle.org'],
      subject: `Message from ${name}`,
      text: `
        email: ${email}\n 
        pkg: ${pkg}\n
        Additional Questions: \n ${additionalQuestions.join('\n\n')}
        `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
