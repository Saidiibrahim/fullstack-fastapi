// src/pages/Welcome.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../layouts/common/form/Button';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography>
        This is the welcome page for your application. You can update this page with more information about your app, or you can redirect users to another page after successful login or signup.
      </Typography>
      <CustomButton variant="primary" onClick={navigateToLogin} style={{ marginRight: 16 }}>
        Login
      </CustomButton>
      <CustomButton variant="secondary" onClick={navigateToSignup}>
        Signup
      </CustomButton>
    </Container>
  );
};

export default WelcomePage;
