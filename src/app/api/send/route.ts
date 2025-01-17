import EmailTemplate from "@/components/Email/EmailTemp";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    const body = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@digle.org",
      to: ["contact@digle.org"],
      subject: `Project order : ${body.projectname}`,
      react: await EmailTemplate({
        name: body.name,
        email: body.email,
        projectname: body.projectname,
        message: body.message,
        service: body.service,
        submitDate: "",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
