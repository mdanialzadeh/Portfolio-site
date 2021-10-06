import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import "./NavBar.css"
import "./OffCanvasNav"
import OffCanvasNav from './OffCanvasNav'

function NavBar() {
    return (
        <div className="navbar">
            <Navbar fixed="top">
                <div className="Nav">
                <Navbar.Brand className="name">Matthew<br/>Danialzadeh</Navbar.Brand>
                <OffCanvasNav/>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar
