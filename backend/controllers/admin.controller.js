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