const express = require('express');
const app = express();
const port = 3000;

const superhero = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

app.use(express.json())

app.use(function debug(req,res,next){
    console.log('it work!'); 
    next();
})
app.use(function tranformName(req,res,next){
    req.body.name = req.body.name.toLowerCase(); 
    next();
})

// GET
app.get("/heroes", (req, res) => {
    res.json(superhero)
})

app.get("/heroes/:name", (req, res) => {
    let myHero = superhero.filter(superhero => superhero.name.toLowerCase() === req.params.name);
    res.json(myHero);
    // res.json(superhero.filter(superhero => superhero.name.toLowerCase() === req.params.name));
})

app.get("/heroes/:name/powers", (req, res) => {
    let myHero = superhero.filter(superhero => superhero.name.toLowerCase() === req.params.name);
    res.json(myHero[0].power.join(" "));
    // res.json(superhero.filter(superhero => superhero.name.toLowerCase() === req.params.name));
})
// POST
app.post("/heroes", (req, res) => {
    // const newHero = "test";
    const newHero = req.body;
    console.log(newHero);
    res.json(
        [...superhero,newHero]
        // {"message": "hero create"}
    );
})

app.post("/heroes/:name/powers", (req, res) => {
    let hero = superhero.filter(superhero => superhero.name.toLowerCase() === req.params.name);

    res.json([...hero[0].power,"new power"]);
})


// Server Started
app.listen(port, () => {console.log('Server started on port:' , port)});