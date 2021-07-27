import React, {useState} from 'react'
import  '../css/Navbar.scss'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">About</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Skills</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Blog</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Connect</a>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
