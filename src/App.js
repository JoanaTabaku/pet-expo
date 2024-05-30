// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirdsPage from './pages/BirdsPage';
import Header from './components/Header';
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/birds" element={<BirdsPage />} />
        {/* Add routes for other pages like AboutUs and ContactUs */}
      </Routes>
    </Router>
  );
};

export default App;
