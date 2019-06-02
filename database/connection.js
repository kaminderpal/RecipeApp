const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch(err => {
    throw err;
  });
