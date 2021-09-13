const express = require("express");
const cors = require ("cors")
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express()

app.use(cors())
app.use(express.json());
// app.use(function debug(req,res,next){console.log('it work!'); next();})
// app.use(function tranformName(req,res,next){req.body.name = req.body.name.toLowerCase(); next();})
dotenv.config({path: "./config.env"});
// Connexion to DB value into config.env
mongoose.connect(process.env.DB, {useNewUrlParser: true}).then(console.log('connected to MongoDB'));




// Mongoose schema ( choose doc form)
const SuperHeroesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    power: {
        type: Array,
        required: false,

    },
    color:{
        type: String,
        required: true
    },
    isAlive:{
        type: Boolean,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    image:{
        type: String,
        required: true
    }
});

// Model to interaction with DB 
const SuperHeroes = mongoose.model("SuperHeroes", SuperHeroesSchema);


// GET
app.get("/heroes", async(req, res) => {
    const superHeroes = await SuperHeroes.find()
    res.json({
        message: "ok !",
        data: superHeroes
    })
});

app.get("/heroes/:name", async(req, res) => {
    const superHeroes = await SuperHeroes.findOne({name: req.params.name})
    res.json({
        message: "ok !",
        data: superHeroes
    })
});

app.get("/heroes/:name/powers", async(req, res) => {
    const superHeroes = await SuperHeroes.findOne({name: req.params.name})
    res.json({
        message: "ok !",
        data: superHeroes.power.join(", ")
    })
});

// POST
app.post("/heroes", async(req, res) => {
    const superHeroes = await SuperHeroes.create(req.body)
    res.json({
        message: "ok !",
        data: superHeroes
    })
});

app.post("/heroes/:name/powers", async(req, res) => {
    const newPower = req.body.newPower;
    await SuperHeroes.findOneAndUpdate(
        { name: req.params.name }, 
        { $push: { power: newPower } },
        {new: true}, (err, hero) =>{
            if (err) {
                return res.json({
                    status: "ERROR DETECTED",
                })
            }
            res.json({
                message: "ok !",
                data: hero
            });
        })
});

// Server Started
app.listen(process.env.PORT, () => {console.log('Server started on port: ',process.env.PORT)});