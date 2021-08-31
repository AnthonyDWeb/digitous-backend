import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Form from './components/Form'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';


import axios from 'axios'
import { useEffect, useState } from 'react';



function App() {
  const [studentsList, setStudentsList] = useState([])

  useEffect(()=>{

    // ----- whithout async await
    // axios.get("http://localhost:8000/students")
    // .then(res => setStudentsList(res.data))
    // .catch((err) => {console.log(err)});

    // ----- whith async await
    const getStudentsList = async() => {
        const res = await axios.get("http://localhost:8000/students");
        const data = res.data
        setStudentsList(data)
    }
    getStudentsList()

},[])

  const getNewStudent = (student) => {
    console.log('student', student)
    console.log('you did it')
    const studentExist = studentsList.findIndex((students) => students.name === student);

    studentExist === -1 ?

    axios.post("http://localhost:8000/students", {name: student})
    .then(res => {
      console.log('gns res', res.data)
      setStudentsList(res.data)}) : alert("student exist")

  }

  return (
    <BrowserRouter>
        <Navbar />
        <div className="subContainer">
          <Homepage student={studentsList} setStudents={setStudentsList}/>
          <Form getNewStudent={getNewStudent}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
