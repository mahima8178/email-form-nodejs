const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth)); 

const mailOptions = {
    from: 'mt3178@srmist.edu.in',
    to:'mahimathakur888@gmail.com',
    subject: 'New Proo',
    text: 'hii heyoo'
};

transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Message sent!!!');
    }
});
