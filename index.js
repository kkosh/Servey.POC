const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
const authRoutes = require('./routes/authRoutes');

require('./services/passport');
authRoutes(app);

//prod environment
const PORT = process.env.PORT || 5000;

app.listen(PORT);
