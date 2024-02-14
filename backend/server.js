// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//process.env pass
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayyytran@gmail.com',
    pass: 'uzrj olea dkgd uecn',
  },
});

app.post('/api/send-email', async (req, res) => {
  const formData = req.body;
  try {
    console.log('Received formData:', formData);
    console.log('Received body:', req.body);
    const mailOptions = {
      from: 'ayyytran@gmail.com',
      to: 'ayyytran@gmail.com',
      subject: 'Contact Form Details',
      text: `Contact for info ${JSON.stringify(formData, null, 2)}`, // Convert form data to JSON string
      // text: 'JSON.stringify(formData, null, 2)', // Convert form data to JSON string
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({message: 'Email sent successfully!'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error sending email'});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
