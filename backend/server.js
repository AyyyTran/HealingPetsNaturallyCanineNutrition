const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const clientUser = process.env.CLIENT_EMAIL;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('dotenv').config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

connectToDatabase();

// Define UnavailableDate schema and model
const unavailableDateSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
});

const UnavailableDate = mongoose.model(
  'UnavailableDate',
  unavailableDateSchema,
  'appointments'
);

app.get('/', (req, res) => {
  res.send('Hello, this is your backend!');
});

// API route to get all unavailable dates
app.get('/api/unavailable-dates', async (req, res) => {
  try {
    // Attempt to fetch all unavailable dates from the database
    const dates = await UnavailableDate.find({});

    // If dates are found, send a JSON response with an array of dates
    res.json(dates.map((date) => date.date));
  } catch (error) {
    // If an error occurs during database query or processing, send a 500 Internal Server Error response
    res.status(500).json({message: error.message});
  }
});

// API route to add a new unavailable date
app.post('/api/unavailable-dates', async (req, res) => {
  const {date} = req.body;
  if (!date) {
    return res.status(400).json({message: 'Date is required'});
  }

  try {
    const newDate = new UnavailableDate({date});
    await newDate.save();
    res.status(201).json(newDate);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({message: 'Date already exists'});
    } else {
      res.status(500).json({message: error.message});
    }
  }
});

// API route to delete an unavailable date
app.delete('/api/unavailable-dates/:date', async (req, res) => {
  const {date} = req.params;

  try {
    const result = await UnavailableDate.findOneAndDelete({date});
    if (!result) {
      return res.status(404).json({message: 'Date not found'});
    }
    res.json({message: 'Date deleted successfully'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.post('/api/send-email', async (req, res) => {
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
      to: clientUser,
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
