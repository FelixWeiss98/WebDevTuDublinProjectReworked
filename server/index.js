const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
require("dotenv").config();
const port = process.env.PORT || 3000;

const userRouter = require('./routes/userRouter')
const homeRouter = require('./routes/homeRouter')
const mongoose = require('mongoose');
const cors = require('cors')


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('files'));
app.use('/user', userRouter);
app.use('/home', homeRouter);

// Create connection
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/webApp`);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res) => {
    res.send('The main page')
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
module.exports = app;