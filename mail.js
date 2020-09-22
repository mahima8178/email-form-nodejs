const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  'MAIL_GUN_API_KEY', // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || 'MAIL_GUN_DOMAIN' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth)); 

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from:email,
        to:'mahimathakur888@gmail.com',
        subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

sen


