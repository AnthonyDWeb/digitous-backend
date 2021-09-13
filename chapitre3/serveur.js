const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');



const upload = multer({ dest: 'public/upload/' });
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

dotenv.config({path: "./config.env"});
// Connexion to DB value into config.env
mongoose.connect(process.env.DB, {useNewUrlParser: true}).then(console.log('connected to MongoDB'));

// Mongoose schema
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        required: false
    }
});

// Model to interaction with DB
const Users = mongoose.model("users", UsersSchema)


const users = [{name: "anthony"}];

app.get("/", async(req,res)=>{
    const users = await Users.find()
    res.json({
        message: "ok !",
        data: users
    })
});

app.post("/user", upload.single(":image"), (req,res)=>{
    users.push(req.query);
    const info = `${req.query.name}-${new Date()}-${req.file.mimetype.replace("image/", ".")}`;
    console.log(`${req.query.name}-${new Date("DD/MM/YYYY")}-${req.file.mimetype.replace("image/", ".")}`);
    fs.renameSync(req.file.path, path.join(req.file.destination, `${new Date()}-${req.file.mimetype.replace("image/", ".")}`));

    res.json({
        "message": "ok",
        "data": users
    });
});

// SERVEUR STARTED
app.listen(process.env.PORT, console.log(`Serveur started on port:`, process.env.PORT));