import { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import '../styles/LoginStyles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container className='login-container' fluid>
        <Row>
          <Col className='login-left'>
            <div className='login-card'>
              <img src={logo} alt="" />
              <h3>Welcome to Cinematch!</h3>
              <p>Log in to swipe left and right your favorite movies!</p>

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button id='login-btn' type="submit">
                  Log in
                </Button>
              </Form>
              
              <p>Don't have an account? <a href="/signup" id='signup-link'>Sign up here!</a></p>
            </div>
          </Col>
          <Col className='login-right'>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;