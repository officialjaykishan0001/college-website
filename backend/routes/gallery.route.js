const express = require('express');
const router = express.Router();
const upload = require('../utils/cloudinary.multer');
const { isAuthenticated } = require('../middlewares/auth');
const { uploadImage, getGallery } = require('../controllers/gallery.controller');

router.route('/upload').post(isAuthenticated, upload.single('image'), uploadImage);
router.route('/get').get(getGallery);

module.exports = router;