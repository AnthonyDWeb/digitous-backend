const express = require('express');
const app = express();



app.get("/students", (req, res) => {
    res.send('test')
})
app.post("/students", (req, res) => {
    res.send('test2')
})
// Server Started
const port = 3000;
app.listen(port, () => {console.log('Server started on port:' , port)});