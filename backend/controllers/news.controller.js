const News = require('../models/news.model');
const getDataUri = require('../utils/datauri');
const cloudinary = require('../utils/cloudinary');


exports.createNews = async (req, res) => {
    try {
        const { headline, content } = req.body;
        const newsImage = req.file;

        if (!headline || !content || !newsImage) {
            return res.status(400).json({
                success: false,
                message: "Something is missing"
            })
        }

        const newsImageUri = await getDataUri(newsImage);
        const cloudResponse = await cloudinary.uploader.upload(newsImageUri.content);


        await News.create({
            headline,
            content,
            newsImage: cloudResponse.secure_url,
            publishedBy: req.id,
        })

        return res.status(200).json({
            success: true,
            message: "News created successfully"
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getAllNews = async (req, res) => {
    try {
        const allNews = await News.find();

        if (!allNews) {
            return res.status(400).json({
                success: false,
                message: "No news found"
            })
        }

        return res.status(200).json({
            success: true,
            allNews
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getSingleNews = async (req, res) => {
    try {
        const newsId = req.params.id;

        const news = await News.findById(newsId);

        if (!news) {
            return res.status(400).json({
                success: false,
                message: "No news found"
            })
        }

        return res.status(200).json({
            success: true,
            news
        })
    } catch (err) {
        console.log(err);
    }

}

exports.updateNews = async (req, res) => {
    try {
        const { headline, content } = req.body;
        const newsImage = req.file;
        const newsId = req.params.id;

        let news = await News.findById(newsId);

        if (!news) {
            return res.status(400).json({
                success: false,
                message: "No news found"
            })
        }

        if (headline) news.headline = headline
        if (content) news.content = content
        if (newsImage) {
            const newsImageUri = await getDataUri(newsImage);
            const cloudResponse = await cloudinary.uploader.upload(newsImageUri.content);

            news.newsImage = cloudResponse.secure_url
        }

        await news.save();

        return res.status(200).json({
            success: true,
            message: "News updated successfully",
            news
        })
    } catch (err) {
        console.log(err)
    }

}

exports.deleteNews = async (req, res) => {
    try {
        const newsId = req.params.id;

        const deletedNews = await News.findByIdAndDelete(newsId);

        if (!deletedNews) {
            return res.status(400).json({
                success: false,
                message: "News not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "News deleted successfully",
            deletedNews
        })
    } catch (err) {
        console.log(err)
    }
}