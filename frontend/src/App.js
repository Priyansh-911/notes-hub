// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import LandingPage from './components/landingPage';
// import SignIn from './components/auth/signIn';
import Register from './components/auth/Register';
import SignIn6 from './pages/loginPage';
import './App.css';

const App = () => (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn6 />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
);

export default App;
