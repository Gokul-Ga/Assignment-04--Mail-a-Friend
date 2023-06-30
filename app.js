
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com', /*Enter you E-mail id   */
        pass: '*********' /*Enter passowrd - if you are using Gmail ID then enter app password else enter account password */
    }
});

const options = {
    from: 'xyz@gmail.com',/*Enter you E-mail id   */
    to: 'tester@bareed.ws',
    subject: 'Mail a Friend (Nodemailer)',
    text: 'This mail is sent using Nodemailer'
};

transporter.sendMail(options, function (err, info) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Email sent successfully');
    console.log('Sender : ' + options.from);
    console.log('Receiver : ' + options.to);
});
