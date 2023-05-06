// src/layouts/common/navigation/Navbar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" onClick={navigateToLogin}>
          Login
        </Button>
        <Button color="inherit" onClick={navigateToSignup}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
