// import React from 'react'
import { Navbar, Container, Button, Offcanvas } from "react-bootstrap"
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom"
import '../styles/ComponentsStyles.css'

function Topbar(props:any) {
  return (
    <div>
        <Container className="topbar-full-view"  fluid>
            <Navbar className=" justify-content-between topbar-style">
                <Navbar.Brand href="/"  id="welcome-text">Welcome <a href="">{props.name}</a> </Navbar.Brand>
                <button id="swipe-button">Start swiping!</button>
            </Navbar>
      </Container> 
      
    <Container className="topbar-mobile-view" fluid>
        <Navbar key='sm' expand='sm'  className="topbar justify-content-between">
          <Navbar.Brand href="/">
            <p id="home-icon"> <img src={logo} alt="" />  Welcome <a href="">{props.name}</a></p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' id="mobile-toggle"/>
            <Navbar.Offcanvas placement="end" id='canvas-body'>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body >
                <div id="canvas-links">
                  <p><Link to="/">All</Link></p>
                  <p><Link to="/">Watched</Link></p>
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