import React, { useState } from 'react'
import '../App.css'

export default function Form(props) {
    const [newStudent, setNewStudent] = useState("")
    const studentName = (e) =>{
        console.log('studentName',e.target.value)
        return setNewStudent(e.target.value) 
    }
    console.log('newName',newStudent)
    return (
        <div>
            <h1>Add student</h1>
            <div className="student-input">
                <p>Student name</p>
                <input onChange={studentName} type="text" placeholder="Enter student name" />
            </div>
            <button onClick={() => props.getNewStudent(newStudent)} className="btn-send">Send</button>
        </div>
    )
}
