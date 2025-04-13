const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const connectDB = require('./utils/db')
dotenv.config();


const adminRoute = require('./routes/admin.route')


const app = express()
const port = 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credential: true
}
app.use(cors(corsOptions));

app.use('/api/v1/admin', adminRoute)

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`)
})