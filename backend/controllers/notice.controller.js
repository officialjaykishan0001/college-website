const Notice = require('../models/notice.model');

exports.createNotice = async (req, res) => {
    try {
        const { title, description, category } = req.body;

        if(!title || !description || !category){
            return res.status(400).json({
                success: false,
                message: "Something is missing"
            })
        }

        await Notice.create({
            title,
            description,
            category,
            publishedBy: req.id
        })

        return res.status(200).json({
            success: true,
            message: 'Notice created successfully'
        })
    } catch (err) {
        console.log(err);
    }
}

exports.getAllNotice = async (req, res) => {
    try{
        const allNotices = await Notice.find();

        if(!allNotices){
            return res.status(400).json({
                success: false,
                message: "No Notice found"
            })
        }

        return res.status(200).json({
            success: true,
            allNotices
        })
    }catch(err){
        console.log(err)
    }
}

exports.getSingleNotice = async  (req, res) => {
    try{
        const notice = await Notice.findById(req.params.id);

        if(!notice) {
            return res.status(400).json({
                success: false,
                message: 'No notice found'
            })
        }

        return res.status(200).json({
            success: true,
            notice
        })
    }catch(err){
        console.log(err)
    }
}

exports.updateNotice = async (req, res) => {
    try{
        const {title, description, category}  = req.body;

        let notice = await Notice.findById(req.params.id);

        if(!notice){
            return res.status(400).json({
                success:false,
                message: "No notice found"
            })
        }

        if(title) notice.title = title
        if(description) notice.description = description
        if(category) notice.category = category

        await notice.save()

        notice = {
            title: notice.title,
            description: notice.description,
            category: notice.category
        }

        return res.status(200).json({
            success: true,
            message: "Notice updated successfully",
            notice
        })
    }catch(err){
        console.log(err)
    }
}

exports.deleteNotice = async (req, res) => {
    try{
        const deletedNotice = await Notice.findByIdAndDelete(req.params.id);

        if(!deletedNotice) {
            return res.status(400).json({
                success:false,
                message: "No notice found"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Notice deleted successfully',
            deletedNotice
        })
    }catch(err){
        console.log(err)
    }
}