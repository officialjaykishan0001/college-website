const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth')
const { login, logout, registerFacultyAdmin, getFacultyAdmins, updateProfile, deleteAdmin } = require('../controllers/admin.controller');


router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/register/facultyadmin').post(isAuthenticated, registerFacultyAdmin);
router.route('/getfacultyadmins').get(isAuthenticated, getFacultyAdmins);
router.route('/profile/update').post(isAuthenticated, updateProfile);
router.route('/delete/:id').delete(isAuthenticated, deleteAdmin)

module.exports = router;