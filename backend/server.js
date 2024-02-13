// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

//process.env pass
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayyytran@gmail.com',
    pass: 'uzrj olea dkgd uecn',
  },
});

app.get('/send-email', async (req, res) => {
  try {
    const mailOptions = {
      from: 'ayyytran@gmail.com',
      to: 'ayyytran@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email.',
    };

    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
