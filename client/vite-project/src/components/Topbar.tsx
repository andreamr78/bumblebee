// import React from 'react'
import { Navbar, Container, Button, Offcanvas } from "react-bootstrap"
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom"
import '../styles/ComponentsStyles.css'

function Topbar(props:any) {
  return (
    <div>
        <Container className="topbar-full-view">
            <Navbar className=" justify-content-between topbar-style">
                <Navbar.Brand href="/"  id="welcome-text">Welcome <a href="">{props.name}</a> </Navbar.Brand>
                <button id="swipe-button">Start swiping!</button>
            </Navbar>
      </Container> 
      
    <Container className="topbar-mobile-view">
        <Navbar key='sm' expand='sm'  className="bg-body-tertiary justify-content-between">
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
            Welcome {props.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm'/>
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Link to="/">All</Link>
                <Link to="/">Watched</Link>
                <Link to="/">Log Out</Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Navbar>
        </Container>

    </div>
  )
}

export default Topbar
