const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Admin = require("../models/admin.model"); // Adjust path as needed

dotenv.config(); // Load environment variables

const createSuperAdmin = async () => {
    try {
        await mongoose.connect('mongodb+srv://Jaykishan:ZHOiQ1r1puaRXzSb@quickchat.85gmgnb.mongodb.net/sgrpgcollege');

        const existingAdmin = await Admin.findOne({ email: "superadmin@example.com" });
        if (existingAdmin) {
            console.log("Super Admin already exists!");
            return;
        }

        const hashedPassword = await bcrypt.hash("superAdminSGR", 10);
        const superAdmin = new Admin({
            name: "Super Admin",
            email: "superadmin@example.com",
            password: hashedPassword,
            role: "superadmin"
        });

        await superAdmin.save();
        console.log("Super Admin created successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error creating Super Admin:", error);
        mongoose.connection.close();
    }
};

createSuperAdmin();
