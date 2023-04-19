const nodemailer = require("nodemailer");

interface MailerProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function mailer({ name, email, subject, message }: MailerProps) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: `"Fred Foo" <foo@example.com`,
    to: "jdewan16@gmail.com",
    subject: "hello",
    text: "hello world?",
    html: "<b>Hello World?</b>",
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
