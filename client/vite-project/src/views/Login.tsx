// import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import logo from '../assets/Logo.svg'
import '../styles/LoginStyles.css'

function Login() {
  return (
    <div>
   <Container className='login-container' fluid>
      <Row>
        <Col className='login-left'>
            <div className='login-card'>
                <img src={logo} alt="" />
                <h3>Welcome to Cinematch!</h3>
                <p>Log in to swipe left and right your favorite movies!</p>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button id='login-btn' type="submit">
                        Log in
                    </Button>
                    </Form>

                    <p>Don't have an account? <a href="" id='singup-link'>Sign up here!</a></p>
            </div>
        </Col>
        <Col className='login-right'>2 of 2</Col>
      </Row>
    </Container>
    </div>
  )
}

export default Login