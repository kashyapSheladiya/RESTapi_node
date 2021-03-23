const express = require('express');
const lectureController = require('../controllers/lectureController');

const router = express.Router(); // create new router instance of express

router.get('/', lectureController.lecture_index);
router.post('/', lectureController.lecture_create_post);

module.exports = router;
