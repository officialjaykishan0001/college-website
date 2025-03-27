const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()
const port = 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:3000",
    credential: true
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})