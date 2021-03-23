const Lecture = require('../models/lecture');

const lecture_index = (req, res) => {
  Lecture.find().sort({ createdAt: -1 })
    .then(result => {
      res.status(200).json({message: 'All Lectures', is_success: true, data: result})
    })
    .catch(err => {
      console.log(err);
    });
}

const lecture_create_post = (req, res) => {
  const lecture = new Lecture(req.body);
  lecture.save()
    .then(result => {
      res.status(200).json({message: 'Lecture Created', is_success: true, data: result})
    })
    .catch(err => {
      console.log(err);
      return res.status(400).json({ message: 'Lecture cannot be created', is_success: false, error : err.message });
    });
}

module.exports = {
  lecture_index,
  lecture_create_post
}
