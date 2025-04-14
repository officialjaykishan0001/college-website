const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model')


exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Someting is missing"
            })
        }

        let admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or pasword"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        if (role !== admin.role) {
            return res.status(400).json({
                success: false,
                message: "Admin doesn't exist with this role"
            })
        }

        const tokenData = { adminId: admin._id }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

        const adminData = {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role
        }

        return res.status(200)
            .cookie('token', token, { maxAge: 24 * 60 * 60, httpOnly: true, secure: true })
            .json({
                success: true,
                message: `welcome back ${admin.name}`,
                adminData
            })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

exports.logout = async (req, res) => {
    try {
        return res.status(200).cookie('token', "", { maxAge: '0' }).json({
            success: true,
            message: 'Logged out successfully'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
}

exports.registerFacultyAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Something is missing."
            })
        }

        const facultyAdmin = await Admin.findOne({ email });
        if (facultyAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already registered with this email"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await Admin.create({
            name,
            email,
            password: hashedPassword,
            role: 'facultyadmin'
        })

        return res.status(201).json({
            success: true,
            message: "Faculty Admin registered successfully"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
}

exports.getFacultyAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({ role: 'facultyadmin' });

        if (!admins) {
            return res.status(404).json({
                success: false,
                message: "Faculty admins not found"
            })
        }

        return res.status(200).json({
            success: true,
            admins
        })
    } catch (err) {
        console.log(err);
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { name } = req.body;
        let admin = await Admin.findById(req.id);

        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Admin not found"
            })
        }

        if (name) admin.name = name;

        await admin.save();

        admin = {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role
        }

        return res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            admin
        })
    } catch (err) {
        console.log(err);
    }
}

exports.deleteAdmin = async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);

        if (!deletedAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Admin deleted successfully",
            deletedAdmin
        })
    } catch (err) {
        console.log(err)
    }
}