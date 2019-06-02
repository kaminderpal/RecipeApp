const express = require('express')
require('./database/connection')
const app = express();
const PORT = process.env.PORT || 5000;

const Recipe = require('./database/models/Recipe');
const User = require('./database/models/User');

const apolloServer = require('./graphql/schema.js');

apolloServer.applyMiddleware({
  app
});

app.listen(PORT,()=>{
  console.log(`Server listening at ${PORT}`);
});