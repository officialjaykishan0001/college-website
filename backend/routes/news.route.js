const express = require('express');
const router = express.Router();
const { isAuthenticated } = require("../middlewares/auth");
const { singleUpload } = require('../middlewares/multer');
const { createNews, getAllNews, getSingleNews, updateNews, deleteNews } = require('../controllers/news.controller');

router.route('/create').post(isAuthenticated, singleUpload, createNews);
router.route('/getAllNews').get(getAllNews);
router.route('/get/:id').get(getSingleNews);
router.route('/update/:id').post(isAuthenticated, singleUpload, updateNews);
router.route('/delete/:id').delete(isAuthenticated, deleteNews);


module.exports = router;