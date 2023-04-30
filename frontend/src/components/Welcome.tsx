// src/Welcome.js
import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome
      </Typography>
      <Button component={Link} to="/login" variant="contained" color="primary">
        Login
      </Button>
      <Button component={Link} to="/signup" variant="contained" color="secondary">
        Signup
      </Button>
    </Container>
  );
};

export default Welcome;
