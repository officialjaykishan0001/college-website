const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    organizedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    eventImage: {
        type: String,

    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Event', eventSchema);