import { NextResponse } from "next/server";
import { sabbiaMail } from "../lib/services/nodemailer";

export async function GET() {
    // res.status(200).json({ name: 'John Doe' })
    return NextResponse.json({
      hello: "world"
    })
}


export async function POST(req) {
  
  const data = await req.json();
  
  try{
    
    let subject = `Tenes una nueva consulta!`

    let htmlContent = `
      <html>
        <body>
          <h3><b>Nombre y Apellido:</b></h3>
                    <p>${data.name}</p>
          <br>
          <h3><b>Email:</b></h3>
                    <p>${data.email}</p>
          <br>
          <h3><b>Telefono:</b></h3>
                    <p>${data.phone}</p>
          <br>
          <h3><b>Consulta:</b></h3>
                    <p>${data.message}</p>
          <br>
        </body>
      </html>
    `
    
    try{
      await sabbiaMail(subject, htmlContent)
    } catch (err) {
      console.log(err)
    }

    return NextResponse.json('Enviado')

    } catch (err) {
      return NextResponse.json('Error al enviar mail de consulta')
    }
    
}
