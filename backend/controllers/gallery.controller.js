const Gallery = require('../models/gallery.model');

exports.uploadImage = async (req, res) => {
    try {
        const { caption } = req.body;

        const newImage = new Gallery({
            imageUrl: req.file.path,
            caption,
        });

        await newImage.save();
        res.status(201).json({
            success: true,
            message: 'Image uploaded',
            newImage
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Upload failed',
            error: error.message
        });
    }
};

exports.getGallery = async (req, res) => {
    try {
        const images = await Gallery.find().sort({ uploadedAt: -1 });
        return res.status(200).json({
            success: true,
            images
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Cannot get gallery",
            error: err.message
        })
    }
}