const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const userRouters = require("./routers/user");

dotenv.config({path: "./config.env"});
mongoose.connect(process.env.DB, {useNewUrlParser: true}).then(console.log("Connected to MongoDB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/users", userRouters);


// Server Started
app.listen(process.env.PORT, ()=>{console.log("Server listening on port: ", process.env.PORT)});