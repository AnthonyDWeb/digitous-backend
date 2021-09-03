const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');



const upload = multer({ dest: 'public/upload/' });
const PORT = 8000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());


const users = [{name: "anthony"}];

app.get("/", (req,res)=>{
    res.json(users);
});

app.post("/user", upload.single(":image"), (req,res)=>{
    users.push(req.query);
    const info = `${req.query.name}-${req.query.date}${req.file.mimetype.replace("image/", ".")}`;
    console.log(`${req.query.name}-${req.query.date}${req.file.mimetype.replace("image/", ".")}`);
    fs.renameSync(req.file.path, path.join(req.file.destination, `${new Date()}-${req.file.mimetype.replace("image/", ".")}`));
    // fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    res.json({
        "message": "ok",
        "data": users
    });
});

// SERVEUR STARTED
app.listen(PORT, console.log(`Serveur started on port: ${PORT}`))