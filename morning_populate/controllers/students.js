const { Student }= require('../models/student')
const { Address }= require('../models/address');
const address = require('../models/address');

let studentAdress = [];


// ----- GET -----
const getStudents = async (req, res) => {
    try{
        let student = await Student.find().populate("address")
        
		res.json({
			message: "OK",
			data: student,
		});

    }catch (err){
		res.status(404).json({
			message: err,
		});
    }
}
const getStudentsAdress = (req, res) => {

		res.json({
			message: "OK",
			data: studentAdress,
		});

}
const getStudentById = async(req, res) => {

    try {
        let student = await Student.findById(req.params.id).populate("address");
        
        res.json(student)
    } catch {
        res.status(404).json({
			message: "error",
		});  
    }
}

const saveData = (student, address) => {
    studentAdress.push({
        name: student,
        adress: address
    })
}

const addressA = new Address({
    streetName: "rue de la malchance",
    streetNumber: "666",
    postCode: "666 888",
    city: "badluckTown"
  });
  
  addressA.save(function (err) {
    // manage errors if needs be
  
    const student1 = new Student({
        firstName: "Lysandrea",
        surname: "flowerss",
        address: addressA._id    // assign the _id from the person
    })
  
    student1.save((err) => {
      // manage errors if needs be
      // saved
    });
  });

//  ----- POST -----
const addStudent = async(req,res) => {
    try {   
        let newStudent = await Student.create(req.body)
        res.json({
            message: "ok",
            data: newStudent
        })

        saveData(req.body.firstName,req.body.address);

    } catch (error) {
        res.status(404).json({
			message: "error",
		}); 
    }
};



module.exports = {
    getStudents: getStudents,
    getStudentsAdress: getStudentsAdress,
    getStudentById: getStudentById,
    addStudent: addStudent,
    saveData: saveData
}