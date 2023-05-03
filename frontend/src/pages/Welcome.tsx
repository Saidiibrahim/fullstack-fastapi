// src/pages/Welcome.tsx
import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/Main';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography>
          This is the welcome page for your application. You can update this page with more information about your app, or you can redirect users to another page after successful login or signup.
        </Typography>
        <Button variant="contained" color="primary" onClick={navigateToLogin} style={{ marginRight: 16 }}>
          Login
        </Button>
        <Button variant="contained" color="secondary" onClick={navigateToSignup}>
          Signup
        </Button>
      </Container>
    </MainLayout>
  );
};

export default WelcomePage;
