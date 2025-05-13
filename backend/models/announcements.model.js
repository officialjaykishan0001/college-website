const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    key: {
        type: String,
        unique: true
    },
    content: {
        type: String,

    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Announcement', announcementSchema);