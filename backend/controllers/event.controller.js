const Event = require('../models/event.model');
const getDataUri = require('../utils/datauri');
const cloudinary = require('../utils/cloudinary')

exports.createEvent = async (req, res) => {
    try {
        const { title, description, eventDate, location } = req.body;

        const eventImage = req.file;

        if (!title || !description || !eventDate || !location || !eventImage) {
            return res.status(400).json({
                success: false,
                message: "Something is missing."
            })
        }

        //cloudinary setup will be here
        const eventImageUri = await getDataUri(eventImage);
        const cloudResponse = await cloudinary.uploader.upload(eventImageUri.content);


        await Event.create({
            title,
            description,
            eventDate,
            location,
            organizedBy: req.id,
            eventImage: cloudResponse.secure_url
        })

        return res.status(200).json({
            success: true,
            message: "Event created successfully"
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

exports.getAllEvents = async (req, res) => {
    try {
        const allEvents = await Event.find();

        if (!allEvents) {
            return res.status(400).json({
                success: false,
                message: "No Event found"
            })
        }

        return res.status(200).json({
            success: true,
            allEvents
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

exports.getSingleEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(400).json({
                success: false,
                message: "No event found",
            })
        }

        return res.status(200).json({
            success: true,
            event
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

exports.updateEvent = async (req, res) => {
    try {
        const { title, description, eventDate, location } = req.body;
        const eventId = req.params.id;
        const eventImage = req.file;

        let event = await Event.findById(eventId);

        if (!event) {
            return res.status(400).json({
                success: false,
                message: "No event found"
            })
        }

        if (title) event.title = title
        if (description) event.description = description
        if (eventDate) event.eventDate = eventDate
        if (location) event.location = location
        if (eventImage) {
            // cloudinary setup will be here
            const eventImageUri = await getDataUri(eventImage);
            const cloudResponse = await cloudinary.uploader.upload(eventImageUri.content);
            event.eventImage = cloudResponse.secure_url
        }

        await event.save();

        event = {
            title: event.title,
            description: event.description,
            eventDate: event.eventDate,
            location: event.location,
            eventImage: event.eventImage
        }

        return res.status(200).json({
            success: true,
            message: "Event updated successfully",
            event
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        const deletedEvent = await Event.findByIdAndDelete(eventId);


        if (!deletedEvent) {
            return res.status(400).json({
                success: false,
                message: "Event not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Event deleted successfully",
            deletedEvent
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}