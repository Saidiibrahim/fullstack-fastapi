// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/Welcome';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import FunnyGifPage from './pages/FunnyGif';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/funny-gif" element={<FunnyGifPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
