import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

// const axios = require('axios')

export default function Homepage() {

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
        console.log('students2',studentsList)

    },[])

    console.log('studentsList1',studentsList)
    return (
        <div>
            <h1>Students</h1>
            {studentsList.map((student, index) => {
              return (
                <div className="studentContainer" key={index}>
                    <p>Name: {student.name}</p>
                </div>
                )
            })}  
        </div>
    )
}
