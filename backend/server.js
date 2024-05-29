const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
let dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const clientUser = process.env.CLIENT_EMAIL;

// Allow all origins during development
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(process.env);

// Default route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your backend!');
});

app.post('/api/send-email', async (req, res) => {
  // process.env pass
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });
  const formData = req.body;
  try {
    console.log('Received formData:', formData);
    const mailOptions = {
      from: user,
      to: user,
      // to: clientUser,
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
