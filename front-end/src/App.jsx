import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Admission from './Components/Admission';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
