import React from 'react'
import '../App.css'


export default function Homepage(props) {



    console.log('props2', props.student)
    return (
        <div>
            <h1>Students</h1>
            {props.student && props.student.map((student, index) => {
              return (
                <div className="studentContainer" key={index}>
                    <p>Name: {student.name}</p>
                </div>
                )
            })}  
        </div>
    )
}
