/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const nodemailer = require('nodemailer');


async function sendEmail(email) {

  // create reusable transporter object using the default SMTP transport

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: 'karolann.smith9@ethereal.email', // use these credentials to log into the email client on https://ethereal.email/messages
      pass: '16DKg1EMKfwZCqXYv3',
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <cypresstest@example.com>', 
    to: email,
    subject: "Test run completed",
    text: "This is the generated cyress report attached to the email",
    html: "<b>This is the generated cyress report attached to the email</b>",
    attachments: [
      {   // filename and content type is derived from path
        path: './mochawesome-report/Cypress_HMTL_Report.html'
    },
    ]
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


module.exports = (on, config) => {
  on('task', {
    sendMail(mail){
      sendEmail(mail)
      return null
    }
  })


}
