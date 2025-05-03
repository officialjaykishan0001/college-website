const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth')
const { createNotice, getAllNotice, getSingleNotice, updateNotice, deleteNotice } = require('../controllers/notice.controller')

router.route('/create').post(isAuthenticated, createNotice);
router.route('/getAllNotices').get(getAllNotice);
router.route('/get/:id').get(getSingleNotice);
router.route('/update/:id').post(isAuthenticated, updateNotice);
router.route('/delete/:id').delete(isAuthenticated, deleteNotice)


module.exports = router;