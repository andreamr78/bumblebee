// import React from 'react'
import '../styles/SignupStyles.css';
import { Button, Container, Form } from "react-bootstrap";

function Singup() {
  return (
    <div>
        <Container fluid className='signup-container'>
        <h3>Sign Up to Swipe</h3>
        <p>Discover your next favorite movie!</p>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button id='login-btn' type="submit">
                    Sign Up!
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default Singup