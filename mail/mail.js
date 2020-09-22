
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'MAIL_GUN_API_KEY',// TODO: Replace with your mailgun API KEY
        domain: 'MAIL_GUN_DOMAIN' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth)); 

const sendMail = (email, subject, text) => {
    const mailOptions = {
        from:email,
        to:'mahimathakur888@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            return console.log(err, null);
        } 
          return console.log(null, data);
    });
}

module.exports = sendMail
