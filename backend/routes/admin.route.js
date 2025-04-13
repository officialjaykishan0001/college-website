const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth')
const { login, logout, registerFacultyAdmin } = require('../controllers/admin.controller');


router.route('/register/facultyadmin').post(isAuthenticated, registerFacultyAdmin)
router.route('/login').post(login);
router.route('/logout').get(logout);

module.exports = router;