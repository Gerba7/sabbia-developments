const nodemailer = require("nodemailer");



async function sabbiaMail(subject, html) {
    
    try {
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'info@sabbiavolumi.ar',
                pass: process.env.EMAIL_PASS,
            },
            tls : { rejectUnauthorized: false }
        })

        const mailOptions = {
            from: 'Sabbia Volumi <info@sabbiavolumi.ar>',
            bcc: 'info@sabbiavolumi.ar',
            subject: subject,
            html: html,
        };

        const res = await transporter.sendMail(mailOptions);

        return res;
        
        
    } catch(err) {

        console.log(err);

    }



}


module.exports = {
    sabbiaMail,
}