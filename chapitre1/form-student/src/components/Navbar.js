import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
    

    return (
        <nav className="nav">
            <p>Student-List</p>
            <ul>
                <li><Link to="/"> Home </Link></li>
            </ul>
            
        </nav>
    )
}
