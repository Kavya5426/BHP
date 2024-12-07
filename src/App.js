// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import CreateAccount from './components/Login/CreateAccount';
import ManagerDashboard from './components/ManagerDashboard/ManagerDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <Router basename="/BHP">
  <Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/manager-dashboard" element={<ManagerDashboard />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
  </Routes>
</Router>

  );
};


export default App;
