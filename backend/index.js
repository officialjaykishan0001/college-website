const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const connectDB = require('./utils/db')
dotenv.config();


const adminRoute = require('./routes/admin.route')
const noticeRoute = require('./routes/notice.route')
const eventRoute = require('./routes/event.route')
const newsRoute = require('./routes/news.route')
const galleryRoute = require('./routes/gallery.route')
const announcementRoute = require('./routes/announcement.route')

const app = express()
const port = 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: ["http://localhost:3000", "https://college-website-six-tan.vercel.app/"],
  credentials: true
}
app.use(cors(corsOptions));

app.use('/api/v1/admin', adminRoute)
app.use('/api/v1/notice', noticeRoute)
app.use('/api/v1/event', eventRoute)
app.use('/api/v1/news', newsRoute)
app.use('/api/v1/gallery', galleryRoute)
app.use('/api/v1/announcement', announcementRoute)

app.listen(port, () => {
  connectDB();
  console.log(`Server listening on port ${port}`)
})