const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth')
const { createEvent, getAllEvents, getSingleEvent, updateEvent, deleteEvent } = require('../controllers/event.controller')
const { singleUpload } = require('../middlewares/multer')


router.route('/create').post(isAuthenticated, singleUpload, createEvent);
router.route('/getAllEvents').get(getAllEvents);
router.route('/get/:id').get(getSingleEvent);
router.route('/update/:id').post(isAuthenticated, singleUpload, updateEvent)
router.route('/delete/:id').delete(isAuthenticated, deleteEvent)

module.exports = router