import { useState } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import UI_hero from '../assets/UI_Hero.png';
import '../styles/LoginStyles.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container className='login-container' fluid>
        <Row>
          <Col className='login-left'>
            <div className='login-card w-75 align-items-center'>
              <img src={logo} alt="" />
              <h3>Welcome to Cinematch!</h3>
              <p>Log in to swipe left and right your favorite movies!</p>

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Bumblebee" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button id='login-btn' type="submit">
                  Log in
                </Button>
              </Form>
              
              <p className='mt-3'>Don't have an account? <a href="/signup" id='signup-link'>Sign up here!</a></p>
            </div>
          </Col>
          <Col className='login-right'>
          <div className='d-flex justify-content-center align-items-center'>
          <img src={UI_hero} alt="" className="p-5" id='hero-img'/>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;