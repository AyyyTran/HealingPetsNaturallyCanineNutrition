// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const clientUser = process.env.CLIENT_EMAIL;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//process.env pass
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: pass,
  },
});

app.post('/api/send-email', async (req, res) => {
  const formData = req.body;
  try {
    console.log('Received formData:', formData);
    console.log('Received body:', req.body);
    const mailOptions = {
      from: user,
      // to: clientUser,
      to: user,
      subject: 'Contact Form Details',
      text: `Contact form info ${JSON.stringify(formData, null, 2)}`, // Convert form data to JSON string
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
