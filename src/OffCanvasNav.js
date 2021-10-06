import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import MenuIcon from '@material-ui/icons/Menu';
import './OffCanvasNav.css'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import CloseButton from 'react-bootstrap/CloseButton'


import { Link, } from 'react-scroll'


function OffCanvasNav() {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <button onClick={handleShow} className="menu">
            <MenuIcon className="MenuIcon"/>
        </button>
        
        <Offcanvas className="offcanvas"  show={show} placement='end' backdrop="true" onHide={handleClose} scroll="true">
        <OffcanvasHeader >
            <CloseButton onClick={handleClose}></CloseButton>
        </OffcanvasHeader>
        <Offcanvas.Body className="Nav_Menu">
            <div onMouseUp={handleClose}><Link activeClass="active" className="home" to="Home" spy={true} smooth={true} duration={50} isDynamic={false} >Home</Link></div>
            <div onMouseUp={handleClose}><Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={50} isDynamic={true}>About</Link></div>
            <div onMouseUp={handleClose}><Link activeClass="active" className="skills" to="Skills" spy={true} smooth={true} duration={50} isDynamic={true}>Skills</Link></div>
            <div onMouseUp={handleClose}><Link activeClass="active" className="Work" to="Work" spy={true} smooth={true} duration={50} isDynamic={true}>Work</Link></div>
            <div onMouseUp={handleClose}><Link activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={50} isDynamic={true}>Contact</Link></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )
}

export default OffCanvasNav
