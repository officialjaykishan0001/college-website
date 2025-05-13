const Announcement = require('../models/announcements.model');

exports.setAnnouncement = async (req, res) => {
    try {

        const { key, content } = req.body;

        const updated = await Announcement.findOneAndUpdate(
            { key },
            { content, updatedAt: Date.now() },
            { upsert: true, new: true }
        );

        res.json({ message: 'Announcement updated', data: updated });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update announcement', error: error.message });
    }
}


exports.getAnnouncement = async (req, res) => {
    try {
        const {key} = req.params;
        const announcement = await Announcement.findOne({ key });
        if (!announcement) {
            return res.status(400).json({
                success: false,
                message: "Announcement not found"
            })
        }

        return res.status(200).json({
            success: true,
            announcement
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}