const nodemailer = require("nodemailer");



async function borealisMail(subject, html) {
    
    try {
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contact@australisdevs.com',
                pass: process.env.EMAIL_PASS,
            },
            tls : { rejectUnauthorized: false }
        })

        const mailOptions = {
            from: 'BorealisDevs <contact@australisdevs.com>',
            bcc: 'contact@australisdevs.com',
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
    borealisMail,
}