require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoute');

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the appropriate origin for your frontend
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middleware for parsing JSON data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from blog app');
});

// Use post routes
app.use('/api', postRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log('Connected to DB & Listening on port 7000');
    });
  })
  .catch((err) => {
    console.log(err);
  });