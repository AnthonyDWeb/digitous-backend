const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const studentsRouters = require("./routers/students")

dotenv.config({path: "./config.env"})
mongoose.connect(process.env.DB, {useNewUrlParser: true}).then(console.log('conected to MongoDB'));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/students", studentsRouters);


app.listen(process.env.PORT, () => {console.log("Server listen on port: ", process.env.PORT)});
