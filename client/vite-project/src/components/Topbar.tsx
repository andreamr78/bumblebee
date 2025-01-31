// import React from 'react'
import { Navbar, Container, Offcanvas } from "react-bootstrap"
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom"
import '../styles/ComponentsStyles.css'
import { useState, useEffect } from "react";

function Topbar(props:any) {

  const [name, setName] = useState<any>();
    useEffect(() => {
    setName(JSON.parse(localStorage.getItem('user') || '{}'));
  }, []);
    
  return (
    <div>
        <Container className="topbar-full-view"  fluid>
            <Navbar className="justify-content-between topbar-style">
                <Navbar.Brand href="/">  
                  <h4 id="welcome-text">Welcome <a href="">{name?.username}</a></h4>
                </Navbar.Brand>
                <button id="swipe-button"><Link to="/swipe">Start swiping!<i className="bi bi-arrow-right"></i></Link></button>
            </Navbar>
      </Container> 
      
    <Container className="topbar-mobile-view" fluid>
        <Navbar key='xs' expand='xs'  className="topbar justify-content-between">
            <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="" className=""/>
              <h4 id="home-icon" className="mt-3">
                <div className="d-flex flex-column align-items-start">
                  <span>Welcome</span>
                  <a href="">{props.name}</a>
                </div>
              </h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' id="mobile-toggle"/>
            <Navbar.Offcanvas placement="end" id='canvas-body'>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body >
                <div id="canvas-links">
                <p><Link to="/dashboard">Liked</Link></p>
                <p><Link to="/watched">Watched</Link></p>
                  <p id="logout"><Link to="/"><i className="bi bi-door-open"></i> Log Out</Link></p>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Navbar>
        </Container>

    </div>
  )
}

export default Topbar
