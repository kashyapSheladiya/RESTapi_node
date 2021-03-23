const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// constructor function to create lecture schema

const lectureSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  tutor: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
}, {timestamps: true});

const Lecture = mongoose.model('Lecture', lectureSchema)
module.exports = Lecture;
