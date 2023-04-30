// src/pages/Login.tsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      navigate('/funny-gif');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default Login;
