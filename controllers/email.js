const nodemailer = require('nodemailer');

async function sendEmail(req, res) {
  try {
    // Create a test account using the credentials from your Ethereal account
    const testAccount = await nodemailer.createTestAccount();

    // Create a Nodemailer transporter using the test account settings
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Email details from the request
    const { to, subject, text } = req.body;

    // Send a test email
    const info = await transporter.sendMail({
      from: 'your@email.com',
      to,
      subject,
      text,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);

    return res.json({ message: 'Email sent', previewUrl });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
}

module.exports = {
  sendEmail,
};
