const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const routes = require('./routes/toDoRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


