import { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form } from "react-bootstrap";
import '../styles/SignupStyles.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestBody = { username, email, password };
    console.log('Request Body:', requestBody);
    try {
      const response = await axios.post('http://localhost:3001/api/auth/signup', requestBody);
      alert(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Container fluid className='signup-container'>
        <h3>Sign Up to Swipe</h3>
        <p>Discover your next favorite movie!</p>

        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button id='login-btn' type="submit">
            Sign Up!
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;