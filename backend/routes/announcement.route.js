const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth')
const { setAnnouncement, getAnnouncement } = require('../controllers/announcement.controller');

router.route('/create').post(isAuthenticated, setAnnouncement);
router.route('/get/:key').get(getAnnouncement);

module.exports = router;