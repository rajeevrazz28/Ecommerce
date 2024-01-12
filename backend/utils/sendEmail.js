const nodeMailer = require('nodemailer');
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey('xsmtpsib-6596678b3fabdca6297520a30dd2a358f9185d1f38cee00e4e8895f2ee6eaa34-OYBM7WSLIh4UzdgF');

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: '587',
        service: 'gmail',
        secure: true,
        auth: {
            user: 'r4zzranjan28@gmail.com',
            pass: 'Hv82GtzyqkPFgCB7',
        },
    });

    const mailOptions = {
        from: 'r4zzranjan28@gmail.com',
        to: options.email,
        subject: options.subject,
        html: options.message,
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    await transporter.sendMail(mailOptions);

    // const msg = {
    //     to: options.email,
    //     from: process.env.SENDGRID_MAIL,
    //     templateId: options.templateId,
    //     dynamic_template_data: options.data,
    // }
    // sgMail.send(msg).then(() => {
    //     console.log('Email Sent')
    // }).catch((error) => {
    //     console.error(error)
    // });
};

module.exports = sendEmail;