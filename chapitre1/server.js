const express = require("express");
const cors = require ("cors")
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
dotenv.config({path: "./config.env"});
// Connexion to DB value into config.env
mongoose.connect(process.env.DB, {useNewUrlParser: true}).then(console.log('connected to MongoDB'));

// Mongoose schema ( choose doc form)
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }   
});

// Model to interaction with DB 
const Student = mongoose.model("Student", StudentSchema);

// ----- GET -----
app.get("/students",cors(), async(req, res) => {
    const students = await Student.find()
    res.json({
        message: "ok !",
        data: students
    })
});

// ---- POST -----
app.post("/students",cors(), async (req, res) => {
    await Student.create(req.body);
    res.json({
        message: "ok !"
    })
});

//  Started SERVER
app.listen(process.env.PORT , () => {console.log(`Server started on port: 8000`)});