import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { AuthProvider } from './components/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
