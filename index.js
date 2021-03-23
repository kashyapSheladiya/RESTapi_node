const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const lectureRoutes = require('./routes/lectureRoutes');

const app = express();

const dbURI = 'your-mongodb-uri'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => app.listen(5000)) // it takes some time to connect to db, so app should only listen to port once it is connected to db.
        .catch((err) => console.log(err));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// lecture routes
app.use('/lectures', lectureRoutes);
