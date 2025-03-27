const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    newsImage: {
        type: String
    },
    publishedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

module.exports = mongoose.model('News', newsSchema);