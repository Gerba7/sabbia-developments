import { sendFormMail } from "@/app/services/nodemailer";




export async function POST(request, res) {
  
  
  const { name, email, phone, message } = await request.json();

  if (request.method === 'POST') {
    
    try {
      
      await sendFormMail({name, email, phone, message});

      return new Response('Data submitted successfully and email sent', {
        status: 200,
      })

    } catch (error) {

      console.error(error);
      
      return new Response('An error occurred', {
        status: 500,
      })

    }
  } else {

    return new Response('Method Not Allowed', {
      status: 405,
    })

  }
  
}