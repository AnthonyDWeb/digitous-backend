const express = require('express');
const studentsControllers = require("../controllers/students")

const router = express.Router();

// ----- GET -----
router.get("/", studentsControllers.getStudents);
router.get("/address", studentsControllers.getStudentsAdress);
router.get("/:id", studentsControllers.getStudentById);

// ----- POST -----
router.post("/", studentsControllers.addStudent)

module.exports = router;
