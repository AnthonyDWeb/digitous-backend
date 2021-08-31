import React from 'react'
import '../App.css'

export default function Form(props) {
    

    return (
        <div>
            <h1>Add student</h1>
            <div className="student-input">
                <p>Student name</p>
                <input type="text" placeholder="Enter student name" />
            </div>
            <button className="btn-send">Send</button>
        </div>
    )
}
