// import React from 'react'
import { Navbar, Container, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"

function CardBar(props:any) {
  return (
    <div>
    <Container>
        <Navbar key='sm' expand='sm'  className="bg-body-tertiary justify-content-between">
          <Navbar.Brand>
            Back {props.name}
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

export default CardBar