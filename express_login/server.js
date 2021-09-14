const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


dotenv.config({path: "./config.env"});
mongoose.connect(process.env.DB, {useNewUrlParser: true}).then(console.log("Connected to MongoDB"));

const app = express();

app.use(express.json());
app.use(cookieParser());


// Server Started
app.listen(process.env.PORT, ()=>{console.log("Server listening on port: ", process.env.PORT)});