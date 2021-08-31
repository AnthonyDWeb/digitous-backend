const students = [{"name": "dehux"}]

const express = require("express");
const cors = require ("cors")

const app = express()
app.use(cors())

app.use(express.json());

app.get("/students",cors(), (req, res) => {
    res.json(students)
})
app.post("/students",cors(), (req, res) => {
    const newStudent = req.body
    students.push(newStudent)
    // res.json(console.log(newStudent))
    res.json(students)
})

//  Started SERVER
const port = 8000;
app.listen(port, () => {console.log(`Server started on port: ${port}`)})